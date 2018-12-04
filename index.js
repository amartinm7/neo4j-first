const settings = require ('./settings.json')
const personService = require ('./service/personService.js')
const fs = require('fs')
const batch = fs.readFileSync('./batch/batch.txt', 'utf8')
console.log('starting...')

const service = new personService(settings)
// service.createTable('Alice')
service.runBatch(batch)
