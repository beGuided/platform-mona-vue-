<template>
<AdminLayouth>

          <h1>View profile</h1>
        <router-link :to="{name:'CreateProfile'}">  <button >add Profile </button></router-link>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Striped Table</h4>
              <p class="card-description"> Add class <code>.table-striped</code>
              </p>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th> Image </th>
                    <th> Email </th>
                    <th> State-Of-Origin </th>
                    <th> Gender</th>
                    <th> Level </th>
                    <th> Department </th>
                    <th> Phone number </th>
                  </tr>
                </thead>
                <tbody v-for="profile in profiles" :key="profile.id">
                
                  <tr>
                    <td class="py-1">
                      <img src="../../assets/images/faces-clipart/pic-1.png" alt="image" />
                    </td>
                    <td> {{profile.email}}</td>
                    <td> {{profile.state_of_origin}}</td>
                    <td> {{profile.gender}}</td>
                    <td>
                      {{profile.level}}
                    </td>
                    <td>  {{profile.department_id}} </td>
                    <td>{{profile.phone_number}}  </td>
                  </tr>
              
              </tbody>
            </table>
          </div>
        </div>
</AdminLayouth>
</template>

<script >
import axios from '@/axios'
import AdminLayouth from '@/components/AdminLayouth.vue';
import getProfile from '@/composable/getProfile';
import { onMounted,ref } from 'vue';

export default {
 components:{AdminLayouth},

  setup(props){
      const profiles= ref([])  
      const error= ref(null)   

      const getProfile =   async () =>{
       try{
         const response =  await axios.get('/profiles/')
          profiles.value = response.data.Profiles
        }catch(error){
          if(error.response){
              error.value = error.response.data
            }
            console.error('An error occured:', error)
        }
      }
   getProfile()
    return {error,profiles,getProfile}
  },
//  data(){
//   return{
//     profiles:[],
//     errorList:''
//   }
//  },

//   methods:{
//        async getProfile() {
       
//         try{
//          const response = await axios.get('/profiles')
//           this.profiles = response.data;
//           console.log(response)
//         }catch(error){
//           if(error.response){
//               this.errorList = error.response.data
//             }
//             console.error('An error occured:', error)
//         }
//   },
// },
// mounted(){
//   this.getProfile()
// }
}
</script>

<style>

</style>