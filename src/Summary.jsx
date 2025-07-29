import {differenceInYears} from "date-fns"
import Section from "./Section"
import { v4 as uuid } from "uuid"

function Summary() {

    const yearsSince2008 = differenceInYears(new Date(), new Date('2008-01-01'))

    return (
        <div className="row mt-5">
            <Section title="Summary" />

            <div className="col-12 text-justify">
                <p>Technology leader with {yearsSince2008}+ years of experience driving engineering excellence, building high-performing teams, and delivering scalable software solutions. Customer and business driven, people-centric manager of multicultural, cross-functional, co-located and remote agile development teams for start/scale-ups and enterprises.</p>
                <p>Currently leading the engineering department — collaborating with Product, Support, HR — where I improved product quality by ~70%, reduced security issues by ~60%, ensured 100% of critical customers’ support requests were handled within 2 hours, while achieving an all-time-high eNPS of 9.23 out of 10</p>
                <p>I like to contribute to the creation and organization of high performing teams based on collaboration, communication and healthy application of Agile principles. I like to be part of and collaborate in creating a work environment where all people can feel safe, listened, belonging, freely contribute and strive for everyone's success while also improving their lives and grow as individuals and professionals.</p>
            </div>
        </div>
    )
}

export default Summary
