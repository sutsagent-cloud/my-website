const uploadRoot = '/uploads/8/5/4/0/85406354/';

// The export kept these files locally, but some old URLs included Weebly's
// processing folders or pointed at files that only exist in the *_orig form.
const legacyAliases: Record<string, string> = {
  [`${uploadRoot}pci-dkt-200d.jpg`]: `${uploadRoot}pci-dkt-200d_orig.jpg`,
  [`${uploadRoot}1338635390.jpg`]: `${uploadRoot}1338635390_orig.jpg`,
  [`${uploadRoot}tda100d.jpg`]: `${uploadRoot}tda100d_orig.jpg`,
  [`${uploadRoot}kx-ns700-f-1024.jpg`]: `${uploadRoot}kx-ns700-f-1024_orig.jpg`,
  [`${uploadRoot}20160114084013.png`]: `${uploadRoot}20160114084013_orig.png`,
  [`${uploadRoot}fullsizerender-2_1.jpg`]: `${uploadRoot}fullsizerender-2_1_orig.jpg`,
  [`${uploadRoot}s-3137547.jpg`]: `${uploadRoot}s-3137547_orig.jpg`,
  [`${uploadRoot}tecom-dx9924g.jpg`]: `${uploadRoot}tecom-dx9924g_orig.jpg`,
  [`${uploadRoot}s-3137617.jpg`]: `${uploadRoot}s-3137617_orig.jpg`,
  [`${uploadRoot}s-3137620.jpg`]: `${uploadRoot}s-3137620_orig.jpg`,
  [`${uploadRoot}s-2777263.jpg`]: `${uploadRoot}s-2777263_orig.jpg`
};

/** Return a local, deployable image URL or null for an unavailable remote URL. */
export function resolveImageSrc(source: string): string | null {
  if (!source || /^https?:\/\//i.test(source)) return null;

  const [pathname] = source.split('?');
  const normalized = pathname.replace(/\/(published|editor|edited)\//g, '/');
  return legacyAliases[normalized] ?? normalized;
}

export function getImageSources(sources: string[], limit = 4): string[] {
  return Array.from(new Set(sources.map(resolveImageSrc).filter((source): source is string => Boolean(source)))).slice(0, limit);
}
