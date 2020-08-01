import Vue from "vue";
import VueRouter from "vue-router";

import AdminLayout from "../views/Admin/Layout/AdminLayout";
import Dashboard from "../views/Admin/Dashboard/Dashboard";
import Users from "../views/Admin/Users/Users";
import UsersNew from "../views/Admin/Users/New";
import UsersEdit from "../views/Admin/Users/Edit";

import Site from "../views/Site/Layout/Site";
import Home from "../views/Site/Home";
import SellYourCar from "../views/Site/SellYourCar";
import Dealers from "../views/Site/Dealer/List";
import Contact from "../views/Site/Contact";
import News from "../views/Site/News";
import CarDetail from "../views/Site/CarDetail/CarDetail";
import PageNotFound from "@/components/PageNotFound";

import Login from "../views/Site/Login/Login";
import Register from "../views/Site/Login/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "users",
        name: "Users",
        component: Users
      },
      {
        path: "users/new",
        name: "New User",
        component: UsersNew
      },
      {
        path: "users/:id",
        name: "User Edit",
        component: UsersEdit,
        props: true
      }
    ]
  },
  {
    path: "/",
    component: Site,
    children: [
      { path: "/", component: Home },
      { path: "/sell-your-car", component: SellYourCar },
      { path: "/dealers", component: Dealers },
      { path: "/contact", component: Contact },
      { path: "/news", component: News },
      { path: "/car-detail", component: CarDetail }
    ]
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
