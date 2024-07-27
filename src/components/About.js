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



/* 

This is an optimization for react.

when there is multiple class based child component so react will batch render phase of all the child component and then commit phase of all the child component happen together in one go.

https://medium.com/codex/the-lifecycle-of-a-react-component-8e01332a068d

why we batch render phase of all the components together?
- because react want to minimize the number of dom manipulation.
- if we render the component one by one then it will cause multiple dom manipulation which is not good for performance.
- so react will batch the render phase of all the child component and then commit phase of all the child component happen together in one go.
- this is called batch rendering.
- this is the reason why we see the console log of all the child component first and then parent component.


- After rendering the component, react will call the componentDidMount method of all the child component and then parent component.
- DOM Update in Single Batch: React will update the DOM in a single batch. This means that if there are multiple updates to the DOM, React will batch them together and update the DOM in a single go. This is done to minimize the number of DOM manipulations and improve performance.

- React will batch the render phase of all the child component and then commit phase of all the child component happen together in one go.

*/