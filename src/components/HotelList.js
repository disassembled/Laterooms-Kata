import React from 'react';

export default class HotelList extends React.Component {

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
                    {this.props.hotels.map((hotel, index) => {
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