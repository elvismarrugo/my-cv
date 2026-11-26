import type { MetadataRoute } from "next";

// Permite que los buscadores indexen todo el sitio
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://www.elvismarrugo.com/sitemap.xml" };
}
