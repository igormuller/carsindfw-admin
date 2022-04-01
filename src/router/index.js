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
import Dealers from "../views/Admin/Dealers/Dealers";
import DealersNew from "../views/Admin/Dealers/New";
import DealersEdit from "../views/Admin/Dealers/Edit";
import Interests from "../views/Admin/Interest/Interests";
import Plan from "../views/Admin/Plan/Detail";
// import DealersNew from "../views/Admin/Dealers/New";
// import DealersEdit from "../views/Admin/Dealers/Edit";
import PageNotFoundAdmin from "@/components/PageNotFoundAdmin";

import RegisterDealer from "../views/Broker/RegisterDealer";

import Site from "../views/Site/Layout/Site";
import Home from "../views/Site/Home";
import SellYourCar from "../views/Site/SellYourCar";
import DealersList from "../views/Site/Dealer/DealersList";
import DealersCity from "../views/Site/Dealer/DealersCity";
import DealerDetail from "../views/Site/Dealer/DealerDetail";
import Contact from "../views/Site/Contact";
import About from "../views/Site/About";
import Privacy from "../views/Site/Privacy";
import TermsOfService from "../views/Site/TermsOfService";
import DallasHistory from "../views/Site/DallasHistory";
import DallasEvents from "../views/Site/DallasEvents";
import FraudAwareness from "../views/Site/FraudAwareness";
import CarDetail from "../views/Site/CarDetail/CarDetail";
import CarSearch from "../views/Site/CarSearch";
import PageNotFound from "@/components/PageNotFound";

import News from "../views/Site/News/News";
import NewsFirst from "../views/Site/News/FirstPost";
import NewsSecond from "../views/Site/News/SecondPost";
import NewsThird from "../views/Site/News/ThirdPost";
import NewsFourth from "../views/Site/News/FourthPost";
import NewsFifth from "../views/Site/News/FifthPost";
import NewsSixth from "../views/Site/News/SixthPost";

import Login from "../views/Site/Login/Login";
import NewToken from "../views/Site/Login/NewToken";
import NewPassword from "../views/Site/Login/NewPassword";
import ForgotPassword from "../views/Site/Login/ForgotPassword";
import ValidateToken from "../views/Site/ValidateToken";
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
      {
        path: "advertisements/:id",
        component: AdvertisementsEdit,
        props: true
      },
      { path: "dealers", component: Dealers },
      { path: "dealers/new", component: DealersNew },
      { path: "dealers/:id", component: DealersEdit, props: true },
      { path: "dealer-detail/:id", component: DealersEdit, props: true },
      { path: "interests", component: Interests },
      { path: "plan", component: Plan },
      { path: "*", component: PageNotFoundAdmin }
    ]
  },
  { path: "/broker", component: RegisterDealer },
  {
    path: "/",
    component: Site,
    children: [
      { path: "/", component: Home },
      { path: "/benefits", component: SellYourCar },
      { path: "/dealers", component: DealersList },
      { path: "/dealers/:city_id", component: DealersCity, props: true },
      { path: "/dealer/:dealer_id", component: DealerDetail, props: true },
      { path: "/contact", component: Contact },
      { path: "/dallas-history", component: DallasHistory },
      { path: "/dallas-events", component: DallasEvents },
      { path: "/fraud-awareness", component: FraudAwareness },
      { path: "/about", component: About },
      { path: "/privacy", component: Privacy },
      { path: "/terms-of-service", component: TermsOfService },
      { path: "/car-detail/:id", component: CarDetail, props: true },
      { path: "/search", component: CarSearch },
      { path: "/register", component: Register },
      { path: "/news", component: News },
      { path: "/news/the-x3-taken-further", component: NewsFirst },
      { path: "/news/2022-kia-seltos", component: NewsSecond },
      { path: "/news/mercedes-benz-gla-suv", component: NewsThird },
      { path: "/news/lexus-is-300-awd", component: NewsFourth },
      { path: "/news/infiniti-qx60", component: NewsFifth },
      { path: "/news/toyota-tundra", component: NewsSixth }
    ]
  },
  { path: "/login", component: Login },
  { path: "/new-token", component: NewToken },
  { path: "/new-password", component: NewPassword, props: true },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/validate-token", component: ValidateToken },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
