class Cl_cliente {
   constructor(nombre, tipoServ, edad, sexo) {
      this.nombre = nombre;
      this.tipoServ = tipoServ;
      this.edad = edad;
      this.sexo = sexo;
   }
}

class Cl_empresa {
   constructor() {
      this.contFemeninoMayEdad = this.acumEdades = this.cntClientes = 0;
      this.edadMenor = 100;
   }

   procesarCliente(c) {
      if (c.sexo === "F" && c.edad >= 18) this.contFemeninoMayEdad++;
      if (c.edad < this.edadMenor) this.edadMenor = c.edad;
      this.cntClientes++;
      this.acumEdades += c.edad;
   }

   cantFemeninosMayorEdad() {
      return this.contFemeninoMayEdad;
   }

   menorEdadAtendida() {
      return this.edadMenor;
   }

   promedioEdadClientes() {
      return this.acumEdades / this.cntClientes;
   }
}

cliente1 = new Cl_cliente("Juan", 2, 20, "M");
cliente2 = new Cl_cliente("Ana", 1, 19, "F");
cliente3 = new Cl_cliente("Lin", 2, 18, "F");
cliente4 = new Cl_cliente("Mary", 1, 15, "F");

empresa = new Cl_empresa();
empresa.procesarCliente(cliente1);
empresa.procesarCliente(cliente2);
empresa.procesarCliente(cliente3);
empresa.procesarCliente(cliente4);

salida = document.getElementById("salida");
salida.innerHTML = "Resultados:";
salida.innerHTML +=
   "<br>Cant femenino mayor edad= " + empresa.cantFemeninosMayorEdad();
salida.innerHTML += "<br>Menor edad atendida= " + empresa.menorEdadAtendida();
salida.innerHTML +=
   "<br>Promedio edad clientes= " + empresa.promedioEdadClientes();
