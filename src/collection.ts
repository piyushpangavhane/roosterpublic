import { CollectionConfig } from 'payload/types'

type CollectionNames = 'user' | 'product'
const collectionMap: Record<CollectionNames, CollectionConfig> = {
  user: {
    slug: 'users',
    auth: true,
    admin: {
      useAsTitle: 'email'
    },
    access: {
      read: () => true
    },
    fields: []
  },
  product: {
    slug: 'products',
    access: {
      read: () => true
    },
    fields: [
      {
        type: 'text',
        name: 'name'
      }
    ]
  }
}

export default collectionMap
