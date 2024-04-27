import Section from "./Section"
import { v4 as uuid } from "uuid"
import PropTypes from "prop-types"

function AdditionalInfo(props) {

    const additional_info = props.additional_info

    return (
        <div className="row mt-5">
            <Section title="Additional information" />
            <div className="col-12">
                <ul>
                    {additional_info.map(item => 
                        <li key={uuid()}>{item}</li>
                    )}
                </ul>
            </div>
        </div>
    )

}

AdditionalInfo.propTypes = {
    additional_info: PropTypes.arrayOf(PropTypes.string)
}

AdditionalInfo.defaultProps = {
    additional_info: []
}

export default AdditionalInfo