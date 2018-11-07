export function reducers(state, action) {

    switch(action.type){
        case 'hotels.sortByRating':
            const newState = JSON.parse(JSON.stringify(state));
            newState.hotels.sort((a, b) => (a.starRating > b.starRating) ? 1 : ((b.starRating > a.starRating) ? -1 : 0));
            return newState;

        default:
            return state;
    }
}
