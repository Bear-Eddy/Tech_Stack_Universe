// Comprehensive tech stack data with detailed information
const techStackDetailed = [
    {
        id: "ui-layer",
        title: "👤 User Interface Layer",
        description: "The presentation layer where users interact with applications",
        color: "rgba(102, 126, 234, 0.1)",
        items: [
            {
                id: "react",
                name: "React",
                icon: "⚛️",
                shortDescription: "A JavaScript library for building user interfaces",
                fullDescription: "React is a JavaScript library that makes building user interfaces feel like playing with LEGO blocks. Instead of writing one giant file of code, you create small, reusable 'components' that snap together.",
                origin: {
                    year: 2013,
                    creator: "Facebook",
                    story: "In 2011, Facebook's ads team was drowning in code complexity. Jordan Walke, a software engineer, had a wild idea: what if we could write JavaScript that looks like HTML? He created 'FaxJS' (yes, like the fax machine!), which eventually became React in 2013."
                },
                revolutionary: "Before React, updating a webpage meant carefully finding and changing specific parts. React introduced the 'Virtual DOM' - imagine having a backstage copy of your webpage where you can make all your changes, and React figures out the most efficient way to update the real page.",
                connections: ["React Native", "Next.js", "Redux", "JavaScript", "TypeScript", "Webpack", "Node.js"],
                funFacts: [
                    "Facebook, Instagram, Netflix, Airbnb, Discord, and Reddit all use React",
                    "The React logo is an atom because components are the 'building blocks' of UI",
                    "React's original codename was 'Bolt' before becoming 'React'",
                    "Has over 220,000 stars on GitHub (one of the most starred projects ever!)"
                ],
                famousApps: ["Facebook", "Instagram", "Netflix", "Airbnb", "Discord", "Reddit"],
                category: "Library"
            },
            {
                id: "react-native",
                name: "React Native",
                icon: "📱",
                shortDescription: "Build mobile apps using React",
                fullDescription: "React Native lets you write mobile apps using React skills. Write once in JavaScript, and it creates real iOS and Android apps - not web apps wrapped in a mobile shell, but actual native apps!",
                origin: {
                    year: 2015,
                    creator: "Facebook",
                    story: "In 2012, Mark Zuckerberg admitted betting on HTML5 for mobile was a mistake. Facebook needed native apps but didn't want two separate teams. In 2015, after a company hackathon, React Native was born - 'Learn once, write anywhere.'"
                },
                revolutionary: "Companies no longer needed separate iOS and Android teams. One team could build both apps, sharing 70-90% of the code while still delivering native performance.",
                connections: ["React", "Metro", "Hermes", "JavaScript", "iOS", "Android", "Expo"],
                funFacts: [
                    "Instagram, Discord, Pinterest, Uber Eats, and Coinbase use React Native",
                    "Facebook's Ads Manager (the first RN app) has over 100 million downloads",
                    "The 'bridge' between JavaScript and native code is being replaced by a new architecture called 'Fabric'",
                    "Microsoft uses React Native for Windows and macOS apps!"
                ],
                famousApps: ["Instagram", "Discord", "Pinterest", "Uber Eats", "Coinbase"],
                category: "Framework"
            },
            {
                id: "vue",
                name: "Vue.js",
                icon: "💚",
                shortDescription: "Progressive JavaScript framework",
                fullDescription: "Vue is like React's friendly cousin - a progressive framework that's easier to learn but equally powerful. It's called 'progressive' because you can adopt it incrementally.",
                origin: {
                    year: 2014,
                    creator: "Evan You",
                    story: "Evan You was working at Google in 2013, using Angular. He thought, 'What if I could extract the parts I really liked about Angular and build something lightweight?' He built Vue in his spare time, releasing it in 2014."
                },
                revolutionary: "Vue hit the sweet spot between React's flexibility and Angular's structure. Its gentle learning curve made it hugely popular, especially in Asia. It proved you don't need a big company backing to create a successful framework.",
                connections: ["Vite", "Vuex", "Nuxt.js", "TypeScript", "JavaScript", "Webpack"],
                funFacts: [
                    "Alibaba, GitLab, Grammarly, and Nintendo use Vue",
                    "Vue means 'view' in French",
                    "It's funded entirely by community donations and sponsorships",
                    "Evan You turned down job offers from Facebook and Google to work on Vue full-time",
                    "Has different versions named after anime: Eva, Evangelion, Animatrix"
                ],
                famousApps: ["Alibaba", "GitLab", "Grammarly", "Nintendo"],
                category: "Framework"
            },
            {
                id: "flutter",
                name: "Flutter",
                icon: "🦋",
                shortDescription: "Google's UI toolkit for cross-platform apps",
                fullDescription: "Flutter is Google's UI toolkit that lets you build apps for mobile, web, and desktop from a single codebase. Unlike React Native, it doesn't use native components - it draws everything from scratch!",
                origin: {
                    year: 2017,
                    creator: "Google",
                    story: "Google was building Fuchsia (a mysterious new OS) and needed a UI framework. Flutter started as 'Sky' in 2015, designed to render at 120fps. It uses Dart, a language Google created that almost died before Flutter saved it."
                },
                revolutionary: "Flutter gives pixel-perfect control across all platforms. Every button, animation, even text is drawn by Flutter's engine, ensuring your app looks identical everywhere.",
                connections: ["Dart", "Material Design", "Skia", "Android", "iOS", "Fuchsia"],
                funFacts: [
                    "Google Pay, Alibaba, BMW, and Philips Hue use Flutter",
                    "The Flutter mascot is called 'Dash' (a blue hummingbird)",
                    "Can create desktop apps for Windows, macOS, and Linux",
                    "Flutter's renderer is so fast it's used in some embedded devices",
                    "Google Fuchsia OS uses Flutter for all its UI"
                ],
                famousApps: ["Google Pay", "Alibaba", "BMW", "Philips Hue"],
                category: "Framework"
            }
        ]
    },
    {
        id: "backend-cloud",
        title: "☁️ Backend/Cloud Layer",
        description: "Server-side technologies and cloud platforms",
        color: "rgba(118, 75, 162, 0.1)",
        items: [
            {
                id: "nodejs",
                name: "Node.js",
                icon: "🟢",
                shortDescription: "JavaScript runtime built on Chrome's V8 engine",
                fullDescription: "Node.js lets you run JavaScript outside the browser, on servers. It's like taking the JavaScript engine from Chrome and saying, 'You're free! Go run anywhere!'",
                origin: {
                    year: 2009,
                    creator: "Ryan Dahl",
                    story: "Ryan Dahl was frustrated in 2009. He was trying to build a progress bar for file uploads, but Apache (the popular server) made it unnecessarily hard. He thought, 'What if we used JavaScript's event-driven nature for servers?' Node.js was born."
                },
                revolutionary: "JavaScript developers could now write backend code! One language for everything. Plus, Node's non-blocking I/O made it incredibly efficient for handling many connections.",
                connections: ["V8", "npm", "Express", "JavaScript", "TypeScript", "React", "Vue"],
                funFacts: [
                    "Netflix, LinkedIn, NASA, PayPal, and Uber use Node.js",
                    "Netflix reduced startup time by 70% by switching to Node",
                    "PayPal found Node developers were 2x more productive",
                    "npm has over 2 million packages (more than any other ecosystem)",
                    "Ryan Dahl later created Deno to fix Node's 'mistakes'"
                ],
                famousApps: ["Netflix", "LinkedIn", "NASA", "PayPal", "Uber"],
                category: "Runtime"
            },
            {
                id: "aws",
                name: "AWS",
                icon: "☁️",
                shortDescription: "Amazon's cloud computing platform",
                fullDescription: "AWS is like a massive digital warehouse where you can rent anything from a tiny storage box to an entire data center. It powers much of the internet you use daily.",
                origin: {
                    year: 2006,
                    creator: "Amazon",
                    story: "In 2002, Amazon was struggling with their monolithic architecture. They broke it into services, then realized, 'Hey, other companies might want this!' AWS launched in 2006 with just three services."
                },
                revolutionary: "Companies no longer needed their own data centers. You could launch a startup from your laptop and scale to millions of users without buying a single server.",
                connections: ["EC2", "S3", "Lambda", "RDS", "CloudFront", "Node.js", "Python", "Java"],
                funFacts: [
                    "Netflix, Airbnb, Spotify, and even Apple use AWS",
                    "AWS makes more profit than Amazon's entire retail business",
                    "Netflix uses 100,000+ AWS servers during peak hours",
                    "AWS has underwater data centers for cooling",
                    "The 'S' in S3 stands for 'Simple' (Simple Storage Service)"
                ],
                famousApps: ["Netflix", "Airbnb", "Spotify", "Apple iCloud"],
                category: "Cloud Platform"
            },
            {
                id: "firebase",
                name: "Firebase",
                icon: "🔥",
                shortDescription: "Google's mobile and web app platform",
                fullDescription: "Firebase is Google's 'backend-as-a-service' - imagine having a backend team in a box. Database, authentication, hosting, and more, all ready to use with a few lines of code.",
                origin: {
                    year: 2014,
                    creator: "Google (acquired)",
                    story: "James Tamplin and Andrew Lee were building a chat app in 2011. They realized the real-time infrastructure they built was more valuable than the app itself. Google acquired Firebase in 2014 and supercharged it."
                },
                revolutionary: "Frontend developers could build full apps without learning backend development. Real-time features that would take weeks to build work instantly.",
                connections: ["React Native", "Flutter", "Firestore", "Google Cloud", "JavaScript", "Authentication"],
                funFacts: [
                    "Duolingo, The New York Times, and Gameloft use Firebase",
                    "Can handle offline mode automatically",
                    "The real-time database was inspired by multi-player games",
                    "Firebase's logo flame has exactly 4 tongues of fire",
                    "Processes billions of requests daily"
                ],
                famousApps: ["Duolingo", "The New York Times", "Gameloft"],
                category: "Backend-as-a-Service"
            },
            {
                id: "supabase",
                name: "Supabase",
                icon: "⚡",
                shortDescription: "Open source Firebase alternative",
                fullDescription: "Supabase is the 'open-source Firebase alternative' - it gives you a PostgreSQL database, authentication, real-time subscriptions, and storage, all with a beautiful interface.",
                origin: {
                    year: 2020,
                    creator: "Paul Copplestone & Ant Wilson",
                    story: "Paul Copplestone and Ant Wilson loved Firebase but wanted something open-source and SQL-based. In 2020, they launched Supabase with the tagline 'Firebase but with PostgreSQL.'"
                },
                revolutionary: "Developers get Firebase's ease with PostgreSQL's power. Everything is open-source, so you're never locked in. The auto-generated APIs from your database schema are magical.",
                connections: ["PostgreSQL", "Elixir", "Phoenix", "React", "Next.js", "REST", "GraphQL"],
                funFacts: [
                    "Mozilla, PwC, and thousands of startups use Supabase",
                    "Grew from 0 to 30,000+ databases in first year",
                    "The mascot is a friendly elephant (PostgreSQL's mascot)",
                    "Built by a fully remote team across 20+ countries",
                    "Raised funding in just 4 minutes on Hacker News"
                ],
                famousApps: ["Mozilla", "PwC", "Many startups"],
                category: "Backend-as-a-Service"
            }
        ]
    },
    {
        id: "dev-tools",
        title: "🔌 Development Tools & Build Systems",
        description: "Tools that help developers build and manage code",
        color: "rgba(129, 140, 248, 0.1)",
        items: [
            {
                id: "webpack",
                name: "Webpack",
                icon: "📦",
                shortDescription: "Module bundler for JavaScript applications",
                fullDescription: "Webpack is like a master chef who takes all your ingredients (JavaScript files, CSS, images) and creates the perfect dish (bundled application). It's a 'module bundler.'",
                origin: {
                    year: 2012,
                    creator: "Tobias Koppers",
                    story: "Tobias Koppers was frustrated in 2012. Web apps were getting complex, but there was no good way to manage dependencies. Inspired by other bundlers, he created Webpack to handle any type of file."
                },
                revolutionary: "Webpack introduced 'loaders' - you could import CSS, images, even fonts in your JavaScript! It made modern web development possible by solving the 'dependency hell' problem.",
                connections: ["React", "Vue", "Babel", "Node.js", "JavaScript", "CSS"],
                funFacts: [
                    "Used by almost every major web application",
                    "The config file is famously complex (and memed about)",
                    "Webpack 5 took 2 years to develop",
                    "Can bundle over 20,000 modules in large apps",
                    "Inspired many simpler alternatives like Parcel and Vite"
                ],
                famousApps: ["Most modern web applications"],
                category: "Build Tool"
            },
            {
                id: "metro",
                name: "Metro",
                icon: "🚇",
                shortDescription: "JavaScript bundler for React Native",
                fullDescription: "Metro is Facebook's JavaScript bundler designed specifically for React Native. Think of it as Webpack's cousin who specializes in mobile apps.",
                origin: {
                    year: 2017,
                    creator: "Facebook",
                    story: "Facebook needed a bundler that understood React Native's unique needs - fast refresh, platform-specific code, and handling thousands of modules. Metro was built from scratch for this purpose."
                },
                revolutionary: "Metro made React Native development feel magical with near-instant refreshes. Change your code, and see it on your phone in under a second!",
                connections: ["React Native", "Hermes", "Babel", "JavaScript", "Watchman"],
                funFacts: [
                    "Bundles code for Instagram, Facebook, and Discord",
                    "Can handle 100,000+ modules in Facebook's apps",
                    "The name 'Metro' refers to its speed (like a metro train)",
                    "Processes files in parallel for speed",
                    "Has a RAM bundle format for faster app startup"
                ],
                famousApps: ["Instagram", "Facebook", "Discord"],
                category: "Build Tool"
            },
            {
                id: "npm",
                name: "npm",
                icon: "📦",
                shortDescription: "Package manager for JavaScript",
                fullDescription: "npm is like the Amazon.com of code - a massive marketplace where developers share their code packages. Need a date picker? There's a package for that!",
                origin: {
                    year: 2010,
                    creator: "Isaac Z. Schlueter",
                    story: "Isaac Z. Schlueter was tired of manually downloading JavaScript libraries in 2009. He created npm to make sharing code as easy as `npm install`. It shipped with Node.js and exploded in popularity."
                },
                revolutionary: "npm democratized code sharing. Instead of reinventing the wheel, developers could build on each other's work. It turned programming into a collaborative art.",
                connections: ["Node.js", "yarn", "pnpm", "JavaScript", "package.json"],
                funFacts: [
                    "Over 2 million packages available",
                    "Downloads exceed 150 billion per month!",
                    "'npm' doesn't officially stand for anything (not 'Node Package Manager')",
                    "The most downloaded package is 'lodash' (utilities)",
                    "Has survived multiple competitors and redesigns"
                ],
                famousApps: ["Every Node.js application"],
                category: "Package Manager"
            },
            {
                id: "git",
                name: "Git",
                icon: "🔀",
                shortDescription: "Version control system",
                fullDescription: "Git is a time machine for your code. It tracks every change, lets you experiment fearlessly, and helps teams collaborate without stepping on each other's toes.",
                origin: {
                    year: 2005,
                    creator: "Linus Torvalds",
                    story: "Linus Torvalds (Linux creator) was furious in 2005. The version control system for Linux had licensing issues. In typical Linus fashion, he built Git in 2 weeks, saying other systems were 'expressly designed to make you miserable.'"
                },
                revolutionary: "Git was distributed - everyone has the complete history. It's incredibly fast and handles massive projects. It changed how developers collaborate forever.",
                connections: ["GitHub", "GitLab", "VS Code", "Linux", "CI/CD"],
                funFacts: [
                    "Powers all open source development",
                    "Git means 'unpleasant person' in British slang (Linus's joke)",
                    "GitHub's Octocat mascot was bought for $50",
                    "The entire Linux kernel history is managed in Git",
                    "Microsoft bought GitHub for $7.5 billion"
                ],
                famousApps: ["Every modern software project"],
                category: "Version Control"
            }
        ]
    },
    {
        id: "frameworks",
        title: "🏗️ Frameworks & Libraries",
        description: "Powerful frameworks that accelerate development",
        color: "rgba(159, 122, 234, 0.1)",
        items: [
            {
                id: "express",
                name: "Express",
                icon: "🚂",
                shortDescription: "Fast, minimalist web framework for Node.js",
                fullDescription: "Express is the Swiss Army knife for building web servers with Node.js. It's minimal, flexible, and lets you build APIs and web apps quickly.",
                origin: {
                    year: 2010,
                    creator: "TJ Holowaychuk",
                    story: "TJ Holowaychuk was inspired by Sinatra (a Ruby framework) in 2010. He wanted something simple for Node.js - just enough structure without being opinionated. Express was born and quickly became the standard."
                },
                revolutionary: "Express made Node.js practical for web development. Its middleware system was genius - plug in features like LEGO blocks. It proved that frameworks don't need to be heavy.",
                connections: ["Node.js", "MongoDB", "REST APIs", "JavaScript", "Passport.js"],
                funFacts: [
                    "Powers APIs for Uber, IBM, and Accenture",
                    "Over 50,000 stars on GitHub",
                    "TJ created over 500 npm packages!",
                    "Express 5 has been 'coming soon' for years",
                    "Inspired countless other frameworks"
                ],
                famousApps: ["Uber", "IBM", "Accenture"],
                category: "Web Framework"
            },
            {
                id: "nextjs",
                name: "Next.js",
                icon: "▲",
                shortDescription: "React framework for production",
                fullDescription: "Next.js is React on steroids - it adds server-side rendering, routing, and optimization out of the box. If React is a sports car engine, Next.js is the complete luxury vehicle.",
                origin: {
                    year: 2016,
                    creator: "Vercel",
                    story: "Guillermo Rauch (Vercel's CEO) was frustrated in 2016. React was powerful but required tons of configuration. He created Next.js with a simple goal: make React production-ready with zero config."
                },
                revolutionary: "Next.js made React SEO-friendly and blazing fast. It pioneered the 'hybrid' approach - some pages static, some dynamic, all in one app.",
                connections: ["React", "Vercel", "TypeScript", "CSS", "API Routes", "SSR", "SSG"],
                funFacts: [
                    "TikTok, Hulu, and Netflix use Next.js",
                    "The '.js' was added because 'Next' was taken on npm",
                    "Pioneered 'Incremental Static Regeneration'",
                    "Conference talks often start with 'Next.js is eating the web'",
                    "Has the best developer experience in React ecosystem"
                ],
                famousApps: ["TikTok", "Hulu", "Netflix", "Twitch"],
                category: "React Framework"
            },
            {
                id: "redux",
                name: "Redux",
                icon: "🔄",
                shortDescription: "State management library",
                fullDescription: "Redux is like a bank vault for your application's data. It keeps all your app's state in one place and only allows changes through strict procedures.",
                origin: {
                    year: 2015,
                    creator: "Dan Abramov",
                    story: "Dan Abramov was preparing a conference talk about hot reloading in 2015. He created Redux as a demo, inspired by Flux and Elm. The demo was so good, everyone wanted to use Redux!"
                },
                revolutionary: "Redux made complex state predictable with time-travel debugging - you could replay your app's history! It brought functional programming concepts to mainstream JavaScript.",
                connections: ["React", "React Native", "TypeScript", "DevTools", "Middleware"],
                funFacts: [
                    "Used by Twitter, Instagram, and Slack",
                    "Dan Abramov was hired by Facebook after creating Redux",
                    "The logo is inspired by the 'Ouroboros' (snake eating its tail)",
                    "Time-travel debugging felt like magic when introduced",
                    "Redux Toolkit solved the 'too much boilerplate' criticism"
                ],
                famousApps: ["Twitter", "Instagram", "Slack"],
                category: "State Management"
            },
            {
                id: "graphql",
                name: "GraphQL",
                icon: "◈",
                shortDescription: "Query language for APIs",
                fullDescription: "GraphQL is a query language that lets frontend developers ask for exactly what data they need - no more, no less. It's like having a smart waiter who brings exactly what you ordered.",
                origin: {
                    year: 2012,
                    creator: "Facebook",
                    story: "Facebook was struggling in 2012. Their mobile apps were slow because they either fetched too much data or needed multiple requests. Lee Byron and others created GraphQL to solve this."
                },
                revolutionary: "Instead of multiple REST endpoints, you have one smart endpoint. Frontend developers could iterate without backend changes. It solved over-fetching and under-fetching in one shot.",
                connections: ["Apollo", "REST", "Node.js", "React", "Schema", "Resolvers"],
                funFacts: [
                    "GitHub, Shopify, and Twitter use GraphQL",
                    "Open-sourced in 2015 after 3 years of internal use",
                    "The 'QL' stands for Query Language (like SQL)",
                    "GraphiQL (the IDE) is pronounced 'graphical'",
                    "Competed with Facebook's own REST APIs internally"
                ],
                famousApps: ["GitHub", "Shopify", "Twitter"],
                category: "API Technology"
            }
        ]
    },
    {
        id: "languages",
        title: "💻 Programming Languages",
        description: "The foundation of all software development",
        color: "rgba(139, 92, 246, 0.1)",
        items: [
            {
                id: "javascript",
                name: "JavaScript",
                icon: "🟨",
                shortDescription: "The language of the web",
                fullDescription: "JavaScript is the wild child that took over the world. Created in 10 days, it now runs everywhere - browsers, servers, robots, and even space stations!",
                origin: {
                    year: 1995,
                    creator: "Brendan Eich",
                    story: "Brendan Eich had 10 days in 1995 to create a scripting language for Netscape. Management wanted 'Java but for the browser.' He created 'Mocha,' which became 'LiveScript,' then 'JavaScript' (for marketing reasons - it's unrelated to Java!)."
                },
                revolutionary: "JavaScript was the first language to run in browsers, making websites interactive. Its flexible, forgiving nature made it accessible to beginners while being powerful enough for experts.",
                connections: ["React", "Vue", "Angular", "Node.js", "TypeScript", "JSON", "V8"],
                funFacts: [
                    "Literally every website uses JavaScript",
                    "The == vs === confusion has spawned thousands of memes",
                    "'undefined is not a function' is the most famous error",
                    "JavaScript was created in May 1995 (same month as PHP and Java!)",
                    "The official name is ECMAScript (but nobody calls it that)"
                ],
                famousApps: ["Every modern web application"],
                category: "Programming Language"
            },
            {
                id: "typescript",
                name: "TypeScript",
                icon: "🔷",
                shortDescription: "JavaScript with static types",
                fullDescription: "TypeScript is JavaScript wearing a suit and tie. It adds static typing to JavaScript, catching errors before they happen. It's like having a proofreader for your code.",
                origin: {
                    year: 2012,
                    creator: "Microsoft",
                    story: "Anders Hejlsberg (creator of C#) was at Microsoft in 2010. JavaScript was being used for larger apps but lacked tools for big teams. TypeScript was unveiled in 2012 as 'JavaScript that scales.'"
                },
                revolutionary: "TypeScript proved you could improve JavaScript without breaking it. Every valid JavaScript is valid TypeScript. It brought IDE superpowers to JavaScript development.",
                connections: ["JavaScript", "VS Code", "React", "Angular", "Node.js", "Deno"],
                funFacts: [
                    "Slack, Airbnb, and Discord use TypeScript",
                    "VS Code is written in TypeScript",
                    "Anders also created Turbo Pascal and Delphi",
                    "The logo is a square (for 'squared' or TS)",
                    "Microsoft's best contribution to open source"
                ],
                famousApps: ["Slack", "Airbnb", "Discord", "VS Code"],
                category: "Programming Language"
            },
            {
                id: "python",
                name: "Python",
                icon: "🐍",
                shortDescription: "High-level programming language",
                fullDescription: "Python is the friendly programming language that reads like English. It's the Swiss Army knife of programming - good for websites, AI, data science, and automation.",
                origin: {
                    year: 1991,
                    creator: "Guido van Rossum",
                    story: "Guido van Rossum was bored during Christmas 1989. He started writing a language influenced by ABC but fixing its problems. He named it after Monty Python, not the snake!"
                },
                revolutionary: "Python's philosophy of 'readable code' and 'one obvious way to do it' made programming accessible. Its vast standard library meant you could build anything.",
                connections: ["Django", "Flask", "NumPy", "Pandas", "TensorFlow", "PyTorch"],
                funFacts: [
                    "Instagram, YouTube, and Dropbox use Python",
                    "NASA uses Python for space missions",
                    "'The Zen of Python' is an Easter egg (type `import this`)",
                    "Guido was 'Benevolent Dictator For Life' until 2018",
                    "Python 2 vs 3 split the community for a decade"
                ],
                famousApps: ["Instagram", "YouTube", "Dropbox", "NASA"],
                category: "Programming Language"
            },
            {
                id: "java",
                name: "Java",
                icon: "☕",
                shortDescription: "Object-oriented programming language",
                fullDescription: "Java is the enterprise workhorse - verbose but reliable. 'Write once, run anywhere' was its promise, and it delivered, powering everything from Android phones to banking systems.",
                origin: {
                    year: 1995,
                    creator: "Sun Microsystems",
                    story: "James Gosling's team at Sun was building software for TV set-top boxes in 1991. C++ was too complex. They created Oak (later Java) for embedded systems, but the web explosion made it famous."
                },
                revolutionary: "The Java Virtual Machine (JVM) meant true platform independence. Automatic memory management prevented crashes. It became the language of choice for large companies.",
                connections: ["Android", "Spring", "Kotlin", "JVM", "Maven", "Gradle"],
                funFacts: [
                    "Android, Minecraft, and most banks run Java",
                    "3 billion devices run Java (says Oracle)",
                    "The coffee cup logo has never changed",
                    "'Java' was chosen over 'Silk' and 'DNA'",
                    "Oracle vs Google lawsuit lasted a decade"
                ],
                famousApps: ["Android", "Minecraft", "Banking systems"],
                category: "Programming Language"
            }
        ]
    },
    {
        id: "runtime",
        title: "🔧 Runtime/Virtual Machine Layer",
        description: "Engines that execute code",
        color: "rgba(124, 58, 237, 0.1)",
        items: [
            {
                id: "v8",
                name: "V8",
                icon: "⚡",
                shortDescription: "Google's JavaScript engine",
                fullDescription: "V8 is Google's JavaScript engine - the blazing fast interpreter that makes JavaScript competitive with compiled languages. It's the heart of Chrome and Node.js.",
                origin: {
                    year: 2008,
                    creator: "Google",
                    story: "Lars Bak led the team in Denmark in 2006. Google needed JavaScript to be fast for Gmail and Google Maps. V8 was built from scratch with revolutionary optimization techniques."
                },
                revolutionary: "V8 made JavaScript 100x faster through Just-In-Time compilation. It turned JavaScript from a 'toy language' into something that could power real applications.",
                connections: ["Chrome", "Node.js", "JavaScript", "Electron", "Edge", "Deno"],
                funFacts: [
                    "Named after V8 car engine",
                    "Compiles JavaScript to machine code directly",
                    "Hidden classes optimization was groundbreaking",
                    "The team works in Aarhus, Denmark",
                    "Made Node.js possible"
                ],
                famousApps: ["Chrome", "Node.js", "Electron apps"],
                category: "JavaScript Engine"
            },
            {
                id: "hermes",
                name: "Hermes",
                icon: "🏃",
                shortDescription: "JavaScript engine optimized for React Native",
                fullDescription: "Hermes is Facebook's JavaScript engine optimized for React Native. While V8 optimizes for speed, Hermes optimizes for app startup time and memory usage.",
                origin: {
                    year: 2019,
                    creator: "Facebook",
                    story: "Facebook's React Native apps were getting criticism for slow startup in 2019. The team built Hermes from scratch, focusing on mobile constraints rather than desktop performance."
                },
                revolutionary: "Hermes pre-compiles JavaScript to bytecode, making apps start up to 2x faster. It uses up to 50% less memory. Perfect for mobile where every millisecond counts.",
                connections: ["React Native", "JavaScript", "Metro", "Mobile", "Chrome DevTools"],
                funFacts: [
                    "Instagram and Facebook apps use Hermes",
                    "Named after the Greek messenger god (for speed)",
                    "Doesn't implement JIT compilation (on purpose!)",
                    "Open-sourced immediately",
                    "Reduced Instagram's startup time by 50%"
                ],
                famousApps: ["Instagram", "Facebook"],
                category: "JavaScript Engine"
            },
            {
                id: "jvm",
                name: "JVM",
                icon: "☕",
                shortDescription: "Java Virtual Machine",
                fullDescription: "The JVM is like a universal translator for code. Write in Java (or Kotlin, Scala, Clojure) and the JVM runs it on any computer. It's a computer inside your computer.",
                origin: {
                    year: 1995,
                    creator: "Sun Microsystems",
                    story: "Sun Microsystems needed Java to run everywhere in 1995. Instead of compiling to machine code, they created bytecode and a virtual machine to run it. 'Write once, run anywhere' became reality."
                },
                revolutionary: "The JVM abstracted away operating system differences. Automatic garbage collection prevented memory leaks. It became the most successful virtual machine ever created.",
                connections: ["Java", "Kotlin", "Scala", "Android", "Spring Boot", "Minecraft"],
                funFacts: [
                    "Powers most Fortune 500 companies",
                    "Minecraft is the most famous JVM game",
                    "HotSpot JVM can optimize while running",
                    "Takes 100MB+ just to say 'Hello World'",
                    "Oracle makes billions from JVM licensing"
                ],
                famousApps: ["Enterprise applications", "Minecraft"],
                category: "Virtual Machine"
            },
            {
                id: "art",
                name: "ART",
                icon: "🤖",
                shortDescription: "Android Runtime",
                fullDescription: "ART is Android's runtime - it takes your Java/Kotlin code and runs it on phones. It replaced the older Dalvik runtime with ahead-of-time compilation.",
                origin: {
                    year: 2013,
                    creator: "Google",
                    story: "Dalvik was showing its age by 2013. Apps were janky and slow. Google built ART from scratch, unveiled in Android 4.4 as experimental, and made it default in Android 5.0."
                },
                revolutionary: "ART compiles apps during installation, not while running. This made apps start faster and run smoother. Battery life improved too.",
                connections: ["Android", "Java", "Kotlin", "DEX", "Android Studio"],
                funFacts: [
                    "Every Android app runs on ART",
                    "'Project Volta' improved battery by 30%",
                    "Can run some Java 8 features on old phones",
                    "Profile-guided optimization learns from usage",
                    "R8 compiler makes apps even smaller"
                ],
                famousApps: ["Every Android app"],
                category: "Mobile Runtime"
            }
        ]
    },
    {
        id: "database",
        title: "💾 Database Layer",
        description: "Data storage and management systems",
        color: "rgba(109, 40, 217, 0.1)",
        items: [
            {
                id: "postgresql",
                name: "PostgreSQL",
                icon: "🐘",
                shortDescription: "Advanced open source relational database",
                fullDescription: "PostgreSQL is the Swiss Army knife of databases - incredibly powerful, reliable, and feature-rich. It's like having a Ferrari engine that's also practical for daily driving.",
                origin: {
                    year: 1986,
                    creator: "UC Berkeley",
                    story: "Born from university research at UC Berkeley in 1986 as POSTGRES. Michael Stonebraker wanted to go beyond the limitations of his earlier creation, Ingres. It went open-source in 1996."
                },
                revolutionary: "PostgreSQL proved open-source databases could match commercial ones. It supports advanced features like JSON, full-text search, and even acts as a NoSQL database when needed.",
                connections: ["Supabase", "Prisma", "PostGIS", "SQL", "TypeORM"],
                funFacts: [
                    "Instagram, Reddit, and Spotify use PostgreSQL",
                    "The elephant mascot is named 'Slonik'",
                    "Can store 32TB in a single table",
                    "Supports over 100 data types",
                    "The name is pronounced 'post-gres-Q-L'"
                ],
                famousApps: ["Instagram", "Reddit", "Spotify"],
                category: "Relational Database"
            },
            {
                id: "mongodb",
                name: "MongoDB",
                icon: "🍃",
                shortDescription: "NoSQL document database",
                fullDescription: "MongoDB stores data as flexible documents (like JSON) instead of rigid tables. It's perfect when your data doesn't fit neatly into rows and columns.",
                origin: {
                    year: 2009,
                    creator: "MongoDB Inc.",
                    story: "Dwight Merriman was frustrated in 2007. DoubleClick needed to scale beyond what SQL databases could handle. MongoDB was built for the era of big data and flexible schemas."
                },
                revolutionary: "Developers could store data that matched their code objects. No more complex joins or migrations. It scaled horizontally by adding more servers.",
                connections: ["Node.js", "Express", "Mongoose", "Atlas", "GraphQL"],
                funFacts: [
                    "eBay, Forbes, and Toyota use MongoDB",
                    "Name comes from 'humongous'",
                    "Stores documents in BSON (Binary JSON)",
                    "The leaf logo represents organic growth",
                    "'Web scale' meme came from MongoDB"
                ],
                famousApps: ["eBay", "Forbes", "Toyota"],
                category: "NoSQL Database"
            },
            {
                id: "redis",
                name: "Redis",
                icon: "🔴",
                shortDescription: "In-memory data structure store",
                fullDescription: "Redis is a lightning-fast in-memory database. Think of RAM as a database - that's Redis. It's used for caching, real-time features, and anything needing microsecond response times.",
                origin: {
                    year: 2009,
                    creator: "Salvatore Sanfilippo",
                    story: "Salvatore Sanfilippo was building a real-time analytics startup in 2009. MySQL was too slow. He created Redis to store data in memory with optional persistence."
                },
                revolutionary: "Redis made developers rethink databases. Why wait for disk I/O when you can serve from memory? It became the standard for caching and real-time features.",
                connections: ["Caching", "Sessions", "Pub/Sub", "Job Queues", "Node.js"],
                funFacts: [
                    "Twitter, GitHub, and Stack Overflow use Redis",
                    "Can handle 1 million requests per second",
                    "Name means 'Remote Dictionary Server'",
                    "Written in pure C for speed",
                    "Creator is known as 'antirez'"
                ],
                famousApps: ["Twitter", "GitHub", "Stack Overflow"],
                category: "In-Memory Database"
            },
            {
                id: "sqlite",
                name: "SQLite",
                icon: "🗄️",
                shortDescription: "Embedded relational database",
                fullDescription: "SQLite is the embedded database that's everywhere. It's not a server - it's a library that gives you a full SQL database in a single file. No setup required!",
                origin: {
                    year: 2000,
                    creator: "D. Richard Hipp",
                    story: "D. Richard Hipp was contracted by the U.S. Navy in 2000. They needed a database that worked without administration on ships. SQLite was born - serverless by design."
                },
                revolutionary: "SQLite proved databases don't need servers. It's in every iPhone, Android phone, Chrome browser, and countless apps. It just works, everywhere.",
                connections: ["iOS", "Android", "Python", "Electron", "Mobile Apps"],
                funFacts: [
                    "Most deployed database in the world",
                    "In every smartphone on Earth",
                    "Airbus uses it in flight software",
                    "Can handle 100TB databases",
                    "Public domain - truly free"
                ],
                famousApps: ["Every smartphone app"],
                category: "Embedded Database"
            }
        ]
    },
    {
        id: "os-layer",
        title: "⚙️ Operating System Layer",
        description: "The foundation that runs everything",
        color: "rgba(91, 33, 182, 0.1)",
        items: [
            {
                id: "linux",
                name: "Linux",
                icon: "🐧",
                shortDescription: "Open source operating system",
                fullDescription: "Linux is the open-source operating system that runs most of the internet. It's like Windows or macOS but free, customizable, and community-driven.",
                origin: {
                    year: 1991,
                    creator: "Linus Torvalds",
                    story: "Linus Torvalds was a student in Finland in 1991. He wanted a free version of Unix for his PC. His hobby project attracted contributors worldwide and became the foundation of modern infrastructure."
                },
                revolutionary: "Linux proved open-source could power critical infrastructure. It runs everything from smartphones (Android) to supercomputers. Free as in freedom and free as in beer.",
                connections: ["Android", "Docker", "Ubuntu", "Git", "Servers"],
                funFacts: [
                    "100% of top 500 supercomputers run Linux",
                    "Android has 3 billion Linux devices",
                    "Tux the penguin mascot was Linus's idea",
                    "NASA runs Linux on Mars rovers",
                    "Microsoft now contributes to Linux"
                ],
                famousApps: ["Android", "Servers", "Supercomputers"],
                category: "Operating System"
            },
            {
                id: "windows",
                name: "Windows",
                icon: "🪟",
                shortDescription: "Microsoft's operating system",
                fullDescription: "Windows is Microsoft's operating system that democratized personal computing. It brought graphical interfaces to the masses and dominates desktop computing.",
                origin: {
                    year: 1985,
                    creator: "Microsoft",
                    story: "Bill Gates and Paul Allen saw a demo of Xerox's GUI in the early 1980s. Windows 1.0 launched in 1985 as a graphical shell for MS-DOS. Windows 95 changed everything with the Start button."
                },
                revolutionary: "Windows made computers accessible to non-technical users. It created the largest software ecosystem and established Microsoft's dominance for decades.",
                connections: [".NET", "Azure", "VS Code", "WSL", "PowerShell"],
                funFacts: [
                    "75% of desktops run Windows",
                    "Windows XP ran for 13 years",
                    "The 'Blue Screen of Death' is legendary",
                    "Windows 95 launch had people camping outside stores",
                    "Solitaire was included to teach mouse usage"
                ],
                famousApps: ["Microsoft Office", "Gaming"],
                category: "Operating System"
            },
            {
                id: "macos",
                name: "macOS",
                icon: "🍎",
                shortDescription: "Apple's desktop operating system",
                fullDescription: "macOS is Apple's desktop operating system - the polished, user-friendly Unix that 'just works.' It's favored by developers and creative professionals.",
                origin: {
                    year: 2001,
                    creator: "Apple",
                    story: "When Steve Jobs returned to Apple in 1997, Mac OS was outdated. He brought NeXTSTEP (his company's OS) which became Mac OS X in 2001. Built on Unix, it combined power with beauty."
                },
                revolutionary: "macOS proved Unix could be user-friendly. It became the developer's choice - Unix power with commercial app support. The ecosystem integration is unmatched.",
                connections: ["iOS", "Xcode", "Swift", "Homebrew", "Unix"],
                funFacts: [
                    "Most Silicon Valley developers use Macs",
                    "Built on Darwin (open-source Unix)",
                    "The 'X' in OS X meant 10 (Roman numeral)",
                    "Inspired by NeXTSTEP from the 1980s",
                    "macOS versions named after California places"
                ],
                famousApps: ["Xcode", "Final Cut Pro", "Logic Pro"],
                category: "Operating System"
            },
            {
                id: "android",
                name: "Android",
                icon: "🤖",
                shortDescription: "Mobile operating system by Google",
                fullDescription: "Android is Google's mobile operating system that powers most of the world's smartphones. It's open-source, customizable, and runs on everything from $50 phones to $2000 flagships.",
                origin: {
                    year: 2008,
                    creator: "Google",
                    story: "Andy Rubin started Android Inc. in 2003 to create an OS for digital cameras. They pivoted to phones. Google bought them in 2005 for $50 million - the best acquisition ever?"
                },
                revolutionary: "Android democratized smartphones. Manufacturers could customize it. Developers had freedom unlike iOS. It brought computing to billions in developing countries.",
                connections: ["Linux", "Java", "Kotlin", "React Native", "ART"],
                funFacts: [
                    "3 billion active Android devices",
                    "Every version named after desserts (until Android 10)",
                    "The green robot is named 'Bugdroid'",
                    "Samsung sells more Android phones than Google",
                    "Android runs on TVs, cars, and watches"
                ],
                famousApps: ["Google Play Store", "Every Android app"],
                category: "Mobile OS"
            }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = techStackDetailed;
}