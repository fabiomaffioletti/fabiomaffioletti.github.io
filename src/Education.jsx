import Section from "./Section"
import { v4 as uuid } from "uuid"
import PropTypes from "prop-types"

function Education(props) {

    const education = props.education

    return (
        <div className="row mt-5">
            <Section title="Education and courses" />
            
            <div className="col-12">
                <dl>
                    {education.map(item => 
                        <dd key={uuid()}><strong>{item.name}</strong> – {item.description}, {item.date}</dd>  
                    )}
                </dl>
            </div>
        </div>
    )

}

Education.propTypes = {
    education: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            description: PropTypes.string,
            date: PropTypes.string
        }
    ))
}

Education.defaultProps = {
    education: []
}

export default Education