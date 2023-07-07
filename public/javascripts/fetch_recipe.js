/*async function fetchRecipe(){
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
        const ingridients = document.getElementById("ingridients")
        name.innerText("Name: pizza")
        data["instructions"].forEach(element => {
            instructions.appendChild("<li>${element}</li>")
        });
        data["ingridients"].forEach(element => {
            ingridients.appendChild("<li>${element}</li>")
        });
    } catch(e){
        console.error(e)
    }
}
fetchRecipe()*/