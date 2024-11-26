/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      colors: {
        // === Color Palette 1: Modern Professional ===
        primary: {
          DEFAULT: '#4CAF50', // Green for actions, links
          dark: '#388E3C',
          light: '#81C784',
        },
        secondary: {
          DEFAULT: '#2196F3', // Blue for accents and highlights
          dark: '#1976D2',
          light: '#BBDEFB',
        },
        neutral: {
          DEFAULT: '#F5F5F5', // Light Gray for backgrounds
          dark: '#EEEEEE',
          light: '#FFFFFF',
        },
        text: {
          DEFAULT: '#333333', // Dark Gray for primary text
          light: '#666666',
          dark: '#000000',
        },
        alert: {
          DEFAULT: '#FF5722', // Orange for warnings and important messages
          dark: '#E64A19',
          light: '#FF8A65',
        },
        // === Uncomment below for Color Palette 2: Calm and Trustworthy ===
        /*
        primary: {
          DEFAULT: '#0052CC', // Deep Blue for actions
          dark: '#003D99',
          light: '#0066FF',
        },
        secondary: {
          DEFAULT: '#FFAB00', // Amber for accents
          dark: '#E69500',
          light: '#FFD740',
        },
        neutral: {
          DEFAULT: '#E3F2FD', // Pale Blue for backgrounds
          dark: '#BBDEFB',
          light: '#FFFFFF',
        },
        text: {
          DEFAULT: '#1C1C1C', // Almost Black for primary text
          light: '#4F4F4F',
          dark: '#000000',
        },
        alert: {
          DEFAULT: '#D32F2F', // Red for errors
          dark: '#B71C1C',
          light: '#EF5350',
        },
        */
        // === Uncomment below for Color Palette 3: Sleek Minimalist ===
        /*
        primary: {
          DEFAULT: '#0D47A1', // Dark Blue for branding
          dark: '#083574',
          light: '#1565C0',
        },
        secondary: {
          DEFAULT: '#64B5F6', // Sky Blue for highlights
          dark: '#42A5F5',
          light: '#90CAF9',
        },
        neutral: {
          DEFAULT: '#FAFAFA', // Off White for main backgrounds
          dark: '#F0F0F0',
          light: '#FFFFFF',
        },
        text: {
          DEFAULT: '#212121', // Charcoal for text
          light: '#757575',
          dark: '#000000',
        },
        alert: {
          DEFAULT: '#E53935', // Crimson for alerts
          dark: '#B71C1C',
          light: '#FF6F60',
        },
        */
      },
    },
  },
  variants: {
    animation: ["hover", "focus"],
  },
  plugins: [],
}
