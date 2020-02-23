//grab data in genres collection
//asynchronous request
db.collection('genres').get().then((snapshot) => {
  console.log(snapshot.docs);
})
