fetch ('http://hp-api.herokuapp.com/api/characters/staff').then 
(response =>
response.json()).then 
(harryData).catch (error => {error.message})
console.clear()
function harryData (data) {
    console.log(data[0].name)
    const harryStaffs = data
    const list = document.createElement('ul')
    list.setAttribute('role','list')
    document.body.append(list)


    harryStaffs.forEach (harryStaff  => {
        const listItem = document.createElement('li')
        listItem.className = 'card'
        listItem.innerHTML = `${harryStaff.name}`;
    const staffDetails = document.createElement('dl');
    staffDetails.className = 'details';
    staffDetails.innerHTML = `
      <dt>Species</dt>
      <dd>${harryStaff.species}</dd>
      <dt>Gender</dt>
      <dd>${harryStaff.gender}</dd>
      <dt>House</dt>
      <dd>${harryStaff.house}</dd>
      <dt>Patronus</dt>
      <dd>${harryStaff.patronus}</dd>
      <img src="${harryStaff.image}" alt="">
      `;
      
    listItem.append(staffDetails);
    staffDetails.classList.add('hide');
    list.append(listItem)

    listItem.addEventListener('click', () => {
        staffDetails.classList.toggle('show');
        console.log("hallo")
      })
    })

    
      
    
}
