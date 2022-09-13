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
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
