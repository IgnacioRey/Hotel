import { rooms } from "./store.js";

export const sortRooms = (obj) =>
  rooms.sort((less, more) => less.beds - more.beds);
