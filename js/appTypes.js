// App types and their recommended tech stacks
const appTypes = [
    {
        id: "social-media",
        name: "Social Media",
        icon: "💬",
        description: "Instagram, TikTok, Twitter-like apps",
        stack: {
            "ui-layer": ["React Native", "React"],
            "backend-cloud": ["Node.js", "Firebase"],
            "dev-tools": ["Git", "Metro"],
            "frameworks": ["Express", "GraphQL", "Redux"],
            "languages": ["JavaScript", "TypeScript"],
            "runtime": ["V8", "Hermes"],
            "database": ["PostgreSQL", "Redis", "MongoDB"],
            "os-layer": ["Linux", "Android", "macOS"]
        }
    },
    {
        id: "e-commerce",
        name: "E-commerce",
        icon: "🛒",
        description: "Online stores, marketplaces",
        stack: {
            "ui-layer": ["React", "React Native", "Vue.js"],
            "backend-cloud": ["Node.js", "AWS"],
            "dev-tools": ["Git", "Webpack", "npm"],
            "frameworks": ["Next.js", "Express", "GraphQL"],
            "languages": ["JavaScript", "TypeScript", "Python"],
            "runtime": ["V8"],
            "database": ["PostgreSQL", "Redis"],
            "os-layer": ["Linux", "Windows"]
        }
    },
    {
        id: "video-streaming",
        name: "Video Streaming",
        icon: "🎬",
        description: "Netflix, YouTube-like platforms",
        stack: {
            "ui-layer": ["React", "React Native"],
            "backend-cloud": ["Node.js", "AWS"],
            "dev-tools": ["Git", "Webpack"],
            "frameworks": ["Next.js", "Express"],
            "languages": ["JavaScript", "Python", "Java"],
            "runtime": ["V8", "JVM"],
            "database": ["PostgreSQL", "Redis", "MongoDB"],
            "os-layer": ["Linux", "Android"]
        }
    },
    {
        id: "productivity",
        name: "Productivity",
        icon: "📊",
        description: "Notion, Slack, Trello-like apps",
        stack: {
            "ui-layer": ["React", "Vue.js"],
            "backend-cloud": ["Node.js", "Supabase"],
            "dev-tools": ["Git", "Webpack", "npm"],
            "frameworks": ["Next.js", "Express", "Redux"],
            "languages": ["TypeScript", "JavaScript"],
            "runtime": ["V8"],
            "database": ["PostgreSQL", "Redis"],
            "os-layer": ["Linux", "macOS", "Windows"]
        }
    },
    {
        id: "mobile-games",
        name: "Mobile Games",
        icon: "🎮",
        description: "Casual to complex mobile games",
        stack: {
            "ui-layer": ["React Native", "Flutter"],
            "backend-cloud": ["Firebase", "AWS"],
            "dev-tools": ["Git", "Metro"],
            "frameworks": ["Express"],
            "languages": ["JavaScript", "TypeScript"],
            "runtime": ["Hermes", "V8"],
            "database": ["Redis", "MongoDB"],
            "os-layer": ["Android", "macOS"]
        }
    },
    {
        id: "banking-finance",
        name: "Banking/Finance",
        icon: "💰",
        description: "Banking, trading, fintech apps",
        stack: {
            "ui-layer": ["React", "React Native"],
            "backend-cloud": ["Node.js", "AWS"],
            "dev-tools": ["Git", "npm"],
            "frameworks": ["Express", "Next.js"],
            "languages": ["TypeScript", "Java", "Python"],
            "runtime": ["V8", "JVM"],
            "database": ["PostgreSQL", "Redis"],
            "os-layer": ["Linux", "Windows"]
        }
    },
    {
        id: "education",
        name: "Education",
        icon: "📚",
        description: "Duolingo, Coursera-like platforms",
        stack: {
            "ui-layer": ["React", "React Native", "Vue.js"],
            "backend-cloud": ["Node.js", "Firebase"],
            "dev-tools": ["Git", "Webpack", "npm"],
            "frameworks": ["Next.js", "Express"],
            "languages": ["JavaScript", "TypeScript", "Python"],
            "runtime": ["V8", "Hermes"],
            "database": ["PostgreSQL", "MongoDB"],
            "os-layer": ["Linux", "Android", "macOS"]
        }
    },
    {
        id: "ai-ml",
        name: "AI/ML Apps",
        icon: "🤖",
        description: "ChatGPT, image generation apps",
        stack: {
            "ui-layer": ["React", "Vue.js"],
            "backend-cloud": ["Node.js", "AWS"],
            "dev-tools": ["Git", "npm"],
            "frameworks": ["Next.js", "Express", "GraphQL"],
            "languages": ["Python", "TypeScript", "JavaScript"],
            "runtime": ["V8"],
            "database": ["PostgreSQL", "Redis"],
            "os-layer": ["Linux"]
        }
    },
    {
        id: "real-time",
        name: "Real-time Collaboration",
        icon: "🔄",
        description: "Google Docs, Figma-like apps",
        stack: {
            "ui-layer": ["React", "Vue.js"],
            "backend-cloud": ["Node.js", "Firebase", "Supabase"],
            "dev-tools": ["Git", "Webpack", "npm"],
            "frameworks": ["Express", "GraphQL", "Redux"],
            "languages": ["TypeScript", "JavaScript"],
            "runtime": ["V8"],
            "database": ["PostgreSQL", "Redis"],
            "os-layer": ["Linux", "macOS", "Windows"]
        }
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: "🏥",
        description: "Telemedicine, health tracking apps",
        stack: {
            "ui-layer": ["React", "React Native"],
            "backend-cloud": ["Node.js", "AWS"],
            "dev-tools": ["Git", "npm"],
            "frameworks": ["Express", "Next.js"],
            "languages": ["TypeScript", "Python", "Java"],
            "runtime": ["V8", "JVM"],
            "database": ["PostgreSQL", "MongoDB"],
            "os-layer": ["Linux", "Android", "Windows"]
        }
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = appTypes;
}