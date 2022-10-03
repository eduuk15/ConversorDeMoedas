
const routes = [
  {
    path: '/',
    component: () => import('pages/Conversor.vue'),
    children: [
      { path: 'conversor', name: 'conversor', component: () => import('pages/Conversor.vue') }
    ]
  }
]

export default routes
