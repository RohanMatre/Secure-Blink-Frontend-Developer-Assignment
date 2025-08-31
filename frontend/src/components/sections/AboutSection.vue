<template>
  <section id="about" class="bg-white py-20 lg:py-32 relative w-[1920px] h-[1595px]">
    <!-- Figma Left Illustration Background -->
    <img 
      src="../../assets/Home/Group 35699.png" 
      alt="Background illustration"
      class="absolute w-[1652px] h-[1316px] top-0 left-[-671px] z-[0] opacity-100"
      style="object-fit: contain;"
    />
    
    <!-- Figma Right Decorative Image -->
    <img 
      src="../../assets/Home/Group 35698.png" 
      alt="Decorative illustration"
      class="absolute w-[718px] h-[720px] top-[50px] left-[1397px] z-[0] opacity-100"
      style="object-fit: contain;"
    />
    <div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-[10]">
      <div class="grid lg:grid-cols-2 gap-12 items-center">

        <!-- Right Content -->
        <div class="order-1 lg:order-2">
          <!-- Great Digital Agency Heading -->
          <h2 
            class="absolute z-[20]"
            style="
              top: 455px;
              left: 718px;
              width: 420px;
              height: 56px;
              text-align: left;
              font: normal normal 600 40px Poppins;
              letter-spacing: 0px;
              color: #000000;
              opacity: 1;
              white-space: nowrap;
              line-height: 1;
            "
          >
            Great Digital Agency
          </h2>
          
          <!-- Our Products Paragraph -->
          <p 
            class="absolute z-[20]"
            style="
              top: 540px;
              left: 718px;
              width: 585px;
              height: 65px;
              text-align: left;
              font: normal normal normal 22px/32px Poppins;
              letter-spacing: 0px;
              color: #000000;
              opacity: 1;
            "
          >
            Our products are fully custom-made, built with the latest technologies and cloud-architectures.
          </p>
          
          <!-- Lorem Ipsum Paragraph -->
          <p 
            class="absolute z-[20]"
            style="
              top:620px;
              left: 718px;
              width: 585px;
              height: 166px;
              text-align: left;
              font: normal normal 300 18px/32px Poppins;
              letter-spacing: 0px;
              color: #000000;
              opacity: 1;
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.
          </p>
          
          <!-- Get Started Button -->
          <button 
            @click="handleRedirectToLogin"
            class="absolute z-[20] bg-white text-blue border-2 border-blue rounded-full hover:bg-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2"
            style="
              top: 820px;
              left: 718px;
              width: 239px;
              height: 72px;
              border: 2px solid #0E77FF;
              border-radius: 35px;
              opacity: 1;
              background: #FFFFFF 0% 0% no-repeat padding-box;
            "
          >
            <span
              style="
                text-align: center;
                font: normal normal normal 25px Muli;
                letter-spacing: 0px;
                color: #0E77FF;
                opacity: 1;
                white-space: nowrap;
                line-height: 1;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              "
            >
              Get Started »
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- ABOUT US Text -->
    <div 
      class="absolute z-[20]"
      style="
        top: 415px;
        left: 1123px;
        width: 124px;
        height: 35px;
        text-align: left;
        font: normal normal 600 25px Poppins;
        letter-spacing: 0px;
        color: #0E77FF;
        opacity: 1;
        white-space: nowrap;
        line-height: 1;
      "
    >
      ABOUT US
    </div>

    <!-- Group 35650 Background Image -->
    <img 
      src="../../assets/Home/Group 35650.png" 
      alt="Background decoration"
      class="absolute w-[560px] h-[581px] top-[770px] left-[1610px] z-[0] opacity-100"
      style="object-fit: contain;"
    />
    

    <!-- Final Updated Arrows -->
    <!-- Outer Light Blue Right-Facing Triangle (38x47) -->
    <div
      class="absolute z-[0]"
      style="
        top: 400px;
        left: 1079px;
        width: 0;
        height: 0;
        border-top: 23.5px solid transparent;
        border-bottom: 23.5px solid transparent;
        border-left: 38px solid rgba(14,119,255,0.1);
        transform: rotate(2deg);
      "
    ></div>
    
    <!-- Inner Blue Triangle (19x24, centered) -->
    <img 
      src="../../assets/Home/Path 37483.png" 
      alt="Arrow decoration"
      class="absolute z-[10]"
      style="
        top: 411px;
        left: 1086px;
        width: 19px;
        height: 24px;
        transform: rotate(-12deg);
      "
    />
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRedirectToLogin = () => {
  router.push('/login')
}
</script>
