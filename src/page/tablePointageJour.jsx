import React from 'react'

function TablePointageJour({listpointage,thisDate}) {
  return (
    <div className="card p-4 m-10">
     <h1>Liste de Pointage du {thisDate}</h1>
        <div  style={{backgroundColor : '',
       border: '1px solid black',
       overflow: 'scroll',}}>
    <table className="table table-striped table-bordered">
     
     <thead>
       <tr>
         <th scope="col">id</th>
         <th scope="col">Phones</th>
         <th scope="col">date</th>
         <th scope="col">heurDarriver</th>
         <th scope="col">heurDepart</th>
       </tr>
     </thead>
     {listpointage.map((poitage)=>(
                <tbody>
                <tr>
              <td>{poitage.id}</td>
              <td>{poitage.phone}</td>
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

export default TablePointageJour
