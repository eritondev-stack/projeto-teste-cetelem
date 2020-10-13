<template>
  <div class="main">
    <div class="bordar d-flex">
      <div>
        <i :class="icon"></i>
      </div>
      <input
        type="password"
        :id="id"
        :placeholder="placeholder"
        v-on:input="updateValue($event.target.value)"
      />
    </div>
    <span v-if="validar" class="spanzin">{{ erroMsg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: false,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
    min: {
      type: Number,
    },
    erroMsg: {
      type: String,
    },
  },
  data() {
    return {
      validar: false,
    };
  },
  methods: {
    updateValue(value) {
      if (value.length >= this.min) {
        this.validar = false;
      } else {
        this.validar = true;
      }
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bitter&display=swap");

.main {
  font-family: "Bitter", serif;
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

input {
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  color: #707070;
  margin: 5px 5px 5px 15px; /* top, left, bottom, rigth */
}

.bordar {
  border: none;
  border-radius: 10px;
  background-color: #e6e6e6;
}

.spanzin {
  font-size: 12px;
  color: red;
  height: 200px;
}

.icone-tm {
  text-align: center;
  font-size: 25px;
  margin-top: 3px;
  margin-left: 6px;
  color: #707070;
}
</style>>


