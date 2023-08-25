
import "./browesjobs.css";
import logo from "./pabjobs-logo.png";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function JobLocation(){
  const [blogslist, setblogslist] = useState([]);
  

  const [selectCompany, setselectCompany] = useState([]);
  const navigate=useNavigate();

 
  const handlecompany = (company) => {
    if (selectCompany.includes(company)) {
      setselectCompany((blogslist) =>
        blogslist.filter((item) => item !== company)
      );
    } else {
      setselectCompany((blogslist) => [...blogslist, company]);
    }
  };

  const removeitem = (_id) => {
    const updateditem = [...selectCompany];
    updateditem.splice(_id, 1);
    setselectCompany(updateditem);
  };
  const handleClick = () => {
    navigate("/browesjobs", { state: { location: selectCompany } });
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  const fetchblogs = async () => {
    const api = "http://localhost:5010/allbrowsers";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setblogslist(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
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
              <li class="nav-item" style={{ marginLeft: "400px" }}>
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
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container buttoncontainer">
        <div className="row">
          <div className="col-12 col-md-2">
            <Link to="/jobs" style={{ color: "white" }}>
              <button className="card shadow jobbutton ">All Jobs</button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/joblocations" >
              <button className="card shadow jobbutton bg-primary  ">
                Job By Location
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/joblocompany" style={{ color: "white" }}>
              {" "}
              <button className="card shadow jobbutton ">
                Jobs By Company
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <Link to="/jobcategory" style={{ color: "white" }}>
              <button className="card shadow jobbutton  ">
                {" "}
                Jobs By Category
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-2">
            <button className="card shadow jobbutton ">
              Jobs By Designation
            </button>
          </div>
          <div className="col-12 col-md-2">
            <button className="card shadow jobbutton ">Jobs By Skills</button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Featured Jobs By Company</h5>
          </div>
          <div className="col-12 col-md-5"></div>

          <div className="col-12 col-md-3">
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="search"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                 
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
      <div className="container">
        <div className="row">
          {selectCompany.length > 0 ? (
            selectCompany.map((cities, index) => (
              <div className="" key={index}>
                <h2>{cities}    <span onClick={removeitem}>X</span></h2>
               
                <button onClick={handleClick}>Filter Array</button> 
              </div>
            ))
          ) : (
            <div className="notFound"></div>
          )}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row mt-2">
          {blogslist.length === 0 ? (
            <p>No results found.</p>
          ) : (
            blogslist.map((blog, index) => (
              <div className="col-12 col-md-3" key={index}>
                <button
                  className="buttonlocation card w-100 mb-3"
                  onClick={() => handlecompany(blog.companyname)}
                >
                 <p class="m-0">{blog.cities}</p>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default JobLocation;






