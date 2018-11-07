import React from 'react';
import { connect } from 'react-redux';
import { Table, Glyphicon } from 'react-bootstrap';
import HotelListElement from './HotelListElement'
import HotelFilter from './HotelFilter';

class HotelList extends React.Component {
    constructor(props){
        super(props);
        this.sortByRating = this.sortByRating.bind(this);
        this.modalFilterShow = this.modalFilterShow.bind(this);
    }

    render() {
        return (
            <div>
                <Table bordered hover responsive striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rating <Glyphicon glyph="glyphicon glyphicon-sort" onClick={this.sortByRating} /></th>
                            <th>Facilities <Glyphicon glyph="glyphicon glyphicon-filter" onClick={this.modalFilterShow} /></th>
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
                <HotelFilter />
            </div>
        );
    }

    sortByRating() {
        this.props.dispatch({
            type: 'hotels.sortByRating',
        });
    }

    modalFilterShow() {
        this.props.dispatch({
            type: 'hotels.modalFilterShow',
        });
    }
}

function mapStateToProps(state) {
    return ({
        hotels: state.hotels,
    });
}

export default connect(mapStateToProps)(HotelList);
