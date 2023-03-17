class Fetch {
    async getCurrent(input){
        const myKey = "08bee55e6beb57f21a2905a50da44527d50";

        //make request to url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}