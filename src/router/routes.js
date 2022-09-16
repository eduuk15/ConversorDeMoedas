
const routes = [
  {
    path: '/',
    component: () => import('pages/Conversor.vue'),
    children: [
      { path: 'conversor', name: 'conversor', component: () => import('pages/Conversor.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
