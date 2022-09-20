import { CollectionConfig } from 'payload/types'

const Stakeholders: CollectionConfig = {
  slug: 'stakeholders',
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: 'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
      required: true
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}

export default Stakeholders
