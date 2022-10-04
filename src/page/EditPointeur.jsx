import {useState,useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function EditPointeur() {

   const param=useParams()
   const navigate=useNavigate()
   const [dataPointer,setDataPointer] =useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:''
})
const [editdataPointer,setEditDataPointer] =useState({
    firstName:'',
    lastName:'',
    phone:'',
    email:''
})
const{firstName,lastName,phone,email} = dataPointer
//const{firstName,lastName,phone,email} = editdataPointer
const getPointer=async () =>{
    const host=`http://pointage-app.000webhostapp.com/api/pointeur/${param.id}`
    const response= await (await fetch(host)).json()
    setDataPointer(response)
    
  }
  useEffect(() => {
    getPointer()
  },[])

  const onChange=(e)=>{
    setDataPointer((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
   
  }

      //todo the function edit pointers

const [pointer,setPointer]=useState([])
const editPointer = async (newPointer) => {
  
    const response =await fetch(`http://pointage-app.000webhostapp.com/api/pointeur/edit/${param.id}`,{
      method:'PUT',
      mode: 'cors', 
      headers:{
          'Content-type':'application/json',
          'Accept':'*/*'
      },
      body:JSON.stringify(newPointer)
      
    })
    
    const data=await response.json()
    setPointer([data, ...pointer])
  }
  const handleSubmit=(e)=>{
   // e.preventDefault()
    editPointer(dataPointer)
    console.log(dataPointer)
    navigate('/')
  }


  return (
    <div className=" container-fluid ">
   
    <div className='row'>
    <div className="col-md-3 "></div>
  <div className='col-md-4 p-4 m-4 col-sm-6 ' >
    <div className="card p-4 m-10 border-primary ">
      <div className="card-title text-center"><h1>editer un pointeur</h1></div>
      <div className="card-body p-4">  
        <form onSubmit={handleSubmit} >
    <div className="mb-3 ">
      <label for="firstName" className="form-label">Prenom</label>
      <input type="text" className="form-control" id="firstName" placeholder="firstName" value={firstName} onChange={onChange}required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="lastName" className="form-label">Nom</label>
      <input type="text" className="form-control" id="lastName" placeholder="lastName" value={lastName} onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="phone" className="form-label">Phone</label>
      <input type="phone" className="form-control" id="phone" placeholder="phone" value={phone} onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="email" className="form-label">E-mail</label>
      <input type="email" className="form-control" id="email" placeholder="email" value={email} onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <input type='submit' className="btn" value="Edit" style={{backgroundColor : '#85acdc'}} />
    </form>
    </div>

    </div>
    </div>
    
   </div>
   </div>
  )
}

export default EditPointeur
