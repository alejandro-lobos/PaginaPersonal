import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black ",  text: "black", borderRadius:"100px",  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      
      className={className}
      style={{ ...style, display: "block", background: "black ",  text: "black", borderRadius:"100px", }}
      onClick={onClick}
    />
  );
}

const ProjectCarousel = ({ projects }) => {
  const settings = {
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="flex flex-col justify-center text-center text-3xl md:text-5xl font-bold py-10">
        Proyectos
      </h2>
      <div className="p-12 w-full slider-container">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full h-80 flex flex-col justify-center items-center">
                  <Image
                    src={`/images/${project.name}.jpg`}
                    width={300}
                    height={300}
                    alt={project.name}
                    className="object-cover rounded-t-lg w-full h-full"
                  />
                </div>
                <div className="overflow-hidden  w-full h-24 p-4 rounded-b-lg">
                  <div className="truncate text-lg font-semibold">{project.name}</div>
                  <p className="truncate text-sm">{project.description || "No description available"}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProjectCarousel;

