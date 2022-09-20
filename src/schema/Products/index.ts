import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
  slug: 'products',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      validate(value) {
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
        if (!slugRegex.test(value)) {
          return "Slug can only contain lowercase letters, numbers and hyphens. It can't start or end with a hyphen."
        }
        return true
      }
    },
    {
      name: 'subTitle',
      type: 'text'
    },
    {
      name: 'shortDescription',
      type: 'textarea'
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'photos',
      type: 'array',
      fields: [
        {
          name: 'photo',
          type: 'upload',
          relationTo: 'media'
        }
      ]
    },
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text'
        },
        {
          name: 'description',
          type: 'textarea'
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media'
        }
      ]
    }
  ]
}

export default Products
