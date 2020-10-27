import Vue from "vue";
import VueRouter from "vue-router";

import AdminLayout from "../views/Admin/Layout/AdminLayout";
import Dashboard from "../views/Admin/Dashboard/Dashboard";
import Users from "../views/Admin/Users/Users";
import UsersNew from "../views/Admin/Users/New";
import UsersEdit from "../views/Admin/Users/Edit";
import Advertisements from "../views/Admin/Advertisements/Advertisements";
import AdvertisementsNew from "../views/Admin/Advertisements/New";
import AdvertisementsEdit from "../views/Admin/Advertisements/Edit";

import Site from "../views/Site/Layout/Site";
import Home from "../views/Site/Home";
import SellYourCar from "../views/Site/SellYourCar";
import Dealers from "../views/Site/Dealer/List";
import DealersCity from "../views/Site/Dealer/DealersCity";
import Dealer from "../views/Site/Dealer/Dealer";
import Contact from "../views/Site/Contact";
import News from "../views/Site/News";
import About from "../views/Site/About";
import DallasHistory from "../views/Site/DallasHistory";
import DallasEvents from "../views/Site/DallasEvents";
import FraudAwareness from "../views/Site/FraudAwareness";
import CarDetail from "../views/Site/CarDetail/CarDetail";
import CarSearch from "../views/Site/CarSearch/CarSearch";
import PageNotFound from "@/components/PageNotFound";

import Login from "../views/Site/Login/Login";
import Register from "../views/Site/Register/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    component: AdminLayout,
    redirect: "/admin/dashboard",
    children: [
      { path: "dashboard", component: Dashboard },
      { path: "users", component: Users },
      { path: "users/new", component: UsersNew },
      { path: "users/:id", component: UsersEdit, props: true },
      { path: "advertisements", component: Advertisements },
      { path: "advertisements/new", component: AdvertisementsNew },
      { path: "advertisements/:id", component: AdvertisementsEdit, props: true }
    ]
  },
  {
    path: "/",
    component: Site,
    children: [
      { path: "/", component: Home },
      { path: "/sell-your-car", component: SellYourCar },
      { path: "/dealers", component: Dealers },
      { path: "/dealers/:city_id", component: DealersCity, props: true },
      { path: "/dealer/:dealer_id", component: Dealer, props: true },
      { path: "/contact", component: Contact },
      { path: "/dallas-history", component: DallasHistory },
      { path: "/dallas-events", component: DallasEvents },
      { path: "/fraud-awareness", component: FraudAwareness },
      { path: "/news", component: News },
      { path: "/about", component: About },
      { path: "/car-detail/:id", component: CarDetail, props: true },
      { path: "/search", component: CarSearch },
      { path: "/register", component: Register }
    ]
  },
  { path: "/login", component: Login },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
