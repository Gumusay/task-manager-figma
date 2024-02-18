
const dialog = document.getElementById("dialog");
const newBtn = document.querySelector(".new-btn");
const newTaskButton = document.querySelector(".new-task-button");
const newTaskBtn = document.querySelector(".new-task-btn");


const closeBtn = document.querySelector(".close-btn");

function openDialog() {
    dialog.style.display = "block";
}

function closeDialog() {
    dialog.style.display = "none";
}

// Dialog açma butonuna tıklanınca dialog açılsın
newBtn.addEventListener("click", openDialog);
newTaskButton.addEventListener("click", openDialog);
newTaskBtn.addEventListener("click", openDialog);

// Kapatma butonuna tıklanınca dialog kapatılsın
closeBtn.addEventListener("click", closeDialog);


const optionsBtn = document.getElementById('dialog-dot-menu-btn');
const optionsDialog = document.getElementById('optionsDialog');
const optionsSelect = document.getElementById('optionsSelect');
const confirmOptionBtn = document.getElementById('confirmOptionBtn');
const selectedOptionDiv = document.getElementById('selectedOption');


optionsBtn.addEventListener('click', () => {
    optionsDialog.showModal();
});

confirmOptionBtn.addEventListener('click', () => {
    const selectedOption = optionsSelect.value;
    selectedOptionDiv.textContent = `SEÇİLEN SEÇENEK: ${selectedOption}`;
    optionsDialog.close();
});




const notInput = document.getElementById('notInput');
const kaydetBtn = document.getElementById('kaydetBtn');
const notlarDiv = document.getElementById('notlar');

kaydetBtn.addEventListener('click', () => {
    const not = notInput.value;
    if (not.trim() !== '') {
        notlarDiv.innerHTML += `<p>${not}</p>`;
        dialog.close();
        notInput.value = '';
    }
});