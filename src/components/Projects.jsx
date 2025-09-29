import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="lg:max-w-[70%] sm:max-w-1/2 w-[70%] mx-auto py-12">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
            1024: {
            slidesPerView: 3, // tablet & desktop: 3 cards
            },
        }}
        loop={true}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}