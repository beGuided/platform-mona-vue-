<template>
  <div class='form-container'>

    <form @submit.prevent="register">
      <label>First-Name</label>
      <input type="text" required v-model="firstName">
        <label>Last-Name</label>
      <input type="text" required v-model="lastName">
       <label>Mat-Number</label>
     {{matNumber}}
      <input type="text" required v-model="matNumber">
      <label>Password</label>
      <input type="password" required v-model="password">
       <label>Confirm Password</label>
      <input type="password" required v-model="passwordConfirm">

  <div class="submit">
<button type="submit"> create an acount</button>
  </div>

</form>

  </div>
</template>

<script>
import axios from '@/axios'
import { ref }  from 'vue'
  export default {

    setup(props){
    const firstName = ref('')
    const lastName = ref('')
    const matNumber = ref('')
    const password = ref('')
    const passwordConfirm = ref('')
        
      const register =   async () =>{
      
      try{
        const response = await axios.post('register-student',{
          first_name: firstName.value , 
          last_name: lastName.value , 
          matric_number: matNumber.value , 
           password: password.value,
          password_confirmation:passwordConfirm.value,
         
        });
       }catch(error) {
        console.error('an error occure', error);
        if(error.response){
          console.error("Error details:", error.response.data)
        }
       }
      }
      
   
    return {firstName,lastName,matNumber,password,passwordConfirm,register}
  },

  }

  
</script>

<style scoped>
form{
  max-width:420px;
  margin:30px auto;
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
