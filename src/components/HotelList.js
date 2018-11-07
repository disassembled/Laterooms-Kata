import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import HotelListElement from './HotelListElement'

class HotelList extends React.Component {

    render() {
        return (
            <Table bordered hover responsive striped>
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
            </Table>
        );
    }
}

function mapStateToProps(state) {
    return ({
        hotels: state.hotels,
    });
}

export default connect(mapStateToProps)(HotelList);
