import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/"
        },
        sitemap: "https://slvv.vercel.app/sitemap.xml"
    }
}