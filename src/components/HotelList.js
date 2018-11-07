import React from 'react';
import { connect } from 'react-redux';
import { Table, Glyphicon } from 'react-bootstrap';
import HotelListElement from './HotelListElement'

class HotelList extends React.Component {
    constructor(props){
        super(props);
        this.sortByRating = this.sortByRating.bind(this);
    }

    render() {
        return (
            <Table bordered hover responsive striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating <Glyphicon glyph="glyphicon glyphicon-sort" onClick={this.sortByRating} /></th>
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

    sortByRating() {
        console.log('sortByRating');
    }
}

function mapStateToProps(state) {
    return ({
        hotels: state.hotels,
    });
}

export default connect(mapStateToProps)(HotelList);
