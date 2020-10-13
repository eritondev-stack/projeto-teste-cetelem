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
              <select v-model="areaSelect"  @change="porProjetos()" >
                <option>Cartão</option>
                <option>Canais Digitais</option>
                <option>Financeiro</option>
                <option>Operações</option>
                <option>Consignado</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
              <span class="text-price mt-2 ml-3">
                Realizado
              </span>
              <div class="row">
                <div class="col-md-4 d-flex justify-content-center mt-4">
                  <img src="@/assets/check.svg" width="50px"   alt="" srcset="">
                </div>
                          <div class="col-md-8 d-flex justify-content-start mt-4">
                 <div class="text-money">
                   R$ {{ realizado | formatoBr}}
                 </div>
                </div>
              </div>
          </div>
        </div>

               <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
              <span class="text-price mt-2 ml-3">
                Budget
              </span>
              <div class="row">
                <div class="col-md-4 d-flex justify-content-center mt-4">
                  <img src="@/assets/money.svg" width="50px"   alt="" srcset="">
                </div>
                          <div class="col-md-8 d-flex justify-content-start mt-4">
                 <div class="text-money">
                   R$ {{ budgte | formatoBr }}
                 </div>
                </div>
              </div>
          </div>
        </div>

               <div class="col-md-4">
          <div class="box-price mt-5 box-dash d-flex flex-column">
              <span class="text-price mt-2 ml-3">
                Ganho
              </span>
              <div class="row">
                <div class="col-md-4 d-flex justify-content-center mt-4">
                  <img src="@/assets/up-arrow.svg" width="50px"   alt="" srcset="">
                </div>
                          <div class="col-md-8 d-flex justify-content-start mt-4">
                 <div class="text-money">
                   R$ {{ ganho | formatoBr }}
                 </div>
                </div>
              </div>
          </div>
        </div>


        <div class="col-md-6">
                  <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-capacity">Horas</span>
              <span style="color: #ADACAC;"> por plataforma</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more">
               
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div style="width: 90%;" class="mt-3">
               <apexchart type="bar" :options="chartOptionsVertical" :series="seriesVertical"></apexchart>
              </div>
            </div>
          </div>
        </div>


     <div class="col-md-6">
         <div class="box-dash d-flex flex-column mt-3">
            <div class="mt-3 ml-4">
              <span class="text-projeto">Status</span>
              <span style="color: #ADACAC;"> por área</span>
            </div>

            <div class="d-flex justify-content-end">
              <div class="mr-3 icon-more">
         
              </div>
            </div>

            <div class="container-fluid"></div>
            <div class="row">
              <div class="col-md-8">
                <div class="mt-3">
                  <apexchart class="box-content" type="pie" :options="chartOptionsPie" :series="seriesPie" />
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
                    <span style="font-size: 19px;"> {{ producao }}</span>
                    <div>
                      <span style="color: #ADACAC;">Produção</span>
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
                        <circle cx="8" cy="8" r="8" fill="#64DD17" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ homologacao }}</span>
                    <div>
                      <span style="color: #ADACAC;">Homologação</span>
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
                        <circle cx="8" cy="8" r="8" fill="#EF5350" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ onHold }}</span>
                    <div>
                      <span style="color: #ADACAC;">On Hold</span>
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
                        <circle cx="8" cy="8" r="8" fill="#E0E0E0" />
                      </svg>
                    </span>
                    <span style="font-size: 19px;"> {{ levantamento }}</span>
                    <div>
                      <span style="color: #ADACAC;">Levantamento de esforços</span>
                    </div>
                  </div>

                  <div class="mt-2 mb-3">
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
                    <span style="font-size: 19px;"> {{ desenvolvimento }}</span>
                    <div>
                      <span style="color: #ADACAC;">Desenvolvimento</span>
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
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0],
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
        grid:{
show: false
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
        labels: ["Produção", "Homologação", "On Hold", "Levamntamento de esforços", "Desenvolvimento"],
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

    budgte: 0,
    realizado: 0,
    ganho: 0,
    producao: 0,
    homologacao: 0,
    onHold: 0,
    levantamento: 0,
    desenvolvimento: 0,
    areaSelect: "Cartão"
    };

  },
  methods:{
   
   changeTest(){
    
 // eslint-disable-next-line no-console
 console.log(this.areaSelect)
   },

  irDashboard() {
      this.$router.push("/dashboard");
    },
    async porProjetos(){
   const dados = await this.$http.get(`main/dashboard/${this.areaSelect}`)
  
   this.ganho = dados.data.custos[0].GANHOS_PROJETOS 
   this.budgte = dados.data.custos[0].BUDGET 
   this.realizado = dados.data.custos[0].REALIZADO 

   this.desenvolvimento = 0;
   this.producao = 0;
   this.homologacao = 0;
   this.onHold = 0;
   this.levantamento = 0;
   
   dados.data.status.forEach(element => {

   if(element.STATUS == "Produção") {
     this.producao = element.TOTAL
   }

    if(element.STATUS == "On Hold") {
     this.onHold = element.TOTAL
   }

    if(element.STATUS == "Levantamento de esforços") {
     this.levantamento = element.TOTAL
   }

    if(element.STATUS == "Homologação") {
     this.homologacao = element.TOTAL
   }

    if(element.STATUS == "Desenvolvimento") {
     this.desenvolvimento = element.TOTAL
   }
   });


   this.seriesPie = [this.producao, this.homologacao, this.onHold, this.levantamento, this.desenvolvimento]
    
      // eslint-disable-next-line no-console
   console.log(dados.data.plataforma[0].ARQUIRETURA)

   this.seriesVertical = [{data: [
     dados.data.plataforma[0].COBOL,
         dados.data.plataforma[0].API,
             dados.data.plataforma[0].JAVA,
                 dados.data.plataforma[0].C,
                     dados.data.plataforma[0].ARQUIRETURA,
                         dados.data.plataforma[0].SHELLSCRIPT,
                             dados.data.plataforma[0].PMO,
                                 dados.data.plataforma[0].PYTHON,
                                     dados.data.plataforma[0].REQUISITOS,
                                     dados.data.plataforma[0].IFRAESTRUTURA,
                                     dados.data.plataforma[0].SEGURANCA,
                                     dados.data.plataforma[0].HOMOLOGACAO,
     
   ] }]

  
  
    }
  },

  created(){

    this.porProjetos()

  }
};
</script>

<style>
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

.text-area {
  font-size: 20px;
  color: #707070;
}

.box-price{
  background-color: white;
  height: 150px;
}

.text-price{
    color: #adafb1;
  font-weight: bold;
  font-size: 21px;
}

.text-money{
      color: #636363;
  font-size: 25px;
}
</style>
