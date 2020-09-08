export function getPeople() {
    return fetch(`${process.env.api_url}/meatbar/people`)
        .then(response => response.json())
}

export function getBarTypes() {
    return fetch(`${process.env.api_url}/meatbar/bar-types`)
        .then(response => response.json())
}

export function getConsumption() {
    return fetch(`${process.env.api_url}/meatbar/consumption`)
        .then(response => response.json())
}