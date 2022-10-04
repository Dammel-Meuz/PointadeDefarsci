import {useState,useEffect} from 'react'
import{toast} from 'react-toastify'
import TablePointageJour from './tablePointageJour'

function Pointage() {

  const [listpointage,setListpointage]=useState([])
  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})

const ListPointage=async () =>{
  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
    const host=`http://pointage-app.000webhostapp.com/api/date/${thisDate}`
    const response= await (await fetch(host)).json()
    setListpointage(response)
    
 }

    const [numPhone,setNumPhone] = useState("")
    //ajouter pointage


// const valedPointer={}
let depart={}
let arriver={}
//todo fonction lister pointers

const [pointers,setPointers]=useState([])



//  console.log(valedPointer)
const setData= async(phonePointer)=>{

  let thisDate=new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'})

  const host=`http://pointage-app.000webhostapp.com/api/pointage/test/${thisDate}/${phonePointer}`;
  const response= await (await fetch(host)).json()
      // const data = await response.json()
  const updatePointer=response
//recuperer le pointeur a partir du phone num
  const hosts=`http://pointage-app.000webhostapp.com/api/phonePointeur/${phonePointer}`;
  const responses= await (await fetch(hosts)).json()
      // const data = await response.json()
      let phonePointeur
   phonePointeur=responses
  let test=pointers.map((pointer)=>(pointer.phone))

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  

  if (test.includes(phonePointer)) {

    if (updatePointer.length !==0){
      depart={
        Date:thisDate,
        heurDarriver: updatePointer[0].heurDarriver,
        heurDepart: h+':'+m+':'+s,
        phone: updatePointer[0].phone,
        pointeur_id:phonePointeur[0].id,
        id:updatePointer[0].id
      }
      await fetch(`http://pointage-app.000webhostapp.com/api/pointage/edit/${updatePointer[0].id}`,{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(depart)
      })
    
      toast.success('bonne fin de soirée')
      console.log(depart)
      console.log("depart")
      return
   
    }else if(updatePointer.length ===0) {
       arriver={
        Date: new Date().toLocaleString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'}),
        heurDarriver:h+':'+m+':'+s,
        heurDepart:'',
        phone:phonePointer,
        pointeur_id:phonePointeur[0].id

      }
      await fetch('http://pointage-app.000webhostapp.com/api/pointage',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(arriver)
        
      }) 

      toast.success('Bienvenue Pointage valider')
      console.log(arriver)
       console.log("arriver")
       console.log(phonePointeur[0])
    }  
  }else{
    toast.error('num Phone invalid')
    console.log(updatePointer.length)
    console.log(test)
   // console.log(phonePointeur)
    //console.log(phonePointeur[0][0])
  }

}
const ListPointer=async () =>{
  const host="http://pointage-app.000webhostapp.com/api/pointeur"
  const response= await (await fetch(host)).json()
  setPointers(response)
  
}



    const  onChangenumPhone=(e)=>{
        setNumPhone(e.target.value)
        
    }
    const PointerSubmit =(e)=>{
        e.preventDefault()
        const num=numPhone
        setData(num)
        setNumPhone('')
        ListPointage()
        
      
        
    }
   
    useEffect(() => {
       ListPointer()
        ListPointage()
       // console.log(listpointage)
       
      },[])
     


  return (
    <div class="container-fluid mt-3">
       <div className="col-md-1"></div>
       <div className='row'>
       <div className="col-md-4 p-4 m-4 col-sm-6" >
      <form onSubmit={PointerSubmit}>
      <div className="mb-3">
        <label for="phone" className="form-label">Phone</label>
        <input type="phone" className="form-control" id="numPhone" placeholder="phone" value={numPhone}  onChange={onChangenumPhone} required style={{backgroundColor : '#85acdc'}}/>
     </div>
     <input type='submit' className="btn  m-2" value="submit" style={{backgroundColor : '#85acdc'}}/>
    </form>
    </div>
    <div className="col-sm-6 p-4 m-4 col-sm-6" >
        <TablePointageJour listpointage={listpointage} thisDate={thisDate} />
   </div>
   </div>
   
    </div>
  )
}

export default Pointage
