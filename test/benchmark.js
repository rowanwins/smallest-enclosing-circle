import {Suite} from 'benchmark'
import smallestEnclosingCircle from '../dist/smallestEnclosingCircle'
import load from 'load-json-file'
import path from 'path'
import bbox from '@turf/bbox'

const fc = load.sync(path.join(__dirname, 'fixtures', 'featureCollection.geojson'))

const modifiedInput = fc.features.map(function (f) {
    return {
        x: f.geometry.coordinates[0],
        y: f.geometry.coordinates[1]
    };
});

// smallest-enclosing-circle x 102,854 ops/sec ±1.19% (91 runs sampled)
// bbox x 449,285 ops/sec ±0.83% (91 runs sampled)
new Suite('100 points')
    .add('smallest-enclosing-circle', () => {
        smallestEnclosingCircle(modifiedInput);
    })
    // .add('bbox', () => {
    //     bbox(fc);
    // })
    .on('cycle', function (event) {
        console.log(event.target.toString());
    })
    .on('error', function (e) {
        throw e.target.error;
    })
    .run()
