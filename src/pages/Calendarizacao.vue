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

                <projeto
                  inicioDev="2020-01-01"
                  fimDev="2020-07-01"
                  inicioHom="2020-02-01"
                  fimHom="2020-09-01"
                  inicioPro="2020-06-01"
                  fimPro="2020-12-01"
                >
                  <div class="row">
                    <div class="col-4">
                      <h3>Estão no Projeto</h3>
                      <draggable
                        class="dragArea list-group"
                        :list="geral.list1"
                        group="people"
                        @change="log"
                      >
                        <div
                          class="list-group-item"
                          v-for="element in geral.list1"
                          :key="element.id"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>

                    <div class="col-4">
                      <h3>Fora do projeto</h3>
                      <draggable
                        class="dragArea list-group"
                        :list="geral.list2"
                        group="people"
                         @change="log"
                      >
                        <div
                          class="list-group-item"
                          v-for="element in geral.list2"
                          :key="element.id"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>
                  </div>
                </projeto>

                <projeto
                  inicioDev="2020-03-01"
                  fimDev="2020-07-01"
                  inicioHom="2020-04-01"
                  fimHom="2020-05-01"
                  inicioPro="2020-06-01"
                  fimPro="2020-12-01"
                >
                  <h2>Juarez</h2>
                </projeto>

                <projeto
                  inicioDev="2020-03-01"
                  fimDev="2020-07-01"
                  inicioHom="2020-04-01"
                  fimHom="2020-05-01"
                  inicioPro="2020-06-01"
                  fimPro="2020-12-01"
                >
                           <div class="row">
                    <div class="col-4">
                      <h3>Estão no Projeto</h3>
                      <draggable
                        class="dragArea list-group"
                        :list="geral.list1"
                        group="people"
                        @change="log"
                      >
                        <div
                          class="list-group-item"
                          v-for="element in geral.list1"
                          :key="element.id"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>

                    <div class="col-4">
                      <h3>Fora do projeto</h3>
                      <draggable
                        class="dragArea list-group"
                        :list="geral.list2"
                        group="people"
                         @change="log"
                      >
                        <div
                          class="list-group-item"
                          v-for="element in geral.list2"
                          :key="element.id"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>
                  </div>
                </projeto>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projeto from "../components/projetos";
import draggable from "vuedraggable";

export default {
  order: 4,
  components: {
    projeto,
    draggable,
  },
  data() {
    return {
      geral: {
        list1: [
          { name: "Jesus", id: 1 },
          { name: "Paul", id: 2 },
          { name: "Peter", id: 3 },
        ],
        list2: [
          { name: "Luc", id: 5 },
          { name: "Thomas", id: 6 },
          { name: "John", id: 7 },
        ],
      },
    };
  },
  methods: {
    log() {
      // eslint-disable-next-line no-console
      console.log(this.geral.list1);
       // eslint-disable-next-line no-console
       console.log(this.geral.list2);
    },
  },
  watch: {
    geral() {
      // eslint-disable-next-line no-console
      console.log(this.list1);
    },
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
