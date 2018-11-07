import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import { reducers } from './reducers/index';
import './stylesheets/main.scss';

const hotels = [
    {
      "id": 1,
      "name": "hotelone",
      "starRating": 5,
      "facilities": ["car park", "pool"]
    },
    {
      "id": 2,
      "name": "hoteltwo",
      "starRating": 3,
      "facilities": ["car park", "gym"]
    },
    {
      "id": 3,
      "name": "hotelthree",
      "starRating": 3,
      "facilities": []
    }
]

const initialState = {
    hotels: hotels,
    ratingSort: -1,
};

const store = createStore(reducers, initialState);

// render main component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
