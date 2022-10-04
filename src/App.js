import {Routes,Route}from "react-router-dom"
import NavBar from "./component/NavBar";
import Addpointer from "./page/Addpointer";
import Pointage from "./page/Pointage";
import ListPointage from "./page/ListPointage";
import EditPointeur from "./page/EditPointeur";
import PointeurDetails from "./page/PointeurDetails";
//import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <Routes>
      <Route path="/home" element={<Addpointer />}/>
      <Route path="/" element={<Pointage />}/>
      <Route path="/listpointage" element={<ListPointage />}/>
      <Route path="/editpointeur/:id" element={<EditPointeur />}/>
      <Route path="/detailpointeur/:id" element={<PointeurDetails />}/>
     
      </Routes>
      
      <ToastContainer />
     
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default App;
