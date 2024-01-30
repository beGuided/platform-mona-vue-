<template>
  <div class='form-container'>

  <!-- <h4 v-if="error"> {{error}}</h4> -->

    <form @submit.prevent="login">
      <label>Mat-Number</label>
      <input type="text" required v-model="matNumber">

      <label>password</label>
      <input type="password" required v-model="password">
    <div>
     <input type="email" class="form-control" name="email" placeholder="name@example.com">
        <label>Email</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" name="password" placeholder="Password">
        <label>Password</label>
      </div>

  <div class="submit">
<button type="submit"> Login</button>
  </div>

</form>

  </div>
</template>

<script>
import axios from '@/axios'
import{ ref } from 'vue'
  export default {

    setup(props){
      const matNumber = ref('')
      const password = ref('')

     const error = ref(null)
        
      const login =   async () =>{
      try{
        const response = await axios.post('login-student',{
          matric_number: matNumber.value , 
          password: password.value,
        },
          error.value = '',
        );
        
        if(response.data.token) {
          localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
         }
          this.$store.commit('LOGIN');
          this.$router.push('/')
       }catch(error) {
        // if(error.response){
        //    error.value = error.response.data
        // }
        console.error('an error occure ', error.response.data)
       }
      }
   
    return {matNumber, error,password,login}
  },
   
 
  }

  
</script>

<style  scoped>
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