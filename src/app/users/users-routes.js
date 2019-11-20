import Register from './Register.vue'

const userRoutes = [
  {
    path: '/register',
    name: 'register',
    component: Register
  }/*,
  {
    path: '/users',
    component: AppUsers,
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        component: AppUserList
      },
      {
        path: '',
        redirect: { name: 'user-list' }
      }
    ]
  } */
]

export default userRoutes
