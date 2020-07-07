import { occupiedSwap } from "./occupiedSwap.js";
import { printBill } from "./printBill.js";
import { store } from "./store.js";
import { rooms } from "./store.js";
import { clientsNew } from "./consts.js";
import { clientsOnd } from "./consts.js";

export const checkOut = (name) => {
  const ClientExist = clientsIn.find((value) => value === name);
  if (ClientExist) {
    return "Cliente encontrado";
  }
  const clientIndex = clientsIn.findIndex((value) => value === objcli);
  if (!clientIndex) {
    return "Cliente no encontrado";
  }
  clientsOut.unshift(objcli);
  console.log(clientsOut);
  occupiedSwap(objcli);
  clientsIn.splice(clientIndex, 1);
  return printBill(objcli);
};
