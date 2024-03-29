import { cloneDeep } from "lodash";

import defaultState, { unhandledActionError } from "../defaultState";
import { TYPES, STATE_NAME } from "./actions";
import getHandlers from "./handlers";

export default function reducer(prevState = defaultState.counters, action) {
  if (!Object.values(TYPES).includes(action.type)) return prevState;

  const handlers = getHandlers(prevState, cloneDeep(prevState));

  switch (action.type) {
    case TYPES.CLEAN:
      return handlers.clean();

    case TYPES.SET_COUNTERS_MAXES:
      return handlers.setCountersMaxes(action.params);
    case TYPES.SET_COUNTERS_DONE:
      return handlers.setCountersDone(action.params);
    case TYPES.SET_MAX:
      return handlers.setMax(action.params);

    default:
      throw unhandledActionError(STATE_NAME, action.type);
  }
}
