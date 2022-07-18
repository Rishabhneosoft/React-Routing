// import { Header } from "./Components/Header";
// import {Routes,Route} from 'react-router-dom';
// import {Home} from './RoutingComponents/Home';
// import {Login} from './RoutingComponents/Login';
// import {Employees} from './RoutingComponents/Employees';
// import { NotFound } from "./RoutingComponents/NotFound";
// // import { Navbar } from "./Components/Navbar";
// function App() {
//   return (  
//     <>
//      <Header/>
//     <div style={{border:'2px solid red'}}>
//     <Routes>
//       <Route element={<Home/>} path='/home'></Route>
//       {/* <Route element={<Home/>} path='/home'></Route> */}
//       <Route element={<Login/>} path='/login' ></Route>
//       <Route element={<Employees/>} path="/employees"></Route>
//       <Route element={<NotFound/>} path ="*"></Route>
//     </Routes>
//     </div>
//     </>
   
//   );
// }

// export default App;


import { Header } from "./Components/Header";
import {Routes,Route} from 'react-router-dom';
import {Home} from './RoutingComponents/Home';
import {Login} from './RoutingComponents/Login';


function App() {
  return (  
    <>
     <Header></Header> 
    <div style={{border:'2px solid red'}}>
    <Routes>
      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Home></Home>} path='home'></Route>
      <Route element={<Login></Login>} path='login' ></Route>
    </Routes>
    </div>
    </>
   
  );
}

export default App;