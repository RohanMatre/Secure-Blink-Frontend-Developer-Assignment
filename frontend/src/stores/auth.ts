import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false
  }),
  
  actions: {
    login(credentials: { email: string; password: string }) {
      // Mock login logic
      this.isAuthenticated = true
      this.user = { email: credentials.email }
    },
    
    logout() {
      this.isAuthenticated = false
      this.user = null
    }
  }
})
