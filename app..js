function pedirTexto(mensaje) {
  let texto = prompt(mensaje)
  return texto
}

function pedirNumero(mensaje) {
  let valor = prompt(mensaje)
  return parseInt(valor)
}

function mostrarBienvenida(nombre, apellido, edad) {
  alert("Bienvenido " + nombre + " " + apellido + ", tenés " + edad + " años")
}

function preguntarContinuar() {
  let respuesta = confirm("¿Querés continuar?")
  console.log(respuesta)
  return respuesta
}

function chequearEdad(edad) {
  if (edad >= 26) {
    console.log("Eres mayor de edad")
    console.log("Puedes votar y tenés un menú de cafés")
  } else if (edad >= 18) {
    console.log("Eres mayor de edad")
    console.log("Puedes votar pero no podés acceder al menú de cafés")
  } else {
    console.log("Eres menor de edad")
    console.log("No podés votar")
  }
}

function chequearFrutas(peras, manzanas, frutillas) {
  if (peras >= 5 && manzanas >= 5 && frutillas >= 5) {
    console.log("Tenés todas las frutas")
  } else if (peras >= 5 || manzanas >= 5 || frutillas >= 5) {
    console.log("Tenés algunas frutas")
  } else {
    console.log("No tenés frutas")
  }
}

function buscarNombre(nombre) {
  switch (nombre) {
    case "carlos":
    case "Carlos":
      console.log("Carlos está en la lista de buscados")
      break;
    case "pedro":
    case "Pedro":
      console.log("Pedro está en la lista de buscados")
      break;
    case "gabrielle":
    case "Gabrielle":
      console.log("Gabrielle está en la lista de buscados")
      break;
    default:
      console.log("No estás en la lista de buscados")
  }
}

function menuCafes(edad) {
  if (isNaN(edad) || edad < 26) {
    return;
  }
  let total = 0
  let opcion
  do {
    opcion = prompt(
      "¿Qué café querés tomar?\n" +
      "1. Americano ($3000)\n" +
      "2. Latte ($3500)\n" +
      "3. Capuchino ($4000)\n" +
      "4. Cortado ($3200)\n" +
      "5. Descafeinado ($2800)\n" +
      "6. Salir"
    )
    switch (opcion) {
      case "1":
        total += 3000
        console.log("Has elegido Americano, total: $" + total)
        break;
      case "2":
        total += 3500;
        console.log("Has elegido Latte, total: $" + total)
        break;
      case "3":
        total += 4000;
        console.log("Has elegido Capuchino, total: $" + total)
        break;
      case "4":
        total += 3200;
        console.log("Has elegido Cortado, total: $" + total)
        break;
      case "5":
        total += 2800;
        console.log("Has elegido Descafeinado, total: $" + total)
        break;
      case "6":
        console.log("Gracias por tu visita, total: $" + total)
        break;
      default:
        console.log("Opción no válida. Elige del 1 al 6.")
    }
  } while (opcion !== "6")
}

function iniciar() {
  let nombre = pedirTexto("Decime tu nombre")
  let apellido = pedirTexto("Decime tu apellido")
  let edad = pedirNumero("Decime tu edad")
  let dni = pedirTexto("Decime tu DNI")
  let casado = false

  console.log(dni)
  console.log(casado)
  console.log(edad + " años")
  console.log(nombre + " " + apellido)
  console.log(dni)

  mostrarBienvenida(nombre, apellido, edad)

  if (preguntarContinuar()) {
    chequearEdad(edad);
    let peras = pedirNumero("Cuántas peras tenés?")
    let manzanas = pedirNumero("Cuántas manzanas tenés?")
    let frutillas = pedirNumero("Cuántas frutillas tenés?")
    chequearFrutas(peras, manzanas, frutillas)
    buscarNombre(nombre);
    menuCafes(edad);
  } else {
    console.log("¡Nos vemos pronto!")
  }
}

iniciar()




