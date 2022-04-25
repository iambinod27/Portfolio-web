import { useState } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // message: "",
  });

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <section className="contact">
          <div className="form-section">
            <h2>Contact with me</h2>
            <form onSubmit={onSubmit}>
              <div className="first">
                <div className="formLabel">
                  {/* <label>Name:</label> */}
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>

                <div className="formLabel">
                  {/* <label>Email:</label> */}
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    id="email"
                  />
                </div>
              </div>

              <div className="Message">
                {/* <label>Message</label> */}
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={onChange}
                  id="message"
                ></textarea>
              </div>

              <div className="right-button">
                <Button text="Send" />
              </div>
            </form>
          </div>
          <div className="Info-section">
            <div className="info">
              <div className="infos">
                <h4>Email</h4>
                <p>Binodtamang947@gmail.com</p>
              </div>
              <div className="infos">
                <h4>Telephone</h4>
                <p>+977-9849160601</p>
              </div>
              <div className="infos">
                <h4>Address</h4>
                <p>Kathmandu, Nepal</p>
              </div>
              <div className="infos">
                <h4>Social</h4>
                <FaFacebook className="icons" />
                <FaTwitter className="icons" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
