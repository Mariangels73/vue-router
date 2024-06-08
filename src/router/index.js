import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductosView from '../views/ProductosView.vue';
import ContactoView from '../views/ContactoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView,
    props: { nombre: 'Producto 1', descripcion: 'Descripción del producto', precio: 100, cantidad: 10 }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
