import { Point } from "./type"

type IntersectProps = {
    center: Point
    color: string
}

export function Intersect (intersect:IntersectProps) {
    return (
        <circle cx={intersect.center.x} cy={intersect.center.y} r={1} fill={intersect.color} />
    )
}