export default function conversor(numero, unidad) {
  let resultado
  if (unidad == "kg" || unidad == "kilos") {
    return kiloALibra(numero)
  } else if (unidad == "libra" || unidad == "lb") {
    return libraAKilo(numero)
  }
  function kiloALibra(numero) {
    let lb = numero * 2.20462;
    resultado = lb.toFixed(2) + " lb";
    return resultado;
  }
  function libraAKilo(numero) {
    let kg = numero * 0.453592;
    resultado = kg.toFixed(2) + " kg";
    return resultado;
  }
}
