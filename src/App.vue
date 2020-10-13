<template>
    <div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {

};
</script>



<style lang="scss" scoped>


@keyframes slide-in {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-5px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.1s ease;
}

.slide-leave-active {
  animation: slide-out 0.1s ease;
}


</style>
