import Places from "./Pages/Places"
import Admin from './Pages/Admin';
import Auth from './Pages/Auth';
import Home from './Pages/Home';
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, HOTEL_ROUTE, LOGIN_ROUTE, PLACE_ROUTE, REGISTRATION_ROUTE } from "../consts";
import HotelCard from "./HotelCard/HotelCard";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: HOTEL_ROUTE + '/:id',
    Component: HotelCard
  },
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: PLACE_ROUTE,
    Component: Places
  },
]