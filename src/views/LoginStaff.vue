<template>
  <div class='form-container'>

  <!-- <h4 v-if="error"> {{error}}</h4> -->
    <form @submit.prevent="login">
      <label>Mat-Number</label>
      <input type="text" required v-model="staffId">

      <label>password</label>
      <input type="password" required v-model="password">

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
      const staffId = ref('')
      const password = ref('')
      const error = ref(null)

      const login =   async () =>{
      try{
        const response = await axios.post('/login-staff',{
          staff_id: staffId.value , 
          password: password.value,
        },
          error.value = '',
        );
        
        if(response.data.token) {
          localStorage.setItem('token', response.data.token)
         axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
       }
        this.$store.commit('LOGIN');
          this.$router.push('/')
      } catch(error) {
        // if(error){
        //    error.value = error.response.data
        // }
        console.error('an error occure ', error.response.data)
       }
      }
   
    return {staffId, error,password,login}
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