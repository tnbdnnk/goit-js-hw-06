// скачок в розмірі: 1. отримати дефолтне значення від інпуту value в пікселях,
// 2. додати його в фонтстайл при першому завантаженні сторінки 
// 3. по події інпуту його змінювати 

const inputRangeRef = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

textEl.style.fontSize = inputRangeRef.value + 'px';

inputRangeRef.addEventListener("input", (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
});
