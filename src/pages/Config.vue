<template>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 mt-5">
        <div class="card">
          <div class="card-body">
            <div>
              <i class="fas fa-cogs fa-3x" style="color: rgb(0, 176, 90)"></i>
              <h3 class="d-inline ml-3 text-success">Premissas</h3>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div>
                  Ano:
                  <br />
                  <select @change="getAll()" v-model="ano">
                    <option value="2020" selected>2020</option>
                    <option value="2019">2019</option>
                  </select>
                  <br />
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  Horas trabalhadas:
                  <br />
                  <input
                    v-model="horas_trabalhadas"
                    min="5"
                    max="9"
                    type="number"
                    style="width: 80px; text-align: center;"
                  />
                  <br />
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  <div>
                    Ineficiência: {{ ineficiencia }}%
                    <br />
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      style="width: 80px; text-align: center;"
                      v-model="ineficiencia"
                    />
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  <div>
                    Férias (Dias):
                    <br />
                    <input v-model="ferias" type="radio" name="ferias" value="Sim" checked /> Sim
                    <br />
                    <input v-model="ferias" type="radio" name="ferias" value="Não" /> Não
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  Short Friday:
                  <br />

                  <input v-model="short" type="radio" name="short" value="Sim" checked /> Sim
                  <br />
                  <input v-model="short" type="radio" name="short" value="Não" /> Não
                  <br />
                </div>
              </div>

              <div class="col-md-4">
                <div>
                  Dia aniversário:
                  <br />

                  <input v-model="dayoff" type="radio" name="dayoff" value="Sim" checked /> Sim
                  <br />
                  <input v-model="dayoff" type="radio" name="dayoff" value="Não" /> Não
                  <br />
                </div>
              </div>

              <div class="col-md-12">
                <div>
                  <table style="width: 100%" class="mx-auto">
                    <thead>
                      <th colspan="4">Mês</th>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Janeiro</td>
                        <td>
                          <input
                            v-model="jan"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Julho</td>
                        <td>
                          <input
                            v-model="jul"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Fevereiro</td>
                        <td>
                          <input
                            v-model="fev"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Agosto</td>
                        <td>
                          <input
                            v-model="ago"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Março</td>
                        <td>
                          <input
                            v-model="mar"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Setembro</td>
                        <td>
                          <input
                            v-model="set"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Abril</td>
                        <td>
                          <input
                            v-model="abr"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Outubro</td>
                        <td>
                          <input
                            v-model="out"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Maio</td>
                        <td>
                          <input
                            v-model="mai"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Novembro</td>
                        <td>
                          <input
                            v-model="nov"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Junho</td>
                        <td>
                          <input
                            v-model="jun"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                        <td class="pl-2">Dezembro</td>
                        <td>
                          <input
                            v-model="dez"
                            type="number"
                            style="width: 60px; text-align: center;"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button :disabled="btnStatus" :class="btnClass" @click="verificar()">{{ btnName }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    ></div>
  </div>
</body>
</template>

<script>
/* eslint-disable */
export default {
  /* eslint-disable */
  async routerSend(route) {
    this.$router
      .push(`/${route}`)
      .then(response => {
        console.log(route);

        if (route === "login") {
          localStorage.removeItem("nekot");
        }
      })
      .catch(erro => {
        console.log(erro);
      });
  },
  data() {
    return {
      btnClass: "btn btn-cetelem btn-sm mt-4 btn-block",
      btnName: "Salvar",
      btnStatus: false,
      ano: "2020",
      horas_trabalhadas: null,
      ineficiencia: null,
      ferias: null,
      short: null,
      dayoff: null,
      jan: null,
      fev: null,
      mar: null,
      abr: null,
      mai: null,
      jun: null,
      jul: null,
      ago: null,
      set: null,
      out: null,
      nov: null,
      dez: null
    };
  },
  methods: {
    verificar() {
      this.btnName = "Salvando...";
      this.btnStatus = true;
      this.btnClass = "btn btn-secondary btn-sm mt-4 btn-block";

      var meses = [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez"
      ];
      var nMes = 1;
      meses.forEach(element => {
        var data = `${this.ano}-${nMes}-01`;

        var dados = {
          id_mes: data,
          horas_trabalhadas: parseInt(this.horas_trabalhadas),
          ineficiencia: parseFloat(this.ineficiencia) / 100,
          ferias: this.ferias,
          short_friday: this.short,
          niver: this.dayoff,
          dias_uteis: parseInt(this.getValueMes(nMes))
        };

        this.$http
          .post("main/config", dados, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            var ano = response.data.ano.substring(5, 7);

            if (ano == "12") {
              setTimeout(() => {
                this.btnStatus = false;
                this.btnName = "Salvar";
                this.btnClass = "btn btn-cetelem btn-sm mt-4 btn-block";

                this.$toasted.success("Atualizado com sucesso", {
                  theme: "bubble",
                  position: "top-right",
                  icon: "check",
                  duration: 5000
                });
              }, 2000);
            }
          })
          .catch(error => {
            console.log(error);
          });

        nMes++;
      });
    },
    getValueMes(id_mes) {
      if (id_mes == 1) {
        return this.jan;
      } else if (id_mes == 2) {
        return this.fev;
      } else if (id_mes == 2) {
        return this.fev;
      } else if (id_mes == 3) {
        return this.mar;
      } else if (id_mes == 4) {
        return this.abr;
      } else if (id_mes == 5) {
        return this.mai;
      } else if (id_mes == 6) {
        return this.jun;
      } else if (id_mes == 7) {
        return this.jul;
      } else if (id_mes == 8) {
        return this.ago;
      } else if (id_mes == 9) {
        return this.set;
      } else if (id_mes == 10) {
        return this.out;
      } else if (id_mes == 11) {
        return this.nov;
      } else if (id_mes == 12) {
        return this.dez;
      } else {
        return 0;
      }
    },
    getAll() {
      this.$http
        .get(`main/config/${this.ano}`)
        .then(response => {
          var dados = response.data.results;

          this.horas_trabalhadas = dados[0].HORAS_TRABALHADAS;
          this.ineficiencia = (dados[0].INEFICIENCIA * 100).toFixed(2);
          this.ferias = dados[0].FERIAS;
          this.dayoff = dados[0].DIA_ANIVERSARIO;
          this.short = dados[0].SHORT_FRIDAY;

          this.jan = dados[0].DIAS_UTEIS;
          this.fev = dados[1].DIAS_UTEIS;
          this.mar = dados[2].DIAS_UTEIS;
          this.abr = dados[3].DIAS_UTEIS;
          this.mai = dados[4].DIAS_UTEIS;
          this.jun = dados[5].DIAS_UTEIS;
          this.jul = dados[6].DIAS_UTEIS;
          this.ago = dados[7].DIAS_UTEIS;
          this.set = dados[8].DIAS_UTEIS;
          this.out = dados[9].DIAS_UTEIS;
          this.nov = dados[10].DIAS_UTEIS;
          this.dez = dados[11].DIAS_UTEIS;
        })
        .catch(error => {});
    }
  },
  created() {
    this.getAll();
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

.btn {
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
  transition: all 2s;
  font-family: "Roboto Slab", serif;
}

.btn-cetelem {
  color: #fff;
  background-color: rgb(171, 91, 153);
  border-color: rgb(171, 91, 153);
  font-weight: bold;
  letter-spacing: 0.05em;
  border-radius: 7px;
  width: 100%;
  transition: all 2s;
}

.btn-cetelem:hover,
.btn-cetelem:active,
.btn-cetelem:focus {
  background: rgb(171, 91, 153);
  color: #ffffff;
  border-color: rgb(171, 91, 153);
}

.inputNumber {
  width: 70px;
  margin-left: 10px;
  text-align: center;
}

body {
  background-color: rgb(246, 246, 246);
  height: 100vh;
  font-family: "Roboto Slab", serif;
  color: rgb(80, 80, 80);
}

th {
  background: rgb(0, 176, 90);
  color: white;
  text-align: center;
  border: 1px solid rgb(255, 255, 255);
  padding: 0 9px;
}
</style>