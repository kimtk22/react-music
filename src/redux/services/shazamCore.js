import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '',
//     'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
//   },
// };

// fetch('https://genius-song-lyrics1.p.rapidapi.com/chart/songs/', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com',
    prepareHeaders: headers => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set('X-RapidAPI-Host', 'genius-song-lyrics1.p.rapidapi.com');
      headers.set('Access-Control-Allow-Origin', '*');

      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({ query: () => '/chart/songs' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
