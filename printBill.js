import { rooms, msgCheckOut } from "./consts.js";
export const printBill = (obj) => {
  const compareRooms = rooms.findIndex((value) => value.id === obj.idRoom);
  if (!compareRooms) {
    return "erro ao comparar o id da habita e o idroom do cliente";
  }
  const bill = rooms[compareRooms].price * obj.nights;
  msgCheckOut.insertAdjacentHTML(
    `afterbegin`,
    `<div class="d-flex justify-content-center mt-2"><button id="getBill" class="btn btn-primary">
    Imprimir Factura
  </button></div> `
  );
  document.querySelector(`#getBill`).addEventListener(`click`, () => {
    document.querySelector(`#getBill`).insertAdjacentHTML(
      `afterend`,
      `<div class= mt-2">
        <h4>Agradecémoslle que escollera os nosos servizos.</h4>
       <p>O prezo da súa estancia é de
        ${bill}€.</p>
        <p>Aplicando o IVE, de
       ${bill * 0.1}€</p>
        <p>Ascende así a un total de
        ${Math.trunc(bill * 1.1)}€</p>
  </div>`
    );
  });
  return;
};
import { rooms } from "./store.js";

export const printBill = (obj) => {
  const compareRooms = rooms.findIndex((value) => value.id === obj.idRoom);
  if (!compareRooms) {
    return "Los ID´S no coinciden";
  }
  const bill = rooms[compareRooms].price * obj.nights;
  console.log(
   " Le agradecemos su estancia con nosotros
       el precio de su alojamiento asciende a",
    ${ bill }€.
aplicando el iva, de`,
    bill * 0.21,
    `€
asciende a un total de`,
    bill * 1.21,
    `€`
  );
};

//msgCheckOut.insertAdjacentHTML(
//  `afterbegin`,
//  `<div class="alert alert-success mt-2">
//       Le agradecemos su estancia con nosotros,
//       el precio de su alojamiento asciende a,
//        ${bill}€.
//        Aplicando el IVA, de
//       ${bill * 0.1}€,
//        ascIende a un total de
//        ${Math.trunc(bill * 1.1)}€
//  </div>`
//);
