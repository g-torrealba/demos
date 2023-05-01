class Cl_estudiante {
   constructor(nombre = null, edad = null, sexo = null) {
      this.nombre = nombre;
      this.edad = edad;
      this.sexo = sexo;
   }
}

class Cl_salon {
   constructor() {
      this.acumEdad =
         this.contEstuds =
         this.edadMayor =
         this.nombreMayor =
         this.contChicasMayor =
         this.contChicas =
            0;
   }

   procesarEstudiante(e) {
      this.acumEdad += e.edad;
      this.contEstuds++;
      if (e.edad > this.edadMayor) {
         this.edadMayor = e.edad;
         this.nombreMayor = e.nombre;
      }
      if (e.sexo === "F") {
         this.contChicas++;
         if (e.edad >= 18) this.contChicasMayor++;
      }
   }

   edadPromedio() {
      return this.acumEdad / this.contEstuds;
   }

   porcChicasMayores() {
      return (this.contChicasMayor / this.contChicas) * 100;
   }
}

estud1 = new Cl_estudiante("Luis", 16, "M");
estud2 = new Cl_estudiante("Ana", 19, "F");
estud3 = new Cl_estudiante("José", 20, "M");
estud4 = new Cl_estudiante("Carmen", 18, "F");

salon = new Cl_salon();
salon.procesarEstudiante(estud1);
salon.procesarEstudiante(estud2);
salon.procesarEstudiante(estud3);
salon.procesarEstudiante(estud4);

salida = document.getElementById("salida");
salida.innerHTML = "Resultados:";
salida.innerHTML += "<br>Edad promedio= " + salon.edadPromedio();
salida.innerHTML += "<br>Nombre estudiante mayor= " + salon.nombreMayor;
salida.innerHTML +=
   "<br>Porcentaje chicas mayor de edad= " + salon.porcChicasMayores();
