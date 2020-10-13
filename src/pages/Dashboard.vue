<template>
  <div class="back">
    <div class="container main">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end">
              <div @click="irLogin()">
            <img class="logout-icon" src="@/assets/logout.svg" alt />
          </div>
        </div>
        <div class="col-md-6">
                <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-capacity">Capacity</span>
              <span style="color: #ADACAC;"> por mês</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more" @click="irCapacity()">
                <img src="@/assets/more.svg" alt srcset />
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 d-flex justify-content-center">
                <div class="mt-2">
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
                  <span style="font-size: 19px;"> {{ consolidoExterno | formatoBr }}</span>
                  <div>
                    <span style="color: #ADACAC;">Externo</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex justify-content-center">
                <div class="mt-2">
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
                  <span style="font-size: 19px;"> {{ consolidoInterno | formatoBr }}</span>
                  <div>
                    <span style="color: #ADACAC;">Interno</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div style="width: 82%;">
                <apexchart type="bar" :options="optionsITOrca" :series="seriesITOrca" />
              </div>
            </div>
          </div>
 <!--          <div>
            <img style="width: 100%" src="@/assets/estatico.svg" alt />
          </div> -->
        </div>

        <div class="col-md-6 mt-3">
          <div class="box-dash d-flex flex-column">
            <div class="mt-3 ml-4">
              <span class="text-projeto">Projetos</span>
              <span style="color: #ADACAC;"> por área</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more" @click="irProjetos()">
                <img src="@/assets/more.svg" alt srcset />
              </div>
            </div>

            <div class="container-fluid"></div>
            <div class="row">
              <div class="col-md-8">
                <div class="mt-3">
                  <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
                </div>
              </div>
              <div class="col-md-4">
                <div class="d-flex flex-column">
                  <div class="mt-2">
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
                    <span style="font-size: 19px;"> {{ cartao }}</span>
                    <div>
                      <span style="color: #ADACAC;">Cartão</span>
                    </div>
                  </div>

                  <div class="mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" fill="#66E7A5" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ canaisDigiatis }}</span>
                    <div>
                      <span style="color: #ADACAC;">Canais Digitais</span>
                    </div>
                  </div>

                  <div class="mt-2">
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
                    <span style="font-size: 19px;"> {{ financeiro }}</span>
                    <div>
                      <span style="color: #ADACAC;">Financeiro</span>
                    </div>
                  </div>

                  <div class="mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" fill="#F05F75" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ operacao }}</span>
                    <div>
                      <span style="color: #ADACAC;">Operações</span>
                    </div>
                  </div>

                  <div class="mt-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" fill="#8973D6" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ consignado }}</span>
                    <div>
                      <span style="color: #ADACAC;">Consignado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      series: [0, 0, 0, 0, 0],
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
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "Externo",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      chartOptionsVertical: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
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
        labels: ["Aprov", "Não Env", "Pendente", "Rejeitado", "asd"],
        colors: ["#03A9F4", "#64DD17", "#EF5350", "#E0E0E0", "#8973D6"],
        legend: {
          position: "top",
          show: true,
          offsetY: 15,
        },
        chart: {
          offsetY: 15,
        },
      },
        cartao: 0,
  canaisDigiatis: 0,
  financeiro: 0,
  operacao: 0,
  consignado: 0,
  consolidoInterno: 0,
  consolidoExterno: 0,
    };
    
  },

  methods:{

    irProjetos() {
      this.$router.push("/projetos");
    },
        irCapacity() {
      this.$router.push("/capacity");
    },
            irLogin() {
      this.$router.push("/login");
    },

  },
 async created(){
    const dados = await this.$http.get("main/dashboard")
    // eslint-disable-next-line no-console
    //console.log(dados.data.projetosConsolidado[0].TOTAL)
   
    this.cartao = dados.data.projetosConsolidado[0].TOTAL
    this.financeiro = dados.data.projetosConsolidado[1].TOTAL
    this.consignado = dados.data.projetosConsolidado[3].TOTAL
    this.canaisDigiatis = dados.data.projetosConsolidado[2].TOTAL
    this.operacao = dados.data.projetosConsolidado[4].TOTAL
    this.series = [34.8, 21.7, 17.4, 13, 13]
    // eslint-disable-next-line no-console
    this.consolidoInterno = dados.data.capacityConsolidado[0].HORAS
    this.consolidoExterno = dados.data.capacityConsolidado[1].HORAS
 
    this.seriesITOrca = [
        {
          name: "Interno",
          data: [
            dados.data.capacityMes[0].HORAS, 
             dados.data.capacityMes[2].HORAS, 
              dados.data.capacityMes[4].HORAS, 
               dados.data.capacityMes[6].HORAS, 
                dados.data.capacityMes[8].HORAS, 
                 dados.data.capacityMes[10].HORAS, 
                  dados.data.capacityMes[12].HORAS, 
                   dados.data.capacityMes[14].HORAS, 
                    dados.data.capacityMes[16].HORAS, 
                     dados.data.capacityMes[18].HORAS, 
                      dados.data.capacityMes[20].HORAS, 
                       dados.data.capacityMes[22].HORAS, 
          ],
        },

        {
          name: "Externo",
          data: [
                        dados.data.capacityMes[1].HORAS, 
             dados.data.capacityMes[3].HORAS, 
              dados.data.capacityMes[5].HORAS, 
               dados.data.capacityMes[7].HORAS, 
                dados.data.capacityMes[9].HORAS, 
                 dados.data.capacityMes[11].HORAS, 
                  dados.data.capacityMes[13].HORAS, 
                   dados.data.capacityMes[15].HORAS, 
                    dados.data.capacityMes[17].HORAS, 
                     dados.data.capacityMes[19].HORAS, 
                      dados.data.capacityMes[21].HORAS, 
                       dados.data.capacityMes[23].HORAS, 
            ],
        },
      ]
  }
};
</script>

<style>
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

.logout-icon{
  width: 40px;
  position: relative;
   top: -10px;
  cursor: pointer;
}
</style>
