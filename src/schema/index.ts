import globals from './Global'
import Media from './Media'
import Members from './Members'
import Products from './Products'
import Stakeholders from './Stakeholders'
import Testimonials from './Testimonials'
import Users from './Users'

const collections = [
  Users,
  Media,
  Members,
  Products,
  Stakeholders,
  Testimonials
]

export default { collections, globals } as const
