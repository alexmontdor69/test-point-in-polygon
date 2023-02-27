import { polygonVertices } from "./Board"

type ZoneProps={coordinates:polygonVertices}
export function Zone (zone:ZoneProps){
    const coordinates:string= zone.coordinates?.map (coordinate=>`${coordinate.x} ${coordinate.y}`).toString().replaceAll(',', ' ')
    
    return (<>
        <polygon
        points={coordinates}
        fill={'black'}
        fillOpacity={0.3}
        stroke = {'green'}
        strokeWidth={1}
      ></polygon>
    </>)
}