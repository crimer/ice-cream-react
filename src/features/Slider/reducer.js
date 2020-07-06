import {NEXT, PREV} from './types'

const initState = {
  offset: 0,
  desired: 0,
  active: 0
}

const sliderReducer = (state = initState, action) => {
  switch (action.type) {
    case NEXT:

      break;
      case PREV:


    default:
      return state;
  }
}

export default sliderReducer;
