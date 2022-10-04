import {Link} from 'react-router-dom'
import defarsci from '../asset/defarsci.jpeg'
function NavBar() {
   
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor : '#ea641b'}}> 
      
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        
      </li>
      <li className="nav-item p-3 text-hover">
        <Link  className="fs-5 text-decoration-none text-light"
        to={"/home"}>
          <img alt="App" src={defarsci} style={{width:'60px',margin:'bottom',display:'bolck'}}
         /> 
        </Link>
       
      </li>
      <li className="nav-item p-3">
      <Link  className="fs-5 text-decoration-none text-light"
        to={"/home"}>
        add pointage
        </Link>
      </li>
      <li className="nav-item p-3">
      <Link  className="fs-5 text-decoration-none text-light"
        to={"/"}>Pointage</Link>
      </li>
      <li className="nav-item p-3">
      <Link  className="fs-5 text-decoration-none text-light"
        to={"/listpointage"}>ListPointage</Link>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default NavBar
