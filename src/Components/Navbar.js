
// import './Navbar.css';
// import {  NavLink } from 'react-router-dom';
// export function Navbar(){
// const links=[
//     {
//         name:"Home",url:"/"},
//         {name:"Login",url:"/login"},
//         {name:"Employees",url:"/employees}"
//     }
// ]

//     return (
//     <nav className="navbar">
//         {links.map((e,index)=>{
//             return(
               
//         <NavLink className="" key={index} to={e.url}>{e.name}</NavLink>    
//             )
//         })}
//         {/* <NavLink className="" key={index} to={e.url}>{e.name}</NavLink>    */}
//     </nav>
//     );
// }


import './Navbar.css';
import { Link } from 'react-router-dom';
export function Navbar(){
    return (
    <nav className="navbar">
        <ol>
            <li><Link to="home">HOME</Link></li>
            <li><Link to="login">LOGIN</Link></li>
            <li><Link to="employees">EMPLOYEES</Link></li><br></br>
        </ol>      
    </nav>
    );
}