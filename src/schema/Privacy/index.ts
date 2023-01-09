import { CollectionConfig } from 'payload/types'
import { triggerVercelDeployment } from '../../utils/trigger-vercel-deployment'

const Privacy: CollectionConfig = {
  slug: 'privacy-policy',
  access: {
    read: () => true
  },
  fields: [
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
      name: 'privacyPolicy',
      type: 'richText'
    }
  ],
  hooks: {
    afterChange: [triggerVercelDeployment]
  }
}

export default Privacy
