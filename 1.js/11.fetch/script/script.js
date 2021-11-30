let data;

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => (data = { ...json }));

setTimeout(() => {
  console.log(data);
  const doc = document.getElementById('data');

  doc.innerHTML = `
  <h1>completed: ${data.completed}</h1>
  <h1>id: ${data.id}</h1>
  <h1>title: ${data.title}</h1>
  <h1>userId: ${data.userId}</h1>
  `;
}, 1000);
