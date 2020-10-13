
<template>
  <div class="back">
    <div class="container main">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end">
          <div @click="calcular()">
            <img class="logout-icon" src="@/assets/logout.svg" alt />
          </div>
        </div>
        <div class="col-md-12">
          <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-capacity">Calendarização</span>
              <span style="color: #adacac"> </span>
            </div>

            <div>
              <div>Desenvolvimento:</div>
              <input type="text" placeholder="inicio" v-model="inicioDev" />
              <input type="text" placeholder="fim" v-model="fimDev" />
            </div>

            <div>
              <div>Homologação:</div>
              <input type="text" placeholder="inicio" v-model="inicioHom" />
              <input type="text" placeholder="fim" v-model="fimHom" />
            </div>

            <div>
              <div>Produção:</div>
              <input type="text" placeholder="inicio" v-model="inicioPro" />
              <input type="text" placeholder="fim" v-model="fimPro" />
            </div>

            <div>
              <table>
                <thead>
                  <th>Projeto</th>
                  <th>Progressão</th>
                  <th>Etapa</th>
                  <th>Jan</th>
                  <th>Fev</th>
                  <th>Mar</th>
                  <th>Abr</th>
                  <th>Mai</th>
                  <th>Jun</th>
                  <th>Jul</th>
                  <th>Ago</th>
                  <th>Set</th>
                  <th>Out</th>
                  <th>Nov</th>
                  <th>Dez</th>
                </thead>

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
                      <div>asdasd</div>
                    </td>
                  </tr>

                  <tr colspan="15" height="10"></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      inicioDev: "2020-01-01",
      fimDev: "2020-12-01",
      inicioHom: "2020-01-01",
      fimHom: "2020-12-01",
      inicioPro: "2020-01-01",
      fimPro: "2020-12-01",
      visivel: false
    };
  },
  methods: {
    hidden() {
      this.visivel = !this.visivel
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
