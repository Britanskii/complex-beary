import {defineConfig} from "vite"
import path from "path"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [
			{find: "@", replacement: path.resolve(__dirname, "src")},
		],
	},
})
