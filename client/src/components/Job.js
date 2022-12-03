function Job({userjob, user}){
    return(
        <div>
            <p>{userjob.job_title}</p>
            <p>{userjob.job_type}</p>
            <p>{userjob.company_name}</p>
            <p>{userjob.job_review}</p>
        </div>
    )
}

export default Job;