import { Field } from 'payload/types'
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
