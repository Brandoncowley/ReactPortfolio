import { ResumePDF } from "./images"; 

const Resume = () => {
    return ( 
        <>
        <h1>Resume Content Goes Here</h1>
        <a href={ResumePDF} target="_blank" rel="noreferrer"><i class="bi bi-envelope-open mx-3"></i></a>
        </>
     );
}
 
export default Resume;