const SIH_API_ROUTE = 'https://d3uqsdfq5mfofg.cloudfront.net';
const SIH_BUCKET_NAME = 'sih-production'

export type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export function getSihImageRequestUrl(
  { src, width, quality }: ImageLoaderProps,
  edits: Record<string, unknown> = {}
) {
  const key = src.replace(/^\//, '');

  const requestOptions = {
    bucket: SIH_BUCKET_NAME,
    key,
    edits: {
      jpeg: true,
      ...edits,
      quality,
      resize: { width },
    },
  };
  const requestOptionJson = JSON.stringify(requestOptions);
  const imageRequest = Buffer.from(requestOptionJson).toString('base64');
  return `${SIH_API_ROUTE}/${imageRequest}`;
}