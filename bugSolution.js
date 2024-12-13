The corrected code uses a promise to ensure the data is fetched before accessing it:

```javascript
// Correct asynchronous data handling
db.ref('users').once('value').then((snapshot) => {
  const userData = snapshot.val();
  console.log(userData.name); // Now this will work correctly
}).catch((error) => {
  console.error('Error fetching data:', error);
});

console.log('This line executes before data is fetched'); //This will execute before the data is fetched from the server
```
Alternatively, you can use async/await for cleaner code:

```javascript
// Using async/await
async function fetchData(){
  try{
    const snapshot = await db.ref('users').once('value');
    const userData = snapshot.val();
    console.log(userData.name);
  }catch(error){
    console.error('Error fetching data:', error);
  }
}
fetchData();

console.log('This line executes before data is fetched'); //This will execute before the data is fetched from the server
```
This ensures that the code waits for the data to be retrieved before accessing it, preventing errors.