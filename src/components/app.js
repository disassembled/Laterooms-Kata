import React from 'react';

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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Facilities</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.hotels.map((hotel, index) => {
                        return (
                            <tr key={hotel.id}>
                                <td>{hotel.name}</td>
                                <td>{hotel.starRating}</td>
                                <td>{hotel.facilities.join(', ')}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}
