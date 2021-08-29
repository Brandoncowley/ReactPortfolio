import {CodeQuiz, PetPlacer, TeamProfileOutput, WeatherDashboard, WebsiteScreenshot, WorkDayScheduler} from '../images'


const Portfolio = () => {
    return ( 
    <div className="portfolio-content">
    <section id="portfolio" class="gallery bg-dark text-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-md-12 col-lg-12 py-3">
                <h2 class="heading py-2">Portfolio</h2>
                <p>A growing collection of projects that I have worked on</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://desolate-badlands-34327.herokuapp.com/#" target="_blank"rel="noreferrer"><img src={PetPlacer} alt="screenshot of Pet Placer project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Pet Placer<a href="https://github.com/Brandoncowley/PetPlacer/" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://brandoncowley.github.io/FirstAwesomeProject/" target="_blank"rel="noreferrer"><img src={WebsiteScreenshot} alt="screenshot of Activity Selector project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Activity Selector<a href="https://github.com/Brandoncowley/FirstAwesomeProject" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://brandoncowley.github.io/TeamProfileGenerator/" target="_blank"rel="noreferrer"><img src={TeamProfileOutput} alt="screenshot of Team Profile Generator project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Team Profile Generator<a href="https://github.com/Brandoncowley/TeamProfileGenerator" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
            </div>
            <div class="row">
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://brandoncowley.github.io/CodeQuiz/" target="_blank"rel="noreferrer"><img src={CodeQuiz} alt="screenshot of Code Quiz project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Code Quiz<a href="https://github.com/Brandoncowley/CodeQuiz" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://brandoncowley.github.io/WeatherDashboard/" target="_blank"rel="noreferrer"><img src={WeatherDashboard} alt="screenshot of Weather Dashboard project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Weather App<a href="https://github.com/Brandoncowley/WeatherDashboard" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
              <div class="col-md-4 py-3">
                <div class="box"><a href="https://brandoncowley.github.io/WorkDayScheduler/" target="_blank"rel="noreferrer"><img src={WorkDayScheduler} alt="screenshot of Day Planner project" class="img-fluid"/></a></div>
                <p class="project-link text-center pt-2">Work Day Scheduler<a href="https://github.com/Brandoncowley/WorkDayScheduler" target="_blank"rel="noreferrer"><i class="bi bi-github mx-3"></i></a></p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </div>
     );
}
 
export default Portfolio;