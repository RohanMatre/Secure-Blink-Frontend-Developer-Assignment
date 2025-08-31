<template>
  <section id="services" class="relative w-full h-[889px]" style="background: rgba(14, 119, 255, 0.05);">
    <!-- Blue Border on Right -->
    <div
      class="absolute z-[1]"
      style="
        top: 0;
        right: 0;
        width: 502px;
        height: 100%;
        background: #0e77ff 0% 0% no-repeat padding-box;
        opacity: 1;
      "
    ></div>

    <div class="relative w-full h-full">
      <!-- Left Content -->
      <div class="relative">
        <!-- Arrows (same as About Us) -->
        <!-- Outer Light Blue Right-Facing Triangle -->
        <div
          class="absolute z-[10]"
          style="
            top: 249px;
            left: 280px;
            width: 0;
            height: 0;
            border-top: 23.5px solid transparent;
            border-bottom: 23.5px solid transparent;
            border-left: 38px solid rgba(14, 119, 255, 0.1);
            transform: rotate(2deg);
          "
        ></div>

        <!-- Inner Blue Triangle -->
        <img
          src="../../assets/Home/Path 37483.png"
          alt="Arrow decoration"
          class="absolute z-[11]"
          style="
            top: 260px;
            left: 287px;
            width: 19px;
            height: 24px;
            transform: rotate(-12deg);
          "
        />

        <!-- OUR SERVICES Text -->
        <div
          class="absolute z-[12]"
          style="
            top: 249px;
            left: 325px;
            text-align: left;
            font: normal normal 600 25px/50px Poppins;
            letter-spacing: 0px;
            color: #0e77ff;
            opacity: 1;
          "
        >
          OUR SERVICES
        </div>
        
        <!-- Transforming your ideas into Reality -->
        <h2
          class="absolute z-[12]"
          style="
            top: 295px;
            left: 280px;
            width: 500px;
            text-align: left;
            font: normal normal 600 40px/50px Poppins;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Transforming your ideas into Reality
        </h2>

        <!-- Service Tags -->
        <div class="absolute z-[12]" style="top: 436px; left: 280px;">
          <!-- Web Development -->
          <button
            @click="selectedService = 'web'"
            class="absolute"
            :style="
              selectedService === 'web'
                ? 'background: #0E77FF; border-radius: 16px;'
                : 'background: #16B2FF17; border-radius: 16px;'
            "
            style="
              top: 0px;
              left: 0px;
              width: 239px;
              height: 61px;
              border-radius: 16px;
              opacity: 1;
              border: none;
              cursor: pointer;
            "
          >
            <span
              :style="
                selectedService === 'web'
                  ? 'color: #FFFFFF;'
                  : 'color: #0E77FF;'
              "
              style="
                text-align: left;
                font: normal normal 600 20px/50px Poppins;
                letter-spacing: 0px;
                opacity: 1;
              "
            >
              Web Development
            </span>
          </button>

          <!-- Mobile Development -->
          <button
            @click="selectedService = 'mobile'"
            class="absolute"
            :style="
              selectedService === 'mobile'
                ? 'background: #0E77FF; border-radius: 16px;'
                : 'background: #16B2FF17; border-radius: 16px;'
            "
            style="
              top: 0px;
              left: 275px;
              width: 239px;
              height: 61px;
              border-radius: 16px;
              opacity: 1;
              border: none;
              cursor: pointer;
            "
          >
            <span
              :style="
                selectedService === 'mobile'
                  ? 'color: #FFFFFF;'
                  : 'color: #0E77FF;'
              "
              style="
                text-align: left;
                font: normal normal 600 20px/50px Poppins;
                letter-spacing: 0px;
                opacity: 1;
              "
            >
              Mobile Development
            </span>
          </button>

          <!-- UI/UX Designing (Selected) -->
          <button
            @click="selectedService = 'uiux'"
            class="absolute"
            :style="
              selectedService === 'uiux'
                ? 'background: #0E77FF; border-radius: 16px;'
                : 'background: #16B2FF17; border-radius: 16px;'
            "
            style="
              top: 80px;
              left: 0px;
              width: 221px;
              height: 61px;
              border-radius: 16px;
              opacity: 1;
              border: none;
              cursor: pointer;
            "
          >
            <span
              :style="
                selectedService === 'uiux'
                  ? 'color: #FFFFFF;'
                  : 'color: #0E77FF;'
              "
              style="
                text-align: left;
                font: normal normal 600 20px/50px Poppins;
                letter-spacing: 0px;
                opacity: 1;
              "
            >
              UI/UX Designing
            </span>
          </button>

          <!-- Branding -->
          <button
            @click="selectedService = 'branding'"
            class="absolute"
            :style="
              selectedService === 'branding'
                ? 'background: #0E77FF; border-radius: 16px;'
                : 'background: #16B2FF17; border-radius: 16px;'
            "
            style="
              top: 80px;
              left: 240px;
              width: 160px;
              height: 61px;
              border-radius: 16px;
              opacity: 1;
              border: none;
              cursor: pointer;
            "
          >
            <span
              :style="
                selectedService === 'branding'
                  ? 'color: #FFFFFF;'
                  : 'color: #0E77FF;'
              "
              style="
                text-align: left;
                font: normal normal 600 20px/50px Poppins;
                letter-spacing: 0px;
                opacity: 1;
              "
            >
              Branding
            </span>
          </button>

          <!-- Cloud Technology -->
          <button
            @click="selectedService = 'cloud'"
            class="absolute"
            :style="
              selectedService === 'cloud'
                ? 'background: #0E77FF; border-radius: 16px;'
                : 'background: #16B2FF17; border-radius: 16px;'
            "
            style="
              top: 160px;
              left: 0px;
              width: 239px;
              height: 61px;
              border-radius: 16px;
              opacity: 1;
              border: none;
              cursor: pointer;
            "
          >
            <span
              :style="
                selectedService === 'cloud'
                  ? 'color: #FFFFFF;'
                  : 'color: #0E77FF;'
              "
              style="
                text-align: left;
                font: normal normal 600 20px/50px Poppins;
                letter-spacing: 0px;
                opacity: 1;
              "
            >
              Cloud Technology
            </span>
          </button>
        </div>
      </div>

      <!-- Right Service Card -->
      <!-- 1. Rectangle -->
      <div
        class="absolute z-[0]"
        style="
          top: 146px;
          left: 1021px;
          width: 948px;
          height: 595px;
          background: #FFFFFF 0% 0% no-repeat padding-box;
          box-shadow: 0px 30px 60px #0E77FF26;
          border-radius: 16px;
          opacity: 1;
        "
      >
      </div>

      <!-- Card Content (Outside the white card container for proper z-index) -->
      <!-- 2. Image -->
      <img
        src="../../assets/Home/Group 35621.png"
        alt="Service Icon"
        class="absolute z-[10]"
        style="
          top: 182px;
          left: 1079px;
          width: 97px;
          height: 97px;
          background: transparent 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      />

      <!-- 3. UI/UX Designing Text -->
      <h3
        class="absolute z-[10]"
        style="
          top: 206px;
          left: 1209px;
          width: 500px;
          height: 61px;
          text-align: left;
          font: normal normal 600 44px/44px Poppins;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          white-space: nowrap;
        "
      >
        {{ selectedServiceData.name }}
      </h3>

      <!-- 4. Lorem Description -->
      <p
        class="absolute z-[10]"
        style="
          top: 315px;
          left: 1079px;
          width: 560px;
          height: 152px;
          text-align: left;
          font: normal normal normal 16px/30px Poppins;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
        "
      >
        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
      </p>

      <!-- 5 & 6. Green Ticks with Feature Text -->
      <div
        v-for="(feature, index) in selectedServiceData.features.slice(0, 4)"
        :key="feature"
        class="absolute z-[10]"
        :style="{
          top: (441 + index * 52) + 'px',
          left: '1079px'
        }"
      >
        <!-- Green Tick -->
        <img
          src="../../assets/Home/Group 35604.png"
          alt="Check mark"
          class="absolute"
          style="
            top: 0px;
            left: 0px;
            width: 41px;
            height: 41px;
            background: transparent 0% 0% no-repeat padding-box;
            opacity: 1;
          "
        />

        <!-- Feature Text -->
        <span
          class="absolute"
          style="
            top: 8px;
            left: 55px;
            width: 454px;
            height: 23px;
            text-align: left;
            font: normal normal normal 16px/25px Poppins;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          {{ feature }}
        </span>
      </div>

      <!-- Group 35700 Image -->
      <img
        src="../../assets/Home/Group 35700.png"
        alt="Decorative element"
        class="absolute"
        style="
          top: 880px;
          left: -137.46983337402344px;
          width: 720px;
          height: 564px;
          background: transparent 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const serviceData = {
  web: {
    name: "Web Development",
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Progressive Web Apps",
      "API development",
      "Performance optimization",
    ],
  },
  mobile: {
    name: "Mobile Development",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "App store optimization",
      "Mobile UI/UX design",
    ],
  },
  uiux: {
    name: "UI/UX Designing",
    features: [
      "Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.",
      "Lorem ipsum dolor sit amet,",
      "conse ctetur adipi scing elit.",
      "Lorem ipsum dolor sit amet, conse ctetur",
      "Usability testing",
    ],
  },
  branding: {
    name: "Branding",
    features: [
      "Brand identity design",
      "Logo & visual elements",
      "Brand guidelines",
      "Marketing materials",
      "Brand strategy",
    ],
  },
  cloud: {
    name: "Cloud Technology",
    features: [
      "Cloud infrastructure setup",
      "DevOps implementation",
      "Scalability solutions",
      "Security & compliance",
      "Cloud migration",
    ],
  },
};

const selectedService = ref("uiux");

const selectedServiceData = computed(() => {
  return serviceData[selectedService.value as keyof typeof serviceData];
});
</script>
