const settings = require ('./settings.json')
const personService = require ('./service/personService.js')
console.log('starting...')

const service = new personService(settings)
service.createTable('Alice')
