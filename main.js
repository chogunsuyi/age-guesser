document.querySelector('button').addEventListener('click', displayAge)

function displayAge() {
    const name = document.querySelector('input').value

    fetch(`https://api.agify.io?name=${name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('.ageDisplay').innerText = data.age
        })
        .catch(err => {console.log(err)})
}