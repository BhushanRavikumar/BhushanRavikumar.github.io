/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served directly by GitHub Pages.
  output: "export",
  // GitHub Pages has no image optimization server, so opt out.
  images: {
    unoptimized: true,
  },
  // Emit each route as a folder with index.html (nicer static URLs).
  trailingSlash: true,
};

export default nextConfig;
