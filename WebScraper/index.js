const { stdin, stdout } = require('process')
const assert = require('assert')
const crawler = require('crawler')
const chalk = require('chalk')
var D = new Date()
const mongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'ScrapeResults'
mongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
, function (_err, client) {
  assert.strictEqual(null, _err)
  console.log('Connected to Mongo!')
  const dataBase = client.db(dbName)
})

const readline = require('readline')
const { join } = require('path')
const rl = readline.createInterface({
  input: stdin,
  output: stdout
})
rl.question('What is your search term?', (searchTerm) => {
  rl.question('What websites would you like to scrape?', (queue1, queue2, queue3) => {
    queue1 = ''
    queue2 = ''
    queue3 = ''
    searchTerm = join(' ')
    const c = new crawler({
      callback: function (_err, res, res2, res3, done, dataBase) {
        if (_err) {
          console.log(chalk.red(`WARNING: ${_err}`))
        } else {
          c.queue([queue1, queue2, queue3])
          const insertDocs = function (dataBase, callback) {
            const collection = dataBase.collection(`Search Results on ${D}`)
            collection.insertMany([
              { SearchResult1: { res } }, { SearchResult2: { res2 } }, { SearchResult3: { res3 } }

            ])
            done()
          }
        }
      }
    })
  })
})
