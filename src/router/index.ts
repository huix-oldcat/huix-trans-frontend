import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/p/:projectId',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
    children: [
      {
        path: '',
        name: 'ProjectHome',
        component: () => import(/* webpackChunkName: "project-home" */ '../views/ProjectSub/Home.vue')
      },
      {
        path: 'd',
        name: 'ProjectDocuments',
        component: () => import(/* webpackChunkName: "project-docs" */ '../views/ProjectSub/DocumentList.vue')
      },
      {
        path: 'upload-document',
        name: 'ProjectUploadDocument',
        component: () => import(/* webpackChunkName: "project-upload-package" */ '../views/ProjectSub/UploadDocument.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
