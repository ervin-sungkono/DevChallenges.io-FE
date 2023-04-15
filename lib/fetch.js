const BASE_URL = "https://quote-garden.onrender.com/api/v3"

export async function getRandomQuote(){
    const quote = fetch(`${BASE_URL}/quotes/random`)
        .then(res => res.json())
        .catch(error => console.log(error))
    return quote
}

export async function getAuthorQuotes(author, page = 1) {
    const quotes = fetch(`${BASE_URL}/quotes?author=${author}&page=${page}`)
        .then(res => res.json())
        .catch(error => console.log(error))
    return quotes
}