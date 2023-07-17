import './App.css'

import { useState } from "react";
import logo from "./pabjobs-logo.png";

function Home() {
    const [selectedType, setSelectedType] = useState("jobseeker")

    console.log(selectedType)
 
    return (
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-light">

<div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} className="logo" style={{width:"250px", paddingleft: "100px"}}/>
    </a>
    <div className="devi d-flex flex-row ">

        <p className="d-none d-md-block">Browse Jobs <i className="fa-solid fa-caret-down"></i></p>


        <p className="d-none d-md-block" style={{marginleft: "20px"}}> Jobs <i className="fa-solid fa-caret-down"></i></p>

    </div>
</div>
</nav>
<div class="bg-container">
        <div class="row">
            <div className="col-12 col-md-1"></div>
            <div class=" col-12 col-md-6">
                <div class="yedookati" style={{borderradius: "20px" }}>

                    <h1 class="heading" >Create an account</h1>
                    <p class="para1 heading" style={{textalign: "center", color:  "#2c0264"}}>It only takes a couple of minutes to
                        get
                        started!</p>
                    <div class="d-flex flex-row buttonreact">
                        <a href="./about"> <button type="button" class="btn1" onclick="Button3()">Login
                            </button></a>

                        <button type="button" class="btn2" id="Sign up" onclick="Button4()"><i
                                class="fa-solid fa-circle-check"></i>Sign UP
                        </button><br/>

                    </div>
                    <div class="d-flex flex-row  buttonreact">
                       
                        <div>
                        <button type="button" class="btn3" id="jobseeker" onclick="Button1()">
                            Job Seekers<input onChange={((e)=> setSelectedType(e.target.value))} type="radio" id="input1" style={{padding: "10px", margin: "20px"}} name="type"   value="jobseeker"/>
                        </button>
                        </div>

                       
                        <div>
                        <button type="button" class="btn4" id="recruiters"  onclick="Button2()">
                            Recruiters<input type="radio" onChange={((e)=> setSelectedType(e.target.value))} id="input2"  style={{padding: "10px", margin: "20px"}} name="type" value=" recruiters" />
                        </button>
                        </div>
                    </div>
                    {selectedType === "jobseeker" ?(
                    <div>
                        <div class="mb-3 mt-3">
                            <label for="Full Name" class="form-label" id="fullname">Full Name</label><br/>
                            <input type="text" class="control w-75" id="email"  style={{padding: "10px"}}
                                placeholder="Enter your full Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="email id" class="form-label">Email ID</label><br/>
                            <input type="text" class="control w-75" id="pwd" style={{padding: "10px"}}
                                placeholder="Enter your Email ID"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label><br/>
                            <input type="password" class="control w-75" id="pwd"  style={{padding: "10px"}}
                                placeholder="Minimum 6 characters" />
                        </div>
                        <label class="form-label">moblie Number</label><br/>

                        <div class="">
                            <select style={{width: "50px" , height: "40px"}}>
                                <option>+91</option>
                            </select>
                            <input type="text" class="control alreadyakkadaundi" style={{padding: "10px"}}
                                placeholder="Enter your moblie number"/>
                        </div>
                        <div class="mb-3" id="gender">
                            <label for="password" class="form-label">Gender</label>
                            <br/>
                            <input type="radio" name="gender" id="genderMale" value="Male" />
                            <label for="genderMale">Male</label>
                            <input type="radio" name="gender" id="genderFemale" value="Female"/>
                            <label for="genderFemale">Female</label>
                            <input type="radio" name="gender" value="perfer not to say"/>
                            <label for="perfer not to say">Perfer Not to say</label>
                        </div>


                        <p><i class="fa-solid fa-square-check" style={{color: "green"}}></i> I would to get lates
                            jobupdates on whatsapp</p>


                        <p> By checking Register you agree to the treams and conditions & privacy polices of pabjobs.com
                        </p>
                        <button type="Register" class="button1">Register Now</button>
                        <div class="devi d-flex flex-row">
                            <p class=" d-md-none">Browser Jobs <i class="fa-solid fa-caret-down"></i></p>
                            <p class=" d-md-none"> Jobs <i class="fa-solid fa-caret-down"></i></p>
                        </div>
                    </div>
                    ):(
                        <div>  
                        <div class="mb-3 mt-3">
                            <label for="Full Name" class="form-label" id="fullname">Company Name</label><br/>
                            <input type="text" class="control w-75" id="email"  style={{padding: "10px"}}
                                placeholder="Enter your company name"/>
                        </div>
                        <div class="mb-3">
                            <label for="email id" class="form-label">Email ID</label><br/>
                            <input type="text" class="control w-75" id="pwd" style={{padding: "10px"}}
                                placeholder="Enter your Email ID"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label><br/>
                            <input type="password" class="control w-75" id="pwd"  style={{padding: "10px"}}
                                placeholder="Minimum 6 characters" />
                        </div>
                        <label class="form-label">moblie Number</label><br/>

                        <div class="">
                            <select style={{width: "50px" , height: "40px"}}>
                                <option>+91</option>
                            </select>
                            <input type="text" class="control alreadyakkadaundi" style={{padding: "10px"}}
                                placeholder="Enter your moblie number"/>
                        </div>
                       


                        <p><i class="fa-solid fa-square-check" style={{color: "green"}}></i> I would to get lates
                            jobupdates on whatsapp</p>


                        <p> By checking Register you agree to the treams and conditions & privacy polices of pabjobs.com
                        </p>
                        <button type="Register" class="button1">Register Now</button>
                        <div class="devi d-flex flex-row">
                            <p class=" d-md-none">Browser Jobs <i class="fa-solid fa-caret-down"></i></p>
                            <p class=" d-md-none"> Jobs <i class="fa-solid fa-caret-down"></i></p>
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div class=" col-12 col-md-4 remove">
                <div class=" card1 d-flex flex-column">
                    <img src="https://img.freepik.com/free-vector/cartoon-businesswoman-working-with-laptop-gesture-pose-clip-art_40876-3410.jpg?w=740&t=st=1688473755~exp=1688474355~hmac=64ec18489a150033b1aa5a5563732988b61d2b536b407124f57d6a936b40606f"
                        alt="pic" class="image2" style={{height: "400px", width: "500px"}} id="img"/>
                    <p class="para4"><i class="fa-solid fa-circle-check" style={{padding: "10px"}}></i> Build your profile
                        and let recruiters
                        find you</p>
                    <p class="para4"><i class="fa-solid fa-circle-check"  style={{padding: "10px"}}></i>Get job posting
                        delivered right to your
                        email</p>
                    <p class="para4"><i class="fa-solid fa-circle-check"  style={{padding: "10px"}}></i> Find a job and grow
                        your career</p>
                </div>
            </div>
        </div>
    </div>

   </div>
    );
  }
  
  export default Home;