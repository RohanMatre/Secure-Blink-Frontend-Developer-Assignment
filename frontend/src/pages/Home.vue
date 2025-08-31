<template>
  <div class="w-full max-w-[6444px] mx-auto">
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import Footer from '@/components/Footer.vue'
</script>
