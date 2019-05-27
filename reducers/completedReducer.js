export const DELIVERY_COMPLETE = 'DELIVERY_COMPLETE'
export const CURRENT_DELIVERY = 'CURRENT_DELIVERY'

export default function completedReducer(state = { id: '', completed: false }, action) {
    switch (action.type) {
      case DELIVERY_COMPLETE:
        return { ...state, completed: true };
      case CURRENT_DELIVERY:
        return { ...state, id: action.payload, completed: false };
      default:
        return state;
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

