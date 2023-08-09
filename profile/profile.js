import { Link } from 'react-router-dom';
import './profile.css';
function Profile(){
    return (
        <div>
 <nav class="navbar navbar-expand-sm navbar-dark shadow">
                <div class="container">
                    <img src="" style={{ width: "200px", paddingleft: "100px", marginLeft: "30px" }} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar"
                        style={{ backgroundcolor: "black" }}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar" style={{ marginleft: "500px" }}>
                        <ul class="navbar-nav" style={{ marginleft: "500px" }}>
                            <li class="nav-item"  style={{marginLeft:"400px"}}>
                                <Link to="/home" style={{ color: "white" }}><a class="nav-link " href="" style={{ color: "black" }}>Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/browesjobs" style={{ color: "white" }}> <a class="nav-link dropdown-toggle" href="/browsejobs" style={{ color: "black" }}>Browse Jobs</a></Link>
                            </li>
                            <li class="nav-item">
                               <Link to="/jobs" style={{ color: "white" }}> <a class="nav-link dropdown-toggle" href="#" style={{ color: "black" }}>Jobs</a></Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link dropdown-toggle" href="#" style={{ color: "black" }}>services</a>
                            </li>
                            <li class="nav-item">
                               <Link to="/pay" style={{ color: "white" }}> <a class="nav-link dropdown-toggle" href="payment.html" style={{ color: "black" }}>payments</a></Link>
                            </li>
                            <li class="nav-item">
                                <i class="fa-solid fa-bell bellicon"></i>
                            </li>
                            <li class="nav-item">
                                <a href="profile.html"><i class=" user fa-sharp fa-solid fa-circle-user  dropdown-toggle bellicon"></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
<div class="container">
    <div class="row">
        <div class="col-md-2">
            <div class="card">
                <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontsize: "200px"}}></i>
                <a href="profile.html"><button class="p-2 mb-1 profilebutton w-75 active text-white" style={{backgroundColor:" rgb(19, 19, 66)"}}>Candidate Profile</button></a>
                <a href="resume.html"><button class="p-2 mb-1 profilebutton w-75">Resume</button></a>
                <a href="applied.html"> <button class="p-2 mb-1 profilebutton w-75">Applied Jobs</button></a>
                    <a href="jobalert.html"><button class="p-2 mb-1 profilebutton w-75">Job Alerts</button></a>
                        <a href="savedjobs.html"><button class="p-2 mb-1 profilebutton w-75">Saved Jobs</button></a>
                            <a href="changepassword.html"><button class="p-2 mb-1 profilebutton w-75">Change Password</button></a>
                                <a href="loginform.html"><button class="p-2 mb-1 profilebutton w-75">Log Out</button></a>
            </div>

        </div>
        <div className='col-md-2'></div>
        <div class="col-md-7">
            <div class="card profilecard p-3">
               <h6 class="profileh5">Basic Information</h6>
               <hr/>
               <label for="" class="profilename mb-1">Name</label>
               <input type="text" placeholder="Enter your full nmae" class="form-control w-100 mb-2" style={{border: "1px solid rgb(19, 19, 66)"}}/>
               <div>
                <p class="profileh5">Experience</p>
                <div className='fresher'>
               <input type="radio" />
               <label for="" class="m-2 fresher">Fresher</label>
                <input type="radio" />
                <label for="" class="m-2">Experienced</label>
                </div>
            </div>
            
                            
               <div class="d-flex flex-row">
                <div class="col-md-4">
                <label for="" class="profileh5 mb-1">State</label><br/>
                <select class="p-2 w-100 profileselect mb-2">
                    <option value="">Select your state</option>
                </select>
            </div>
            <div class="col-md-2">
                 
            </div>
            <div class="col-md-4">
                <label for="" class="profileh5 mb-1">Current location</label><br/>
                <select class="p-2 w-100 profileselect mb-2">
                    <option value="">Select your state</option>
                    <option value=""></option>
                </select>
            </div>
               </div>
               <div class="d-flex flex-row">
                <div class="col-md-4">
                <label for="" class="profileh5 mb-1">Mobile Number</label><br/>
                    <input type="text" name="" id="" placeholder="Enter your mobile number" class="form-control w-100 p-2 profileselect" style={{border: "1px solid rgb(19, 19, 66)"}}/>
            </div>
            <div class="col-md-2">
                 
            </div>
            <div class="col-md-4">
                <label for="" class="profileh5 mb-1">Email</label><br/>
                <input type="text" name="" id="" placeholder="Enter your Email Address" class="form-control w-100 profileselect " style={{border: "1px solid rgb(19, 19, 66)"}}/>
            </div>
               </div>
               <button class=" mt-4  profilebutton1">Update Details</button>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default Profile;






    
    







