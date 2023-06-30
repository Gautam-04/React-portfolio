import { Button } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Contactme = ({ data }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const email = "raigautam2004@gmail.com";

  console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${subject}&body=Name: ${name}%0D%0A%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full cursor-pointer mx-auto md:mx-150 flex flex-wrap py-10">
      <div className="w-full md:w-6/12 pl-10 flex flex-col justify-center items-center md:items-start lg:items-center">
        <h1>Contact Me</h1>
      </div>
      <div className="bg-slate-500 w-full mb-3 md:w-6/12 pl-5 flex flex-col justify-center items-center md:items-center">
        <form>
          <input
            value={name}
            type="text"
            placeholder="Name"
            name="name"
            className="w-full py-2 mb-3 mt-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="w-full py-2 mb-3 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out flex flex-row"
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            value={message}
            type="text"
            placeholder="Message"
            name="message"
            className="w-full py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out flex flex-row"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button className="bg-red-400" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contactme;
