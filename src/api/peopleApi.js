import {instance} from "./api";

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

export const peopleApi = {
    getAllPeople: async () => await getAllStarwarsPeople()
}
