import { ResumePDF } from "./images"; 

const Resume = () => {
   return (
        <div className="col-lg-10 mx-auto text-white mb-4">
            <h3>Front-End Experience</h3>
            <ul style={{
                    listStyleType: "none"
                }}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Git</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Experience</h3>
            <ul style={{
                    listStyleType: "none"
                }}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>MERN Stack</li>
            </ul>
            <p className="text-center">Download my <a href={ResumePDF}>resume</a></p>
        </div>
    );
}
 
export default Resume;