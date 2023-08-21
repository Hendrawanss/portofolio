<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Menu, Minus } from '@element-plus/icons-vue'

const menuShow = ref(false)
const props = defineProps(['page'])

const toggleNavbar = () => {
    menuShow.value = !menuShow.value
}

</script>

<template>
  <div class="sticky top-0 z-10 flex flex-wrap bg-slate-700 md:bg-slate-800 mb-2 md:mb-0">
    <div class="w-full">
      <nav class="relative flex flex-wrap items-center justify-between p-3 rounded">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
          <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
          >
            <a
              class="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="/"
            >
              {{ props.page }}
            </a>
            <button
              class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              @click="toggleNavbar()"
            >
                <el-icon>
                    <Menu v-if="!menuShow"/>
                    <Minus v-else="menuShow"/>
                </el-icon>
            </button>
          </div>
          <div
            :class="{hidden: !menuShow, flex: menuShow}"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="nav-item">
                <RouterLink
                  to="/"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >Home</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/experiences"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >Experience</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink
                  to="/projects"
                  class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >Portofolio</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
