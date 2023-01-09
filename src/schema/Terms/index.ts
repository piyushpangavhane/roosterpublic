import { CollectionConfig } from 'payload/types'
import { triggerVercelDeployment } from '../../utils/trigger-vercel-deployment'

const Terms: CollectionConfig = {
  slug: 'terms',
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
      name: 'termsAndConditions',
      type: 'richText'
    }
  ],
  hooks: {
    afterChange: [triggerVercelDeployment]
  }
}

export default Terms
