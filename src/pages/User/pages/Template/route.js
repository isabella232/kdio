import UserPageLayout from 'pages/User/components/Layout'
import UserTemplatePage from './container'

const UserTemplateRoute = (store) => ({
  path: '/:username/:slug',
  component: UserPageLayout,
  indexRoute: {
    component: UserTemplatePage
  }
})

export default UserTemplateRoute
