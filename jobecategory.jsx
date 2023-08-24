import './App.css';
import logo from "./pabjobs-logo.png";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
function Jobcategory(){
    const elementRefs = {};

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredButtons, setFilteredButtons] = useState('');
  const [filter, setFilter] = useState([]);
  const allButtons = [
    'accounting', 'InteriorDesign', 'Bank', 'Consultant', 'Engineer',
    'ExportImport', 'ContentWriting', 'Merchandiser', 'Security', 'HR/Admin', 'Hotel',
    'Applicationprgm', 'ClientServer', 'Ecommerce', 'DBA', 'ERP',
    'VLSI', 'MainFrame', 'Middleware', 'Mobile', 'NetworkAdministrator', 'It industry',
    'Testing', 'Systemprogramming', 'EDP', 'Telecomsoftware', 'BPO', 'Legal',
    'Marketing', 'Packaging', 'Pharma', 'Maintenanse', 'Logistics', 'Logistics', 'Sales',
    'Secretary', 'Corparate', 'Site Engg', 'Film', 'Teacher', 'Airline', 'GraphicDesigner',
    'Shipping', 'Analytics'
  ];

  const handleSearch = () => {
    const filtered = allButtons.filter(button =>
      button.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredButtons(filtered);
   

 
  };
  const handleButtonOnClick = (buttonName) => {
    // Handle the click event for each button here
    setFilter( `${buttonName}`);
    setSearchTerm(`${buttonName}`);
    if (elementRefs[buttonName]) {
        elementRefs[buttonName].style.display = 'none';
      }
    
};
    return(
        <div>
       <nav class="navbar navbar-expand-sm navbar-dark shadow">
        <div class="container">
          <img
            src={logo}
            style={{ width: "200px", paddingleft: "100px", marginLeft: "30px" }}
          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            style={{ backgroundcolor: "black" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="collapsibleNavbar"
            style={{ marginleft: "500px" }}
          >
            <ul class="navbar-nav" style={{ marginleft: "500px" }}>
              <li class="nav-item" style={{marginLeft:"400px"}}>
                <Link to="/home" style={{ color: "white" }}>
                  <a class="nav-link " href="" style={{ color: "black" }}>
                    Home
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/browesjobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="/browsejobs"
                    style={{ color: "black" }}
                  >
                    Browse Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/jobs" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    style={{ color: "black" }}
                  >
                    Jobs
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  style={{ color: "black" }}
                >
                  services
                </a>
              </li>
              <li class="nav-item">
                <Link to="/pay" style={{ color: "white" }}>
                  {" "}
                  <a
                    class="nav-link dropdown-toggle"
                    href="payment.html"
                    style={{ color: "black" }}
                  >
                    payments
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item">
              <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i></Link>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>

            {/* ... */}
            <div className="container buttoncontainer">
            <div className="row">
                <div className="col-12 col-md-2">
                <Link to="/jobs" style={{color:"white"}}><button className="card shadow jobbutton ">All Jobs</button></Link>
                </div>
                <div className="col-12 col-md-2">
                <Link to="/joblocations" style={{color:"white"}}><button className="card shadow jobbutton ">Job By Location</button></Link>
                </div>
                <div className="col-12 col-md-2">
                <Link to="/joblocompany" style={{color:"white"}}> <button className="card shadow jobbutton ">Jobs By Company</button></Link>
                </div>
                <div className="col-12 col-md-2">
                <Link to="/jobcategory"><button className="card shadow jobbutton bg-primary "> Jobs By Category</button></Link>
                </div>
                <div className="col-12 col-md-2">
                <button className="card shadow jobbutton ">Jobs By Designation</button>
                </div>
                <div className="col-12 col-md-2">
                <button className="card shadow jobbutton ">Jobs By Skills</button>
                </div>

            </div>

          </div>
          {/* .... */}
          <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <h5>Featured Jobs By Category</h5>
                </div>
                <div className="col-12 col-md-5">
                    
                </div>

                <div className="col-12 col-md-3">
                <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder="search"  value={searchTerm} onChange={e =>setSearchTerm(e.target.value)}/>
                    
                </div>
                <button type="button" class="btn btn-primary" onClick={handleSearch}>
                    <i class="fas fa-search"></i>
                </button>
                </div>
                </div>

            </div>

          </div>
          {/* .... */}
          <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-12 d-flex">
                    <button className="buttonalpha card shadow">A</button>
                    <button className="buttonalpha card shadow">B</button>
                    <button className="buttonalpha card shadow">C</button>
                    <button className="buttonalpha card shadow">D</button>
                    <button className="buttonalpha card shadow">E</button>
                    <button className="buttonalpha card shadow">F</button>
                    <button className="buttonalpha card shadow">G</button>
                    <button className="buttonalpha card shadow">H</button>
                    <button className="buttonalpha card shadow">I</button>
                    <button className="buttonalpha card shadow">J</button>
                    <button className="buttonalpha card shadow">K</button>
                    </div>
                    <div className="col-12 col-md-12 d-flex">
                    <button className="buttonalpha card shadow">L</button>
                    <button className="buttonalpha card shadow">M</button>
                    <button className="buttonalpha card shadow">N</button>
                    <button className="buttonalpha card shadow">O</button>
                    <button className="buttonalpha card shadow">P</button>
                    <button className="buttonalpha card shadow">Q</button>
                    <button className="buttonalpha card shadow">R</button>
                    <button className="buttonalpha card shadow">S</button>
                    <button className="buttonalpha card shadow">T</button>
                    <button className="buttonalpha card shadow">U</button>
                    <button className="buttonalpha card shadow">V</button>
                    </div>
                    <div className="col-12 col-md-12 d-flex">
                    <button className="buttonalpha card shadow">W</button>
                    <button className="buttonalpha card shadow">X</button>
                    <button className="buttonalpha card shadow">Y</button>
                    <button className="buttonalpha card shadow">Z</button>
                </div>
                
            </div>

          </div>
        
         
          <div className='container'>
            <div className='row'>
                <div className='col-md-5'></div>
            {searchTerm && 
            <div className='col-md-2' ref={el => elementRefs[allButtons.buttonName] = el}>
                <p className='para616'>{filter}   
                <button onClick={e =>handleButtonOnClick(e.target.value)} className='cross'>✖</button></p>
                 
                
                <Link to="/browesjobs"><button className='button618' style={{background:"blue",color:"white"}}>filter selected<i class="fas fa-search"></i></button></Link>
                
            </div>
            }
             </div>    
          </div>

          

<div className="container mt-5">
     
     <div className="row mt-2">
       {filteredButtons.length === 0 ? (
         <p>No results found.</p>
       ) : (
         filteredButtons.map((button, index) => (
           <div className="col-12 col-md-3" key={index}>
             <button className="buttonlocation card w-100 mb-3" onClick={() => handleButtonOnClick(button)}>{button}</button>
             
           </div>
         ))
       )}
     </div>
   </div>


        

   

        </div>
    )
}
export default Jobcategory;