import { rooms } from "./store.js";

export const checkAvailableRoom = (objcli) => {
  const fittingRooms = rooms.filter(
    (value) => value.beds === objcli.adults + objcli.kids
  );
  const availableRooms = fittingRooms.find((value) => value.occupied === false);
  return availableRooms;
};
