import Button from "@mui/material/Button";

function HeroSection() {
  return (
    <div className="bg-hero px-25 bg-gray-300 h-full w-full cursor-pointer mx-auto md:mx-150 flex flex-wrap py-10">
      <div className="w-full md:w-6/12 pl-10 flex flex-col justify-center items-center md:items-start lg:items-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Hi, I am</h1>
        <strong className="text-3xl md:text-4xl font-bold mb-2">
          Gautam Rai
        </strong>
        <h3 className="text-lg md:text-xl mb-4">I build for the web.</h3>
      </div>
      <div className="w-full md:w-6/12 pl-5 flex flex-col justify-center items-center md:items-center ">
        <h1 className=" text-2xl md:text-3xl font-bold mb-2">Check My Resume</h1>
        <Button variant="outlined" color="primary">
          Resume
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;