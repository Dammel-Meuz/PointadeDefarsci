
import {useState} from 'react'
import {useParams} from 'react-router-dom'

function PointeurDetails() {
    const param=useParams()
    

    const [userDetails,setUserDetails]=useState([])
  
    

    const userDetail=async () =>{
        const host=`http://pointage-app.000webhostapp.com/api/userdetails/${param.id}` 
        const response= await (await fetch(host)).json()
        setUserDetails(response)
      }
      // const users=async () =>{
      //   const hoste=`http://pointage-app.000webhostapp.com/api/pointeur/1` 
      //   const response= await (await fetch(hoste)).json()
      //   useeer=response
      // }

      


     
        userDetail()
    
      
      
  return (
    <div className="card p-4 m-10">
     <h1>Liste de Pointage  </h1>
        <div  style={{backgroundColor : '',
       border: '1px solid black',
       overflow: 'scroll',}}>
    <table className="table table-striped table-bordered">
     
     <thead>
       <tr>
       <th scope="col">nom</th>
         <th scope="col">date</th>
         <th scope="col">heurDarriver</th>
         <th scope="col">heurDepart</th>
       </tr>
     </thead>
     {userDetails.map((poitage)=>(
                <tbody key={poitage.id}>
                <tr>
                <td>{poitage.firstName}  {poitage.lastName}</td>
              <td>{poitage.date}</td>
              <td>{poitage.heurDarriver}</td>
              <td>{poitage.heurDepart}</td>
            
             </tr>
              </tbody>
             ))}
    
   </table>
   </div>
   </div>
  )
}

export default PointeurDetails
