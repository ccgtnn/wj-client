import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from './views/MainLayout.vue'

const routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/about/AboutPage.vue'),
      },
      {
        path: 'indexed',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/about/IndexedPage.vue'),
      },
      {
        path: 'editorial_board',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/EditorialBoardPage.vue'
          ),
      },
      {
        path: 'topics',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/TopicsPage.vue'),
      },
      {
        path: 'current_issue',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/CurrentIssuePage.vue'),
      },
      {
        path: 'archive',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/ArchivePage.vue'),
      },
      {
        path: 'contacts',
        component: () =>
          import(/* webpackChunkName: "app" */ './views/ContactsPage.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import(/* webpackChunkName: "app" */ './views/NotFoundPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
