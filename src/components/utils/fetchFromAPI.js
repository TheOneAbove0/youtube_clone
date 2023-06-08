import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '427109fed4mshc502714220a1842p1f1507jsn057c9ac33cc9',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' 
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
