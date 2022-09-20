import { CollectionConfig } from 'payload/types'
import { SocialField } from '../../fields'
import { Domains } from '../../options'

const Members: CollectionConfig = {
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
}

export default Members
