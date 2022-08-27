
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ClearancePage from "../views/ClearancePage.vue";
import ResourcesPage from "../views/ResourcesPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import PersonalPOA from "../views/PersonalPOA.vue";
import BusinessPOA from "../views/BusinessPOA.vue";
import PersonalPOAForm from "../views/PersonalPOAForm.vue";
import BusinessPOAForm from "../views/BusinessPOAForm.vue";
import InquiryPage from "../views/InquiryPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/clearance",
    name: "Clearance",
    component: ClearancePage
  },
  {
    path: "/resources",
    name: "Resources",
    component: ResourcesPage
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsPage
  },
  {
    path: "/personalpoa",
    name: "Personal",
    component: PersonalPOA
  },
  {
    path: "/businesspoa",
    name: "Business",
    component: BusinessPOA
  },
  {
    path: "/printpersonal",
    name: "PrintPersonal",
    component: PersonalPOAForm,
    props: true
  },
  {
    path: "/printbusiness",
    name: "PrintBusiness",
    component: BusinessPOAForm,
    props: true
  },
  {
    path: "/inquiry",
    name: "Inquiry",
    component: InquiryPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;