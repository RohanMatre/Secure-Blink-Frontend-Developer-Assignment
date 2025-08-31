<template>
  <header class="absolute top-0 left-0 z-20 w-full max-w-[6444px] h-full">
    <!-- Logo -->
    <div
      @click="handleRedirectToLogin"
      class="absolute w-[60px] h-[35px] text-left cursor-pointer"
      style="
        top: 75px;
        left: 281px;
        font: normal normal normal 25px/38px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
      "
    >
      Logo
    </div>

    <!-- Nav Menu -->
    <!-- About -->
    <a
      href="#about"
      class="absolute w-[54px] h-[25px] text-left"
      style="
        top: 80px;
        left: 854px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        text-decoration: none;
      "
    >
      About
    </a>

    <!-- Services -->
    <a
      href="#services"
      class="absolute w-[74px] h-[25px] text-left"
      style="
        top: 80px;
        left: 948px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        text-decoration: none;
      "
    >
      Services
    </a>

    <!-- Case Studies -->
    <a
      href="#case-studies"
      class="absolute w-[117px] h-[25px] text-left"
      style="
        top: 80px;
        left: 1063px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        text-decoration: none;
        white-space: nowrap;
      "
    >
      Case Studies
    </a>

    <!-- Testimonials -->
    <a
      href="#testimonials"
      class="absolute w-[113px] h-[25px] text-left"
      style="
        top: 80px;
        left: 1219px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        text-decoration: none;
      "
    >
      Testimonials
    </a>

    <!-- Contact -->
    <a
      href="#contact"
      class="absolute w-[73px] h-[25px] text-left"
      style="
        top: 80px;
        left: 1372px;
        font: normal normal normal 18px/27px Poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        text-decoration: none;
      "
    >
      Contact
    </a>

    <!-- Login Button -->
    <div
      @click="handleRedirectToLogin"
      class="absolute w-[159px] h-[53px] flex items-center justify-center cursor-pointer"
      style="
        top: 67px;
        left: 1480px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 5px;
        opacity: 1;
      "
    >
      <!-- Login Text -->
      <div
        class="text-center"
        style="
          font: normal normal normal 18px/27px Poppins;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
        "
      >
        Login
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRedirectToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

header {
  font-family: 'Poppins', sans-serif;
}

header * {
  font-family: 'Poppins', sans-serif;
}
</style>
