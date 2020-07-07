import { checkAvailableRoom } from "./checkAvailableRoom.js";

export const addIdRoom = (obj) => {
  const clientId = checkAvailableRoom(obj);
  obj.idRoom = clientId.id;
  return clientId;
};
