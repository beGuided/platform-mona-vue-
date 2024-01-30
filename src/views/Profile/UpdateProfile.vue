<template>
<AdminLayouth>
<ul v-if="Object.keys(this.errorList).lenght>0">
  <li v-for="(error, index) in this.errorList" :key="index">
    {{error[0]}}</li>
</ul>
  <form @submit.prevent="updateProfile">

  <label>Email</label>
  <input type="email" required v-model="email">

   <label>Address</label>
  <input type="text"  v-model="address"> 

   <label>Phone Number</label>
  <input type="text"  v-model="phoneNumber">

   <label>Date of Birth</label>
  <input type="text"  v-model="DOB"> 

   <label>Level</label>
  <input type="text"  v-model="level"> 

    <label>State of Origin</label>
  <input type="text"  v-model="stateOfOrigin"> 

  <label>Gender</label>
  <select v-model="gender">
    <option value="male"> male</option>
    <option value="female"> female</option>
  </select>
  
  <label>Department</label>
  <select v-model="depertmentId">
    <option value="1"> computer Science</option>
    <option value="2"> maths</option>
  </select>
 
  <div class="submit">
<button type="submit"> create profile</button>
  </div>

</form>
  </AdminLayouth>
</template>

<script>
import axios from '@/axios'
import AdminLayouth from '@/components/AdminLayouth.vue';
import getProfile from '@/components/getProfile.vue';

export default {
  components:{AdminLayouth},
  props:['id'],
    setup(props){
    const {profile,error,load} =  getProfile(props.id)
   
   load()
    return {profile, error}
  },
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
   
     async updateProfile() {
       
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

<style scoped>
form{
  max-width:700px;
  margin:10px 20px;
  background:white;
  text-align:left;
  padding:40px;
  border-radius:10px;
}
label{
  color:#aaa;
  display:inline-block;
  margin:25px 0 15px;
  font-size:0.6em;
  text-decoration: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select{
  display:block;
  padding:10px 6px;
  width:100%;
  box-sizing:border-box;
  border:none;
  border-bottom:1px solid #ddd;
  color:#555
}

input[type="checkbox"]{
  display:inline-block;
  width:16px;
  position:relative;
  margin:0 10px 0 0;
  top:2px
}
/* .pill{
  display: inline-block;
  margin:20px 10px 0 0;
  padding:6px 12px;
  background:#eee;
  border-radius:20px ;
  font-size:12px ;
  letter-spacing: 1px;
  font-weight:bold ;
  color:#777 ;
  cursor:pointer ;
} */
button{
  background:#0b6dff;
  border:0;
  padding:10px 20px;
  margin-top:20px;
  color:white;
  border-radius:20px;
}
/* .submit{
  text-align: center;
} */
</style>