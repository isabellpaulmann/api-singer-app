fetch ('https://rickandmortyapi.com/api/character').then 
(response =>
response.json()).then 
(rmData).catch (error => {error.message})

function rmData (data) {
    console.log(data)
    const rmCharacters = data.results
    const list = document.createElement('ul')
    list.setAttribute('role','list')
    document.body.append(list)


    rmCharacters.forEach (rmCharacter  => {
        const listItem = document.createElement('li')
        listItem.className = 'card'
        listItem.innerHTML = `${rmCharacter.name}`;
    const characterDetails = document.createElement('dl');
    characterDetails.className = 'details';
    characterDetails.innerHTML = `
    <img src="${rmCharacter.image}" alt="${rmCharacter.name}" height= "auto" width= "130px">
    <dt>Species: ${rmCharacter.species}</dt>
          <dt>Gender: ${rmCharacter.gender}</dt>
           <dt>Status: ${rmCharacter.status}</dt>
           <dt>Origin: ${rmCharacter.origin.name}</dt>
                 `;
                 

    listItem.append(characterDetails);
    characterDetails.classList.add('hide');
    list.append(listItem)

    console.log('HAllo');
    listItem.addEventListener('click', () => {
        characterDetails.classList.toggle('show');
              })
    })  
}
