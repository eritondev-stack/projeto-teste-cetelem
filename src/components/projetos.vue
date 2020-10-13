
<template>
  <tbody>
    <tr ref="dev">
      <td rowspan="3" class="click" @click="hidden()">Cartões</td>
      <td rowspan="3">98%</td>
      <td>Desenvolvimento</td>
      <td id="d-2020-01-01"></td>
      <td id="d-2020-02-01"></td>
      <td id="d-2020-03-01"></td>
      <td id="d-2020-04-01"></td>
      <td id="d-2020-05-01"></td>
      <td id="d-2020-06-01"></td>
      <td id="d-2020-07-01"></td>
      <td id="d-2020-08-01"></td>
      <td id="d-2020-09-01"></td>
      <td id="d-2020-10-01"></td>
      <td id="d-2020-11-01"></td>
      <td id="d-2020-12-01"></td>
    </tr>

    <tr ref="hom">
      <td>Homologação</td>
      <td id="h-2020-01-01"></td>
      <td id="h-2020-02-01"></td>
      <td id="h-2020-03-01"></td>
      <td id="h-2020-04-01"></td>
      <td id="h-2020-05-01"></td>
      <td id="h-2020-06-01"></td>
      <td id="h-2020-07-01"></td>
      <td id="h-2020-08-01"></td>
      <td id="h-2020-09-01"></td>
      <td id="h-2020-10-01"></td>
      <td id="h-2020-11-01"></td>
      <td id="h-2020-12-01"></td>
    </tr>

    <tr ref="prod">
      <td>Produção</td>
      <td id="p-2020-01-01"></td>
      <td id="p-2020-02-01"></td>
      <td id="p-2020-03-01"></td>
      <td id="p-2020-04-01"></td>
      <td id="p-2020-05-01"></td>
      <td id="p-2020-06-01"></td>
      <td id="p-2020-07-01"></td>
      <td id="p-2020-08-01"></td>
      <td id="p-2020-09-01"></td>
      <td id="p-2020-10-01"></td>
      <td id="p-2020-11-01"></td>
      <td id="p-2020-12-01"></td>
    </tr>
    <tr>
      <td v-show="visivel" colspan="15" class="box-tratar">
       <slot></slot>
      </td>
    </tr>

    <tr colspan="15" height="10"></tr>
  </tbody>
</template>

<script>
import moment from "moment";
export default {
    props:{
     inicioDev: {
         type: String
     },
         fimDev: {
         type: String
     },
         inicioHom: {
         type: String
     },
         fimHom: {
         type: String
     },
         inicioPro: {
         type: String
     },
         fimPro: {
         type: String
     },
    },
  data() {
    return {
    
      visivel: false,
    };
  },
  methods: {
    hidden() {
      this.visivel = !this.visivel;
    },
    calcular() {
      this.prencherCalenario("dev", this.inicioDev, this.fimDev);
      this.prencherCalenario("hom", this.inicioHom, this.fimHom);
      this.prencherCalenario("prod", this.inicioPro, this.fimPro);
    },
    prencherCalenario(etapa, dtInicio, dtFim) {
      const tr = this.$refs[etapa].querySelectorAll("td");

      for (let index = 0; index < tr.length; index++) {
        if (index == 0) {
          continue;
        }

        const data = new Date(tr[index].id);
        const dataInicio = new Date(dtInicio);
        const dataFim = moment(dtFim).add(1, "days");

        if (data >= dataInicio && data <= dataFim) {
          tr[index].className = "ag";
        } else {
          tr[index].className = "an";
        }
      }
    },
  },
  mounted() {
    this.calcular();
  },
};
</script>

<style>
th {
  border: 1px solid rgb(151, 151, 151);
}

td {
  border: 1px solid rgb(151, 151, 151);
}

.click {
  cursor: pointer;
}

.an {
  background-color: white;
  border: 1px solid rgb(151, 151, 151);
}

.ag {
  background-color: blueviolet;
  border-color: blueviolet;
}
.back {
  background: cover;
  background: #d9e3e7;
  padding: 30px;
  height: 100vh;
}

.box-dash {
  width: 100%;
  background-color: white;
}

.text-projeto {
  color: #3e9efa;
  font-weight: bold;
  font-size: 21px;
}

.text-capacity {
  color: #faba48;
  font-weight: bold;
  font-size: 21px;
}

.icon-more {
  top: -30px;
  position: relative;
  cursor: pointer;
}

.logout-icon {
  width: 40px;
  position: relative;
  top: -10px;
  cursor: pointer;
}
</style>
