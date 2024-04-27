import PropTypes from "prop-types"

function Section(props) {

    return (
        <div className="col-12">
            <h2>{props.title}</h2>
            <hr/>
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string
}

Section.defaultProps = {
    title: "Undefined"
}

export default Section