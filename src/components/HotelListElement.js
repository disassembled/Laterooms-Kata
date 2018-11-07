import React from 'react';

export default class HotelListElement extends React.Component {
    render() {
        const hotel = this.props.hotel;

        return (
            <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>{hotel.starRating}</td>
                <td>{hotel.facilities.join(', ')}</td>
            </tr>
        );
    }
}
