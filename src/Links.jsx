import Section from "./Section"
import { v4 as uuid } from "uuid"
import PropTypes from "prop-types"

function Links(props) {

    const links = props.links

    return (
        <div className="row mt-5">
            <Section title="Personal projects and links" />
            <div className="col-12">
                <dl>
                    {links.map(item => 
                        <dd key={uuid()}>
                            <a href={item.href} target="_blank">{item.title}</a>: {item.description}
                        </dd>
                    )}
                </dl>
            </div>
        </div>
    )

}

Links.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            href: PropTypes.string
        })
    )
}

Links.defaultProps = {
    links: []
}

export default Links