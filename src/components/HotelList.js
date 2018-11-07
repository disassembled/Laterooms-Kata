import React from 'react';
import HotelListElement from './HotelListElement'
import { connect } from 'react-redux';

class HotelList extends React.Component {

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

function mapStateToProps(state) {
    return ({
        hotels: state.hotels,
    });
}

export default connect(mapStateToProps)(HotelList);
