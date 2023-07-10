async function fetchRecipe(){
    try{
        const response = await fetch('/recipe/pizza', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        const name = document.getElementById("recipe-name")
        const instructions = document.getElementById("instructions")
        const ingredients = document.getElementById("ingredients")
        name.innerText = data["name"]
        data["instructions"].forEach(element => {
            let li = document.createElement("li")
            li.innerText = element
            instructions.appendChild(li)
        });
        data["ingredients"].forEach(element => {
            let li = document.createElement("li")
            li.innerText = element
            ingredients.appendChild(li)
        });
    } catch(e){
        console.error(e)
    }
}
fetchRecipe()