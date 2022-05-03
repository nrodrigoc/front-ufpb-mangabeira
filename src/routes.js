/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import ArticleIcon from '@mui/icons-material/Article';
// core components/views for Admin layout
import Mapa from "views/Mapa/Mapa.js";
import NotificationsPage from "views/Notifications/Notifications.js";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/mapa",
    name: "Mapa",
    icon: LocationOn,
    component: Mapa,
    layout: "/admin",
  },
  {
    path: "/sobre",
    name: "Sobre",
    icon: ArticleIcon,
    component: NotificationsPage,
    layout: "/admin",
  }
];

export default dashboardRoutes;
