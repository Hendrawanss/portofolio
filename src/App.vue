<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderView from './views/layouts/Header.vue'
import FooterView from './views/layouts/Footer.vue'

const pageName = ref('Home')

const setPageName = (name) =>{
  pageName.value = name
}
</script>

<template>
  <div class="rounded-lg p-3">
    <HeaderView :page="pageName"/>

    <RouterView @pageName="setPageName" v-slot="{ Component }">
      <Transition name="slide-fade">
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <FooterView />
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
