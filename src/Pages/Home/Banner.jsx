import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/dev-1.jpg"
import team2 from "../../assets/team/dev-2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
           className="max-w-sm rounded-t-[40px] rounded-br-[40px] rounded border-blue-500 border-s-8 border-b-8 shadow-2xl" src={team1}
           animate = {{y: [100, 150, 100]}}
           transition={{duration: 5, repeat: Infinity}}
          />
          <motion.img
           className="max-w-sm rounded-t-[40px] rounded-br-[40px] rounded border-blue-500 border-s-8 border-b-8 shadow-2xl" src={team2}
           animate = {{x: [100, 150, 100]}}
           transition={{duration: 10, delay:5, repeat: Infinity}}
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }} 
            animate={{ scale: 1 , transition: { duration: 4 }}}
            
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#55ff33", "#338dff"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
