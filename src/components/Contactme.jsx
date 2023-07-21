import './Contact.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contactme() {
  return (
    <section id="contact" className="mt-10 mb-10">
      <h1 className="contact-head text-4xl font-bold mb-4 text-center">
        Contact Me
      </h1>
      <p className="mail mb-4 font-xl font-medium text-[#fff] text-center">
        You can also mail me at
        <span className="hover:text-[#60ffd9] flex-col">
          {" "}
          raigautam2004@gmail.com
        </span>
      </p>
      <h3 className="text-center mb-4">OR</h3>
      <div className="social-media space-x-4 max-sm:mb-10">
        <a
          href="https://www.quora.com/profile/GAUTAM-RAI-163"
          className="anchor"
        >
          <i className="fab fa-quora"></i>
        </a>
        <a href="https://twitter.com/GAUTAM_66" className="anchor">
          <i className="fab fa-twitter "></i>
        </a>
        <a href="https://github.com/Gautam-04" className="anchor">
          <i className="fab fa-github "></i>
        </a>
        {/* <FontAwesomeIcon icon="fa-brands fa-hashnode" /> */}
        <a
          href="https://www.linkedin.com/in/gautam-rai-01184324a/"
          className="anchor mr-10"
        >
          <i className="fab fa-linkedin-in "></i>
        </a>
      </div>
    </section>
  );
}
