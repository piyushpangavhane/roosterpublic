import globals from './Global'
import Impact from './Impact'
import Media from './Media'
import Members from './Members'
import Products from './Products'
import Stakeholders from './Stakeholders'
import Testimonials from './Testimonials'
import Users from './Users'

const collections = [
  Users,
  Impact,
  Media,
  Members,
  Products,
  Stakeholders,
  Testimonials
]

export default { collections, globals } as const
