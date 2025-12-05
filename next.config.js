const isProd = process.env.NODE_ENV === "production";

const internalHost = process.env.TAURI_DEV_HOST || "localhost";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next.js uses SSG instead of SSR
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: "export",
  // Note: This feature is required to use the Next.js Image component in SSG mode.
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
  images: {
    unoptimized: true,
  },
  // Configure assetPrefix or else the server won't properly resolve your assets.
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,

  // Remove the small dev indicator overlay
  devIndicators: false,

  // Configure Sass options
  sassOptions: {
    includePaths: ['./src'],
    additionalData: (content, loaderContext) => {
      return content;
    },
    importer: [
      function(url) {
        if (url.startsWith('@sass/')) {
          return {
            file: url.replace('@sass/', './src/sass/')
          };
        }
        return null;
      }
    ],
  },
};

export default nextConfig;
