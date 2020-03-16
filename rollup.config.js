import {terser} from 'rollup-plugin-terser'

const output = (file, format, plugins) => ({
    input: './src/main.js',
    output: {
        name: 'smallestEnclosingCircle',
        file,
        format,
        exports: 'default'
    },
    plugins
})

export default [
    output('./dist/smallestEnclosingCircle.js', 'umd', []),
    output('./dist/smallestEnclosingCircle.esm.js', 'esm', []),
    output('./dist/smallestEnclosingCircle.min.js', 'umd', [terser()])
]
