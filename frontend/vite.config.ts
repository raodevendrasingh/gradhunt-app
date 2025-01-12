// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import viteImagemin from "vite-plugin-imagemin";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const apiUrl = process.env.VITE_API_URL!;
const env = process.env.NODE_ENV!;

export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: apiUrl, // Backend URL
				changeOrigin: true,
				secure: true,
			},
		},
	},
	plugins: [
		react(),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox",
					},
					{
						name: "removeEmptyAttrs",
						active: false,
					},
				],
			},
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "dist",
		minify: "esbuild",
		sourcemap: false,
		chunkSizeWarningLimit: 500,
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						if (id.includes("react")) {
							return "vendor-react";
						}
						if (id.includes("@mui")) {
							return "vendor-mui";
						}
						if (id.includes("@emotion")) {
							return "vendor-emotion";
						}
						return "vendor-other";
					}
				},
			},
		},
	},
});
