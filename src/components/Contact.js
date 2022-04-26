import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import env from "react-dotenv";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (name === "" && email === "") {
      toast.error("Form is Missing Something.");
    } else if (message.length < 25) {
      toast.error("Message Character Should be more than 25.");
    } else {
      try {
        emailjs.send(
          env.SERVICE_ID_NETLIFY,
          env.TEMPLATE_ID_NETLIFY,
          formData,
          env.API_KEY_NETLIFY
        );
        toast.success("Email Send Successfully.");
      } catch (error) {
        toast.error(`${error.text}`);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <section className="contact" id="contact">
          <div className="form-section">
            <h2>Contact with me</h2>

            <form onSubmit={onSubmit}>
              <div className="first">
                <div className="formLabel">
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>

                <div className="formLabel">
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
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={onChange}
                  id="message"
                ></textarea>
              </div>

              <div className="right-button">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn"
                  type="submit"
                >
                  Send
                </motion.button>
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
                <a
                  href="https://www.facebook.com/iambinod27/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="icons" />
                </a>
                <a
                  href="https://www.instagram.com/iambinod__/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
