import { Block, Field } from 'payload/types'
import { Social } from './options'

export const SocialField: Field = {
  name: 'social',
  type: 'array',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: Social
    },
    {
      name: 'link',
      type: 'text'
    }
  ]
}

export const ImpactField: Field = {
  name: 'impact',
  type: 'array',
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
    },
    {
      name: 'isFirst',
      type: 'checkbox'
    },
    {
      name: 'isLast',
      type: 'checkbox'
    }
  ]
}