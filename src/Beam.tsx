import { Point } from "./type"

type BeamProps = {
    start: Point
    end: Point
    color: string
}
export function Beam (beam:BeamProps){

    return (
        <line x1={beam.start.x} y1={beam.start.y} x2={beam.end.x} y2={beam.end.y} stroke={beam.color} />
        
    )
}