import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class HotelListElement extends React.Component {
    render() {
        const hotel = this.props.hotel;
        const maxRating = 5;

        return (
            <tr key={hotel.id}>
                <td>{hotel.name}</td>
                <td>
                    {[...Array(maxRating)].map((item, key) =>
                        <Glyphicon key={key} glyph={ "glyphicon " + (key < hotel.starRating ? "glyphicon-star" : "glyphicon-star-empty") } />
                    )}
                </td>
                <td>{hotel.facilities.join(', ')}</td>
            </tr>
        );
    }
}
