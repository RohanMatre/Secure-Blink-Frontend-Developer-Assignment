<template>
  <section id="testimonials" class="relative bg-white" style="width: 100%; min-height: 1700px;">
    <!-- Path 37456 Background -->
    <div 
      class="absolute"
      style="
        top: 370px;
        left: -0.00048828125px;
        width: 1920px;
        height: 1120px;
        background: transparent url('/src/assets/Home/Path 37456.png') 0% 0% no-repeat padding-box;
        opacity: 1;
        z-index: 1;
      "
    ></div>

    <!-- Form Box -->
    <div 
      class="absolute"
      style="
        top: 200px;
        left: 892px;
        width: 747px;
        height: 836px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 40px 60px #0E77FF26;
        opacity: 1;
        z-index: 10;
      "
    >
      <!-- Send Message Title -->
      <h2 
        class="absolute"
        style="
          top: 100px;
          left: 88px;
          width: 324px;
          height: 51px;
          text-align: left;
          font: normal normal 600 36px/50px Poppins;
          letter-spacing: 0px;
          color: #292929;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Send Us message
      </h2>

      <!-- Form Fields Container -->
      <div class="absolute" style="top: 200px; left: 0; width: 747px; height: 636px;">
        <!-- Your Email Field -->
        <input 
          type="email" 
          v-model="form.email"
          placeholder="Your Email*"
          style="
            position: absolute;
            top: 0px;
            left: 96px;
            width: 555px;
            height: 50px;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            padding: 0 15px;
            font: normal normal normal 16px/24px Segoe UI;
            color: #000000;
            text-align: left;
            background: transparent;
          "
          class="custom-placeholder"
          required
        />

        <!-- Your Name Field -->
        <input 
          type="text" 
          v-model="form.name"
          placeholder="Your Name*"
          style="
            position: absolute;
            top: 70px;
            left: 96px;
            width: 555px;
            height: 50px;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            padding: 0 15px;
            font: normal normal normal 16px/24px Segoe UI;
            color: #000000;
            text-align: left;
            background: transparent;
          "
          class="custom-placeholder"
          required
        />

        <!-- Phone Number Field -->
        <input 
          type="tel" 
          v-model="form.phone"
          placeholder="Phone Number*"
          style="
            position: absolute;
            top: 140px;
            left: 96px;
            width: 555px;
            height: 50px;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            padding: 0 15px;
            font: normal normal normal 16px/24px Segoe UI;
            color: #000000;
            text-align: left;
            background: transparent;
          "
          class="custom-placeholder"
          required
        />

        <!-- Subject Field -->
        <input 
          type="text" 
          v-model="form.subject"
          placeholder="Subject"
          style="
            position: absolute;
            top: 210px;
            left: 96px;
            width: 555px;
            height: 50px;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            padding: 0 15px;
            font: normal normal normal 16px/24px Segoe UI;
            color: #000000;
            text-align: left;
            background: transparent;
          "
          class="custom-placeholder"
        />

        <!-- Your Message Field -->
        <textarea 
          v-model="form.message"
          placeholder="Your Message"
          rows="4"
          style="
            position: absolute;
            top: 280px;
            left: 96px;
            width: 555px;
            height: 120px;
            border: none;
            border-bottom: 1px solid #000000;
            border-radius: 0;
            padding: 15px;
            font: normal normal normal 16px/24px Segoe UI;
            color: #000000;
            text-align: left;
            background: transparent;
            resize: none;
          "
          class="custom-placeholder"
        ></textarea>

        <!-- Privacy Checkbox -->
        <div 
          class="absolute" 
          style="
            top: 428.5px; 
            left: 96px; 
            display: flex; 
            align-items: flex-start;
            width: 555px;
          "
        >
          <input 
            type="checkbox" 
            v-model="form.privacy"
            style="
              width: 29px;
              height: 28px;
              border: 1px solid #C9C9C9;
              border-radius: 5px;
              opacity: 1;
              margin-right: 15px;
              margin-top: 0;
              flex-shrink: 0;
            "
            required
          />
          <label 
            style="
              left: 96px;
              width: 317px;
              height: 38px;
              text-align: left;
              font: normal normal normal 14px/18px Segoe UI;
              letter-spacing: 0px;
              color: #000000;
              opacity: 1;
            "
          >
            By sending this message, you confirm that you<br /> have read and agreed to our privacy-policy.
          </label>
        </div>

        <!-- Get Started Button -->
        <button 
          type="submit"
          @click="handleSubmit"
          class="absolute"
          style="
            top: 510px;
            left: 96px;
            width: 239px;
            height: 72px;
            background: #0E77FF 0% 0% no-repeat padding-box;
            border-radius: 35px;
            border: none;
            cursor: pointer;
            opacity: 1;
            position: relative;
          "
        >
          <!-- Get Started Text -->
          <span 
            class="absolute"
            style="
              top: 20px;
              left: 42px;
              width: 134px;
              height: 31px;
              text-align: left;
              font: normal normal normal 25px/31px Muli;
              letter-spacing: 0px;
              color: #FFFFFF;
              opacity: 1;
            "
          >
            Get Started
          </span>
          
          <!-- First Arrow -->
          <div 
            class="absolute"
            style="
              top: 30px;
              left: 185px;
              width: 7px;
              height: 12px;
              background: transparent url('/src/assets/Home/arrow-down-sign-to-navigate.png') 0% 0% no-repeat padding-box;
              opacity: 1;
            "
          ></div>
          
          <!-- Second Arrow -->
          <div 
            class="absolute"
            style="
              top: 30px;
              left: 190px;
              width: 7px;
              height: 12px;
              background: transparent url('/src/assets/Home/arrow-down-sign-to-navigate.png') 0% 0% no-repeat padding-box;
              opacity: 1;
            "
          ></div>
        </button>
      </div>
    </div>

    <!-- Footer Blue Section -->
    <div 
      class="absolute"
      style="
        top: 1015px;
        left: 0;
        width: 100%;
        height: 755px;
        background: #0E77FF 0% 0% no-repeat padding-box;
        opacity: 1;
        z-index: 2;
      "
    >
      <!-- Group 35686 Image -->
      <div 
        class="absolute"
        style="
          top: -572px;
          left: 22px;
          width: 874px;
          height: 589px;
          background: transparent url('/src/assets/Home/Group 35686.png') 0% 0% no-repeat padding-box;
          background-size: contain;
          background-position: center;
          opacity: 1;
        "
      ></div>

      <!-- Description Text -->
      <p 
        class="absolute"
        style="
          top: 178.25px;
          left: 140px;
          width: 456px;
          height: 90px;
          text-align: left;
          font: normal normal 300 16px/30px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
      </p>

      <!-- Social Icons -->
      <!-- Facebook Icon -->
      <div 
        class="absolute"
        style="
          top: 280px;
          left: 163px;
          width: 37px;
          height: 37px;
          background: transparent url('/src/assets/Home/Group 34322.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Twitter Icon -->
      <div 
        class="absolute"
        style="
          top: 280px;
          left: 211px;
          width: 37px;
          height: 37px;
          background: transparent url('/src/assets/Home/Group 34323.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Instagram Icon -->
      <div 
        class="absolute"
        style="
          top: 280px;
          left: 259px;
          width: 37px;
          height: 37px;
          background: transparent url('/src/assets/Home/twitter-circular-button.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      >
        <!-- Inner Instagram Icon -->
        <div 
          class="absolute"
          style="
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            background: transparent url('/src/assets/Home/instagram.png') 0% 0% no-repeat padding-box;
            background-size: contain;
            opacity: 1;
          "
        ></div>
      </div>

      <!-- Our Services Section -->
      <h3 
        class="absolute"
        style="
          top: 127px;
          left: 799px;
          width: 150px;
          height: 28px;
          text-align: left;
          font: normal normal 600 20px/28px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Our Services
      </h3>

      <!-- Our Services Blue Line -->
      <div 
        class="absolute"
        style="
          top: 165px;
          left: 799px;
          width: 48px;
          height: 4px;
          background: #21B3FF 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Our Services Content Box -->
      <div 
        class="absolute"
        style="
          top: 180px;
          left: 799px;
          width: 233px;
          height: 185px;
          text-align: left;
          font: normal normal 300 16px/40px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        <div style="margin-bottom: 10px;">Web Development</div>
        <div style="margin-bottom: 10px;">Mobile Development</div>
        <div style="margin-bottom: 10px;">Cloud Technologies</div>
        <div>UI/UX Desins</div>
      </div>

      <!-- Our Links Section -->
      <h3 
        class="absolute"
        style="
          top: 127px;
          left: 1079px;
          width: 120px;
          height: 28px;
          text-align: left;
          font: normal normal 600 20px/28px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Our Links
      </h3>

      <!-- Our Links Blue Line -->
      <div 
        class="absolute"
        style="
          top: 165px;
          left: 1079px;
          width: 48px;
          height: 4px;
          background: #21B3FF 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Our Links Content Box -->
      <div 
        class="absolute"
        style="
          top: 180px;
          left: 1079px;
          width: 233px;
          height: 185px;
          text-align: left;
          font: normal normal 300 16px/40px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        <div style="margin-bottom: 10px;">Terms & Condition</div>
        <div style="margin-bottom: 10px;">Privacy Policy</div>
        <div style="margin-bottom: 10px;">Imprint</div>
        <div>Legal</div>
      </div>

      <!-- Contact Us Section -->
      <h3 
        class="absolute"
        style="
          top: 127px;
          left: 1387px;
          width: 150px;
          height: 28px;
          text-align: left;
          font: normal normal 600 20px/28px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Contact Us
      </h3>

      <!-- Contact Us Blue Line -->
      <div 
        class="absolute"
        style="
          top: 165px;
          left: 1387px;
          width: 48px;
          height: 4px;
          background: #21B3FF 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Contact Us Content -->
      <!-- Location Icon - Outer Layer -->
      <div 
        class="absolute"
        style="
          top: 180px;
          left: 1342px;
          width: 24px;
          height: 30px;
          background: transparent url('/src/assets/Home/Path 36465.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Location Icon - Inner Layer -->
      <div 
        class="absolute"
        style="
          top: 187px;
          left: 1349px;
          width: 10px;
          height: 10px;
          background: #21B3FF;
          border-radius: 50%;
          opacity: 1;
        "
      ></div>

      <!-- Location Text -->
      <div 
        class="absolute"
        style="
          top: 180px;
          left: 1377px;
          width: 250px;
          height: 40px;
          text-align: left;
          font: normal normal 300 16px/20px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        Al. Dummyodl 124/23 floor 123<br />Banswara Street, 02-577 India.
      </div>

      <!-- Phone Icon -->
      <div 
        class="absolute"
        style="
          top: 235px;
          left: 1342px;
          width: 25px;
          height: 25px;
          background: transparent url('/src/assets/Home/Group 35689.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Phone Text -->
      <div 
        class="absolute"
        style="
          top: 235px;
          left: 1377px;
          width: 200px;
          height: 24px;
          text-align: left;
          font: normal normal 300 16px/20px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        00 1800 245 453
      </div>

      <!-- Email Icon -->
      <div 
        class="absolute"
        style="
          top: 275px;
          left: 1342px;
          width: 28px;
          height: 21px;
          background: transparent url('/src/assets/Home/Group 35688.png') 0% 0% no-repeat padding-box;
          opacity: 1;
        "
      ></div>

      <!-- Email Text -->
      <div 
        class="absolute"
        style="
          top: 275px;
          left: 1377px;
          width: 200px;
          height: 24px;
          text-align: left;
          font: normal normal 300 16px/20px Poppins;
          letter-spacing: 0px;
          color: #FFFFFF;
          opacity: 1;
        "
      >
        hello@iniky.com
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  email: '',
  name: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
})

const handleSubmit = () => {
  form.value = {
    email: '',
    name: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  }
}
</script>

<style scoped>
.custom-placeholder::placeholder {
  color: #000000 !important;
  text-align: left !important;
  font: normal normal normal 16px/24px Segoe UI !important;
  opacity: 1 !important;
}

.custom-placeholder::-webkit-input-placeholder {
  color: #000000 !important;
  text-align: left !important;
  font: normal normal normal 16px/24px Segoe UI !important;
  opacity: 1 !important;
}

.custom-placeholder::-moz-placeholder {
  color: #000000 !important;
  text-align: left !important;
  font: normal normal normal 16px/24px Segoe UI !important;
  opacity: 1 !important;
}

.custom-placeholder:-ms-input-placeholder {
  color: #000000 !important;
  text-align: left !important;
  font: normal normal normal 16px/24px Segoe UI !important;
  opacity: 1 !important;
}
</style>
