import React, { Key } from "react"
import { motion } from "framer-motion";
import { Technology } from "../typings/typings";

const TechnologyItem = (props: Technology) => {
  return (
    <motion.div 
      whileInView={{ opacity: [0,1], scale:[0, 1.3, 1] }}
      transition={{ type: "tween", duration: 1 , ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-white bg-notion-text-${props.color} bg-notion-text transition-all hover:opacity-90 rounded-md w-fit h-fit mx-1 my-1 px-3`}
    >
      {props.name}
    </motion.div>
  )
}

export default TechnologyItem;