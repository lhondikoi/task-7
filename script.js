let countries = []

URL = 'https://restcountries.com/v3.1/all'
const http1 = new XMLHttpRequest();
http1.open('GET', URL)
http1.send()
http1.onload = () => {
    if (http1.status === 200) {
        countries = JSON.parse(http1.response)
        // Question 1
        asian_countries = countries.filter(country=>country.region === 'Asia')
        console.log(asian_countries)

        // Question 2
        pop_2_lac = countries.filter(country=>country.population < 200000)
        console.log(pop_2_lac)

        // Question 3
        countries.forEach(country=> {
            console.log(country.name, country.capital, country.flag)
        })

        // Question 4
        let world_pop = countries.reduce((world_pop,country)=>{
            return world_pop + country.population
        }, 0)
        console.log(world_pop)

        // Question 5
        let usd_countries = countries.filter(country=>country.currencies && country.currencies.USD)
        console.log(usd_countries)
    } else {
        console.log("There was an error fetching the data.")
    }
}
