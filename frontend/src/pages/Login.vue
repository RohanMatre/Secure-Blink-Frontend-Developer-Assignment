<template>
  <div class="relative bg-white" style="width: 100vw; height: 100vh; min-width: 1920px; min-height: 1080px; overflow: auto;">
    <!-- Left Abstract Design -->
    <img 
      :src="LoginBgImage"
      alt="Login Background"
      class="absolute object-cover"
      style="
        top: -177.154296875px;
        left: -547.7056884765625px;
        width: 1652px;
        height: 1316px;
        opacity: 1;
        z-index: 1;
      "
    />

    <!-- Login Form Container -->
    <div class="absolute" style="top: 304px; left: 1312px; z-index: 2;">
      <!-- Login Title -->
      <h1 
        class="absolute font-semibold text-black"
        style="
          top: 0px;
          left: 7px;
          width: 600px;
          height: 45px;
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          line-height: 50px;
          font-weight: 600;
          letter-spacing: 0px;
          opacity: 1;
          white-space: nowrap;
        "
      >
        Login to Access Dashboard
      </h1>
      
      <form @submit.prevent="handleLogin">
        <!-- Email Label -->
        <label 
          for="email" 
          class="absolute font-semibold"
          style="
            top: 82px;
            left: 0px;
            width: 92px;
            height: 26px;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            line-height: 32px;
            font-weight: 600;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Email<span style="color: #FF0000;">*</span>
        </label>

        <!-- Email Input -->
        <input 
          id="email"
          type="email" 
          v-model="form.email"
          class="absolute bg-white focus:outline-none"
          :class="{ 'border-red': errors.email }"
          style="
            top: 124px;
            left: 0px;
            width: 453px;
            height: 73px;
            border: 1px solid #707070;
            opacity: 1;
            padding: 20px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          "
          required
        />
        
        <!-- Error message for email -->
        <p v-if="errors.email" class="absolute text-sm text-red" style="top: 205px; left: 0px;">{{ errors.email }}</p>

        <!-- Password Label -->
        <label 
          for="password" 
          class="absolute font-semibold"
          style="
            top: 238px;
            left: 0px;
            width: 108px;
            height: 26px;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            line-height: 32px;
            font-weight: 600;
            letter-spacing: 0px;
            color: #000000;
            opacity: 1;
          "
        >
          Password<span style="color: #FF0000;">*</span>
        </label>

        <!-- Forgot Password Link -->
        <a 
          href="#" 
          class="absolute font-medium text-right"
          style="
            top: 238px;
            left: 293px;
            width: 160px;
            height: 26px;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            line-height: 32px;
            font-weight: 500;
            letter-spacing: 0px;
            color: #EA1010;
            opacity: 1;
            text-decoration: none;
          "
        >
          Forgot Password?
        </a>

        <!-- Password Input Container -->
        <div class="absolute" style="top: 276px; left: 0px; width: 453px; height: 73px;">
          <input 
            id="password"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            class="w-full h-full pr-12 bg-white focus:outline-none"
            :class="{ 'border-red': errors.password }"
            style="
              border: 1px solid #707070;
              opacity: 1;
              padding: 20px;
              font-family: 'Poppins', sans-serif;
              font-size: 16px;
            "
            required
          />
          <button 
            type="button"
            @click="showPassword = !showPassword"
            class="absolute transform -translate-y-1/2 right-3 top-1/2 text-gray500 hover:text-gray700"
          >
            <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
        
        <!-- Error message for password -->
        <p v-if="errors.password" class="absolute text-sm text-red" style="top: 357px; left: 0px;">{{ errors.password }}</p>

        <!-- Login Button -->
        <button 
          type="submit"
          :disabled="isLoading"
          class="absolute transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          style="
            top: 401px;
            left: 108px;
            width: 239px;
            height: 72px;
            background: #FFFFFF;
            border: 2px solid #0E77FF;
            border-radius: 35px;
            opacity: 1;
          "
        >
          <span 
            style="
              font-family: 'Muli', sans-serif;
              font-size: 25px;
              line-height: 31px;
              letter-spacing: 0px;
              color: #0E77FF;
              opacity: 1;
              white-space: nowrap;
            "
          >
            <span v-if="isLoading">...</span>
            <span v-else>Login »</span>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import LoginBgImage from '@/assets/Login/Group 35699.png'

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const showPassword = ref(false)
const isLoading = ref(false)

const validateForm = () => {
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!form.password) {
    errors.password = 'Password is required'
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  return !errors.email && !errors.password
}

const handleLogin = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    authStore.login({
      email: form.email,
      password: form.password
    })
    
    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}
</script>
