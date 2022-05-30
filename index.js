fetch ('https://rickandmortyapi.com/api/character')
    .then (response => response.json())
    .then(createData)
    .catch (onError)

function createData (data) {
    const allCharacters = data.results
    const list = document.createElement('ul')
    list.setAttribute('role','list')
    document.body.append(list)


    allCharacters.forEach (singleCharacter  => {
        const listItem = document.createElement('li')
        listItem.className = 'card'
        listItem.innerHTML = singleCharacter.name;

        const container = document.createElement('div');
        container.className = "containerCard";
        container.innerHTML = `<img src="${singleCharacter.image}" alt="${singleCharacter.name}" height="150" width="150">`;
        listItem.append(container)
   
    const characterDetails = document.createElement('dl');
    characterDetails.className = 'details';
    characterDetails.innerHTML = `
    
    <div class= "details__item"><dt>Species:</dt><dd>${singleCharacter.species}</dd></div>
    <div class= "details__item"><dt>Gender: </dt><dd>${singleCharacter.gender}</dd></div>
    <div class= "details__item"><dt>Status: </dt><dd>${singleCharacter.status}</dd></div>
    <div class= "details__item"><dt>Origin:</dt><dd>${singleCharacter.origin.name}</dd></div>`;
                 

    container.append(characterDetails);
    container.setAttribute('hidden', true);
    list.append(listItem)

    listItem.addEventListener('click', () => {
       container.toggleAttribute('hidden');
              })
    })  

    
}

function onError(error){
   document.body.innerHTML = `<span class="error"> "Oops, data currently not available" ${error.message}</span>`;
    
  }
