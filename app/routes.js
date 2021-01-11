import Main from './components/Main'
import DrinkList from './components/drinklist/DrinkList'
import DrinkPage from './components/drinkpage/DrinkPage'
import { Admin } from './components/admin/Admin'

const routes = [
  {
    description: "Main page",
    path: "/",
    exact: true,
    component: Main
  },
  {
    description: "Path to drink list page",
    path: "/drinklist",
    // exact: true,
    component: DrinkList,
  },
  {
    description: "Path to individual drink",
    path: '/drink/:id',
    component: DrinkPage
  },
  {
    description: "Path to Admin page",
    path: "/admin",
    component: Admin
  }
]

export default routes
