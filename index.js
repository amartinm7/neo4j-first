const settings = require ('./settings.json')
const personService = require ('./service/personService.js')
console.log('starting...')
new personService(settings).createTable('Alice')