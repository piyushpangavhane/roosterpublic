import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import path from 'path'
import { buildConfig } from 'payload/config'
import Logo from './components/Logo'
import { Vesatogo } from './constants'
import schema from './schema'
import seo from '@payloadcms/plugin-seo'
import formBuilder from '@payloadcms/plugin-form-builder'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '| Vesatogo',
      ogImage: Vesatogo.LOGO,
      favicon: Vesatogo.LOGO
    },
    components: {
      graphics: {
        Logo: Logo,
        Icon: Logo
      }
    }
  },
  ...schema,
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
    formBuilder({}),
    seo({
      collections: ['products'],
      uploadsCollection: 'media',
      generateTitle({ doc }) {
        return doc['title'].value
      },
      generateDescription({ doc }) {
        return doc['shortDescription'].value
      },
      generateImage({ doc }) {
        return doc['photos.0.photo']?.value
      }
    }),
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
