/* ==========================================================
   Portafolio — JavaScript
   1. Datos de habilidades y proyectos (fáciles de editar)
   2. Renderizado con bucles for...of
   3. Modo oscuro guardado en localStorage
   4. Formulario de contacto (demo)
   ========================================================== */

// ---------- 1. Datos (edita esto a tu gusto) ----------

const habilidades = [
  { nombre: "HTML", descripcion: "Estructura de páginas web." },
  { nombre: "CSS", descripcion: "Estilos, colores y diseño responsivo." },
  { nombre: "JavaScript", descripcion: "Interactividad en el navegador." },
  { nombre: "Git y GitHub", descripcion: "Guardar y compartir mi código." },
  { nombre: "Python", descripcion: "Mi primer lenguaje de programación." },
  { nombre: "Lógica y algoritmos", descripcion: "Resolver problemas paso a paso." },
];

const proyectos = [
  {
    titulo: "Portafolio personal",
    descripcion:
      "Esta misma página: hecha a mano con HTML, CSS y JavaScript, sin frameworks.",
    etiquetas: ["HTML", "CSS", "JavaScript"],
    enlace: "https://github.com/edgarfelipe200354-creator/Opencode1",
  },
  {
    titulo: "Clasificador de cobertura",
    descripcion:
      "Herramienta en Python para clasificar datos, desarrollada como práctica de programación.",
    etiquetas: ["Python"],
    enlace: "https://github.com/edgarfelipe200354-creator",
  },
  {
    titulo: "Próximo proyecto...",
    descripcion:
      "Aún no existe, pero esta tarjeta te recuerda que siempre hay algo nuevo por construir.",
    etiquetas: ["En progreso"],
    enlace: "",
  },
];

// ---------- 2. Renderizado ----------

const listaHabilidades = document.getElementById("lista-habilidades");
for (const habilidad of habilidades) {
  const div = document.createElement("div");
  div.className = "habilidad";
  div.innerHTML = `<h3>${habilidad.nombre}</h3><p>${habilidad.descripcion}</p>`;
  listaHabilidades.appendChild(div);
}

const listaProyectos = document.getElementById("lista-proyectos");
for (const proyecto of proyectos) {
  const div = document.createElement("div");
  div.className = "proyecto";

  const etiquetas = proyecto.etiquetas
    .map((etiqueta) => `<span class="etiqueta">${etiqueta}</span>`)
    .join("");

  const boton = proyecto.enlace
    ? `<a href="${proyecto.enlace}" target="_blank" rel="noopener">Ver en GitHub →</a>`
    : `<a href="#contacto">Avisarme cuando esté listo →</a>`;

  div.innerHTML = `
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <div class="etiquetas">${etiquetas}</div>
    ${boton}
  `;
  listaProyectos.appendChild(div);
}

// ---------- 3. Modo oscuro ----------

const botonTema = document.getElementById("modo-oscuro");
const cuerpo = document.body;

// Si el usuario ya eligió un tema la vez pasada, lo respetamos
if (localStorage.getItem("tema") === "oscuro") {
  cuerpo.classList.add("tema-oscuro");
  botonTema.textContent = "☀️";
}

botonTema.addEventListener("click", () => {
  cuerpo.classList.toggle("tema-oscuro");
  const oscuro = cuerpo.classList.contains("tema-oscuro");
  botonTema.textContent = oscuro ? "☀️" : "🌙";
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
});

// ---------- 4. Formulario (demo) ----------

const formulario = document.getElementById("formulario-contacto");
const mensajeEnviado = document.getElementById("mensaje-enviado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita que la página se recargue
  mensajeEnviado.hidden = false;
  formulario.reset();
});

// ---------- Extra: año automático en el pie ----------

document.getElementById("anio").textContent = new Date().getFullYear();
