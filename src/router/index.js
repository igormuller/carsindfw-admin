import Vue from "vue";
import VueRouter from "vue-router";

import AdminLayout from "../views/Admin/Layout/AdminLayout";
import Dashboard from "../views/Admin/Dashboard/Dashboard";
import Users from "../views/Admin/Users/Users";
// import UsersNew from "../views/Admin/Users/New";
// import UsersEdit from "../views/Admin/Users/Edit";

import About from "../views/Site/About";
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
      }
      // {
      //   path: "users/new",
      //   name: "New User",
      //   component: UsersNew
      // },
      // {
      //   path: "users/:id",
      //   name: "User Edit",
      //   component: UsersEdit,
      //   props: true
      // }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
