import { getPublishedBlogs } from "@/lib/actions/blog/getPublishedBlogs";
import { getEvents } from "@/lib/actions/event/getEvents";
import { MetadataRoute } from "next";

export const BASE_URL = "https://awscloudclubpnc.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { data } = await getPublishedBlogs()
    const { data: eData } = await getEvents();

    const entries: MetadataRoute.Sitemap = data?.map(({ blogId }) => ({
        url: `${BASE_URL}/blogs/${blogId}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
    })) ?? [];
    const eventEntries: MetadataRoute.Sitemap = eData?.map(({ eventId }) => ({
        url: `${BASE_URL}/events/${eventId}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
    })) ?? [];
    return [
        {
            url: `${BASE_URL}`,
            priority: 1,
        },
        {
            url: `${BASE_URL}/`,
            priority: 1,
        },
        {
            url: `${BASE_URL}/events`,
            priority: 1,
        },
        {
            url: `${BASE_URL}/blogs`,
            priority: 1,
        },
        ...entries,
        ...eventEntries,
    ]
}