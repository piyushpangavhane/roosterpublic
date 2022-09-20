import { CollectionConfig } from 'payload/types'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'message',
      type: 'textarea'
    },
    {
      name: 'author',
      type: 'text'
    },
    {
      name: 'designation',
      type: 'text'
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}

export default Testimonials
