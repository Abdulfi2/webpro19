const kurs = document.getElementById("kurs");
const nilaiAwal = document.getElementById("nilaiAwal");
const nilaiAkhir = document.getElementById("nilaiAkhir");


function convertKurs(kurs, nilaiAwal) {
  let total = 0;
  switch (kurs) {
    case "USD":
      total = nilaiAwal * 9915;
      break;
    case "DollarSingapore":
      total = nilaiAwal * 13472;
      break;
    case "Ringgit":
      total = nilaiAwal * 874;
      break;
    case "yen":
      total = nilaiAwal * 120;
      break;
    case "Euro":
      total = nilaiAwal * 15888;
      break;
    case "Riyal":
      total = nilaiAwal * 3592;
      break;
    default:
      total = nilaiAwal;
      break;
  }
  return total;
}

kurs.addEventListener("change", function () {
  const uang = convertKurs(this.value, nilaiAwal.value);

  nilaiAkhir.value = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
});

nilaiAwal.addEventListener("input", function () {
  const uang = convertKurs(kurs.value, this.value);
  nilaiAkhir.value = new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
});