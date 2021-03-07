import {instance} from "./api";


// j. vehicles (name, model) +


function getAllStarwarsVehicles() {
    let vehicles = [];

    return instance.get('vehicles/')
        .then(resp => {
            vehicles = resp.data.results;
            return resp.data.count
        })
        .then(count => {
            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
            let promises = [];
            for (let i = 2; i <= numberOfPagesLeft; i++) {
                promises.push(instance.get(`vehicles?page=${i}`));
            }
            return Promise.all(promises);
        })
        .then(response => {
            vehicles = response.reduce((acc, data) => [...acc, ...data.data.results], vehicles);
            let vehiclesObj = {}
            vehicles.forEach(vehicle => {
                vehiclesObj = {
                    ...vehiclesObj,
                    [vehicle.url]: {name: vehicle.name, model: vehicle.model}
                }
            })
            return vehiclesObj
        })
        .catch((e) => console.log(e.message));
}

function getAllStarwarsFilms() {
    return instance.get("films/")
        .then(response => {
            let filmsObj = {}
            response.data.results.forEach(film => {
                filmsObj = {...filmsObj, [film.url]: film.title}
            })
            return filmsObj
        })
        .catch((e) => console.log(e.message));
}


function getAllStarwarsPeople() {
    let people = [];

    return instance.get("people/")
        .then(response => {
            people = response.data.results;
            return response.data.count;
        })
        .then(count => {
            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
            let promises = [];
            for (let i = 2; i <= numberOfPagesLeft; i++) {
                promises.push(instance.get(`people?page=${i}`));
            }
            return Promise.all(promises);
        })
        .then(response => {
            people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
            return people;
        })
        .catch((e) => console.log(e.message));
}

function getAllStarwarsPlanets() {
    let planets = [];

    return instance.get('planets/')
        .then(resp => {
            planets = resp.data.results;
            return resp.data.count
        })
        .then(count => {
            const numberOfPagesLeft = Math.ceil((count - 1) / 10);
            let promises = [];
            for (let i = 2; i <= numberOfPagesLeft; i++) {
                promises.push(instance.get(`planets?page=${i}`));
            }
            return Promise.all(promises);
        })
        .then(response => {
            planets = response.reduce((acc, data) => [...acc, ...data.data.results], planets);
            let planetsObj = {}
            planets.forEach(planet => {
                planetsObj = {...planetsObj, [planet.url]: planet.name}
            })
            return planetsObj
        })
        .catch((e) => console.log(e.message));
}

export const peopleApi = {
    getAllPeople: async () => await getAllStarwarsPeople(),
    getAllPlanets: async () => await getAllStarwarsPlanets(),
    getAllFilms: async () => await getAllStarwarsFilms(),
    getAllVehicles: async () => await getAllStarwarsVehicles()
}
