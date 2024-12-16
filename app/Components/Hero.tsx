import React from 'react';

function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundSize: "20%", backgroundPosition: "left 200px top 200px" }}
    >
  
      
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        {/* Profile Picture with Border and Shadow */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="w-80 h-80 rounded-full shadow-2xl" 
               style={{
                 backgroundImage: "url('/444.avif')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}
               data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

          </div>
        </div>
        
        {/* Text Content */}
        <div className="text-orange-700 text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">I,m</p>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Dil Awaiz</p>
            <p data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Malik</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;