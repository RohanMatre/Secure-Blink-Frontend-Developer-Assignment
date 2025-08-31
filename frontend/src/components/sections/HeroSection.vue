<template>
  <!-- Wrapper makes it responsive -->
  <div class="wrapper">
    <div class="scale-container">
      <section
        class="relative w-[1920px] h-[1080px] overflow-hidden bg-blue"
      >
        <!-- Background Image -->
        <img
          src="@/assets/Home/Mask Group 4.png"
          alt="Background pattern"
          class="absolute inset-0 object-cover w-full h-full opacity-100"
        />

        <!-- Header Component -->
        <Header />

        <!-- Hero Content -->
        <div
          class="absolute w-[707px] h-[197px] text-left"
          style="
            top: 280px;
            left: 226px;
            font: normal normal 600 55px/65px Poppins;
            color: #FFFFFF;
          "
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </div>

        <div
          class="absolute w-[735px] h-[75px] text-left"
          style="
            top: 526px;
            left: 225px;
            font: normal normal 300 20px/30px Poppins;
            color: #9ABFFF;
          "
        >
          Our products are fully custom-made, built with the latest
          technologies and cloud-architectures.
        </div>

        <!-- Get Started Button -->
        <button
          @click="handleRedirectToLogin"
          class="get-started-btn absolute w-[239px] h-[72px] flex items-center justify-center"
          style="
            top: 641px;
            left: 225px;
            background: #FFFFFF;
            border-radius: 40px;
            border: none;
            cursor: pointer;
            font: normal normal normal 25px/31px Muli;
          "
        >
          <span style="font-family: 'Muli', sans-serif; font-weight: 400; font-size: 25px; margin-right: 8px;">
            Get Started
          </span>
          
          <!-- First Arrow -->
          <img
            src="@/assets/Home/arrow-down-sign-to-navigate.png"
            alt="Arrow down"
            class="w-[7px] h-[12px]"
            style="filter: brightness(0);"
          />
          
          <!-- Second Arrow -->
          <img
            src="@/assets/Home/arrow-down-sign-to-navigate.png"
            alt="Arrow down"
            class="w-[7px] h-[12px] ml-1"
            style="filter: brightness(0);"
          />
        </button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'

const router = useRouter()

const handleRedirectToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Muli:wght@400&display=swap');

section {
  font-family: 'Poppins', sans-serif;
}

.get-started-btn,
.get-started-btn span,
section button[style*="border-radius: 40px"],
section button[style*="border-radius: 40px"] * {
  color: #000000 !important;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #f9f9f9;
}

.scale-container {
  width: 1920px;
  height: 1080px;
  transform-origin: center center;
  transform: scale(calc(min(100vw / 1920, 100vh / 1080)));
}
</style>
