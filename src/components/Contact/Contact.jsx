import React from "react";
import "./Contact.css";
import msg from  '../../assets/message.png'
import msg1 from  '../../assets/message1.png'
import call from  '../../assets/call.png'
import location from  '../../assets/location.png'
import darkarow from '../../assets/arow2.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "43ea9056-63e6-4e19-ad74-45b4286f39c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
          <h3>Send us a message <img src={msg} alt="" /></h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li><img src={msg1} alt="" />Contact@GreatStack.dev</li>
            <li> <img src={call} alt="" />+1 123-456-7890</li>
            <li> <img src={location} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
          </ul>
        </div>
        <div className="contact-col">

            <form onSubmit={onSubmit}>

                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
                
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your Mobile Name" required />

                 <label>Write Your Message Here</label>
                <textarea type="text" name="message" rows="6" placeholder="Enter Your Message Name" required />

                <button type="submit"  className='btn dark-btn'>Submit Now <img src={darkarow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
