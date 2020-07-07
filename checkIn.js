import { sortRooms } from "./sortRooms.js";
import { addIdRoom } from "./addIdRoom.js";
import { checkAvailableRoom } from "./checkAvailableRoom.js";
import { occupiedSwap } from "./occupiedSwap.js";
import { store } from "./store.js";
import { rooms } from "./store.js";
import { clientsIn } from "./store.js";
import { clientsOut } from "./store.js";

export const checkIn = (obj) => {
  checkAvailableRoom(obj);
  addIdRoom(obj);
  occupiedSwap(obj);
  return obj;
};
