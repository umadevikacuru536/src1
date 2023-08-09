

function Jobalert(){
    return(
        <div className="App">
 <div class="container">
        <div class="row">
       
            <div class="col-md-2">
                <div class="card">
                    <i class=" fa-sharp fa-solid fa-circle-user profileicon mb-4 mt-3" style={{fontsize: "200px"}}></i>
                    <a href="profile.html"><button class="p-2 mb-1 profilebutton w-100">Candidate Profile</button></a>
                <a href="resume.html"><button class="p-2 mb-1 profilebutton w-100">Resume</button></a>
                <a href="applied.html"> <button class="p-2 mb-1 profilebutton w-100">Applied Jobs</button></a>
                    <a href="jobalert.html"><button class="p-2 mb-1 profilebutton w-100 active   bg-primary text-white">Job Alerts</button></a>
                        <a href="savedjobs.html"><button class="p-2 mb-1 profilebutton w-100">Saved Jobs</button></a>
                            <a href="changepassword.html"><button class="p-2 mb-1 profilebutton w-100">Change Password</button></a>
                                <a href="loginform.html"><button class="p-2 mb-1 profilebutton w-100">Log Out</button></a>
                </div>

            </div>
        <div className="col-md-2"></div>
            <div class="col-md-7">
                <div class="card profilecard p-4">
                <div class="d-flex flex-row p-4">
                    <h6 class="">Job Alert</h6>
                    <div class="devi d-flex flex-row  ">
                    <h6 class="mt-3 p-2">Sort</h6><br/>
                    <button class="dropdown-toggle  threebutton shadow p-2">Last 3 Days</button>
                </div>
            </div>
            <hr/>
            <div class="text-center">
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.1.1792788615.1688462176&semt=ais" alt="" width="200px"/>
            <h4 class="mb-5">No Applications Found</h4>
             </div>   
                



                </div>
            </div>
        </div>
    </div>

        </div>
    )
}
export default Jobalert;

   


      

















    













