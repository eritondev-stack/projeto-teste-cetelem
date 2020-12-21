<template>
  <div class="back">
    <div class="container main">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end">
          <div @click="irDashboard()">
            <img class="logout-icon" src="@/assets/logout.svg" alt />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="d-flex flex-row">
            <span class="text-area">Área:</span>

            <div class="box-select ml-3">
              <select>
                <option value>Cartão</option>
                <option value>Canais Digitais</option>
                <option value>Financeiro</option>
                <option value>Operações</option>
                <option value>Consignado</option>
              </select>
            </div>

            <div
              @click="show()"
              class="ml-5 button-reserv justify-content-center"
            >
              Adicionar
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
            <span class="text-price mt-2 ml-3"> Externo </span>
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center mt-4">
                <img
                  src="@/assets/broken-link.svg"
                  width="50px"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="col-md-8 d-flex justify-content-start mt-4">
                <div class="text-money">47%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
            <span class="text-price mt-2 ml-3"> Interno </span>
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center mt-4">
                <img src="@/assets/global.svg" width="50px" alt="" srcset="" />
              </div>
              <div class="col-md-8 d-flex justify-content-start mt-4">
                <div class="text-money">55%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
            <span class="text-price mt-2 ml-3"> Horas </span>
            <div class="row">
              <div class="col-md-4 d-flex justify-content-center mt-4">
                <img src="@/assets/clock.svg" width="50px" alt="" srcset="" />
              </div>
              <div class="col-md-8 d-flex justify-content-start mt-4">
                <div class="text-money">1.000</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-capacity">Horas</span>
              <span style="color: #adacac"> por plataforma</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more"></div>
            </div>
            <div class="d-flex justify-content-center">
              <div style="width: 90%" class="mt-3">
                <apexchart
                  type="bar"
                  @click="dataPointSelectionHandler"
                  :options="chartOptionsVertical"
                  :series="seriesVertical"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-projeto">Horas</span>
              <span style="color: #adacac"> por área</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more"></div>
            </div>

            <div class="row">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="mt-5">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" fill="#FABA48" />
                    </svg>
                  </span>
                  <span style="font-size: 19px">15</span>
                  <div>
                    <span style="color: #adacac">Externo</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="mt-5">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" fill="#3e9efa" />
                    </svg>
                  </span>
                  <span style="font-size: 19px">15</span>
                  <div>
                    <span style="color: #adacac">Interno</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div style="width: 90%">
                <apexchart
                  type="bar"
                  :options="optionsITOrca"
                  :series="seriesITOrca"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>\

    <modal name="my-first-modal" transition="scale">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mt-3 ml-4">
              <span class="text-projeto">Contratar</span>
              <span style="color: #adacac"> </span>
            </div>
          </div>

          <div class="col-md-12 d-flex flex-column align-items-center">
            <div class="d-flex flex-row mt-2">
              <span class="text-area">Área:</span>
              <div class="box-select-s ml-3">
                <select>
                  <option value>Cartão</option>
                  <option value>Canais Digitais</option>
                  <option value>Financeiro</option>
                  <option value>Operações</option>
                  <option value>Consignado</option>
                </select>
              </div>
            </div>

            <div class="d-flex flex-row mt-2">
              <span class="text-area">Contrato:</span>
              <div class="box-select-s ml-3">
                <select>
                  <option value>Externo</option>
                  <option value>Interno</option>
                </select>
              </div>
            </div>

            <div class="d-flex flex-row mt-2">
              <span class="text-area">Mês:</span>
              <div class="box-select-s ml-3">
                <select>
                  <option value>Jan</option>
                  <option value>Fev</option>
                </select>
              </div>
            </div>

            <div class="d-flex flex-row mt-2 mb-4">
              <span class="text-area">Horas:</span>
              <div class="box-input-s ml-3">
                <InputCustom
                  v-model="teste"
                  label
                  placeholder="Ex: 12"
                  :min="11"
                  erroMsg
                />
              </div>
            </div>
          </div>

          <div class="col-md-6 d-flex justify-content-end">
            <div @click="hide()" class="button-cancelar justify-content-center">
              Cancelar
            </div>
          </div>

          <div class="col-md-6 d-flex justify-content-start">
            <div
              @click="show()"
              class="button-contratar justify-content-center"
            >
              Contratar
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import InputCustom from "../components/InputCustomValor";
export default {
  components: {
    InputCustom,
  },
  data() {
    return {
      teste: "",
      series: [34.8, 21.7, 17.4, 13, 13],
      chartOptions: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                show: true,
                label: "Total",
                // eslint-disable-next-line no-unused-vars
                formatter: function (w) {
                  // eslint-disable-next-line no-console
                  console.log(w);
                  // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                  return 23;
                },
              },
            },
          },
        },
        labels: [
          "Cartão",
          "Canais Digitais",
          "Financeiro",
          "Operações",
          "Consignado",
        ],
      },
      seriesITOrca: [
        {
          name: "Interno",
          data: [426, 372, 426, 534, 534, 660, 426, 390, 570, 480, 552, 426],
        },
        {
          name: "Externo",
          data: [478, 421, 478, 592, 592, 725, 478, 440, 630, 535, 611, 478],
        },
      ],

      optionsITOrca: {
        colors: ["#03A9F4", "#FABA48"],
        chart: {
          type: "bar",
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        xaxis: {
          type: "string",
          categories: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "top",
          show: false,
          offsetY: 35,
        },
        fill: {
          opacity: 1,
        },
      },

      seriesVertical: [
        {
          data: [10, 10, 10, 20, 40, 180, 30, 100, 150, 30, 200, 150],
        },
      ],
      chartOptionsVertical: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "COBOL",
            "API",
            "JAVA",
            "C++",
            "ARQUITETURA",
            "SHELLSCRIPT",
            "PMO",
            "PYTHON",
            "REQUISITOS",
            "INFRAESTRTURA",
            "SEGURANÇA DA INF",
            "HOMOLOGACAO",
          ],
        },
      },
      seriesPie: [10, 20, 10, 30, 30],
      chartOptionsPie: {
        labels: [
          "Produção",
          "Homologação",
          "On Hold",
          "Levamntamento de esforços",
          "Desenvolvimento",
        ],
        colors: ["#03A9F4", "#64DD17", "#EF5350", "#E0E0E0", "#8973D6"],
        legend: {
          position: "top",
          show: false,
          offsetY: 15,
        },
        chart: {
          offsetY: 15,
        },
      },
    };
  },
  methods: {
    dataPointSelectionHandler(e, chartContext, config) {
      var index = config.dataPointIndex;

      if (index == -1) {
        return;
      }
      // eslint-disable-next-line no-console
      console.log(index);
      // eslint-disable-next-line no-console
      alert(config.config.xaxis.categories[index]);
    },
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
    irDashboard() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style>

.vm--overlay{

    background: rgba(238, 236, 236, 0.5) !important;
}

.vm--modal{
  z-index: 1000 !important;
  background: white !important;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s;
}
.scale-enter,
.scale-leave-active {
  opacity: 0;
  transform: scale(0.3) translateY(24px); 
}                                                                                                   



 .back {
  background: cover;
  background: #d9e3e7;
  padding: 30px;
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

textarea:focus,
input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

textarea,
input,
select {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

select {
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  color: #707070;
  margin: 5px 5px 5px 15px; /* top, left, bottom, rigth */
}

.box-select {
  width: 200px;
  background-color: white;
  font-size: 20px;
}

.box-select-s {
  width: 200px;
  background-color: rgb(238, 236, 236);
  font-size: 20px;
  border-radius: 10px;
}

.box-input-s {
  width: 200px;
  background-color: rgb(238, 236, 236);
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
}

.text-area {
  font-size: 20px;
  color: #707070;
}

.box-price {
  background-color: white;
  height: 150px;
}

.text-price {
  color: #adafb1;
  font-weight: bold;
  font-size: 21px;
}

.text-money {
  color: #636363;
  font-size: 25px;
}

.button-reserv {
  background: #aa478c;
  color: #ffffff;
  border-color: #aa478c;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}

.button-reserv:hover {
  background: #943477;
  color: #ffffff;
  border-color: #943477;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}

.button-cancelar {
  background: #ee534f;
  color: #ffffff;
  border-color: #ee534f;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}

.button-cancelar:hover {
  background: #ee534f;
  color: #ffffff;
  border-color: #ee534f;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}

.button-contratar {
  background: #8873d6;
  color: #ffffff;
  border-color: #8873d6;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}

.button-contratar:hover {
  background: #8873d6;
  color: #ffffff;
  border-color: #8873d6;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
}
</style>
