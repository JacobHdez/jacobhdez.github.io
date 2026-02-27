export interface SocialItem {
  platform:
    | 'linkedin'
    | 'github'
    | 'linktree'
    | 'facebook'
    | 'instagram'
    | 'x'
    | 'tiktok'
    | 'youtube'
    | 'reddit'
    | 'web';
  url: string;
  icon: string;
}
