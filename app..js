//primera clase// 

let nombreNuevo = prompt("Decime tu nombre")
let apellidoNuevo = prompt("Decime tu apellido")
let edadNueva = prompt("Decime tu edad")
console.log(edadNueva)
let casado = false 

const DNI = "36073595"


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
    console.log("Puedes votar y tienes un cafe gratis") 
}else if (edadNueva >= 18) {
    console.log("Eres mayor de edad")
    console.log("Puedes votar pero no tienes un cafe gratis")
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