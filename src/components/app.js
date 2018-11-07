import React from 'react';
import HotelList from './HotelList';

export default class App extends React.Component {

    constructor(props) {
        super(props);

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

        this.state = {
            hotels: hotels,
        };
    }

    render() {

        return (
            <HotelList hotels={this.state.hotels} />
        );
    }
}
