class Cl_pasajero {
   constructor(nombre, tipo, feriado, carnet) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.feriado = feriado;
      this.carnet = carnet;
   }

   paga() {
      let precioBase = 1000,
         precioFinal = precioBase;
      if (this.tipo === 1 && this.feriado) precioFinal = precioBase * 1.5;
      if (this.tipo === 2 && this.carnet) precioFinal = 100;
      return precioFinal;
   }
}

class Cl_ruta {
   constructor() {
      this.acumPago = this.contPasajeros = 0;
   }

   procesarPasajero(p) {
      this.contPasajeros++;
      this.acumPago += p.paga();
   }

   totalCobrado() {
      return this.acumPago;
   }

   precioPromedio() {
      return this.acumPago / this.contPasajeros;
   }
}

pasajero1 = new Cl_pasajero("Ana", 2, false, true);
pasajero2 = new Cl_pasajero("Luis", 1, true, false);
pasajero3 = new Cl_pasajero("Carlos", 1, false, false);
pasajero4 = new Cl_pasajero("Josefa", 2, false, false);

ruta = new Cl_ruta();
ruta.procesarPasajero(pasajero1);
ruta.procesarPasajero(pasajero2);
ruta.procesarPasajero(pasajero3);
ruta.procesarPasajero(pasajero4);

salida = document.getElementById("salida");
salida.innerHTML = "Resultados:";
salida.innerHTML += `<br>${pasajero1.nombre} paga ${pasajero1.paga()}`;
salida.innerHTML += `<br>${pasajero2.nombre} paga ${pasajero2.paga()}`;
salida.innerHTML += `<br>${pasajero3.nombre} paga ${pasajero3.paga()}`;
salida.innerHTML += `<br>${pasajero4.nombre} paga ${pasajero4.paga()}`;
salida.innerHTML += "<br>Total cobrado= " + ruta.totalCobrado();
salida.innerHTML += "<br>Precio promedio= " + ruta.precioPromedio();
