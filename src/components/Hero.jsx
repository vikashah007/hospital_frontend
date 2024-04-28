// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({title, imageUrl}) => {
  return (
   <>
   <div className="hero container">
   <div className="banner">
     <h1>{title}</h1>
     <p>
       Welcome to SKMC, Muzaffarpur. The Institute runs by Department of
       Higher and Health Department, Government of Bihar. The Institute is
       one of the oldest medical science academic and research center in
       bihar. Its marvelous architecture and spacious class rooms and
       laboratories makes it one of the most sought out and selected medical
       science learning center in bihar.
     </p>
   </div>
   <div className="banner">
   <img src={imageUrl} alt="hero" className="animated-image"/>
   <span>
   <img src="/Vector.png" alt="Vector"/>
   </span>
   </div>
 </div>
   </>
  );
};

export default Hero;
