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
        path: 'politic_access',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/about/PoliticAccessPage.vue'
          ),
      },
      {
        path: 'politic_personal_data',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/about/PoliticPersonalDataPage.vue'
          ),
      },
      {
        path: 'editorial_board',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/editors/EditorialBoardPage.vue'
          ),
      },
      {
        path: 'recens',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/editors/RecensPage.vue'
          ),
      },
      {
        path: 'ethics',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/editors/EthicsPage.vue'
          ),
      },
      {
        path: 'topics',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/authors/TopicsPage.vue'
          ),
      },
      {
        path: 'req_art',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/authors/ReqArtPage.vue'
          ),
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
      {
        path: 'public_ethic',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/about/PublicEthicPage.vue'
          ),
      },
      {
        path: 'subscription',
        component: () =>
          import(
            /* webpackChunkName: "app" */ './views/about/SubscriptionPage.vue'
          ),
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
