import { z } from 'zod';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { createTable } from '@/db';
import { NextRequest } from 'next/server';
import { verifyReCaptcha } from '@/app/rest-client';


// Define a Zod schema for input validation
export const schema = z.object({
    business: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    emailAddress: z.string().min(1).refine((val) => val.includes('@'), {
        message: 'Email address must contain an "@" symbol',
    }),
    phoneNumber: z.string().min(1),
    description: z.string().min(1),
    // Add a new field for reCAPTCHA response
    'g-recaptcha-response': z.string().min(1),
});

export async function POST(req: NextRequest) {
    await createTable();
    try {
        // Parse and validate input data using parseBody
        const body  = await req.json()
        const { business, firstName, lastName, emailAddress, phoneNumber, description } = schema.parse(body);

        // Verify the reCAPTCHA response using the secret key stored in the environment variable
        const isValidCaptcha = await verifyReCaptcha(body['g-recaptcha-response'])
        if (!isValidCaptcha) {
            return new Response(JSON.stringify({ message: 'Invalid reCAPTCHA response' }), {
                status: 400,
            });
        }

        // Generate a UUID for the primary key
        const id = uuidv4();

        // Create a DynamoDB client
        const client = new DynamoDBClient({ region: process.env.AWS_REGION });

        // Prepare the item for DynamoDB
        const item = {
            id: { S: id },
            email: { S: emailAddress },
            business: { S: business },
            firstName: { S: firstName },
            lastName: { S: lastName },
            phoneNumber: { S: phoneNumber },
            description: { S: description },
            createdAt: { S: new Date().toISOString() }, // Optional: Adding createdAt timestamp
        };

        // Prepare the PutItem command
        const command = new PutItemCommand({
            TableName: 'production-leads',
            Item: item,
        });

        // Put item into DynamoDB table
        await client.send(command);

        return new Response(JSON.stringify({ message: 'Item added to DynamoDB successfully' }), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        // Check if the error is a JSON parse error
        if (error instanceof SyntaxError) {
            return new Response(JSON.stringify({ message: 'Malformed JSON request body', error }), {
                status: 400,
            });
        }

        // Handle validation errors
        return new Response(JSON.stringify({ message: 'Invalid input data', error }), {
            status: 400,
        });
    }
}
