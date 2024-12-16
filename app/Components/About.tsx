import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen text-white lg:px-20 py-20 px-6  md:px-36  flex justify-between items-center lg:flex-row flex-col-reverse gap-x-5 ">
     {/* Content */}
      <div className="lg:w-[50%] w-full lg:text-start text-center py-9">
        <h2 className="md:text-[38px] text-[40px]  font-extrabold py-2 text-orange-700" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">About ME</h2>
        <p className="md:text-xl text-[28px] font-extrabold text-orange-600" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        Hi, I&apos;m Dil Awaiz, a hardworking and passionate individual on the path to becoming a web developer, with a strong interest in technology and creativity. I&apos;m currently expanding my expertise in Next.js and React. I specialize in HTML, CSS, and JavaScript, with growing proficiency in TypeScript. I believe in continuous learning and enjoy working on projects that not only challenge me but also help enhance my skills both technically and creatively.
        </p>
      </div>

      
      {/* Image */}
      <div className="hidden lg:flex justify-center items-center">
          <div className="w-80 h-80 rounded-full shadow-2xl" 
               style={{
                 backgroundImage: "url('/3333.jpg')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}
               data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
               </div>
      </div>
    </div>
  );
};

export default About;