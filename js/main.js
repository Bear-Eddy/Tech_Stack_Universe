// Import tech data if available, otherwise use basic data
let techStackData;
try {
    // Try to use detailed data if available
    if (typeof techStackDetailed !== 'undefined') {
        techStackData = techStackDetailed;
    } else {
        // Fallback to basic data
        techStackData = [
    {
        title: "👤 User Interface Layer",
        items: [
            {
                name: "React",
                icon: "⚛️",
                description: "A JavaScript library for building user interfaces",
                origin: "Created by Facebook (Meta) in 2013",
                relations: ["React Native", "Next.js", "Redux"]
            },
            {
                name: "React Native",
                icon: "📱",
                description: "Build mobile apps using React",
                origin: "Released by Facebook in 2015",
                relations: ["React", "Metro", "Hermes"]
            },
            {
                name: "Vue.js",
                icon: "💚",
                description: "Progressive JavaScript framework",
                origin: "Created by Evan You in 2014",
                relations: ["Nuxt.js", "Vuex", "Vite"]
            },
            {
                name: "Flutter",
                icon: "🦋",
                description: "Google's UI toolkit for cross-platform apps",
                origin: "Released by Google in 2017",
                relations: ["Dart", "Material Design"]
            }
        ]
    },
    {
        title: "☁️ Backend/Cloud Layer",
        items: [
            {
                name: "Node.js",
                icon: "🟢",
                description: "JavaScript runtime built on Chrome's V8 engine",
                origin: "Created by Ryan Dahl in 2009",
                relations: ["Express", "npm", "V8"]
            },
            {
                name: "AWS",
                icon: "☁️",
                description: "Amazon's cloud computing platform",
                origin: "Launched by Amazon in 2006",
                relations: ["Lambda", "S3", "EC2"]
            },
            {
                name: "Firebase",
                icon: "🔥",
                description: "Google's mobile and web app platform",
                origin: "Acquired by Google in 2014",
                relations: ["Firestore", "React Native", "Auth"]
            },
            {
                name: "Supabase",
                icon: "⚡",
                description: "Open source Firebase alternative",
                origin: "Founded in 2020",
                relations: ["PostgreSQL", "Auth", "Realtime"]
            }
        ]
    },
    {
        title: "🔌 Development Tools & Build Systems",
        items: [
            {
                name: "Webpack",
                icon: "📦",
                description: "Module bundler for JavaScript applications",
                origin: "Created by Tobias Koppers in 2012",
                relations: ["Babel", "React", "Node.js"]
            },
            {
                name: "Metro",
                icon: "🚇",
                description: "JavaScript bundler for React Native",
                origin: "Developed by Facebook",
                relations: ["React Native", "Hermes", "Babel"]
            },
            {
                name: "npm",
                icon: "📦",
                description: "Package manager for JavaScript",
                origin: "Created by Isaac Z. Schlueter in 2010",
                relations: ["Node.js", "yarn", "pnpm"]
            },
            {
                name: "Git",
                icon: "🔀",
                description: "Version control system",
                origin: "Created by Linus Torvalds in 2005",
                relations: ["GitHub", "GitLab", "VS Code"]
            }
        ]
    },
    {
        title: "🏗️ Frameworks & Libraries",
        items: [
            {
                name: "Express",
                icon: "🚂",
                description: "Fast, minimalist web framework for Node.js",
                origin: "Created by TJ Holowaychuk in 2010",
                relations: ["Node.js", "MongoDB", "REST APIs"]
            },
            {
                name: "Next.js",
                icon: "▲",
                description: "React framework for production",
                origin: "Created by Vercel in 2016",
                relations: ["React", "Vercel", "TypeScript"]
            },
            {
                name: "Redux",
                icon: "🔄",
                description: "State management library",
                origin: "Created by Dan Abramov in 2015",
                relations: ["React", "React Native", "TypeScript"]
            },
            {
                name: "GraphQL",
                icon: "◈",
                description: "Query language for APIs",
                origin: "Developed by Facebook in 2012",
                relations: ["Apollo", "REST", "Node.js"]
            }
        ]
    },
    {
        title: "💻 Programming Languages",
        items: [
            {
                name: "JavaScript",
                icon: "🟨",
                description: "The language of the web",
                origin: "Created by Brendan Eich in 1995",
                relations: ["TypeScript", "Node.js", "React"]
            },
            {
                name: "TypeScript",
                icon: "🔷",
                description: "JavaScript with static types",
                origin: "Developed by Microsoft in 2012",
                relations: ["JavaScript", "React", "Node.js"]
            },
            {
                name: "Python",
                icon: "🐍",
                description: "High-level programming language",
                origin: "Created by Guido van Rossum in 1991",
                relations: ["Django", "FastAPI", "AI/ML"]
            },
            {
                name: "Java",
                icon: "☕",
                description: "Object-oriented programming language",
                origin: "Created by Sun Microsystems in 1995",
                relations: ["Android", "Spring", "Kotlin"]
            }
        ]
    },
    {
        title: "🔧 Runtime/Virtual Machine Layer",
        items: [
            {
                name: "V8",
                icon: "⚡",
                description: "Google's JavaScript engine",
                origin: "Developed by Google in 2008",
                relations: ["Chrome", "Node.js", "JavaScript"]
            },
            {
                name: "Hermes",
                icon: "🏃",
                description: "JavaScript engine optimized for React Native",
                origin: "Created by Facebook in 2019",
                relations: ["React Native", "JavaScript", "Mobile"]
            },
            {
                name: "JVM",
                icon: "☕",
                description: "Java Virtual Machine",
                origin: "Developed by Sun Microsystems",
                relations: ["Java", "Kotlin", "Android"]
            },
            {
                name: "ART",
                icon: "🤖",
                description: "Android Runtime",
                origin: "Replaced Dalvik in Android 5.0",
                relations: ["Android", "Java", "Kotlin"]
            }
        ]
    },
    {
        title: "💾 Database Layer",
        items: [
            {
                name: "PostgreSQL",
                icon: "🐘",
                description: "Advanced open source relational database",
                origin: "Started at UC Berkeley in 1986",
                relations: ["Supabase", "Prisma", "SQL"]
            },
            {
                name: "MongoDB",
                icon: "🍃",
                description: "NoSQL document database",
                origin: "Released in 2009",
                relations: ["Node.js", "Express", "Atlas"]
            },
            {
                name: "Redis",
                icon: "🔴",
                description: "In-memory data structure store",
                origin: "Created by Salvatore Sanfilippo in 2009",
                relations: ["Caching", "Sessions", "Pub/Sub"]
            },
            {
                name: "SQLite",
                icon: "🗄️",
                description: "Embedded relational database",
                origin: "Created by D. Richard Hipp in 2000",
                relations: ["Mobile Apps", "Local Storage", "SQL"]
            }
        ]
    },
    {
        title: "⚙️ Operating System Layer",
        items: [
            {
                name: "Linux",
                icon: "🐧",
                description: "Open source operating system",
                origin: "Created by Linus Torvalds in 1991",
                relations: ["Ubuntu", "Docker", "Servers"]
            },
            {
                name: "Windows",
                icon: "🪟",
                description: "Microsoft's operating system",
                origin: "First released in 1985",
                relations: [".NET", "Azure", "VS Code"]
            },
            {
                name: "macOS",
                icon: "🍎",
                description: "Apple's desktop operating system",
                origin: "Based on NeXTSTEP, released in 2001",
                relations: ["iOS", "Xcode", "Swift"]
            },
            {
                name: "Android",
                icon: "🤖",
                description: "Mobile operating system by Google",
                origin: "Acquired by Google in 2005",
                relations: ["Java", "Kotlin", "React Native"]
            }
        ]
    }
        ];
    }
} catch (e) {
    // Use basic data on error
    techStackData = techStack;
}

// Modal functionality
function createModal() {
    const modalHTML = `
        <div class="modal-overlay" id="techModal">
            <div class="modal-content">
                <button class="modal-close" type="button">&times;</button>
                <div class="modal-header">
                    <div class="modal-title">
                        <span class="modal-icon" id="modalIcon"></span>
                        <h2 class="modal-name" id="modalName"></h2>
                    </div>
                    <p class="modal-category" id="modalCategory"></p>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- Content will be dynamically inserted here -->
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Modal event listeners
    const modal = document.getElementById('techModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(techData) {
    const modal = document.getElementById('techModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalName = document.getElementById('modalName');
    const modalCategory = document.getElementById('modalCategory');
    const modalBody = document.getElementById('modalBody');
    
    // Set header content
    modalIcon.textContent = techData.icon;
    modalName.textContent = techData.name;
    modalCategory.textContent = techData.category || 'Technology';
    
    // Build body content
    let bodyHTML = '';
    
    // Description
    if (techData.fullDescription) {
        bodyHTML += `
            <div class="modal-section">
                <h3>What is ${techData.name}?</h3>
                <p>${techData.fullDescription}</p>
            </div>
        `;
    }
    
    // Origin Story
    if (techData.origin) {
        bodyHTML += `
            <div class="modal-section">
                <h3>The Origin Story</h3>
                <div class="origin-story">
                    <p><span class="year">Created in ${techData.origin.year}</span> by <span class="creator">${techData.origin.creator}</span></p>
                    <p>${techData.origin.story}</p>
                </div>
            </div>
        `;
    }
    
    // Revolutionary Impact
    if (techData.revolutionary) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Why It Was Revolutionary</h3>
                <p>${techData.revolutionary}</p>
            </div>
        `;
    }
    
    // Fun Facts
    if (techData.funFacts && techData.funFacts.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Fun Facts</h3>
                <ul class="fun-facts-list">
                    ${techData.funFacts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Famous Apps
    if (techData.famousApps && techData.famousApps.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Famous Apps Using ${techData.name}</h3>
                <div class="famous-apps">
                    ${techData.famousApps.map(app => `<span class="app-tag">${app}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Connections
    if (techData.connections && techData.connections.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>How It Connects</h3>
                <div class="connections-grid">
                    ${techData.connections.map(conn => `<div class="connection-item">${conn}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = bodyHTML;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('techModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// App selector functionality
let selectedAppType = null;

function createAppSelector() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const selectorHTML = `
        <div class="app-selector">
            <h3>What do you want to build? Click to see the recommended tech stack:</h3>
            <div class="app-types" id="appTypes">
                <!-- App types will be inserted here -->
            </div>
            <button class="clear-button" onclick="clearAppSelection()" style="display: none;">Clear Selection</button>
        </div>
    `;
    
    header.insertAdjacentHTML('afterend', selectorHTML);
    
    // Load app types
    if (typeof appTypes !== 'undefined') {
        const appTypesContainer = document.getElementById('appTypes');
        appTypes.forEach(appType => {
            const button = document.createElement('div');
            button.className = 'app-type';
            button.innerHTML = `
                <span class="app-type-icon">${appType.icon}</span>
                <span>${appType.name}</span>
            `;
            button.onclick = () => selectAppType(appType, button);
            appTypesContainer.appendChild(button);
        });
    }
}

function selectAppType(appType, button) {
    // Clear previous selection
    document.querySelectorAll('.app-type').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mark button as active
    button.classList.add('active');
    selectedAppType = appType;
    
    // Show clear button
    const clearBtn = document.querySelector('.clear-button');
    if (clearBtn) clearBtn.style.display = 'inline-block';
    
    // Update tech highlighting
    updateTechHighlighting(appType.stack);
}

function updateTechHighlighting(stack) {
    // Reset all items
    document.querySelectorAll('.tech-item').forEach(item => {
        item.classList.remove('highlighted', 'dimmed');
    });
    
    // Highlight recommended items
    Object.entries(stack).forEach(([layerId, techNames]) => {
        techNames.forEach(techName => {
            const item = document.querySelector(`.tech-item[data-name="${techName}"][data-layer="${layerId}"]`);
            if (item) {
                item.classList.add('highlighted');
            }
        });
    });
    
    // Dim non-highlighted items
    document.querySelectorAll('.tech-item:not(.highlighted)').forEach(item => {
        item.classList.add('dimmed');
    });
}

function clearAppSelection() {
    // Clear app type selection
    document.querySelectorAll('.app-type').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset all tech items
    document.querySelectorAll('.tech-item').forEach(item => {
        item.classList.remove('highlighted', 'dimmed');
    });
    
    // Hide clear button
    const clearBtn = document.querySelector('.clear-button');
    if (clearBtn) clearBtn.style.display = 'none';
    
    selectedAppType = null;
}

// Make clearAppSelection available globally
window.clearAppSelection = clearAppSelection;

// Initialize stack visualization
function initStackVisualization() {
    const stackContainer = document.getElementById('stackContainer');
    const tooltip = document.getElementById('tooltip');

    if (!stackContainer) return;

    // Create modal if it doesn't exist
    if (!document.getElementById('techModal')) {
        createModal();
    }

    // Use appropriate data structure
    const dataToUse = techStackData.length ? techStackData : techStack;

    dataToUse.forEach((layer, layerIndex) => {
        const layerDiv = document.createElement('div');
        layerDiv.className = 'layer';
        
        const layerContent = document.createElement('div');
        layerContent.className = 'layer-content';
        
        const layerTitle = document.createElement('h2');
        layerTitle.className = 'layer-title';
        layerTitle.textContent = layer.title;
        
        const techGrid = document.createElement('div');
        techGrid.className = 'tech-grid';
        
        layer.items.forEach((tech, techIndex) => {
            const techItem = document.createElement('div');
            techItem.className = 'tech-item';
            techItem.dataset.name = tech.name;
            techItem.dataset.layer = layer.id || layer.title.toLowerCase().replace(/[^a-z]/g, '-');
            techItem.innerHTML = `
                <div class="tech-icon">${tech.icon}</div>
                <div class="tech-name">${tech.name}</div>
            `;
            
            // Add hover functionality
            techItem.addEventListener('mouseenter', (e) => {
                showTooltip(e, tech);
            });
            
            techItem.addEventListener('mouseleave', () => {
                hideTooltip();
            });
            
            // Add click functionality for modal
            techItem.addEventListener('click', () => {
                // Find detailed data if available
                let detailedTech = tech;
                if (typeof techStackDetailed !== 'undefined') {
                    for (let layer of techStackDetailed) {
                        const found = layer.items.find(item => item.name === tech.name);
                        if (found) {
                            detailedTech = found;
                            break;
                        }
                    }
                }
                openModal(detailedTech);
            });
            
            techGrid.appendChild(techItem);
        });
        
        layerContent.appendChild(layerTitle);
        layerContent.appendChild(techGrid);
        layerDiv.appendChild(layerContent);
        stackContainer.appendChild(layerDiv);
    });
}

// Tooltip functions
function showTooltip(event, tech) {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;

    let tooltipContent = `
        <h3>${tech.name}</h3>
        <p>${tech.description}</p>
        <p class="origin">${tech.origin}</p>
        <div class="relations">
            <strong>Related to:</strong><br>
            ${tech.relations.map(rel => `<span>${rel}</span>`).join('')}
        </div>
    `;
    
    // Add recommendation info if an app type is selected
    if (selectedAppType && event.target.closest('.tech-item').classList.contains('highlighted')) {
        tooltipContent += `
            <div class="recommendation-note">
                ✨ Recommended for ${selectedAppType.name} apps
            </div>
        `;
    }
    
    tooltip.innerHTML = tooltipContent;
    tooltip.classList.add('show');
    
    // Position tooltip
    const rect = event.target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 10;
    
    // Keep tooltip within viewport
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top < 10) {
        top = rect.bottom + 10;
    }
    
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = particle.style.height = `${Math.random() * 4 + 1}px`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${Math.random() * 20 + 20}s`;
        particlesContainer.appendChild(particle);
    }
}

// Mobile menu toggle
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load tech data if on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        // Load app types first
        const appTypesScript = document.createElement('script');
        appTypesScript.src = 'js/appTypes.js';
        document.head.appendChild(appTypesScript);
        
        // Then load tech data
        const techDataScript = document.createElement('script');
        techDataScript.src = 'js/techData.js';
        techDataScript.onload = () => {
            initStackVisualization();
            createAppSelector();
        };
        document.head.appendChild(techDataScript);
    }
    
    createParticles();
    initMobileMenu();
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});