import { defineStore } from 'pinia'

interface User {
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
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
