import React from 'react'
import Elem from "./elem"
interface listprops {
    id : number
    name:string
    img:string
    level:string
  }
export default function Matrix(props:{list:listprops[]}) {
    return (
        <div className="matrix container">
            {props.list.map((elem,index) => <Elem key={index} obj={elem}/>)}
        </div>
    )
}
