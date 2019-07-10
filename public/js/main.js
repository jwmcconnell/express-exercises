fetch('http://localhost:8080/api/v1/dogs')
  .then(res => res.json())
  .then(dogs => {
    const list = document.querySelector('#dogs');
    dogs.forEach(dog => {
      const item = document.createElement('li');
      item.textContent = `Name: ${dog.name}, Age: ${dog.age}, Weight: ${dog.weight}`;
      list.appendChild(item);
    });
  });





