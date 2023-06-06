const BASE_URL = `https://api.tvmaze.com`;

const apiGet = async (queryString) => {
  const response = await fetch(`${BASE_URL}${queryString}`);

  const body = await response.json();
  return body;
};

export const searchForShow = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);
export const searchShowIdData = (showId) => apiGet(`/shows/${showId}`);
