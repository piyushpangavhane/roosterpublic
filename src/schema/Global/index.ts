import { GlobalConfig } from 'payload/types'
import { ImpactField, SocialField } from '../../fields'

const globals: GlobalConfig[] = [
  {
    slug: 'contact',
    access: {
      read: () => true
    },
    fields: [
      {
        name: 'email',
        type: 'array',
        fields: [
          {
            name: 'value',
            type: 'text'
          }
        ]
      },
      {
        name: 'phone',
        type: 'array',
        fields: [
          {
            name: 'value',
            type: 'text'
          }
        ]
      },
      {
        name: 'address',
        type: 'textarea'
      },
      {
        name: 'links',
        type: 'array',
        fields: [SocialField]
      }
    ]
  },
  {
    slug: 'journey',
    access: {
      read: () => true
    },
    fields: [
      {
        name: 'Timeline',
        type: 'array',
        fields: [
          {
            name: 'year',
            type: 'number'
          },
          {
            name: 'title',
            type: 'text'
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
            name: 'subTimeline',
            type: 'array',
            fields: [
              {
                name: 'month',
                type: 'text'
              },
              {
                name: 'title',
                type: 'text'
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
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'impacts',
    access: {
      read: () => true
    },
    fields: [ImpactField]
  },
  {
    slug: 'protected',
    access: {
      read({ req: { user } }) {
        if (['admin', 'api'].includes(user?.role)) {
          return true
        }
        return false
      },
      update({ req: { user } }) {
        if (user?.role === 'admin') {
          return true
        }
        return false
      }
    },
    fields: [
      {
        type: 'text',
        name: 'secret'
      }
    ]
  }
]

export default globals
