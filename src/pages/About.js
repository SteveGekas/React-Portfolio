import React from "react";
import { Container, Row, Col, Card } from "../components/Project";
import img from "../assets/images/self.jpg"
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Container>
        <Card>
          <Row>

            <Col size="md-6">
              <img className="card-img" src={img} alt="bio" />
            </Col>

            <Col size="md-6">

              <div className="card-body">
                <Row>

                  <div class="col-md-12">
        <p>
            Hello, my name is Steve Gekas. First of all, I would like to thank you for visiting my personal website. I
            grew up in Delaware County, which is close to Philadelphia, Pennsylvania. I currently live 15 minutes
            outside of Philadelphia, in a borough called Swarthmore. I live here with my amazing wife, Bridget and two
            sons, Alex and Timmy. Completing our family is our 7 year old Pit Bull, Bailey. In my free time I enjoy
            spending time with my family. When I am not doing that, I enjoy gaming, hanging out with my childhood
            friends. (Yes, the 4 of us are all still very close!)
        </p>
        <p>
            I first became interested in technology because of the home gaming consoles. The first console I remember
            having was the ColecoVision. I was a little too young to have that for myself, instead it was a
            present for my brother. I remember him teaching me how to play and even allowing me to play with him even
            though I was five years younger than him, and at that age there is a big difference in characteristics. Back
            in the 80s when I was growing up, computers were very expensive and my family could not afford one for us.
            It was not until high school where I was able to actually own one. I enjoyed messing around with my computer
            and trying to learn how it worked. I never took it apart because I knew it was something my parents were
            striving to get us. When I finished high school, I did not know what career path I wanted to take. I decided
            to go into teaching because why not, the summers and holidays off sounded amazing. It turns out that is not
            where my path took me. After college, I did not get a job in the public or private school system, but in a
            Pre-school setting where I taught Pre-K for over 7 years. Getting older and getting more serious with my now
            wife, I did not desire teaching children and then come home to children of my own. I enrolled in an online
            college where I graduated with a degree in web game development. About 4 years after that I enrolled in a
            bootcamp to hone my skills and learn new ones as a developer. That is where I currently am right now.
        </p>
    </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>

      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Home;