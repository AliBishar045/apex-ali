
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const trackSocialClick = (platform: string, sourcePage: string) => {
  // Log to console for development verification
  console.log(`[Analytics] Social Click: ${platform} from ${sourcePage}`);

  // Push to dataLayer for Google Analytics / GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'social_click',
      social_platform: platform,
      source_page: sourcePage,
      timestamp: new Date().toISOString(),
    });
  }
};

export const trackShare = (contentTitle: string, platform: string) => {
  console.log(`[Analytics] Content Share: "${contentTitle}" on ${platform}`);
  
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'content_share',
      content_title: contentTitle,
      share_platform: platform,
    });
  }
};
