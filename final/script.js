let recipes = [
    { title: 'Pizza', instructions: 'Mix dough, add toppings, bake' },
    { title: 'Chicken Curry', instructions: 'Heat oil, add chicken, cook, add curry powder' },
    { title: 'Salad', instructions: 'Add lettuce, tomatoes, cucumbers, and dressing' },
    { title:'Aloo Gobi', instructions:'add onions,ginger,garlic,tomato.add spices.cook until veggies are tender'},
    { title:'Palak panner', instructions:'add veggies,cook.blend into puree.add masalas and cream,simmer'}
];

function renderRecipes() {
    let recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    for (let recipe of recipes) {
        let recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipe';

        let title = document.createElement('h2');
        title.className = 'recipe-title';
        title.textContent = recipe.title;

        let instructions = document.createElement('p');
        instructions.className = 'recipe-instructions';
        instructions.textContent = recipe.instructions;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteRecipe(recipe);
        });

        recipeDiv.appendChild(title);
        recipeDiv.appendChild(instructions);
        recipeDiv.appendChild(deleteButton);
        recipeList.appendChild(recipeDiv);
    }
}

function deleteRecipe(recipe) {
    let index = recipes.indexOf(recipe);
    if (index > -1) {
        recipes.splice(index, 1);
    }
    renderRecipes();
}

renderRecipes();