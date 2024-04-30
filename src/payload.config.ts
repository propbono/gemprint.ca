import { postgresAdapter } from "@payloadcms/db-postgres";
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
// import sharp from 'sharp'
import { s3Storage } from "@payloadcms/storage-s3";
import { fileURLToPath } from "url";
import { Categories } from "./collections/categories";
import { Media } from "./collections/media";
import { Testimonials } from "./collections/testimonials";
import { Users } from "./collections/users";

const s3Plugin = s3Storage({
  collections: {
    ["media"]: true,
  },
  bucket: process.env.S3_BUCKET!,
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
  },
});

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log("S3 BUCKET: ", process.env.S3_BUCKET);
console.log("S3 ACCESS KEY ID: ", process.env.S3_ACCESS_KEY_ID);
console.log("S3 SECRET ACCESS KEY: ", process.env.S3_SECRET_ACCESS_KEY);
console.log("S3 REGION: ", process.env.S3_REGION);
console.log("S3 ENDPOINT: ", process.env.S3_ENDPOINT);
export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Categories, Testimonials, Media],
  editor: lexicalEditor({}),
  plugins: [s3Plugin],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
});

