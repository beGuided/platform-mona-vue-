import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import LoginStaff from '../views/LoginStaff.vue'
import CreateUser from '../views/RegisterStudent.vue'
import Profile from '../views/Profile/Profile.vue'
import CreateProfile from '../views/Profile/CreateProfile.vue'
import Department from '../views/Department/Department.vue'
import CreateDepartment from '../views/Department/CreateDepartment.vue'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'


const routes = [
 
  { path: '/', name: 'Home', component: Home, meta:{public:true}    }, // mark this route as public
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta:{public:true}   },
//++++++++++++++Auth+++++++++++++++++++//
 //Admin
 { path: '/Login-staff', name: 'LoginStaff', component: LoginStaff,  meta:{public:true}    },// mark this route as 
 //user
  { path: '/Login', name: 'Login', component: Login,  meta:{public:true}    },// mark this route as public
  { path: '/Register', name: 'Register', component: CreateUser, meta:{public:true}   }, // mark this route as public
//////////////////++++++++++++++++++//////////////////

  //++++++++++profiles+++++++++++++//
  {  path: '/profiles',name: 'Profile', component: Profile, meta:{public:false}   },
  { path: '/profiles-create', name: 'CreateProfile', component: CreateProfile, meta:{public:false}   },
  { path: '/profiles', name: 'Profile', component: Profile, meta:{public:true}    },
  {path: '/profiles-create',name: 'CreateProfile', component: CreateProfile,meta:{public:true}   },

//department
{path: '/departments',name: 'Department', component: Department, meta:{public:false}   },
  {path: '/departments-create',name: 'CreateDepartment', component: CreateDepartment,meta:{public:false}   },


 
  //redirect
  // {
  //   path:'/all-jobs',
  //   redirect: '/jobs'
  // },
  //catch all 404
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if(!to.meta.public && !isAuthenticated) {
    next({name: 'Login'})
  }else{
    next();
  }
});


export default router

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // User is authenticated, proceed to the route
//       next();
//     } else {
//       // User is not authenticated, redirect to login
//       next('/login');
//     }
//   } else {
//     // Non-protected route, allow access
//     next();
//   }
// });

