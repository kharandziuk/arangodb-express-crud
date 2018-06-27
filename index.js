const { Database, aql }  = require('arangojs');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const db = new Database({
  url: 'http://127.0.0.1:8529',
});
db.useBasicAuth('root', 'password1');

const collection = db.collection('people')
app.use(bodyParser.json())
app.get('/', async (req, res) => {
  const people = await collection.all()
  res.json(people)
})

app.post('/', async (req, res) => {
  const meta = await collection.save({name: 'Max'})
  res.json(meta)
})

async function main() {
  try {
    await collection.get()
  } catch(e) {
    await collection.create();
  }
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}
main()
