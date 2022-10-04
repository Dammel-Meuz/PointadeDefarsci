import {useState,useEffect} from 'react'
import{toast} from 'react-toastify'
import TablePointer from './TablePointer'

function Addpointer() {

    const [dataPointer,setDataPointer] =useState({
        firstName:'',
        lastName:'',
        phone:'',
        email:''
    
    })
    const{firstName,lastName,phone,email} = dataPointer

    //todo the function add pointers

// const [pointer,setPointer]=useState([])
const addPointer = async (newPointer) => {
  
    await fetch('http://pointage-app.000webhostapp.com/api/pointeur',{
      method:'POST',
      mode: 'cors', 
      headers:{
          'Content-type':'application/json',
          'Accept':'*/*'
      },
      body:JSON.stringify(newPointer)
      
    })
    
    // const data=await response.json()
    // setPointer([data, ...pointer])
    toast.success('Ajout valide')
  }
  
   //todo fonction lister pointers

 const [pointers,setPointers]=useState([])

 const ListPointer=async () =>{
     const host="http://pointage-app.000webhostapp.com/api/pointeur"
     const response= await (await fetch(host)).json()
     setPointers(response)
     
   }


    const onChange=(e)=>{
        setDataPointer((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value,
          }))
      
      }
      const handleSubmit=(e)=>{
       e.preventDefault()
      addPointer(dataPointer)
      ListPointer()
      setDataPointer({
        firstName:'',
        lastName:'',
        phone:'',
        email:''
      })
       //console.log(pointers)
      }
   
      useEffect(() => {
        ListPointer()
      },[])



  return (
    <div className=" container-fluid ">
    
    <div className='row'>
    <div className=" col-md-1 col-lg-1"> </div>
  <div className='col-md-4 p-3 m-5 col-sm-6 ' >
    <div className="card p-4 m-10 border-primary ">
      <div className="card-title text-center"><h1>Ajouter un pointeur</h1></div>
      <div className="card-body p-4">  
        <form onSubmit={handleSubmit}>
    <div className="md-3 ">
      <label for="firstName" className="form-label">Prenom</label>
      <input type="text" className="form-control" id="firstName" placeholder="firstName" value={firstName} onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="lastName" className="form-label">Nom</label>
      <input type="text" className="form-control" id="lastName" placeholder="lastName" value={lastName}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="phone" className="form-label">Phone</label>
      <input type="phone" className="form-control" id="phone" placeholder="phone" value={phone}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <div className="mb-3">
      <label for="email" className="form-label">E-mail</label>
      <input type="email" className="form-control" id="email" placeholder="email" value={email}  onChange={onChange} required style={{backgroundColor : '#85acdc'}}/>
   </div>
   <input type='submit' className="btn" value="Ajout" style={{backgroundColor : '#85acdc'}} />
    </form>
    </div>

    </div>
    </div>
    <div className="col-md-5 p-3 m-5 col-sm-6">
      <TablePointer pointers={pointers}/>
   
   </div>
   <div className=" col-md-1 col-lg-1"> </div>
   </div>
   </div>
  )
}

export default Addpointer
