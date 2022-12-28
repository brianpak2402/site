import React, { Key } from "react"
import { motion } from "framer-motion";
import { Technology } from "../typings/typings";

interface ITechItemProps {
  item: Technology,
  index: number,
}

const TechnologyItem : React.FC<ITechItemProps> = ({item, index}: ITechItemProps) => {  
  return (
    <motion.div 
      whileInView={{ opacity: [0, 1], y:[200, 0] }}
      transition={{ type: "tween", duration: (0.7 + (0.1 * index)) , ease: "easeOut" }}
      viewport={{ once: true }}
      className='text-white'
    >
      <div className={`
          transition-all hover:scale-105 rounded-md w-fit h-fit mx-1 my-1 px-3 
          ${item.color === 'red' ? 'bg-notion-text-red' : ""}
          ${item.color === 'orange' ? 'bg-notion-text-orange' : ""}
          ${item.color === 'yellow' ? 'bg-notion-text-yellow' : ""}
          ${item.color === 'green' ? 'bg-notion-text-green' : ""}
          ${item.color === 'blue' ? 'bg-notion-text-blue' : ""}
          ${item.color === 'purple' ? 'bg-notion-text-purple' : ""}
          ${item.color === 'pink' ? 'bg-notion-text-pink' : ""}
          ${item.color === 'brown' ? 'bg-notion-text-brown' : ""}
          ${item.color === 'gray' ? 'bg-notion-text-gray' : ""}
      `}>
        {item.name}
      </div>
    </motion.div>
  )
}

export default TechnologyItem;