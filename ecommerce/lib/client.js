// Importing Sanity
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity Project Ecommerce
export const client = sanityClient({
  projectId: 'cd00zxoi',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN // not posted here for security reasons
});

// Passes images from the client
const builder = imageUrlBuilder(client);

// Ran once so we can get any image at anytime
export const urlFor = (source) => builder.image(source);
