const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Home.vue') },
      { path: '/help', component: () => import('src/pages/Help.vue') },
      { path: '/about', component: () => import('src/pages/AboutAs.vue') },
      { path: '/contacts', component: () => import('src/pages/Contacts.vue') },
    ]
  },

 
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
