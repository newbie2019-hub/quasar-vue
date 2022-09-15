
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UserDashboard.vue') },
      { path: '/albums', component: () => import('pages/UserAlbums.vue') },
      { path: '/album/:id', component: () => import('pages/ViewAlbum.vue') },
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
