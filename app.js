//classes

const ft = new Fetch();
const ui = new UI();

//adding event listeners

const search = document.querySelector("#searchUser");
const submitButton = document.querySelector("#submit");

submitButton.onclick = function() {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        // calling the UI method
        ui.populateUI(data);
        // calling saveTolS
        ui.saveToLS(data);
    });
};

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = ui.getFromLocalStorage();
    ui.populateUI(dataSaved);
});

