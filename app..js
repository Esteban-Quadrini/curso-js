// 1) Funciones de renderizado en el DOM

function mostrarBienvenidaDOM({ nombre, apellido, edad, dni }) {
  const cont = document.getElementById("resultado");
  cont.innerHTML = `
    <h2>Bienvenido ${nombre} ${apellido}</h2>
    <p>Tenés ${edad} años y tu DNI es ${dni}</p>
  `;
}

function chequearEdadDOM(edad) {
  const cont = document.getElementById("resultado");
  let texto;
  if (edad >= 26) {
    texto = "Eres mayor de edad. Puedes votar y acceder al menú de cafés.";
  } else if (edad >= 18) {
    texto = "Eres mayor de edad. Puedes votar pero no podés acceder al menú de cafés."
  } else {
    texto = "Eres menor de edad. No podés votar.";
  }
  cont.innerHTML += `<p>${texto}</p>`;
}

function chequearFrutasDOM(peras, manzanas, frutillas) {
  const cont = document.getElementById("resultado");
  let texto;
  if (peras >= 5 && manzanas >= 5 && frutillas >= 5) {
    texto = "Tenés todas las frutas";
  } else if (peras >= 5 || manzanas >= 5 || frutillas >= 5) {
    texto = "Tenés algunas frutas";
  } else {
    texto = "No tenés frutas";
  }
  cont.innerHTML += `<p>${texto}</p>`;
}

function buscarNombreDOM(nombre) {
  const cont = document.getElementById("resultado");
  const buscados = ["Carlos","Pedro","Gabrielle"];
  const match = buscados.find(n => n.toLowerCase() === nombre.toLowerCase());
  const texto = match
    ? `${match} está en la lista de buscados`
    : "No estás en la lista de buscados";
  cont.innerHTML += `<p>${texto}</p>`;
}

function mostrarColoresOrdenados() {
  const cont = document.getElementById("colores-lista");
  const colores = ["rojo", "azul", "verde", "amarillo", "morado"].sort();
  const items = colores.map(c => `<li>${c}</li>`).join("");
  cont.innerHTML = `<h3>Colores ordenados</h3><ul>${items}</ul>`;
}

function renderCafeMenu(edad) {
  const cont = document.getElementById("cafe-menu");
  cont.innerHTML = "";
  if (isNaN(edad) || edad < 26) return;

  cont.innerHTML = "<h3>Menú de cafés</h3>";
  const precios = {
    Americano: 3000,
    Latte: 3500,
    Capuchino: 4000,
    Cortado: 3200,
    Descafeinado: 2800
  };
  let total = 0;

  Object.entries(precios).forEach(([nombre, precio]) => {
    const btn = document.createElement("button");
    btn.textContent = `${nombre} ($${precio})`;
    btn.onclick = () => {
      total += precio;
      cont.querySelector("h3").textContent = `Menú de cafés (Total: $${total})`;
    };
    cont.appendChild(btn);
  });

  const finalizar = document.createElement("button");
  finalizar.textContent = "Finalizar pedido";
  finalizar.onclick = () => {
    cont.innerHTML += `<p>Gracias por tu visita. Total final: $${total}</p>`;
  };
  cont.appendChild(finalizar);
}

// 2) Procesar formulario

function procesarFormulario() {
  const nombre    = document.getElementById("nombre").value.trim();
  const apellido  = document.getElementById("apellido").value.trim();
  const edad      = parseInt(document.getElementById("edad").value, 10);
  const dni       = document.getElementById("dni").value.trim();
  const peras     = parseInt(document.getElementById("peras").value, 10) || 0;
  const manzanas  = parseInt(document.getElementById("manzanas").value, 10) || 0;
  const frutillas = parseInt(document.getElementById("frutillas").value, 10) || 0;

  if (!nombre || !apellido || isNaN(edad) || !dni) {
    alert("Por favor completá nombre, apellido, edad y DNI.");
    return;
  }

  const usuario = { nombre, apellido, edad, dni };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Llamadas a las funciones que renderizan en pantalla
  mostrarBienvenidaDOM(usuario);
  chequearEdadDOM(edad);
  chequearFrutasDOM(peras, manzanas, frutillas);
  buscarNombreDOM(nombre);
  renderCafeMenu(edad);
  mostrarColoresOrdenados();
}

// 3) Arranque: precarga datos y asocia el botón

document.addEventListener("DOMContentLoaded", () => {
  // Si hay datos en localStorage, precargarlos
  const datos = JSON.parse(localStorage.getItem("usuario") || "null");
  if (datos) {
    ["nombre","apellido","edad","dni"].forEach(key => {
      const el = document.getElementById(key);
      if (el) el.value = datos[key];
    });
  }
  document.getElementById("btnEnviar")
          .addEventListener("click", procesarFormulario);
});