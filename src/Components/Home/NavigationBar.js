// import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../Logo/Logo.png";
// import { CartContext } from "./Carousel"; 
// import { useContext } from "react";
// import './button.css';

// export const NavigationBar = ({ onLogout }) => {
//   const { count, logout } = useContext(CartContext); 
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout(); // Call the logout function
//     navigate('/'); // Redirect to the home page after logout
//   };









  
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Logo/Logo.png";
import { CartContext } from "./Carousel";
import { useContext } from "react";
import './button.css'; // Ensure this file contains relevant button styling

export const NavigationBar = ({ onLogout }) => {
  const { count } = useContext(CartContext); // Only use `count` from context
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Use the prop callback
    navigate('/'); // Redirect to the home page after logout
  };


  return (
    <>
    <div className="container-fluid NavBarBG">
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light text-light h4" >
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className="navbar-logo" style={{ width: "100px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/about">
              For You
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/services">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" to="/features">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="btn btn-dark px-4 py-2 text-light fs-5 fw-5 me-3 NavIcon text-light" onClick={() => navigate('/CartDetails')}>
              <i className="bi bi-cart-plus">
                <span className="bg-danger mb-2 me-1 px-2" style={{ borderRadius: "50%" }}>
                  {count}
                </span>
              </i>
            </button>
          </li>
          <li className="nav-item">
            <NavLink
              to="/login"
              className="btn btn-primary me-2 px-4 py-2 text-light fs-5 fw-5"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="btn btn-danger me-2 px-4 py-2 text-light fs-5 fw-5">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    </div>
    </>
  );
};

//   return (
//     <div className="container-fluid NavBarBG">
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light text-light h4">
//           <Link className="navbar-brand" to="/">
//             <img src={logo} alt="Logo" className="navbar-logo" />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#collapsibleNavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="collapsibleNavbar">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item">
//                 <NavLink className="nav-link text-light" to="/">
//                   Movies
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link text-light" to="/about">
//                   For You
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link text-light" to="/services">
//                   Services
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link text-light" to="/features">
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <button
//                   className="btn btn-dark px-4 py-2 fs-5 fw-5 me-3 NavIcon text-light"
//                   onClick={() => navigate('/CartDetails')}
//                 >
//                   <i className="bi bi-cart-plus">
//                     <span className="cart-count bg-danger mb-2 me-1 px-2">
//                       {count}
//                     </span>
//                   </i>
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   to="/login"
//                   className="btn btn-primary me-2 px-4 py-2 fs-5 fw-5"
//                 >
//                   Login
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-danger me-2 px-4 py-2 fs-5 fw-5"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };
