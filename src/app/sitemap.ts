import type {MetadataRoute} from 'next';
import {siteConfig} from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {url: siteConfig.url, lastModified: new Date()},
  ];
  if (process.env.NEXT_PUBLIC_GA_ID) {
    entries.push({url: `${siteConfig.url}/privacy`, lastModified: new Date()});
  }
  return entries;
}
