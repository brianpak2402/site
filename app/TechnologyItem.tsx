import React from "react"
import { Technology } from "../typings/typings";

const TechnologyItem = (props: Technology) => {
  return (
    <div className={`text-white bg-notion-text-${props.color} bg-notion-text transition-all hover:opacity-90 rounded-md w-fit h-fit mx-1 my-1 px-3`}>
      {props.name}
    </div>
  )
}

export default TechnologyItem;