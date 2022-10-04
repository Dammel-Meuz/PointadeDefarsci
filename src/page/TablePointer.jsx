import React from 'react'
import { Link } from 'react-router-dom'



function TablePointer({pointers}) {
  return (
    <div className="card p-4 m-10 border-primary">
      <div className="card-title text-center"><h1>Liste des  pointeur</h1></div>
      <div className="card-body p-4 ">  
        <div  style={{backgroundColor : '',
       height: '600px',
       border: '1px solid black',
       overflow: 'scroll',}}>
    <table className="table table-striped table-bordered overflow-scroll h-10px">
     
     <thead>
       <tr>
         <th scope="col">id</th>
         <th scope="col">prenom</th>
         <th scope="col">nom</th>
         <th scope="col">phone</th>
         <th scope="col">email</th>
         <th scope="col">option</th>
       </tr>
     </thead>
     {pointers.map((pointer)=>(
                <tbody key={pointer.id}>
                <tr>
                <td  >{pointer.id}</td>
                  <td>{pointer.firstName}</td>
                  <td>{pointer.lastName}</td>
                  <td>{pointer.phone}</td>
                  <td>{pointer.email}</td>
                  <td>
                
                    <Link to={`/editpointeur/${pointer.id}`}>  edit</Link> <Link to={`/detailpointeur/${pointer.id}`}>  Details</Link>
                    
                    </td>
                </tr>
              </tbody>
             ))}
    
   </table>
   </div>
   </div>
   </div>
  )
}

export default TablePointer
