import { CollectionConfig } from 'payload/types'

const Impact: CollectionConfig = {
  slug: 'impact',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'metric',
      type: 'number'
    },
    {
      name: 'title',
      type: 'text'
    }
  ]
}

export default Impact
