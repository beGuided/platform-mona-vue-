
import{ ref } from 'vue'

const getProfiles = ()=>{
  const profiles  = ref([])
  const error = ref(null)

  const load = async ()=>{
  try{
    let data = await fetch('http://localhost:3000/profiles ')
      if(!data.ok){
        throw Error('no data available')
      }
      profiles.value = await data.json()
  }
  catch(err){
    error.value = err.message
    console.log(error.value)
  }
}
return {profiles, error, load}

}
export default getProfiles