import { DynamoDBClient, CreateTableCommand, DescribeTableCommand } from '@aws-sdk/client-dynamodb';
import { z } from 'zod';

// Create a DynamoDB client
const client = new DynamoDBClient({ region: 'us-west-2' }); // Set the AWS region

// Define the CreateTableCommand
const command = new CreateTableCommand({
  TableName: 'production-leads', // Set the table name
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' }, // Hash key
    { AttributeName: 'business', AttributeType: 'S' }, // Range key
    { AttributeName: 'email', AttributeType: 'S' }, // Add email attribute
    // Add other attribute definitions here
  ],
  KeySchema: [
    { AttributeName: 'id', KeyType: 'HASH' },
    { AttributeName: 'business', KeyType: 'RANGE' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5, // Adjust according to your needs
    WriteCapacityUnits: 5, // Adjust according to your needs
  },
  GlobalSecondaryIndexes: [
    {
      IndexName: 'email-index',
      KeySchema: [
        { AttributeName: 'email', KeyType: 'HASH' },
      ],
      Projection: { ProjectionType: 'ALL' },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5, // Adjust according to your needs
        WriteCapacityUnits: 5, // Adjust according to your needs
      },
    },
  ],
});

// Function to create the table
export const createTable = async () => {
  try {
    // Check if the table already exists
    const describeCommand = new DescribeTableCommand({ TableName: 'production-leads' });
    await client.send(describeCommand);

    console.log('Table already exists');
  } catch (error) {
    const typedError = error as Error;
    if (typedError.name === 'ResourceNotFoundException') {
      // If the table does not exist, create it
      try {
        await client.send(command);
        console.log('Table created successfully');
      } catch (createError) {
        console.error('Error creating table:', createError);
      }
    } else {
      console.error('Error describing table:', error);
    }
  }
};


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