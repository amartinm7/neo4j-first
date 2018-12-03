const neo4j = require ('neo4j-driver').v1

class PersonService{
  constructor(settings){
    console.log('hey you...')
    this.driver = this.openConnection(settings)
  }
  getSession(){
    console.log('getSession...')
    return this.driver.session()
  }
  createTable(personName) {
    const self = this
    console.log('createTable...')
    const session = this.getSession()
    const query = `CREATE (a:Person {name: $name}) RETURN a`
    const resultPromise = session.run(query, {name: personName})
    resultPromise.then( result => {
      session.close()
      console.log(`${JSON.stringify(result)}`)
      const singleRecord = result.records[0]
      const node = singleRecord.get(0)
      console.log(`${JSON.stringify(node)}`)
      console.log(node.properties.name)
      self.closeConnection()
    })
  }
  openConnection(settings){
    console.log(`${JSON.stringify(settings)}`)
    return neo4j.driver(settings.uriConnection.bolt,
      neo4j.auth.basic(settings.credentials.user, settings.credentials.password))
  }
  closeConnection(){
    console.log(`closeConnection...`)
    this.driver.close()
  }
}
module.exports = PersonService
