import { Container, Row, Col, Card } from "../components/Project";
import foodApp from "../assets/images/food-app.png";
import password from "../assets/images/password-generator.png";
import planner from "../assets/images/work-day-planner.png";
import refactor from "../assets/images/code-refactoring.png";
import employee from "../assets/images/Employee-Tracker.png";
import readme from "../assets/images/readme-generator.png";
import vinyl from "../assets/images/Vinyl-Addict.png";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
      <div>
    <Container>
      
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Food App</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={foodApp} alt="food" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Foodist app allows users to find any type of food 
              in any city all over the world.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/FoodApp/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/FoodApp"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>

      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Password Generator</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={password} alt="password" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Password Generator allows users to make a random password
              for any sign up page.  Once on the web page, follow the prompts and 
              your new random password will be generated.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/Password-Generator/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/Password-Generator"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Work Day Planner</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={planner} alt="work-day" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Work Day Planner allows a user to add any work or personal
              related plans.  When they need to see what they have planned, they 
              can see what is on their agenda.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/Work-Day-Planner"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/Work-Day-Plannerp"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Code Refactoring</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={refactor} alt="code" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              This code was refactored for there to be less code,
              therefore, being easier to read.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/code-refactoring-Horiseon"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/code-refactoring-Horiseon"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Employee Tracker</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={employee} alt="tracker" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Employee Tracker app allows for managers to add, delete and 
              update each employee they are in charge of, or any employee
              throughout the company.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/Employee-Tracker"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/Employee-Tracker"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>README Generator</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={readme} alt="readme" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The README Generator allow anyone to create the perfect 
              README for their Github Repositories.
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://stevegekas.github.io/readme-generator"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/readme-generator"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center"><strong><u>Vinyl Addict</u></strong></div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={vinyl} alt="vinyl" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Vinyl Addict app allows vinyl ablum collectors to show
              off their avinyl collection, as well as find recodes they don't
              have and trade to get what they need.
                
            </div>
          </Col>
        </Row>
        <a
          className="btn btn-outline-secondary"
          href="https://salty-harbor-76521.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <a
          className="btn btn-outline-secondary"
          href="https://github.com/SteveGekas/v"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
    </Container>
     <Footer></Footer>
     </div>
  );
};
export default Portfolio;