import {differenceInYears} from "date-fns"
import Section from "./Section"
import { v4 as uuid } from "uuid"

function Summary() {

    const yearsSince2008 = differenceInYears(new Date(), new Date('2008-01-01'))

    return (
        <div className="row mt-5">
            <Section title="Summary" />

            <div className="col-12 text-justify">
                <p>Technology leader with {yearsSince2008}+ years of experience driving engineering excellence, building high-performing teams, and delivering scalable software solutions. Executive Coach (Escuela Europea de Coaching), customer and business driven, people-centric manager of multicultural, cross-functional, co-located and remote agile development teams for start/scale-ups and enterprises. Track record of aligning technical strategy with business outcomes — enabling market expansion, premium customer acquisition and SOC 2 certification — while building high-trust, high-performing cultures (eNPS 9.29/10).</p>
            </div>
        </div>
    )
}

export default Summary
