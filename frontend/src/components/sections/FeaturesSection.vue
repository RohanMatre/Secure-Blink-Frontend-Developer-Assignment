<template>
  <section
    id="features"
    class="relative"
    style="margin-top: 217px; width: 100%; min-height: 1197px; padding: 0; background: rgba(14, 119, 255, 0.05);"
  >
    <!-- Blue Background Overlay -->
    <div
      class="absolute inset-0"
      style="
        background: #0e77ff 0% 0% no-repeat padding-box;
        border: 1px solid #707070;
        opacity: 0.02;
      "
    ></div>

    <!-- Content Container with absolute positioning -->
    <div class="relative w-full h-full">
      <!-- 1. Core Technologies Title -->
      <h2
        class="absolute"
        style="
          top: 201px;
          left: 771px;
          width: 378px;
          height: 56px;
          text-align: left;
          font: normal normal 600 40px/40px Poppins;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Core Technologies
      </h2>

      <!-- 2. Description Text -->
      <p
        class="absolute"
        style="
          top: 297px;
          left: 520px;
          width: 881px;
          height: 94px;
          text-align: center;
          font: normal normal 300 18px/32px Poppins;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
        "
      >
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex
        odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque
        habitant.
      </p>

      <!-- 3. Feature Rectangle Background -->
      <div
        class="absolute"
        style="
          top: 427px;
          left: 613px;
          width: 694px;
          height: 81px;
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 40px 60px #0e77ff26;
          border-radius: 72px;
          opacity: 1;
        "
      ></div>

      <!-- Development Tab Background (Left and Right Borders Only) -->
      <div
        class="absolute"
        style="
          top: 439px;
          left: 841px;
          width: 239px;
          height: 61px;
          background: transparent;
          border-left: 2px solid #000000;
          border-right: 2px solid #000000;
          border-radius: 0;
          opacity: 1;
        "
      ></div>

      <!-- 4. Design Tab -->
      <button
        @click="selectedTab = 'design'"
        class="absolute"
        style="
          top: 451px;
          left: 687px;
          width: 68px;
          height: 28px;
          text-align: left;
          font: normal normal normal 20px/50px Poppins;
          letter-spacing: 0px;
          opacity: 1;
          border: none;
          background: transparent;
          cursor: pointer;
        "
        :style="{ color: selectedTab === 'design' ? '#0E77FF' : '#000000' }"
      >
        Design
      </button>

      <!-- 5. Development Tab -->
      <button
        @click="selectedTab = 'development'"
        class="absolute"
        style="
          top: 451px;
          left: 841px;
          width: 239px;
          height: 45px;
          text-align: center;
          font: normal normal normal 20px/50px Poppins;
          letter-spacing: 0px;
          opacity: 1;
          border: none;
          background: transparent;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        "
        :style="{
          color: selectedTab === 'development' ? '#0E77FF' : '#000000',
        }"
      >
        Development
      </button>

      <!-- 6. Marketing Tab -->
      <button
        @click="selectedTab = 'marketing'"
        class="absolute"
        style="
          top: 451px;
          left: 1135px;
          width: 99px;
          height: 28px;
          text-align: left;
          font: normal normal normal 20px/50px Poppins;
          letter-spacing: 0px;
          opacity: 1;
          border: none;
          background: transparent;
          cursor: pointer;
        "
        :style="{ color: selectedTab === 'marketing' ? '#0E77FF' : '#000000' }"
      >
        Marketing
      </button>

      <!-- Technology Icons Grid -->
      <!-- First Row (7 icons) -->
      <div
        v-for="(tech, index) in firstRowTechnologies"
        :key="tech.id"
        class="absolute"
        :style="{
          top: '669px',
          left: 282 + index * (140 + 50) + 'px',
          width: '140px',
          height: '140px',
          background: tech.highlighted
            ? '#0E77FF 0% 0% no-repeat padding-box'
            : '#FFFFFF 0% 0% no-repeat padding-box',
          border: tech.highlighted ? '2px solid #0E77FF' : '1px solid #E5E5E5',
          borderRadius: '16px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <img
          :src="tech.icon"
          :alt="tech.name"
          style="width: 92px; height: 82px; object-fit: contain"
        />
      </div>

      <!-- Second Row (6 icons) -->
      <div
        v-for="(tech, index) in secondRowTechnologies"
        :key="tech.id"
        class="absolute"
        :style="{
          top: '860px',
          left: 377 + index * (140 + 50) + 'px',
          width: '140px',
          height: '140px',
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          border: tech.highlighted ? '2px solid #0E77FF' : '1px solid #E5E5E5',
          borderRadius: '16px',
          opacity: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }"
        :class="tech.highlighted ? 'bg-blue-600' : 'bg-white'"
      >
        <img
          :src="tech.icon"
          :alt="tech.name"
          style="width: 92px; height: 80px; object-fit: contain"
        />
      </div>

      <!-- Path 37660 Image -->
      <div 
        class="absolute" 
        style="
          top: 1196px; 
          left: 336px;
          width: 183px;
          height: 158px;
          background: transparent url('/src/assets/Home/Path 37660.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: "/src/assets/Home/React-icon.png",
    highlighted: false,
  },
  {
    id: 2,
    name: "AWS",
    icon: "/src/assets/Home/Amazon_Web_Services_Logo.png",
    highlighted: true,
  },
  {
    id: 3,
    name: "Cloud",
    icon: "/src/assets/Home/Google_Cloud_Logo.png",
    highlighted: false,
  },
  {
    id: 4,
    name: "Redux",
    icon: "/src/assets/Home/redux-logo.png",
    highlighted: false,
  },
  {
    id: 5,
    name: "JavaScript",
    icon: "/src/assets/Home/Path 37520.png",
    highlighted: false,
  },
  {
    id: 6,
    name: "Salesforce",
    icon: "/src/assets/Home/g10.png",
    highlighted: false,
  },
  {
    id: 7,
    name: "AWS",
    icon: "/src/assets/Home/Amazon_Web_Services_Logo-1.png",
    highlighted: false,
  },
  {
    id: 8,
    name: "Salesforce",
    icon: "/src/assets/Home/g10.png",
    highlighted: false,
  },
  {
    id: 9,
    name: "Redux",
    icon: "/src/assets/Home/redux-logo.png",
    highlighted: false,
  },
  {
    id: 10,
    name: "Node.js",
    icon: "/src/assets/Home/Mask Group 3.png",
    highlighted: false,
  },
  {
    id: 11,
    name: "Firebase",
    icon: "/src/assets/Home/_Path_3.png",
    highlighted: false,
  },
  {
    id: 12,
    name: "React",
    icon: "/src/assets/Home/React-icon-1.png",
    highlighted: false,
  },
  {
    id: 13,
    name: "JavaScript",
    icon: "/src/assets/Home/Path 37520.png",
    highlighted: false,
  },
];

const firstRowTechnologies = computed(() => technologies.slice(0, 7));
const secondRowTechnologies = computed(() => technologies.slice(7, 13));

const selectedTab = ref("development");
</script>
