import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "stock-prediction-portal",
    category: "Machine Learning / Full-stack",
    tools: "Django, TensorFlow, Jupyter",
    image: "",
    url: "https://github.com/shubhamkhr7693/stock-prediction-portal",
  },
  {
    title: "Retail_Inventory_Management_System",
    category: "Web Application",
    tools: "Django, DRF, React, MySQL",
    image: "",
    url: "https://github.com/shubhamkhr7693/Retail_Inventory_Management_System",
  },
  {
    title: "Movie-Review-System",
    category: "Data / ML",
    tools: "Python, Jupyter Notebook",
    image: "",
    url: "https://github.com/shubhamkhr7693/Movie-Review-System",
  },
  {
    title: "DocuMate",
    category: "Utility / Frontend",
    tools: "JavaScript",
    image: "",
    url: "https://github.com/shubhamkhr7693/DocuMate",
  },
  {
    title: "Stock-prediction-with-Django-Next",
    category: "Full-stack / ML",
    tools: "Django, Next.js, LSTM",
    image: "",
    url: "https://github.com/shubhamkhr7693/Stock-prediction-with-Django-Next",
  },
  {
    title: "portfolio",
    category: "Web",
    tools: "React, GSAP, Three.js",
    image: "",
    url: "https://github.com/shubhamkhr7693/portfolio",
  },
  {
    title: "Flutter-ToDo-App",
    category: "Mobile",
    tools: "Flutter, Dart",
    image: "",
    url: "https://github.com/shubhamkhr7693/Flutter-ToDo-App",
  },
  {
    title: "Restaurant_Menu_QR_Generator",
    category: "Utility",
    tools: "Python",
    image: "",
    url: "https://github.com/shubhamkhr7693/Restaurant_Menu_QR_Generator",
  },
  {
    title: "ai-code-reviewer",
    category: "AI / Tooling",
    tools: "Python",
    image: "",
    url: "https://github.com/shubhamkhr7693/ai-code-reviewer",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                            data-cursor="disable"
                          >
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
