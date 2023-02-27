
import React, { useEffect, useRef, useState } from "react"
import { Beam } from "./Beam"
import { Intersect } from "./Intersect"
import { isPointInPolygon } from "./module"
import { PointClicked } from "./Point"
import { ErrorResult, Point, polygonVertices, ReportResult } from "./type"
import { Zone } from "./Zone"


export function Board (){
    const [point, setPoint] = useState<{center: Point, info: ReportResult}> ()
    const [beam, setBeam] = useState<Point> ()
    const [intersects, setIntersects] = useState<Point[]> ()

    const viewBox=`0 0 150 150`
    const polygons: polygonVertices[] = [[
        {x:10, y:10},
        {x:10, y:30},
        {x:20, y:50},
        {x:80, y:50},
        //{x:7, y:30},
        {x:100, y:30},
        {x:80, y:10}
    ]]

    const board = useRef<SVGSVGElement>(null)

    const handleLeftClick = (e: React.MouseEvent<SVGSVGElement>):void=>{
        e.preventDefault
        let point = board.current?.createSVGPoint();
        if (point===undefined) return
        point.x = e.clientX
        point.y = e.clientY
        let { x, y } = point.matrixTransform(board.current?.getScreenCTM()?.inverse());
        x=Math.round (x)
        y=Math.round (y)
        // beam calculation
        // Intersect calculation
        const result:ReportResult|ErrorResult=isPointInPolygon({pointP:{x,y},polygonVertices:polygons[0]})
        if (result.code==='err') return
        const {isInside, isVertex, isOnEdgeLine}= result
        setPoint(()=>({center:{x,y}, info:{code:'ok',isInside, isVertex, isOnEdgeLine}}))
        if (result.beam) setBeam(()=>({x:0, y:result?.beam?.b!}))
        if (result.intersectPoints) setIntersects(()=>[... result.intersectPoints!])
    }
    

    return(<>

        <svg
              width={window.innerWidth}
              height={window.innerHeight}
              viewBox={viewBox}
              onClick={handleLeftClick}
              ref = {board}
            >
                {polygons.map ((polygon,index)=><Zone key={`polygon${index}`}coordinates={polygon} />)}
                {beam&&point?<Beam start={beam} end={point.center} color={'lightblue'}/>:<></>}
                {intersects&&point?intersects?.map((intersect,index)=><Intersect key={`I${index}`} center={intersect} color={'blue'}/>):<></>}
                {point?<PointClicked radius={.5} color={'purple'} {... point}/>:<></>}

        </svg>
    </>)
}