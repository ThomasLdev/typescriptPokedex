export const config = {
    apiUrl: import.meta.env.VITE_API_BASE_URL,
    apiSpriteUrl: import.meta.env.VITE_API_SPRITE_URL,
    mode: import.meta.env.MODE,
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
} as const;

export type Config = typeof config;