import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_55o7nlk", 
        "template_nb36qpm", 
        form.current,
        "SlYxVt9YWoSFpxLWG" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          console.error(error.text);
        }
      );
  };

  const contacts = {
    phone: "+91 7306788989",
    email: "nandumahesh2004@gmail.com",
    social: [
      {
        name: "GitHub",
        icon: <FaGithub />,
        link: "https://github.com/ExPLICIT-27",
        color: "#6e5494",
      },
      {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/nandumahesh/",
        color: "#0077b5",
      },
      {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com/_paysam________",
        color: "#e4405f",
      },
    ],
    coding: [
      {
        name: "LeetCode",
        icon: <SiLeetcode />,
        link: "https://leetcode.com/u/ExPLICIT_27/",
        stats: "450+ Problems",
      },
      {
        name: "CodeChef",
        icon: <SiCodechef />,
        link: "https://www.codechef.com/users/explicit_27",
        stats: "1500+ Rating",
      },
    ],
  };

  return (
    <section id="Contact" className="Contact">
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>{contacts.phone}</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>{contacts.email}</span>
          </div>
        </div>

        <div className="social-links">
          {contacts.social.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              style={{ "--hover-color": platform.color }}
            >
              {platform.icon}
            </a>
          ))}
        </div>

        <div className="coding-profiles">
          {contacts.coding.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-profile"
            >
              <div className="profile-icon">{profile.icon}</div>
              <div className="profile-info">
                <span className="platform-name">{profile.name}</span>
                <span className="platform-stats">{profile.stats}</span>
              </div>
            </a>
          ))}
        </div>

        {/* EmailJS Form */}
        <div className="email-form">
          <h3 className="form-title">Send Me a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit" className="form-button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
