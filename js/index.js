let form = document.getElementById("github-form")

form.addEventListener('submit', function(e){
    e.preventDefault()

    let search = document.getElementById("search").value //to extract value

    let originalName = search.split(' ').join('')

    document.getElementById("github-container").innerHTML = ""

    //alert(search)
    fetch("https://api.github.com/users/"+originalName)
    .then((results) => results.json())
    .then((data) => {
        console.log(data)
        document.getElementById("github-container").innerHTML - `
        <a attribute= "_blank"href = "https://www.github.com/${originalName}" <img src = "${data.avatar_url}"/>/>`
    })


})