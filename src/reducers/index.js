export function reducers(state, action) {

    let newState;

    switch(action.type) {
        case 'hotels.sortByRating':
            newState = JSON.parse(JSON.stringify(state));
            newState.ratingSort = -newState.ratingSort;
            newState.hotels.sort((a, b) => (a.starRating > b.starRating) ? newState.ratingSort : ((b.starRating > a.starRating) ? -newState.ratingSort : 0));
            return newState;

        case 'hotels.modalFilterShow':
            newState = JSON.parse(JSON.stringify(state));
            newState.modal = newState.modal ? newState.modal : {};
            newState.modal.modalFilter = {
                show: true,
            }
            return newState;

        case 'hotels.modalFilterHide':
            newState.modal.modalFilter = {
                show: false,
            }
            return newState;

        default:
            return state;
    }
}
