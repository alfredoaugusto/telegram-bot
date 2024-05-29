require('dotenv').config()

const axios = require('axios')


//const launchApp = require("./app/Application.js")

//launchApp()


const data = {
    "platform": 198,
    "identifier": "alfredoaugusto.g@gmail.com",
    "password": "@123TecoTico",
    "accepted": [
        "terms",
        "privacy policy"
    ],
    "country_id": 30,
    "landing": "https://exnova.com/pt/",
    "referrer": "https://exnova.com/pt/?experiment_chooseafterregexp=CHOOSE",
    "touch_id": "c04816f5-f438-4080-85a7-dc57d00d7ba8",
    "aff_story": [{
        "aff": "0",
        "afftrack": null,
        "aff_model": null,
        "date": 1716164747203,
        "landing": "/pt/"
    }]
}

axios.post('https://auth.trade.exnova.com/api/v5/users/register', data)
    .then(response => {

        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })