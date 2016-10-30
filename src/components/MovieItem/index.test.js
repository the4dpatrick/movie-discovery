import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from './index.js';

const movie = {
  "adult": false,
  "backdrop_path": "/6uBlEXZCUHM15UNZqNig17VdN4m.jpg",
  "belongs_to_collection": {
    "id": 115575,
    "name": "Star Trek: Alternate Reality Collection",
    "poster_path": "/w2IVqa43Ge49mrY3qSaJWpyDtz6.jpg",
    "backdrop_path": "/gWl5pN2FplE709aVtA4lakwsE6t.jpg"
  },
  "budget": 185000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 53,
      "name": "Thriller"
    }
  ],
  "homepage": "http://www.startrekmovie.com/",
  "id": 188927,
  "imdb_id": "tt2660888",
  "original_language": "en",
  "original_title": "Star Trek Beyond",
  "overview": "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
  "popularity": 30.232711,
  "poster_path": "/mLrQMqyZgLeP8FrT5LCobKAiqmK.jpg",
  "production_companies": [
    {
      "name": "Paramount Pictures",
      "id": 4
    },
    {
      "name": "Bad Robot",
      "id": 11461
    },
    {
      "name": "Perfect Storm Entertainment",
      "id": 34530
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2016-07-07",
  "revenue": 158000000,
  "runtime": 122,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Into Oblivion",
  "title": "Star Trek Beyond",
  "video": false,
  "vote_average": 6.3,
  "vote_count": 982
}

it('renders MovieItem', () => {
  const wrapper = shallow(<MovieItem movie={movie} />);
  expect(wrapper.find('.movie-item').length).toBe(1);
});
