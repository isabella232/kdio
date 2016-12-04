import AppLayout from 'components/AppLayout'
import KomponentDemo from 'components/KomponentDemo'

export default KomponentsRoute = (store) ->
  path: '/komponents'
  component: AppLayout
  indexRoute: { component: KomponentDemo }

