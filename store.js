export const store = { rooms: [], clients: [] };
export const rooms = [
  { id: 1, beds: 2, price: 50, occupied: true },
  { id: 2, beds: 3, price: 75, occupied: true },
  { id: 3, beds: 2, price: 50, occupied: false },
  { id: 4, beds: 4, price: 100, occupied: false },
  { id: 5, beds: 5, price: 125, occupied: false },
  { id: 6, beds: 6, price: 150, occupied: true },
  { id: 7, beds: 4, price: 100, occupied: false },
];
export const clientsIn = [
  { dni: "447858F", name: "Adolfo", adults: 1, kids: 3, nights: 2, idRoom: 5 },
  { dni: "555858V", name: "Miguel", adults: 2, kids: 0, nights: 7, idRoom: 1 },
  { dni: "443458C", name: "Manuel", adults: 2, kids: 2, nights: 3, idRoom: 4 },
  { dni: "777858A", name: "João", adults: 2, kids: 3, nights: 5, idRoom: 6 },
];
export const clientsOut = [];
