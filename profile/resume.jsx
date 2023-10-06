import { Link } from "react-router-dom";
import "./profile.css";
import { useState } from "react";
import logo from "./img/pabjobs-logo.png";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Resume() {
  // resume heading
  const [heading, setheading] = useState("");

  const [data, setdata] = useState([]);
  console.log(heading);
  const useData = {
    heading: heading,
  };
  console.log(useData);
  

  const onSubmitForm1 = (e) => {
    e.preventDefault();

    if (heading !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/heading", useData, { headers })
        .then((response) => {
          setdata(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  //profilesummary

  const [ProfileSummary, setProfileSummary] = useState("");

  const [data1, setdata1] = useState([]);
  console.log(ProfileSummary);
  const useData1 = {
    ProfileSummary: ProfileSummary,
  };
  console.log(useData1);
  const onSubmitForm2 = (e) => {
    e.preventDefault();

    if (ProfileSummary !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/profilesummary", useData1, { headers })
        .then((response) => {
          setdata1(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  //keyskils
  const [keyskils, setkeyskils] = useState("");

  const [data2, setdata2] = useState([]);
  console.log(keyskils);
  const useData2 = {
    keyskils: keyskils,
  };
  console.log(useData2);
  const onSubmitForm3 = (e) => {
    e.preventDefault();

    if (keyskils !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/profileskils", useData2, { headers })
        .then((response) => {
          setdata2(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  // Accomplishment
  const [Accomplishment, setAccomplishment] = useState("");

  const [data3, setdata3] = useState([]);
  console.log(Accomplishment);
  const useData3 = {
    Accomplishment: Accomplishment,
  };
  console.log(useData3);
  const onSubmitForm4 = (e) => {
    e.preventDefault();

    if (Accomplishment !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/Accomplishment", useData3, { headers })
        .then((response) => {
          setdata3(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  // Work Sample
  const [ WorkSample, setWorkSample] = useState("");

  const [data4, setdata4] = useState([]);
  console.log(WorkSample);
  const useData4 = {
    WorkSample:  WorkSample,
  };
  console.log(useData4);
  const onSubmitForm5 = (e) => {
    e.preventDefault();

    if ( WorkSample !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/WorkSample", useData4, { headers })
        .then((response) => {
          setdata4(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  // publication 
  const [ publication, setpublication] = useState("");

  const [data5, setdata5] = useState([]);
  console.log(publication);
  const useData5 = {
    publication:  publication,
  };
  console.log(useData5);
  const onSubmitForm6 = (e) => {
    e.preventDefault();

    if ( publication !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/publication", useData5, { headers })
        .then((response) => {
          setdata5(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  // Presentation
  const [Presentation, setPresentation] = useState("");

  const [data6, setdata6] = useState([]);
  console.log(Presentation);
  const useData6 = {
    Presentation:  Presentation,
  };
  console.log(useData6);
  const onSubmitForm7 = (e) => {
    e.preventDefault();

    if ( Presentation !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/Presentation", useData6, { headers })
        .then((response) => {
          setdata6(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  // Patent
  const [Patent, setPatent] = useState("");

  const [data7, setdata7] = useState([]);
  console.log(Patent);
  const useData7 = {
    Patent:  Patent,
  };
  console.log(useData7);
  const onSubmitForm8 = (e) => {
    e.preventDefault();

    if ( Patent !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/patent", useData7, { headers })
        .then((response) => {
          setdata7(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
  //cetification
  const [certification, setCeritifion] = useState("");

  const [data8, setdata8] = useState([]);
  console.log(Patent);
 const useData8 = {
    certification : certification,
  };
  console.log(useData8);
  const onSubmitForm9 = (e) => {
    e.preventDefault();

    if ( certification !== "") {
      const headers = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
      };
      axios
        .post("http://localhost:5010/certification", useData8, { headers })
        .then((response) => {
          setdata8(response.data);

          console.log(response.data);
          toast.success("Registration Successfull");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      toast.warning("Enter the Required Details");
    }
  };
   //cetification
   const [careerProfile, setcareerProfile] = useState("");

   const [data9, setdata9] = useState([]);
   console.log(Patent);
  const useData9 = {
    careerProfile : careerProfile,
   };
   console.log(useData9);
   const onSubmitForm10 = (e) => {
     e.preventDefault();
 
     if ( careerProfile !== "") {
       const headers = {
         token:
           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZDBhMGJhOTZkMTA5YTFhNzZkNzMiLCJpYXQiOjE2OTExNDQzOTV9.tX4qCPXSptfwgk1C6dIhOVgB6ffWwGhOgClGkZluU9s",
       };
       axios
         .post("http://localhost:5010/careerProfile", useData9, { headers })
         .then((response) => {
           setdata9(response.data);
 
           console.log(response.data);
           toast.success("Registration Successfull");
         })
         .catch((error) => {
           console.log(error.message);
         });
     } else {
       toast.warning("Enter the Required Details");
     }
   }; 
  const [selectedFile, setSelectedFile] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const openUploadedFile = () => {
    if (selectedFile) {
      // Create a URL for the selected file
      const fileURL = URL.createObjectURL(selectedFile);

      // Open the file in a new window or tab
      window.open(fileURL);
    } else {
      alert('No file selected. Please choose a file to open.');
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedFormats = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/rtf",
      ];
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (allowedFormats.includes(file.type) && file.size <= maxSize) {
        setSelectedFile(file);
        setErrorMessage("");
      } else {
        setSelectedFile(null);
        setErrorMessage("Invalid file format or size exceeds 2MB.");
      }
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
              <li class="nav-item1">
                <i class="fa-solid fa-bell bellicon"></i>
              </li>
              <li class="nav-item1">
                <Link to="/profile">
                  <i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle "></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="uma120">
      <div class="container" >
        <div class="row">
          <div class="col-sm-12 col-md-4 col-lg-6">
            <div class="profilecardi">
              <div class="d-flex flex-row  ">
                <div>
                  <Link to="/profile">
                    <i
                      class=" fa-sharp fa-solid fa-circle-user profileicon px-3"
                      style={{ fontsize: "120px" }}
                    ></i>
                </Link>
                </div>
                <div>
                  <h5 class="resumeh5">K.umadevi</h5>
                  <p>Software Developer</p>
                  <p>at Perfex Technologies</p>
                </div>
              </div>
              <div class="p-2 mx-3">
                <i class="fa-solid fa-phone-volume px-3 resumeicon"></i>
                <span>6305873533</span>
                <i class="fa-solid fa-circle-check px-3" style={{color: "#1bd051"}}></i>
                <br />
                <i class="fa-solid fa-envelope px-3 resumeicon"></i>
                <span>kavuurumadevi@gmail.com</span>
                <i class="fa-solid fa-circle-check px-3" style={{color: "#1bd051"}}></i>
                <br />
                <i class="fa-solid fa-briefcase px-3 resumeicon"></i>
                <span>2 years</span>
                <br />
                <i class="fa-solid fa-location-dot px-3 resumeicon"></i>
                <span>Hyderabad</span>
                <br />
                <i class="fa-solid fa-money-bill px-3 resumeicon"></i>
                <span>8,00,000 - 12,00,000</span>
                <br />
                <i class="fa-solid fa-calendar-days px-3 resumeicon"></i>
                <span>10 days notice period</span>
              </div>
              <hr />
              <div>
                <p class="spa85 mx-5">Your profile updated</p>
                <button
                  class="spa82 p-1 px-4 mx-5 bg-warning "
                  style={{ borderColor: "yellow", borderRadius: "10px" }}
                >
                  89%
                </button>
                <span class="spa83 mx-3">Add 3 missing details</span>
                <p class="spa84 ">Profile last updated -25feb,2023</p>
              </div>
            </div>
            <div class="mt-2 ">
              <a href="#Resume"><button class="w-75 p-2 mt-2 mx-5 resumebtn shadow">Resume</button></a>
              <a href="#ResumeHeadline"><button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">
                Resume Headline
              </button></a>
             <a href="#ProfileSummary"> <button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">
                Profile Summary
              </button></a>
              <a href="#Keyskills"><button class="w-75 p-2 mt-2 mx-5 resumebtn shadow">
                Key skills
              </button></a>
              <a href="#Employment"><button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">
                Employment
              </button></a>
              <a href="#Education"> <button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">Education</button></a>
              <a href="#Projects"><button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">Projects</button></a>
              <a href="#Accomplishment"><button class="w-75 p-2 mt-2 mx-5 resumebtn shadow">
                Accomplishment
              </button></a>
              <a href="#DesiredcareerProfile"> <button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">
                Desired career Profile
              </button></a>
             <a href="#home"> <button class="w-75 p-2 mt-2 mx-5  resumebtn shadow">
                Personal Details
              </button></a>
            </div>
          </div>
          {/* <!-- 2nd part --> */}

          <div class="col-sm-12 col-md-6 col-lg-6">
            <div class="resumupload p-3 " id="Resume">
              <p>
                <b class="px-2">Resume</b> (Recruiters generally do not look at
                profiles without resumes.)
              </p>
              <hr />
              <div class="resumeUploadbtn">
                <div style={{ marginLeft: "150px" }}>
                  <input
                    type="file"
                    accept=".doc, .docx, .rtx, .pdf"
                    onClick={handleFileChange}
                  />
                  {errorMessage && (
                    <p style={{ color: "red" }}>{errorMessage}</p>
                  )}
                  {selectedFile && (
                    <div>
                      <p>Selected File: {selectedFile.name}</p>
                     
                    </div>
                  )}
                </div>
              </div>
              <p class="resumepara">
                Supported formates : doc,docx,rtf,pdf,upto 2mb{" "}
              </p>
              <button class="resumepara" onClick={openUploadedFile}>Open Uploaded File</button>
            </div>

             
            <div class="resumupload p-4 mt-3" id="ResumeHeadline">
              <div>
                <div class="d-flex flex-row">
                  <h5>Resume Headline</h5>
                  <div style={{ marginleft: "200px" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      style={{ marginLeft: "400px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Resume Headline</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                                Resume Heading
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setheading(e.target.value)}
                                value={heading}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm1(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p>Software Developer currently living in Hyderabad</p>
              </div>
            </div>
            {/* <hr/>
                        <p>Software Developer currently living in Hyderabad</p>
                    </div>
    
                </div> */}

            <div class="resumupload p-4 mt-3" id="ProfileSummary">
              <div>
                <div class="d-flex flex-row">
                  <h5>Profile Summary</h5>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal12"
                      style={{ marginLeft: "400px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal12">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Profile Summary </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                                Profile Summary
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) =>
                                  setProfileSummary(e.target.value)
                                }
                                value={ProfileSummary}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm2(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <p>
                  Software Developer specialist with 3+ years of experience in
                  the management of th complete design process from
                  conceptualization to delivery. Skilled with adobe creative
                  suite (photoshop,illustrator,lightroom,aftereffects,charector
                  Animator,adobeanimate).able to stretch the boundaries of
                  digital story telling to support brands standout.{" "}
                </p>
              </div>
            </div>
            <div class="resumupload p-4 mt-3 " id="Keyskills">
              <div>
                <div class="d-flex flex-row">
                  <h5>Key Skills</h5>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal24"
                      style={{ marginLeft: "450px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal24">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Profile Summary </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                                Profile Summary
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setkeyskils(e.target.value)}
                                value={keyskils}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm3(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="resumegroup px-5">
                  <div>
                  <button class="btnresume ">
                    Photoshop
                  </button>
                  <button class="btnresume ">
                    aftereffects
                  </button>
                  <button class="btnresume">
                    Editing
                  </button>
                  </div>
                  <button class="btnresume ">
                    Adobe XD
                  </button>
                  <button class="btnresume ">
                    Animation
                  </button>
                  <button class="btnresume ">
                    Premire Pro
                  </button>
                </div>
                <div class="resunegroup px-5 mt-2">
                 
                  <button class="btnresume ">
                    Blender
                  </button>
                  <button class="btnresume ">
                    illustrator
                  </button>
                  <button class="btnresume ">
                    Canva
                  </button>
                  <button class="btnresume">
                    Figma
                  </button>
                </div>
              </div>
            </div>
            <div class="resumupload p-4 mt-3 " id="Employment">
              <div>
                <div class="d-flex flex-row">
                  <h5>
                    Employment{" "}
                    <span style={{ fontsize: "small" }}>
                      (Enter your current and previous Employment details)
                    </span>
                  </h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderright: "1px solid gray" }} class="px-5">
                    <h6 class="resumeh6">Software Developer</h6>
                    <p>PerfexTechnologies </p>
                    <p>Fulltime|May 2022 to present (1 year 3 months) </p>
                    <p>1 Month Notice Period</p>
                  </div>
                  <div style={{ marginleft: "auto" }} class="mt-5">
                    <b class="resumeh7 ">+ Add Employment</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="resumupload p-4 mt-3 " id="Education">
              <div>
                <div class="d-flex flex-row">
                  <h5>
                    Education{" "}
                    <span style={{ fontsize: "small" }}>
                      (Enter your qualification details)
                    </span>
                  </h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderright: "1px solid gray" }} class="px-5">
                    <p>Add class x | ADD class XII | Add graduation/Diploma</p>
                    <p>Add masters/Post graduation | Add doctorate/PhD</p>
                  </div>
                  <div style={{ marginleft: "auto" }} class="mt-5">
                    <b class="resumeh7 ">+ Add Education</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="resumuploadp-4 mt-3" id="Projects">
              <div className="resumupload">
                <div class="d-flex flex-row">
                  <h5>Projects</h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderright: "1px solid gray" }} class="px-5">
                    <p>(Add details about projects you have done )</p>
                  </div>
                  <div style={{ marginleft: "auto" }} class="mt-5">
                    <b class="resumeh7 ">+ Add Projects</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="resumupload p-4 mt-3" id="Accomplishment">
              <div>
                <div class="d-flex flex-row">
                  <h5>Accomplishment</h5>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal25"
                      style={{ marginLeft: "320px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal25">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Accomplishment </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Accomplishment
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setAccomplishment(e.target.value)}
                                value={Accomplishment}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm4(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Work Sample</h6>
                    <p>Add links to your projects(e.g. github links etc.)</p>
                  </div>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal26"
                      style={{ marginLeft: "220px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal26">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Work Sample</h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Work Sample
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setWorkSample(e.target.value)}
                                value={WorkSample}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm5(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>White paper/Research publication </h6>
                    <p>Add links to your online publications</p>
                  </div>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal27"
                      style={{ marginLeft: "290px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal27">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">publication </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              publication 
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setpublication(e.target.value)}
                                value={publication}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm6(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Presentation </h6>
                    <p>Add links to your online presentations</p>
                  </div>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal28"
                      style={{ marginLeft: "280px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal28">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Presentation </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Presentation
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setPresentation(e.target.value)}
                                value={Presentation}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm7(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Patent </h6>
                    <p>Add deatails of patents you have filed</p>
                  </div>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal29"
                      style={{ marginLeft: "280px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal29">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Patent </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Patent
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setPatent(e.target.value)}
                                value={Patent}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm8(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div>
                    <h6>Certification</h6>
                    <p>
                      Add details of Certifications you have achieved/completed
                    </p>
                  </div>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal09"
                      style={{ marginLeft: "280px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal09">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Certification </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Certification     
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setCeritifion(e.target.value)}
                                value={Patent}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm9(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="resumupload p-4 mt-3" id="DesiredcareerProfile">
              <div>
                <div class="d-flex flex-row">
                  <h5>Desired career Profile</h5>
                  <div style={{ marginleft: "auto" }}>
                    {" "}
                    <i
                      type="button"
                      class="material-symbols-outlined text-start"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal009"
                      style={{ marginLeft: "280px" }}
                    >
                      edit_square
                    </i>
                    <div class="modal" id="myModal009">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          {/* <!-- Modal Header --> */}
                          <div class="modal-header">
                            <h4 class="modal-title">Desired career Profile </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                            <ToastContainer
                              position="top-right"
                              autoClose={1000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                          </div>

                          {/* <!-- Modal body --> */}
                          <div class="modal-body ">
                            <div>
                              <label className="heading211">
                              Desired career Profile  
                              </label>
                              <br />
                              <textarea
                                name=""
                                id=""
                                cols="50"
                                rows="5"
                                placeholder="Describe here"
                                onChange={(e) => setcareerProfile(e.target.value)}
                                value={careerProfile}
                              ></textarea>

                              {/* <!-- Modal footer --> */}
                              <div class="modal-footer">
                                <button
                                  type="submit"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={(e) => onSubmitForm10(e)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderright: "1px solid gray" }} class="px-5">
                    <h6 class="resumeh6">Desire Industry</h6>
                    <p>IT services & conslting</p>
                    <h6 class="resumeh6">designation</h6>
                    <p>Software developer </p>
                    <h6 class="resumeh6">Desired to shift</h6>
                    <p>Day/night</p>
                  </div>
                  <div class=" px-5">
                    <h6 class="resumeh6">Prefered location</h6>
                    <p>Hyderabad</p>
                    <h6 class="resumeh6">Expected ctc</h6>
                    <p>5,00,000 - 7,00,000</p>
                    <h6 class="resumeh6">Employment type</h6>
                    <p>Full time</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="resumupload p-4 mt-3"id="home">
              <div>
                <div class="d-flex flex-row">
                  <h5>Personal details</h5>
                </div>
                <hr />
                <div class="d-flex flex-row">
                  <div style={{ borderright: "1px solid gray" }} class="px-5">
                    <h6 class="resumeh6">Date Of Birth</h6>
                    <p>06 December 1994</p>
                    <h6 class="resumeh6">Age</h6>
                    <p>25 </p>
                    <h6 class="resumeh6">Gender</h6>
                    <p>Male</p>
                  </div>
                  <div class=" px-5">
                    <h6 class="resumeh6">Marital Status</h6>
                    <p>Single</p>
                    <h6 class="resumeh6">Languages</h6>
                    <p>Telugu,Hindi,English</p>
                    <h6 class="resumeh6">Address</h6>
                    <p>
                      201,plot 82,laxminagar colony,filmnaga
                      <br />
                      hyderabad,telangana-500008
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Resume;
