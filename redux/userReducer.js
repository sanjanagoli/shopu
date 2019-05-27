
const user = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER':
            return action.payload;
        default:
            return state;
    }
};

export const getUser = user => ({
    type: 'GET_USER',
    payload: user,
});

export default user;
