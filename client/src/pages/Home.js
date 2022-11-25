import { useState, useEffect } from "react";
import Job from "../components/Job";
import { Link } from "react-router-dom";

function Home({user}) {
  const[jobs,setJobs]=useState([])
  const[userjobs,setUserjobs]=useState([])
    
  useEffect(() => {
      fetch("/userjobs").then((r) => {
        if (r.ok) {
          r.json().then((userjobs) => setUserjobs(userjobs));
        }
      });
    }, []);
    
    useEffect(() => {
        fetch("/jobjinfos").then((r) => {
          if (r.ok) {
            r.json().then((jobinfos) => setJobs(jobinfos));
          }
        });
      }, []);


  if(!user)return(
    <div>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Register</button></Link>
    </div>);
  else 
    return (
      <div>
        <p>Welcome Back {user.username}</p>
        <div>
          <p>My Jobs</p>
          <button>Enter New Job</button>
          <div>
            {userjobs.map((userjob) => <Job userjob={userjob} user={user}/>)}
          </div>
        </div>
        <div>
          <p>See New Job Reviews</p>
          <div>
            {jobs.map((userjob) => <Job userjob={userjob} user={user}/>)}
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;