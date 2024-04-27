import { v4 as uuid } from "uuid";

function Role(props) {

    const role = props.role

    return (
        <>
            <div className="col-6">
                <h4 key={role.id}>{role.name}</h4>
            </div>
            <div className="col-6 text-end">
                <h4>{role.from} - {role.to}</h4>
            </div>

            <div className="col-12">
                <ul>
                    {role.description.map(d => <li key={uuid()}>{d}</li>)}
                </ul>
            </div>
        </>
    )

}

export default Role