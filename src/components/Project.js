/* a block object detailing a single project
 *   props may contain:
 *     imageFirst (Boolean) (Optional) -> whether it is text + image or image + text
 *     Image (Object) -> Object containing image, imported by parent
 *     imageAlt (String) -> alt for image when image fails to load
 *     summary (String) -> summary of project
 *     learnMore (String) -> url to the organization (may be external or internal)
 */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Project(props) {
  return (
    <div className={"project" + (props.imageFirst ? " reverse" : "")}>
      <div className="info-block">
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
        <Link to={props.learnMore}>
          <div className="learn-more">Learn More<span className="arrow"></span></div>
        </Link>
      </div>
      <img className="image-block" alt={props.imageAlt} src={props.Image}></img>
    </div>
  )
}