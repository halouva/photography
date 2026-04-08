// Imports Vite helper used to create a typed config object.
import { defineConfig } from "vite";
// Enables React Fast Refresh, JSX transform support, and React-specific build hooks.
import react from "@vitejs/plugin-react";

// Export Vite configuration for both dev server and production build.
export default defineConfig({
  // Registers the React plugin so `.tsx`/JSX files work correctly.
  plugins: [react()],
  // Sets the site base path for GitHub Pages project deployment (`/<repo>/`).
  base: "/photography/",
  // Build-specific settings passed through to Rollup.
  build: {
    // Access low-level Rollup output options.
    rollupOptions: {
      // Customize how emitted files are named in `dist`.
      output: {
        // Controls file names for non-entry assets (images, css, fonts, etc.).
        assetFileNames: (assetInfo) => {
          // Prefer original source path(s) because `names` may lose folder information.
          const originalFileNames = (
            assetInfo as typeof assetInfo & { originalFileNames?: string[] }
          ).originalFileNames;
          // Use original file path when available, otherwise fall back to Rollup-provided name.
          const originalName =
            originalFileNames?.[0] ??
            assetInfo.names?.[0] ??
            assetInfo.name ??
            "";
          // Normalize Windows backslashes to forward slashes for consistent parsing.
          const normalized = originalName.replace(/\\/g, "/");
          // Marker used to detect assets that originated in `src/assets`.
          const marker = "/src/assets/";
          // Find where the source assets path starts.
          const markerIndex = normalized.lastIndexOf(marker);

          // If this file came from `src/assets`, preserve its relative folder structure.
          if (markerIndex >= 0) {
            const relativePath = normalized.slice(markerIndex + marker.length);
            return `assets/${relativePath}`;
          }

          // Fallback marker for relative or already-normalized paths.
          const altMarker = "src/assets/";
          const altMarkerIndex = normalized.indexOf(altMarker);
          if (altMarkerIndex >= 0) {
            const relativePath = normalized.slice(
              altMarkerIndex + altMarker.length,
            );
            return `assets/${relativePath}`;
          }

          // Fallback: for non-gallery assets (like CSS), use Rollup's emitted asset name.
          const fallbackName = assetInfo.name ?? "asset";
          const fileName = fallbackName.split("/").pop() ?? "asset";
          // Find the extension boundary.
          const lastDot = fileName.lastIndexOf(".");
          // Keep extension when present.
          const ext = lastDot >= 0 ? fileName.slice(lastDot) : "";
          // Keep base filename (without extension) when present.
          const baseName = lastDot >= 0 ? fileName.slice(0, lastDot) : fileName;
          // Emit non-hashed filename in `dist/assets`.
          return `assets/${baseName}${ext}`;
        },
      },
    },
  },
});
