import globals from './Global'
import Media from './Media'
import Members from './Members'
import Privacy from './Privacy'
import Products from './Products'
import Stakeholders from './Stakeholders'
import Terms from './Terms'
import Testimonials from './Testimonials'
import Users from './Users'

const collections = [
  Users,
  Media,
  Members,
  Products,
  Stakeholders,
  Testimonials,
  Terms,
  Privacy
]

export default { collections, globals } as const
