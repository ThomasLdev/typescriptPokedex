/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_API_KEY: string
    // Add more custom environment variables here
}

// Extending the existing ImportMeta interface
interface ImportMeta {
    readonly env: ImportMetaEnv
}
