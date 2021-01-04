const routes = [
  {
    path: '/',
    component: () => import('layouts/VoidLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/Login.vue') },
      { path: '/forgot-password', name: 'EsqueciSenha', component: () => import('pages/Esqueci minha senha.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Index', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
