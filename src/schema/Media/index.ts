import { CollectionConfig } from 'payload/types'
import { nanoid } from 'nanoid'

const Media: CollectionConfig = {
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
}

export default Media
