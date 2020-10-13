import Vue from "vue";

Vue.filter("arred", function(valor) {
  if (valor == null) {
    return 0;
  } else {
    return valor.toFixed(0);
  }
});

Vue.filter("formatoBr", function(valor) {
  valor = parseInt(valor);

  if (valor == null) {
    return 0;
  } else {
    return valor.toLocaleString("pt-BR");
  }
});
