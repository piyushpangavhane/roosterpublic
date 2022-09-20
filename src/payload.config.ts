import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import path from 'path'
import { buildConfig } from 'payload/config'
import collectionMap from './collection'
import globals from './globals'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: collectionMap.user.slug
  },
  collections: Object.values(collectionMap),
  globals,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disablePlaygroundInProduction: parseInt(process.env.DISABLE_PLAYGROUND)
      ? true
      : false
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          prefix: 'cms/media',
          adapter: s3Adapter({
            config: {
              region: process.env.S3_REGION || 'ap-south-1',
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
              }
            },
            bucket: process.env.S3_BUCKET
          })
        }
      }
    })
  ]
})
