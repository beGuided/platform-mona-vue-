<template>
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
  
</template>

<script>
import axios from '@/axios'
export default {
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
      this.errorList = ''
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