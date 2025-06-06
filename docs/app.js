const API_URL = "https://script.google.com/macros/s/AKfycbytX0jGleQJJ4Sv-c0NdlWlFRj0mjw7uOptC9qABtc4xXMoPRKCDFWLclptwRnTlOS-/exec";
const dia = 1; // Ej: lunes = 1, martes = 2...

fetch(`${API_URL}?day=${dia}`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("rutina-list");
    list.innerHTML = "";
    data.forEach(ej => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${ej.Exercise}</strong> (${ej.Zone})<br>
        ${ej.Series} series x ${ej.Reps} reps - ${ej.Weight} kg
      `;
      list.appendChild(item);
    });
  });