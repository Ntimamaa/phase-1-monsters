function fetchMonsters(f) {
    fetch('http://localhost:3000/monsters')
      .then(resp => resp.json())
      .then(f);
  }
  
  function displayMonsters(monsters) {
    monsters.forEach(monster => {
      const h2 = document.createElement('h2');
      const h4 = document.createElement('h4');
      const p = document.createElement('p');
  
      h2.textContent = monster.name;
      h4.textContent = `Age: ${monster.age}`;
      p.textContent = `Bio: ${monster.description}`;
  
      document.querySelector('#monster-container').appendChild(h2);
      document.querySelector('#monster-container').appendChild(h4);
      document.querySelector('#monster-container').appendChild(p);
    });
  }
  
  fetchMonsters(displayMonsters);

  function createForm(){
    const nameEnter =document.createElement('input')
    nameEnter.id = 'name'
    nameEnter.placeholder = 'name'
    const ageEntry =document.createElement('input')
    ageEntry.id = 'age'
    ageEntry.placeholder = 'age'
    const descriptionEntry =document.createElement('input')
    descriptionEntry.id = 'description'
    descriptionEntry.placeholder = 'description'
    const submitButton = document.createElement('button')
    submitButton.id = 'submit'
    submitButton.innerText = 'create'

    document.querySelector('#create-monster').appendChild(nameEnter);
    document.querySelector('#create-monster').appendChild(ageEntry);
    document.querySelector('#create-monster').appendChild(descriptionEntry);
    document.querySelector('#create-monster').appendChild(submitButton);
}
fetchMonsters(createForm)

function addMonster() {
    document.querySelector('#submit').addEventListener('click', (event) => {
      event.preventDefault();
  
      const name = document.querySelector('#name').value;
      const age = document.querySelector('#age').value;
      const description = document.querySelector('#description').value;
  
      const monsterData = {
        name: name,
        age: parseInt(age),
        description: description
      };
  
      fetch('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(monsterData)
      })
        // .then(resp => resp.json())
        // .then(data => {
        //   console.log('Monster added:', data);
        // })
        // .catch(error => {
        //   console.log('Error:', error);
        // });
    });
  }
  
  fetchMonsters(addMonster);
  