const API_KEY = '6770e2e3c60c1e4470bd746b3a1f04e6';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=ru-RU';

//trending/all/day?api_key=<<api_key>>

const getData = url => fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw `Что-то пошло не так! Ошибка ${response.status}`
    })
    .catch(err => console.error(err));

export const getTriends = async (type = 'all', perio = 'day', page = 1) => {
    const url = `${BASE_URL}trending/${type}/${perio}?api_key=${API_KEY}${LANGUAGE}&page=${page}`
    return await getData(url);
};