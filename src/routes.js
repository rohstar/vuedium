import Create from '@/components/Create.vue'
import Post from '@/components/Posts.vue'
import Login from '@/components/Login.vue'
import Landing from '@/components/Landing.vue'
import Signup from '@/components/Signup.vue'

export default [
  {
    path: '/posts',
    component: Post
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Landing
  },
  {
    path: '/signup',
    component: Signup
  }
]
