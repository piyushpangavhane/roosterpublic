import path from 'path'
import { buildConfig } from 'payload/config'
import collectionMap from './collection'

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: collectionMap.user.slug
  },
  collections: Object.values(collectionMap),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
