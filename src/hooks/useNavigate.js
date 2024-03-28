import { eventEmitter } from "../core/EventEmitter";
import { EVENT_TYPES } from "../constants/eventTypes";

export const useNavigate = (target) => {
  eventEmitter.emit(EVENT_TYPES.changeRoute, { target });
};
