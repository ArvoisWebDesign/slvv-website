import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://slvv.vercel.app",
            lastModified: new Date()
        },
        {
            url: "https://slvv.vercel.app/music",
            lastModified: new Date()
        },
        {
            url: "https://slvv.vercel.app/social",
            lastModified: new Date()
        },
        {
            url: "https://slvv.vercel.app/visuals",
            lastModified: new Date()
        },
        {
            url: "https://slvv.vercel.app/about",
            lastModified: new Date()
        }
    ]
}