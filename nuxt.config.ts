// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-10-28",
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: { 
            'primary-app': {
              DEFAULT: '#FDE047',  // สีหลัก
              50: '#FFF9E0',      // เบา
              100: '#FFF3B0',     // เบา
              200: '#FFE47A',     // เบา
              300: '#FFDB3D',     // ปานกลาง
              400: '#FFCC00',     // ค่อนข้างเข้ม
              500: '#FDE047',     // สีหลัก
              600: '#C7A500',     // ค่อนข้างเข้ม
              700: '#A18200',     // ค่อนข้างเข้ม
              800: '#7A5B00',     // ค่อนข้างเข้ม
              900: '#4A2F00',     // เข้ม
              950: '#2E1A00'      // เข้มมาก
            }
          }
        }
      }
    }
  }
})