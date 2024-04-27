import Company from "./Company"
import Section from "./Section"
import { v4 as uuid } from "uuid"
import PropTypes from "prop-types"

function Companies(props) {

    const companies = props.companies

    return (
        <div className="row mt-5">
            <Section title="Professional experience" />
        
            {companies.map(company => 
                <Company key={uuid()} name={company.name} roles={company.roles} />
            )}
        </div>
    )

}

Companies.propTypes = {
    companies: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            roles: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                    description: PropTypes.arrayOf(PropTypes.string),
                    from: PropTypes.string,
                    to: PropTypes.string
                })
            ),
        }
    ))
}

Companies.defaultProps = {
    companies: []
}

export default Companies