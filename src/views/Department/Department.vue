<template>

<AdminLayouth>
<!-- <ul v-if="Object.keys(error).lenght>0">
  <li v-for="(error, index) in error" :key="index">
    {{error[0]}}</li>
</ul> -->


 <div class="row">
              <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Department</h4>
                    {{departments}}
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> Id </th>
                            <th> Name </th>
                            <th> max_level </th>
                         </tr>
                        </thead>
                        <tbody>
                          
                          <tr v-for="department in departments" :key="department.id">
                            <td> {{department.id}} </td>
                            <td> {{department.name}} </td>
                           <td> {{department.max_level}} </td>
                            <td>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-white">Todo</h4>
                    <div class="add-items d-flex">
                      <form @submit.prevent="submitForm" action="">
                      <input type="text" class="form-control todo-list-input" v-model="name" placeholder="name">
                      <input type="number" class="form-control todo-list-input" v-model="maxLevel" placeholder="max level">
                      <button @submit.prevent="submitForm" class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add Department</button>
                      </form>
                    </div>
                    <div class="add-items d-flex">
                      <form @submit.prevent="submitForm" action="">
                      <input type="text" class="form-control todo-list-input" v-model="name" placeholder="name">
                      <input type="number" class="form-control todo-list-input" v-model="maxLevel" placeholder="max level">
                      <button @submit.prevent="submitForm" class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Upate Department</button>
                      </form>
                    </div>
                    <div class="list-wrapper">
                      <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
                        <li >
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox"> Meeting with Alisa </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
</AdminLayouth>
</template>
<script>
import axios from '@/axios'
import {ref} from 'vue'
import AdminLayouth from '@/components/AdminLayouth.vue';
export default {
   components:{AdminLayouth},

 setup(props){
    const name = ref('')  
    const maxLevel= ref('') 
     const departments= ref([]) 

    const error = ref(null)   

   const submitForm = async () =>{
      try{
         await axios.post('departments',{
          name: name.value,
          max_level: maxLevel.value,
        },error.value= '',
        );

      }catch(error){
        if(error.response){
            error.value = error.response.data
          }
          console.error('An error occured:', error)
      }
      
   }

    const getDepartment =   async () =>{
       try{
         const response =  await axios.get('/departments')
          departments.value = response.data.Departments
        }catch(error){
          if(error.response){
              error.value = error.response.data
            }
            console.error('An error occured:', error)
        }
      }
getDepartment()
  return {name,error,maxLevel,departments,submitForm, getDepartment}
},

}
</script>



<style>

</style>