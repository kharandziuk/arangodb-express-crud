(async function() {
  const collection = db.collection('people1')
  try {
  console.log(await collection.get())
  a()
  await collection.create();
  const meta = collection.save({name: 'Max'})
  console.log(meta)
  const now = Date.now();
    const cursor = await db.query(aql`RETURN ${now}`);
    const result = await cursor.next();
    console.log(result)
  } catch (err) { console.log(err) }
})();
