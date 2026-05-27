import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project site, base must be "/<repo-name>/".
// Change this if you rename the repo, or set to "/" when using <username>.github.io.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
