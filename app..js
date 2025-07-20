//primera clase// 

let nombreNuevo = prompt("Decime tu nombre")
let apellidoNuevo = prompt("Decime tu apellido")
let edadNueva = prompt("Decime tu edad")
console.log(edadNueva)
let casado = false 

const DNI = prompt("Decime tu DNI")
console.log(DNI)


console.log(casado)
console.log(edadNueva + " años")
console.log(nombreNuevo + " " + apellidoNuevo)
console.log(DNI)


alert("Bienvenido " + nombreNuevo + " " +  apellidoNuevo + ", tenes " + edadNueva + " años")

let continuar = confirm("quieres continuar?")
console.log(continuar)




//segunda clase//

if (edadNueva >= 26) {
    console.log("Eres mayor de edad")    
    console.log("Puedes votar y tenes un menu de cafes")
}else if (edadNueva >= 18) {
    console.log("Eres mayor de edad")
    console.log("Puedes votar pero no puedes acceder al menu de cafes")
} else {
        console.log("Eres menor de edad")
        console.log("No puedes votar") } 

        
let peras = prompt ("Cuantas peras tenes?")
let manzanas = prompt("Cuantas manzanas tenes?")
let frutillas = prompt("Cuantas frutillas tenes?")

if ( peras >= 5 && manzanas >= 5 && frutillas >= 5) {
    console.log("Tenes todas las frutas")
}else if ( peras >=5 || manzanas >= 5 || frutillas >= 5) {
    console.log("Tenes algunas frutas")
} else {
    console.log("No tenes frutas")
}



  

switch (nombreNuevo) {
    case "carlos":
        console.log("Carlos esta en la lista de buscados")
        break;
     case "pedro":
        console.log("Pedro esta en la lista de buscados")
        break;
        case "gabrielle":
        console.log("gabrielle esta en la lista de buscados")
        break;

    default:
        console.log("No estas en la lista de buscados")
        break;
}


if (!isNaN(edadNueva) && edadNueva >= 26) {
  let total   = 0
  let eleccion

  do {
    eleccion = prompt(
      "que cafe le gustaria tomar? \n1 Americano \n2. Latte \n3. Capuchino \n4. Cortado \n5. Descafeinado \n6. Salir"
    )

    switch (eleccion) {
      case "1":
        total = total + 3000;
        console.log("Has elegido Americano, el total es: $" + total);
        break;
      case "2":
        total = total + 3500;
        console.log("Has elegido Latte, total: $" + total);
        break;
      case "3":
        total = total + 4000;
        console.log ("Has elegido Capuchino. Total: $" + total);
        break;
      case "4":
        total = total + 3200;
        console.log("Has elegido Cortado. Total: $" + total);
        break;
      case "5":
        total = total + 2800;
        console.log("has elegido Descafeinado. Total: $" + total);
        break;
      case "6":
        console.log("gracias por tu visita, el total es: $" + total);
        break;
      default:
        console.log("Opción no válida. Elige del 1 al 6.");
    }
  } while (eleccion !== "6")
}// Si la edad es menor a 26 o inválida, el script no muestra el menú de cafés//


