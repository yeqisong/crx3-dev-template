import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx3 } from 'vite-plugin-vue-crx3'
import commonjs from '@rollup/plugin-commonjs'
import { resolve } from 'path'
export default defineConfig({
    plugins: [
        commonjs(),
        vue(),
        crx3()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        target       : 'es2015',
        rollupOptions: {
            input: resolve(__dirname, 'src/manifest.json')
        }
    }
})
