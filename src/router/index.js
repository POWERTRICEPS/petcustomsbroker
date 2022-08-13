
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ClearancePage from "../views/ClearancePage.vue";
import ResourcesPage from "../views/ResourcesPage.vue";
import ContactsPage from "../views/ContactsPage.vue";
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;