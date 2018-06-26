const multipart = require('aws-lambda-multipart-parser');
const fs = require('fs')
const event = require('./mockEvent')

const originBuffer = fs.readFileSync("./baseball-2410657_960_720.jpg")
console.log('originBuffer: ', originBuffer)

const body = multipart.parse(event)
const parsedBuffer = body.test.content
console.log('parsedBuffer: ', parsedBuffer)
