import { sortRooms } from "./sortRooms.js";
import { addIdRoom } from "./addIdRoom.js";
import { checkAvailableRoom } from "./checkAvailableRoom.js";
import { occupiedSwap } from "./occupiedSwap.js";
import { printBill } from "./printBill.js";
import { checkIn } from "./checkIn.js";
import { checkOut } from "./checkOut.js";
import { store } from "./store.js";
import { rooms } from "./store.js";
import { clientsIn } from "./store.js";
import { clientsOut } from "./store.js";

checkOut({
  dni: "777858A",
  name: "João",
  adults: 2,
  kids: 3,
  nights: 5,
  idRoom: 6,
});

console.log(
  checkIn({
    dni: "515345G",
    name: "Alfonso",
    adults: 2,
    kids: 2,
    nights: 4,
  })
);
