const DELIVERY_COMPLETE = 'DELIVERY_COMPLETE'
const CURRENT_DELIVERY = 'CURRENT_DELIVERY'
const CURRENT_USER = 'CURRENT_USER'

export default function completedReducer(state = { user: '', id: '', completed: false }, action) {
  // if (action.type !== DELIVERY_COMPLETE && action.type !== CURRENT_DELIVERY) {
  //   action.type = CURRENT_USER
  // }
  switch (action.type) {
      case DELIVERY_COMPLETE:
        return { ...state, completed: true };
      case CURRENT_DELIVERY:
        return { ...state, id: action.payload, completed: false };
      case CURRENT_USER:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }

export function setUser(user) {
  return {
      type: CURRENT_USER,
      payload: user,
  }
}

export function completeDelivery() {
    return {
        type: DELIVERY_COMPLETE,
        payload: null,
    }
}

export function currentDelivery(id) {
    return {
        type: CURRENT_DELIVERY,
        payload: id,
    }
}

