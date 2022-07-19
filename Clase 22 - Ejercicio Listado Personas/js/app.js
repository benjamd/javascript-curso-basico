const personas = [
  new Persona("Juan", "Perez"),
  new Persona("karla", "Arriola"),
  new Persona("Maria", "Juarez"),
];

function mostrarPersonas() {
  console.log("Mostrar Personas");
  let text = "";
  for (let persona of personas) {
    console.log(persona);
    text += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = text;
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
      console.log("no hay informacion que agregar");
  }
}
