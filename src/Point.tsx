import { Point, ReportResult } from "./type"

type PointProps ={
    center: Point
    info:ReportResult
    color: string
    radius: number
}

export function PointClicked (point:PointProps){

    function getInfo ():string {
        if (point.info.isVertex) return 'On vertex'
        if (point.info.isOnEdgeLine) return 'On line'
        if (point.info.isInside) return 'In'
        return 'Out'
    }    
return(<g> 
        <circle cx={point.center.x} cy={point.center.y} fill={point.color} r={point.radius} />
        <text x={point.center.x} y={point.center.y} style={{fontSize:'8px'}}>{getInfo()}</text>
    </g>)
}