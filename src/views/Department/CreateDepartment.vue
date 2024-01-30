<template>

<AdminLayouth>
<ul v-if="Object.keys(this.errorList).lenght>0">
  <li v-for="(error, index) in this.errorList" :key="index">
    {{error[0]}}</li>
</ul>
  <form @submit.prevent="submitForm">

  <label>Email</label>
  <input type="email" required v-model="email">
   <div v-if="errors.email">{{errors.password}}  </div>

   <label>Address</label>
  <input type="text"  v-model="address"> 
   <div v-if="errors.address">{{errors.address}}  </div>

   <label>Phone Number</label>
  <input type="text"  v-model="phoneNumber">
   <div v-if="errors.phoneNumber">{{errors.phoneNumber}}  </div>

   <label>Date of Birth</label>
  <input type="text"  v-model="DOB"> 
   <div v-if="errors.DOB">{{errors.DOB}}  </div>

   <label>Level</label>
  <input type="text"  v-model="level"> 
   <div v-if="errors.level">{{errors.level}}  </div>

    <label>State of Origin</label>
  <input type="text"  v-model="stateOfOrigin"> 
   <div v-if="errors.stateOfOrigin">{{errors.stateOfOrigin}}  </div>

  <label>Gender</label>
  <select v-model="gender">
    <option value="male"> male</option>
    <option value="female"> female</option>
  </select>
   <div v-if="errors.gender">{{errors.gender}}  </div>

  
  <label>Department</label>
  <select v-model="depertmentId">
    <option value="1"> computer Science</option>
    <option value="2"> maths</option>
  </select>
  <div v-if="errors.depertmentId">{{errors.depertmentId}}  </div>

 
  <div class="submit">
<button type="submit"> create profile</button>
  </div>

</form>

 <div class="row">
              <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Project Status</h4>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Due Date </th>
                            <th> Progress </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            <td> May 15, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 2 </td>
                            <td> Messsy Adam </td>
                            <td> Jul 01, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 3 </td>
                            <td> John Richards </td>
                            <td> Apr 12, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 4 </td>
                            <td> Peter Meggik </td>
                            <td> May 15, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Edward </td>
                            <td> May 03, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td> 5 </td>
                            <td> Ronald </td>
                            <td> Jun 05, 2015 </td>
                            <td>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
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
                      <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?">
                      <button class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                    </div>
                    <div class="list-wrapper">
                      <ul class="d-flex flex-column-reverse todo-list todo-list-custom">
                        <li>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox"> Meeting with Alisa </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li class="completed">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox" checked> Call John </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox"> Create invoice </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox"> Print Statements </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li class="completed">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox" checked> Prepare for presentation </label>
                          </div>
                          <i class="remove mdi mdi-close-circle-outline"></i>
                        </li>
                        <li>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input class="checkbox" type="checkbox"> Pick up kids from school </label>
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
import AdminLayouth from '@/components/AdminLayouth.vue';
export default {
   components:{AdminLayouth},
data() {
  return{
   email: '',
   addres:'',
   gender:'',
   departmentId:'',
   phoneNumber:'',
   DOB:'',
   level:'',
   stateOfOrigin:'',

  errorList:'',
   errors:{}
  }
},
 methods:{
    // validateInput(){
    //   //validate password
    //   const errors = {};
    //   if(!this.name) errors.email = 'Email is required';
    //   if(!this.address) errors.address = 'address is required';
    //   if(!this.gender) errors.gender = 'gender is required';
    //   if(!this.departmentId) errors.departmentId = 'departmentId is required';
    //   if(!this.phoneNumber) errors.phoneNumber = 'phoneNumber is required';
    //   if(!this.DOB) errors.DOB = 'DOB is required';
    //   if(!this.level) errors.level = 'level is required';
    //   if(!this.stateOfOrigin) errors.stateOfOrigin = 'stateOfOrigin is required';
    //   return errors;
    // },
     async submitForm() {
          // const errors = this.validateInput();
          // if(Object.keys(errors).lenght > 0){
          // this.errors = errors;
          // return;
          //}
    try{
      await axios.post('./profiles',{
        email: this.email,
        addres:this.address,
        gender:this.gender,
        departmentId:this.departmentId,
        phoneNumber:this.phoneNumber,
        DOB:this.DOB,
        level:this.level,
        stateOfOrigin:this.stateOfOrigin,
        password: this.password,
      },
      this.errorList = '',
      )
    }catch(error){
       if(error.response){
           this.errorList = error.response.data
        }
        console.error('An error occured:', error)
    }
  }

 }
}
</script>

<style>

</style>