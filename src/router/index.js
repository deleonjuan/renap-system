import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    components: {
      default: Login,
      a: null
    }
  },
  {
    path: '/home',
    components: {
      default: null,
      a: () => import ('../views/Home.vue'),
    }
  },
  {
    path: '/pagos',
    components: {
      default: null,
      a: () => import ('../views/Pagos.vue'),
    }
  },
  {
    path: '/antecedentes',
    components: {
      default: null,
      a: () => import ('../views/Antecedentes.vue'),
    }
  },
  {
    path: '/registro',
    components: {
      default: null,
      a: () => import ('../views/Registro.vue'),
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
