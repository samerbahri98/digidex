import React from 'react'
interface listprops {
  id : number
  name:string
  img:string
  level:string
}
export default function Elem(props:{obj:listprops}) {
    return (
        <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={props.obj.img}
              alt="Image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.obj.name}</p>
              <p className="subtitle is-6">{props.obj.level}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
