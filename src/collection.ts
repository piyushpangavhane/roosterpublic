import { nanoid } from 'nanoid'
import { CollectionConfig } from 'payload/types'
import { SocialField } from './fields'
import { Domains } from './options'
const collectionMap: Record<string, CollectionConfig> = {
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
  media: {
    hooks: {
      beforeOperation: [
        async ({
          args, // Original arguments passed into the operation
          operation // name of the operation
        }) => {
          if (operation === 'create' || operation === 'update') {
            const file = args.req.files?.file
            if (file) {
              const fileExtension = file.name.split('.').pop()
              const fileHash = nanoid(12)
              const fileName = `${fileHash}.${fileExtension}`
              args.req.files.file.name = fileName
            }
          }
          return args // Return operation arguments as necessary
        }
      ]
    },
    slug: 'media',
    access: {
      read: () => true
    },
    upload: {
      adminThumbnail({ doc }) {
        return `https://cdn.vesatogo.com/cms/media/${doc.filename}`
      }
    },
    fields: [
      {
        name: 'alt',
        type: 'text'
      }
    ]
  },
  testimonial: {
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
  },
  stakeholder: {
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
  },
  impact: {
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
  },
  product: {
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
  },
  member: {
    slug: 'members',
    access: {
      read: () => true
    },
    fields: [
      {
        name: 'name',
        type: 'text'
      },
      {
        name: 'designation',
        type: 'text'
      },
      {
        name: 'about',
        type: 'textarea'
      },
      {
        name: 'avatar',
        type: 'upload',
        relationTo: 'media'
      },
      {
        name: 'domain',
        type: 'select',
        options: Domains
      },
      {
        name: 'isActive',
        type: 'checkbox',
        defaultValue: true,
        admin: {
          description: 'If unchecked, this member will be treated as an alumni.'
        }
      },
      SocialField
    ]
  },
  opening: {
    slug: 'openings',
    admin: {
      useAsTitle: 'title'
    },
    access: {
      read: () => true
    },
    fields: [
      {
        name: 'title',
        type: 'text'
      },
      {
        name: 'type',
        type: 'radio',
        defaultValue: 'full-time',
        options: [
          {
            label: 'Full Time',
            value: 'full-time'
          },
          {
            label: 'Part Time',
            value: 'part-time'
          }
        ]
      },
      {
        name: 'experience',
        type: 'text'
      },
      {
        name: 'content',
        type: 'richText'
      }
    ]
  },
  application: {
    slug: 'applications',
    fields: [
      {
        name: 'job',
        type: 'relationship',
        relationTo: 'openings'
      },
      {
        name: 'name',
        type: 'text'
      },
      {
        name: 'email',
        type: 'text'
      },
      {
        name: 'phone',
        type: 'text'
      },
      {
        name: 'resume',
        type: 'upload',
        relationTo: 'media'
      }
    ]
  }
}

export default collectionMap
