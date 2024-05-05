// API Constant Value
const geoBaseURL = 'https://secure.geonames.org/searchJSON?q='
const geoApiKey = 'quangtn14'
const weatherBitBaseURL = 'https://api.weatherbit.io/v2.0/forecast/daily'
const weatherBitApiKey = '723118fb280a46d5bc650aaaa26b3479'


const getGeoName = async (searchName) => {
    const res = await fetch(geoBaseURL + searchName + "&username=" + geoApiKey)
    try {
        let result = res.json()
        if (result.length > 0) {
            let first = result[0]
            return {
                lat: first.lat,
                lon: first.lng,
                country: first.countryName,
                city: first.toponymName
            }
        } else {
            throw new Error("No data found")
        }
    } catch (exception) {
        console.log("Error while call API get GEONAME: ", exception)
    }
}

const getWeatherInfo = async (lat, lon, date) => {

    const res = await fetch(`${weatherBitBaseURL}?lat=${lat}&lon=${lon}&key=${weatherBitApiKey}` + searchName + "&username=" + geoApiKey)

}

const calculateDaysNeedToRetrieve = (date) => {
    let date = new Date(date)
}