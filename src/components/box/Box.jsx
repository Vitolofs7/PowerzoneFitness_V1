import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Box.css";

function Box({ course }) {
  return (
    <div className="box-wrapper">
      <FontAwesomeIcon className="box-icon" icon={course.icon} />
      <h4><span>CLASES</span> DE {course.title}</h4>
      <p>{course.description}</p>
    </div>
  )
}

export default Box;