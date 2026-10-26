import { profile } from "@/data/portfolio";

export default function sitemap() {
    return [{ url: profile.siteUrl, lastModified: new Date() }];
}