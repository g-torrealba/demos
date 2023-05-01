class Cl_sobre {
   constructor(numero, valorBillete, cantidad) {
      this.numero = numero;
      this.valorBillete = valorBillete;
      this.cantidad = cantidad;
   }
   subtotal() {
      return this.valorBillete * this.cantidad;
   }
}

class Cl_sobres {
   constructor() {
      this.acDinero = 0;
   }

   procesarSobres(s) {
      this.acDinero += s.subtotal();
   }

   totalDinero() {
      return this.acDinero;
   }
}

sobre1 = new Cl_sobre(1, 10, 5);
sobre2 = new Cl_sobre(2, 20, 2);
sobre3 = new Cl_sobre(3, 100, 4);
sobre4 = new Cl_sobre(4, 50, 3);

sobres = new Cl_sobres();
sobres.procesarSobres(sobre1);
sobres.procesarSobres(sobre2);
sobres.procesarSobres(sobre3);
sobres.procesarSobres(sobre4);

salida = document.getElementById("salida");
salida.innerHTML = "Resultados:";
salida.innerHTML += `<br>Sobre #${sobre1.numero} tiene ${sobre1.subtotal()}`;
salida.innerHTML += `<br>Sobre #${sobre2.numero} tiene ${sobre2.subtotal()}`;
salida.innerHTML += `<br>Sobre #${sobre3.numero} tiene ${sobre3.subtotal()}`;
salida.innerHTML += `<br>Sobre #${sobre4.numero} tiene ${sobre4.subtotal()}`;
salida.innerHTML +=
   "<br>Total dinero en todos los sobres= " + sobres.totalDinero();
