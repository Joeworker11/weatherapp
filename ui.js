class UI {
    constructor(){
        this.uiContainer = document.querySelector("#content");
        this.city;
    }

    populateUI(data){
        //de-structure vars
        //add them to inner HTML
        //  <h6 class="card-subtitle mb-2 text-muted">Timezone:  ${data.sys.timezone}.</h6>
        this.uiContainer.innerHTML = `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name}</h5>
               
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}.</h6>
                <h6 class="card-subtitle mb-2 text-muted">The wind speed is ${data.wind.speed} and the degree of it is ${wind.deg}.</h6>
                <p class="card-text">Weather conditions are described as: ${data.weather[0].description}</p>
             </div>
        </div>

        `;
    }

    clearUI() {
        this.uiContainer.innerHTML = "";
    }

    saveToLS(data){
        localStorage.setItem("city", JSON.stringify(data));
    }

    getFromLocalStorage(){
        if(localStorage.getItem("city" == null)){
            return this.defaultCity;
        } else {
            this.city = JSON.parse(localStorage.getItem("city"));
        }

        return this.city;
    }
    clearLocalStorage() {
        localStorage.clear();
    }
}