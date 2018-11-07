import React from 'react';
import HotelListElement from './HotelListElement'

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
                            <HotelListElement key={hotel.id} hotel={hotel} />
                        );
                    })}
                </tbody>
            </table>
        );
    }
}