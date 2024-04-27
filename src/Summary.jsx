import {differenceInYears} from "date-fns"
import Section from "./Section"
import { v4 as uuid } from "uuid"

function Summary() {

    const yearsSince2008 = differenceInYears(new Date(), new Date('2008-01-01'))

    return (
        <div className="row mt-5">
            <Section title="Summary" />

            <div className="col-12 text-justify">
                <p>Technology leader with {yearsSince2008}+ years of professional experience working in product development organizations as software engineer, engineering manager and head of engineering. I took the managerial path after ~10 years in software engineering and architecture, and in the last years I have been building and managing cross-functional, co-located and distributed agile product development teams for start-ups/scale-ups and enterprises.</p>
                <p>I like to contribute to the creation and organization of high performing teams based on collaboration, communication and healthy application of Agile principles. I like to be part of and collaborate in creating a work environment where all people can feel safe, listened, belonging, freely contribute and strive for everyone's success while also improving their lives and grow as individuals and professionals.</p>
            </div>
        </div>
    )
}

export default Summary
