import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 604800 // 7 days
  },
  admin: {
    useAsTitle: 'email'
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      required: true,
      options: ['guest', 'editor', 'admin', 'api']
    }
  ]
}

export default Users
