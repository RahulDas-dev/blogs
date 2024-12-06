import { resolve } from 'path';
import { defineConfig, PluginOption } from "vite";
import handlebars from 'vite-plugin-handlebars';

import * as content from "./content.json";


export default defineConfig({
    base: '/blogs/',
    plugins:[
        handlebars({
            context: content,
            partialDirectory: resolve(__dirname, 'partials'),
            compileOptions: {
              preventIndent: true,
            },
            reloadOnPartialChange: true,
          }) as PluginOption,
    ],
    server: {
        port: 1430,
        strictPort: true,
    },
    build: {
        target: ["es2015", "chrome100", "safari13"],
        outDir: './build',
        minify: true,
        sourcemap: false,
        rollupOptions: {
            input: {
              ols: resolve(__dirname,'ols','index.html'),
              sgd: resolve(__dirname,'clustering','index.html'),
            },
        },
    },
})