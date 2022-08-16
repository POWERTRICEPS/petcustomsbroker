
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ClearancePage from "../views/ClearancePage.vue";
import ResourcesPage from "../views/ResourcesPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
import PersonalPOA from "../views/PersonalPOA.vue";
import BusinessPOA from "../views/BusinessPOA.vue";
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;