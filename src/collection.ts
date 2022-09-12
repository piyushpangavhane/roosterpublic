import { CollectionConfig } from 'payload/types'

type CollectionNames = 'user' | 'product' | 'media'
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
  },
  media: {
    slug: 'media',
    access: {
      read: () => true
    },
    upload: {
      imageSizes: [
        {
          height: 100,
          width: 100,
          name: 'thumbnail',
          crop: 'center'
        }
      ]
    },

    fields: []
  }
}

export default collectionMap
