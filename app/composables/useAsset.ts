export function useAsset(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}