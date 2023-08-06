import React from 'react';
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <Typewriter
              loop
              cursor
              typeSpeed={40}
              deleteSpeed={40}
              delaySpeed={1500}
              words={[
                "Web Development",
                "Web Designing",
                "Frontend Development",
                "Backend Development",
              ]}
            />
  )
}

export default TypewriterEffect;
