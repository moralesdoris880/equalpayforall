import { useState } from "react";

function NewJob({user}){
    const [jobType, setJobType] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [company, setCompany] = useState("");
    const [salary, setSalary] = useState("");
    const [jobStart, setJobStart] = useState("");
    const [jobEnd, setJobEnd] = useState("");
    const [jobReview, setJobReview] = useState("");

    const[display,setDisplay] = useState(true)
    const[displayrating,setDisplayRating] = useState(false) //false = none  true = block

    function handleRating(e){
        e.preventDefault();
        fetch("/jobinfos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                job_type: jobType,
                job_title: jobTitle,
                company_name: company,
                type_of_payment: salary,
                employment_start: jobStart,
                employment_end: jobEnd,
                job_review: jobReview,
                user_id: user.id,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => {
                setDisplay(!display)
                setDisplayRating(true) 
                });
            } else {
              r.json().then(() => console.log("Job not created :<", user.id));
            }
          });
        
    }
    
    return(
        <div>
            <form>
                <input type="text" placeholder="Job Type" onChange={(e) => setJobType(e.target.value)}></input>
                <input type="text" placeholder="Job Title" onChange={(e) => setJobTitle(e.target.value)}></input>
                <input type="text" placeholder="Company Name" onChange={(e) => setCompany(e.target.value)}></input>
                <input type="text" placeholder="Salary" onChange={(e) => setSalary(e.target.value)}></input>
                <input type="text" placeholder="Job Start MMYYYY" onChange={(e) => setJobStart(e.target.value)}></input>
                <input type="text" placeholder="Job End MMYYYY " onChange={(e) => setJobEnd(e.target.value)}></input>
                <input type="text" placeholder="Job Review " onChange={(e) => setJobReview(e.target.value)}></input>
                <button onClick={handleRating} style={{display: display? "block":"none"}}>Submit</button>
            </form>
            <p style={{display: displayrating? "block":"none"}}>Thank you for submitting!</p>
        </div>
    )
}

export default NewJob;

// t.string "job_type"
// t.string "job_title"
// t.string "company_name"
// t.string "type_of_payment"
// t.integer "employment_start"
// t.integer "employment_end"
// t.text "job_review"