import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class HotelFilter extends React.Component {
    constructor(props) {
        super(props);
        this.modalFilterHide = this.modalFilterHide.bind(this);
    }

    render() {
        return(
            <Modal show={this.props.modalFilter.show}>
                <Modal.Header>
                    <Modal.Title>
                        Filter
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalFilterHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    modalFilterHide() {
        this.props.dispatch({
            type: 'hotels.modalFilterHide',
        });
    }
}

function mapStateToProps(state) {
    let modalFilter;
    if(state.hotels.modal && state.hotels.modal.modalFilter) {
        modalFilter = state.hotels.modal.modalFilter;
    }
    else {
        modalFilter = {
            show: false,
        }
    }

    return {
        modalFilter: modalFilter,
    }
}

export default connect(mapStateToProps)(HotelFilter);
