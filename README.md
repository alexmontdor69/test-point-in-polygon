# How to determine if a point is inside a polygon

## Start the project
<code>
npm i
npm run dev
</code>

## It's running ...
... You should see a polygon.
By clicking in the browser windows, you will create a purple point.


The computer will create light blue line from a random point to the purple point. It will show in the intersection between the light blue line and the edges of the polygone. Each blue point indicates an intersection.

## how do the computer "know" if the user click inside or outside the polygone?

By counting the number of intersection, he is able to determine if the purple point is inside or not (odd: inside, even : outside).
it Can detect if the user clicked on a vertex or on the edge of the polygon.

## Dependencies
This app uses [this isPointInPolygonJS library](https://github.com/alexmontdor69/isPointInPolygonJS) that i created