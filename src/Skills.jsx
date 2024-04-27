import Section from "./Section"
import { v4 as uuid } from "uuid"
import PropTypes from "prop-types"

function Skills(props) {

    const skills = props.skills

    return (
        <div className="row mt-5">
            <Section title="Management and technical skills" />
            <div className="col-12">
                <ul>
                    {skills.map(item => 
                        <li key={uuid()}>{item}</li>  
                    )}
                </ul>
            </div>
        </div>
    )

}

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string)
}

Skills.defaultProps = {
    skills: []
}

export default Skills