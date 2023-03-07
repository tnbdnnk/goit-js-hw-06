const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsUl = document.getElementById("ingredients");

for (const ingredient of ingredients) {
    const ingredientsLi = document.createElement("li");
    ingredientsLi.textContent = ingredient;
    ingredientsLi.classList.add("item");
    ingredientsUl.appendChild(ingredientsLi);
};
