import welzls from '../src/main.js'
import test from 'ava'
import load from 'load-json-file'
import path from 'path'

const fc = load.sync(path.join(__dirname, 'fixtures', 'featureCollection.geojson'))
const modifiedInput = fc.features.map(function (f) {
    return {
        x: f.geometry.coordinates[0],
        y: f.geometry.coordinates[1]
    }
})

const clonedInput = JSON.stringify(modifiedInput)

test('input is not modified', (t) => {
    welzls(modifiedInput)
    t.deepEqual(JSON.parse(clonedInput), modifiedInput)
})

function difference (a, b) { return Math.abs(a - b) }

// Because Welzls algorithm shuffles and brnach splits you don't get exact results
test('large input', (t) => {
    const result = welzls(modifiedInput)
    t.truthy(difference(result.x, -3.876776695750838) < 0.000001)
    t.truthy(difference(result.y, -0.801888323189397) < 0.000001)
    t.truthy(difference(result.r, 183.01754627618243) < 0.000001)
})


test('small input', (t) => {
    const result = welzls([{x: 0, y: 0}, {x: 10, y: 10}, {x: 20, y: 20}])
    t.is(result.x, 10)
    t.is(result.y, 10)
    t.is(result.r, 14.142135623730951)
})
