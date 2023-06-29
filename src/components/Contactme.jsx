import { Button } from "@mui/material";

function Contactme() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from submitting normally

    // Your email sending logic goes here
    // You can use a library like Nodemailer to send the email from a server-side environment

    // For demonstration purposes, let's log a message to the console
    console.log("Form submitted and email sent to raigautam2004@gmail.com");
  };

  return (
    <div className="flex justify-center">
      <div>
        <h1>Contact Me</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-[50%] mb-6 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out  "
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-[50%]  mb-6 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out flex flex-row "
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-[50%]  mb-6 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out flex flex-row"
        />
        <input
          type="text"
          placeholder="Message"
          className="w-[50%] mb-6 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out flex flex-row"
        />
        <Button type="submit"/>
      </form>
    </div>
  );
}

export default Contactme;
