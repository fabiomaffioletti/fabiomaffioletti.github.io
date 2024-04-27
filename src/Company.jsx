import Role from "./Role"
import { v4 as uuid } from "uuid";

function Company(props) {

    return (
        <>
            <h3 className="mt-2">{props.name}</h3>
            {props.roles.map(role => 
                <Role key={uuid()} role={role} />
            )}
        </>
    )
}

export default Company