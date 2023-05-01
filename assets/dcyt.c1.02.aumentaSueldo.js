class Cl_personal {
   constructor(cedula, sueldoAct, tipo) {
      this.cedula = cedula;
      this.sueldoAct = sueldoAct;
      this.tipo = tipo;
   }

   incremento() {
      if (this.tipo === 1) return this.sueldoAct * 0.2;
      else return this.sueldoAct * 0.1;
   }

   nvoSueldo() {
      return this.sueldoAct + this.incremento();
   }
}

class Cl_empresa {
   constructor() {
      this.acumIncremento = this.contObreros = this.contPersonal = 0;
   }

   procesarPersonal(p) {
      this.acumIncremento += p.incremento();
      this.contPersonal++;
      if (p.tipo === 1) this.contObreros++;
   }

   totIncremento() {
      return this.acumIncremento;
   }

   porcObreros() {
      return (this.contObreros / this.contPersonal) * 100;
   }
}

personal1 = new Cl_personal(555, 200, 2);
personal2 = new Cl_personal(888, 500, 1);
personal3 = new Cl_personal(777, 400, 2);
personal4 = new Cl_personal(666, 600, 1);
personal5 = new Cl_personal(444, 800, 1);

empresa = new Cl_empresa();
empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

salida = document.getElementById("salida");
salida.innerHTML = "Resultados:";
salida.innerHTML +=
   "<br>Sueldo " + personal1.cedula + " = " + personal1.nvoSueldo();
salida.innerHTML +=
   "<br>Sueldo " + personal2.cedula + " = " + personal2.nvoSueldo();
salida.innerHTML +=
   "<br>Sueldo " + personal3.cedula + " = " + personal3.nvoSueldo();
salida.innerHTML +=
   "<br>Sueldo " + personal4.cedula + " = " + personal4.nvoSueldo();
salida.innerHTML +=
   "<br>Sueldo " + personal5.cedula + " = " + personal5.nvoSueldo();
salida.innerHTML += `<br>Total por incremento= ${empresa.totIncremento()}`;
salida.innerHTML += `<br>Porcentaje personal obrero= ${empresa.porcObreros()}%`;
