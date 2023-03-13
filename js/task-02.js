const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsUl = document.getElementById("ingredients");

const itemsRef = ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    return item;
});

ingredientsUl.append(...itemsRef);
