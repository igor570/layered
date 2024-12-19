import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfigExport } from 'vite';
import type { InlineConfig } from 'vitest';

// This seems to work for now but it'll have to be updated as "inlineConfig" is deprecated.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['**/tests/**/*.{ts,tsx}', '**/?(*.){test,spec}.{ts,tsx}']
  }
} as UserConfigExport & { test: InlineConfig });
