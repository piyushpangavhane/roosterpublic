import { GlobalConfig } from 'payload/types'
import { SocialField } from '../../fields'

const globals: GlobalConfig[] = [
  {
    slug: 'contact',
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
  }
]

export default globals
