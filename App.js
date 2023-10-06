import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './about';
import About1 from './about1';
import Footer from './footer';
import Register from './register';
import Home1 from './Home';
import Home2 from './browesjobs';
import Payments from './payments';
import Jobs from './jobs';
import Loginotp from './loginOTP ';
import Getopt from './getotp';
import Forgot from './forgot password';
import Sub from './submit';
import Profile from './profile/profile';
import Applied from './profile/applied';
import Jobalert from './profile/jobalert';
import Jobcategory from './jobecategory';
import JobLocation from './jobloactions';
import Jobcompany from './jobcompanys';
import Changepassword from './profile/changepassword';
import  Savedjobs from './profile/savedjobs';
import Resume from './profile/resume';
import SearchCandidate from './dashbord/searchCandidate';
import Database from './dashbord/database';
import Buyservices from './dashbord/buyservices';
import Jobposting from './dashbord/jobposting';
import Comboproducts from './dashbord/comboproducts';
import Companyprofile from './dashbord/companyprofile';
import PostAjob from './dashbord/post A job';
import Myjob from './dashbord/myjob';
function App() {
 
  return (
    <div className="App">
 <Routes>

  <Route path="/" element={<Register/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/login" element={<About1/>} />
  <Route path="/home" element={<Home1/>}/>
  <Route path="/browesjobs" element={<Home2/>}/>
  <Route path="/pay" element={<Payments/>}/>
  <Route path="/jobs" element={<Jobs/>}/>
  <Route path="/loginotp" element={<Loginotp/>}/>
  <Route path="/getopt" element={<Getopt/>}/>
  <Route path="/forgot" element={<Forgot/>}/>
  <Route path="/sub" element={<Sub/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/applied" element={<Applied/>}/>
  <Route path="/jobalert" element={<Jobalert/>}/>
  <Route path="/jobcategory" element={<Jobcategory/>}/>
  <Route path="/joblocations" element={<JobLocation/>}/>
  <Route path="/joblocompany" element={<Jobcompany/>}/>
  <Route path="/changepassword" element={<Changepassword/>}/>
  <Route path="/savedjobs" element={<Savedjobs/>}/>
  <Route path="/resume" element={<Resume/>}/>
  <Route path="/searchcandidate" element={<SearchCandidate/>}/>
  <Route path="/database" element={<Database/>}/>
  <Route path="/buyservices" element={<Buyservices/>}/>
<Route path='/jobposting' element={<Jobposting/>}/>
<Route path='/comboproducts' element={<Comboproducts/>}/>
<Route path='/companyprofile' element={<Companyprofile/>}/>
<Route path="/postajob" element={<PostAjob/>}/>
<Route path='/myjob' element={<Myjob/>}/>

 </Routes>
 <Footer/>
    </div>
  );
}

export default App;
