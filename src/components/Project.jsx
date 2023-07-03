import  { Component } from "react";
import { CarouselData } from "../projects";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
      isMobile: window.innerWidth <= 640, // Check if the screen width is less than or equal to 640px (mobile breakpoint)
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.state.paused) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 640;
    this.setState({ isMobile });
  };

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    const { currentSlide, isMobile } = this.state;

    const displayedProjects = isMobile
      ? [CarouselData[currentSlide]]
      : CarouselData.slice(currentSlide, currentSlide + 3);

    return (
      <div className="mt-8">
        <div className="max-w-lg h-72 flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {displayedProjects.map((project, index) => {
              return (
                <img
                  src={project.image}
                  alt={project.description}
                  key={index}
                  className={
                    index === 0 ? "block w-full h-auto object-cover" : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((project, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
