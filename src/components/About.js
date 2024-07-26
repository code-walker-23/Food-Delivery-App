import { Component } from "react";
import UserClass from "./UserClass";
// whenver you have jsx in the file you have to import react from react.
// you can slect any name in import of default export but should start with capital letter.

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount Called");
  };

  render() {
    console.log("Parent render called")
    return (
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>
            Discover our journey and what drives us to deliver the best to our
            customers.
          </p>
        </header>

        <section className="about-overview">
          <h2>Company Overview</h2>
          <p>
            Welcome to <strong>Suman Food and Beverages</strong>, your go-to
            destination for delicious and healthy food options. Founded in 2008,
            we have been committed to providing our customers with the finest
            culinary experiences. Our journey began with a simple idea - to make
            good food accessible to everyone.
          </p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a memorable dining experience by offering
            high-quality, diverse, and sustainable food choices. We believe in
            the power of good food to bring people together and make a positive
            impact on the community.
          </p>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <h3>Quality</h3>
              <p>
                We are dedicated to providing the best quality ingredients and
                exceptional service to our customers.
              </p>
            </li>
            <li>
              <h3>Sustainability</h3>
              <p>
                We prioritize sustainable practices in sourcing, production, and
                packaging to protect our planet.
              </p>
            </li>
            <li>
              <h3>Community</h3>
              <p>
                We believe in giving back to the community and supporting local
                initiatives and causes.
              </p>
            </li>
          </ul>
        </section>

        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {
              <UserClass
                name="John Doe"
                designation={"Founder & CEO"}
                image={"team-member1.jpg"}
              />
            }
            {
              <UserClass
                name="Jane Smith"
                designation={"Head Chef"}
                image={"team-member2.jpg"}
              />
            }

            {
              <UserClass
                name="Emily Johnson"
                designation={"Marketing Director"}
                image={"team-member3.jpg"}
              />
            }
            <UserClass
              name="Emily Parkenson"
              designation={"Marketing Director"}
              image={"team-member3.jpg"}
            />
          </div>
        </section>

        <section className="about-contact">
          <h2>Contact Us</h2>
          <p>Have any questions? Feel free to reach out to us!</p>
          <a href="mailto:info@sumanfoods.com" className="contact-button">
            Get in Touch
          </a>
        </section>
      </div>
    );
  }
}

export default About;

// The funcional component must start with capital letter.

/* 
function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Discover our journey and what drives us to deliver the best to our
          customers.
        </p>
      </header>

      <section className="about-overview">
        <h2>Company Overview</h2>
        <p>
          Welcome to <strong>Suman Food and Beverages</strong>, your go-to
          destination for delicious and healthy food options. Founded in 2008,
          we have been committed to providing our customers with the finest
          culinary experiences. Our journey began with a simple idea - to make
          good food accessible to everyone.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a memorable dining experience by offering
          high-quality, diverse, and sustainable food choices. We believe in the
          power of good food to bring people together and make a positive impact
          on the community.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <h3>Quality</h3>
            <p>
              We are dedicated to providing the best quality ingredients and
              exceptional service to our customers.
            </p>
          </li>
          <li>
            <h3>Sustainability</h3>
            <p>
              We prioritize sustainable practices in sourcing, production, and
              packaging to protect our planet.
            </p>
          </li>
          <li>
            <h3>Community</h3>
            <p>
              We believe in giving back to the community and supporting local
              initiatives and causes.
            </p>
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {
            <Ser
              name="John Doe"
              designation={"Founder & CEO"}
              image={"team-member1.jpg"}
            />
          }
          {
            <Ser
              name="Jane Smith"
              designation={"Head Chef"}
              image={"team-member2.jpg"}
            />
          }

          {
            <Ser
              name="Emily Johnson"
              designation={"Marketing Director"}
              image={"team-member3.jpg"}
            />
          }
          <UserClass
            name="Emily Parkenson"
            designation={"Marketing Director"}
            image={"team-member3.jpg"}
          />
        </div>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>Have any questions? Feel free to reach out to us!</p>
        <a href="mailto:info@sumanfoods.com" className="contact-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
}
import UserClass fromUserClass";

export default About;
 */


/* 

Life Cycle of the Class based component:

lifecycle of parent class component and children class component:
1. It will call contructor of parent class component.
2. it will call the render method
3. if we are using a child component inside render method,it will first trigger the lifecycle of the child component and then come to the aprent component.
4. first child componentDidMount(it will execute after the component has been rendered or loaded or mounted onto the web page ) will be called and then parent componentDidMount is called.

*/