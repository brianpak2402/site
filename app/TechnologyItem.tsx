import React from "react"
import { Technology } from "../typings/typings";

const TechnologyItem = (props: Technology) => {
  return (
    <div className='text-white bg-notion-text-purple transition-all hover:opacity-90 rounded-md w-fit h-fit mx-1 my-1 px-3 '>
      <div className={`bg-notion-text-${props.color}`}>
        {props.name}
      </div>
    </div>
  )
}

export default TechnologyItem;