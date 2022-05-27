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
        listItem.innerHTML = `${data[0].name}`
        list.append(listItem)
    })

}
