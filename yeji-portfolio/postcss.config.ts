import type { PluginCreator } from "postcss";
import type { Config } from "tailwindcss";

const config: PostCSSPlugin[] = [
    {
        tailwindcss: { config: "./tailwind.config.ts" },
    },
    {
        autoprefixer: {},
    },
];

export default config;

interface PostCSSPlugin {
    [key: string]: {
        config?: string;
    };
}
