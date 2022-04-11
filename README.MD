
# City trie api call

This is a simple Express helper project to the app [my-weather-ms](https://github.com/fourierz517/my-weather-ms/) 
as it is a react app which has different routing with express.
I deployed it on [heroku](https://city-trie-route.herokuapp.com/).

# Usage

Like an autocomplete input box. Input a string and it would return 10 cities with info having the input as prefix by alphabetical order.

`https://city-trie-route.herokuapp.com/listcites?prefix={your-search-string}`

# Example output

`https://city-trie-route.herokuapp.com/listcities?prefix=vancouver`

`"lat"` and `"lng"` are the latitudes and longitudes of the cities respectively.
`
{ "data":
    [{
        "name":"Vancouver",
        "lng":"-123.11934",
        "lat":"49.24966",
        "countryName":"Canada",
        "countryCode":"CA"
    },
    {"name":"Vancouver",
    "lng":"-122.66149",
    "lat":"45.63873",
    "countryName":"United States",
    "countryCode":"US"
    }]
}
`
