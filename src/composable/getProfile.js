
import{ ref } from 'vue'

const getProfile = (id)=>{
  const profile  = ref([])
  const error = ref(null)

  const load = async ()=>{
  try{
    let data = await fetch('http://localhost:3000/profiles/' +id)
      if(!data.ok){
        throw Error('no  available')
      }
      profile.value = await data.json()
  }
  catch(err){
    error.value = err.message
    console.log(error.value)
  }
}
return {profile, error, load}

}
export default getProfile