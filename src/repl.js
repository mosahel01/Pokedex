const { createInterface } = require('node:readline')

const startREPL = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> ',
})
