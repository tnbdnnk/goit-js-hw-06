const categoriesUl = document.getElementById("categories");
const categoriesElem = [...categoriesUl.children];
console.log(`Number of categories: ${categoriesUl.childElementCount}`);

categoriesElem.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});



