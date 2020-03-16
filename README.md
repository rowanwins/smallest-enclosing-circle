# smallest-enclosing-circle
A small module for calculating the smallest circle enclosing a series of points using Welzl's algorithm, runs in O(N) time.

## Install
````
npm install smallest-enclosing-circle
````

## Documentation
Valid inputs: An array of points [{x: 0, y: 0}, {x: 10, y: 10}, {x: 20, y: 20}]
````
    const enclosingCircle = require('smallest-enclosing-circle')

    enclosingCircle([{x: 0, y: 0}, {x: 10, y: 10}, {x: 20, y: 20}])
    // => { x: 10, y: 10, r: 14.142135623730951 }
````
Returns an x, y for the centre of the circle, and a radius.


*Note* - the result is not 100% consistent across runs there seems to be some floating point anomolies, generally these appear to be very minor though.

*Another Note* - calculating a smallest enclosing circle isn't as fast as calculating a bounding box, it's approx 4 times slower. However there are reasons why a bounding circle is helpful :)


## Acknowledgements
This library was based on a java implementation of Welzl's algorithm by [Bastian Molkenthin](http://www.sunshine2k.de/coding/java/Welzl/Welzl.html)
[MIT Licensed](http://www.sunshine2k.de/license.html)

## Further reading
[Wikipedia](https://en.wikipedia.org/wiki/Smallest-circle_problem)

[Original Paper](https://link.springer.com/chapter/10.1007/BFb0038202)
