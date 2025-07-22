// Enhanced tech explorer functionality
// Use detailed data if available, otherwise use fallback
let techDatabase;

if (typeof techStackDetailed !== 'undefined') {
    // Transform the detailed data into explorer format
    techDatabase = {};
    
    techStackDetailed.forEach(layer => {
        const categoryKey = layer.id.replace('-', '_');
        techDatabase[categoryKey] = {
            title: layer.title.replace(/[^\w\s]/g, '').trim(),
            description: layer.description,
            technologies: layer.items.map(item => ({
                name: item.name,
                category: item.category,
                description: item.shortDescription,
                fullDescription: item.fullDescription,
                yearCreated: item.origin?.year,
                creator: item.origin?.creator,
                license: "Various", // Not in original data
                primaryLanguage: "Various",
                keyFeatures: item.funFacts?.slice(0, 4) || [],
                useCases: item.famousApps || [],
                relatedTech: item.connections || [],
                origin: item.origin,
                revolutionary: item.revolutionary,
                funFacts: item.funFacts,
                famousApps: item.famousApps,
                icon: item.icon
            }))
        };
    });
} else {
    // Fallback data
    techDatabase = {
    frontend: {
        title: "Frontend Technologies",
        description: "Client-side technologies for building user interfaces",
        technologies: [
            {
                name: "React",
                category: "Library",
                description: "A JavaScript library for building user interfaces with a component-based architecture",
                yearCreated: 2013,
                creator: "Facebook",
                license: "MIT",
                primaryLanguage: "JavaScript",
                keyFeatures: [
                    "Virtual DOM for efficient updates",
                    "Component-based architecture",
                    "Unidirectional data flow",
                    "Large ecosystem and community"
                ],
                useCases: [
                    "Single Page Applications",
                    "Complex interactive UIs",
                    "Mobile apps with React Native",
                    "Server-side rendering with Next.js"
                ],
                relatedTech: ["React Native", "Next.js", "Redux", "React Router"]
            },
            {
                name: "Vue.js",
                category: "Framework",
                description: "Progressive JavaScript framework for building user interfaces",
                yearCreated: 2014,
                creator: "Evan You",
                license: "MIT",
                primaryLanguage: "JavaScript",
                keyFeatures: [
                    "Reactive data binding",
                    "Component system",
                    "Single-file components",
                    "Progressive framework"
                ],
                useCases: [
                    "Small to large web applications",
                    "Progressive enhancement",
                    "Rapid prototyping",
                    "Enterprise applications"
                ],
                relatedTech: ["Nuxt.js", "Vuex", "Vue Router", "Vite"]
            },
            {
                name: "Angular",
                category: "Framework",
                description: "Platform for building mobile and desktop web applications",
                yearCreated: 2016,
                creator: "Google",
                license: "MIT",
                primaryLanguage: "TypeScript",
                keyFeatures: [
                    "Two-way data binding",
                    "Dependency injection",
                    "TypeScript-first",
                    "Full framework solution"
                ],
                useCases: [
                    "Enterprise applications",
                    "Large-scale projects",
                    "Progressive Web Apps",
                    "Cross-platform development"
                ],
                relatedTech: ["TypeScript", "RxJS", "Angular Material", "Ionic"]
            }
        ]
    },
    backend: {
        title: "Backend Technologies",
        description: "Server-side technologies for building application logic",
        technologies: [
            {
                name: "Node.js",
                category: "Runtime",
                description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
                yearCreated: 2009,
                creator: "Ryan Dahl",
                license: "MIT",
                primaryLanguage: "JavaScript",
                keyFeatures: [
                    "Event-driven architecture",
                    "Non-blocking I/O",
                    "Large package ecosystem (npm)",
                    "Cross-platform"
                ],
                useCases: [
                    "RESTful APIs",
                    "Real-time applications",
                    "Microservices",
                    "Command-line tools"
                ],
                relatedTech: ["Express", "npm", "V8", "Deno"]
            },
            {
                name: "Django",
                category: "Framework",
                description: "High-level Python web framework that encourages rapid development",
                yearCreated: 2005,
                creator: "Django Software Foundation",
                license: "BSD",
                primaryLanguage: "Python",
                keyFeatures: [
                    "Batteries-included framework",
                    "ORM (Object-Relational Mapping)",
                    "Admin interface",
                    "Security features built-in"
                ],
                useCases: [
                    "Content management systems",
                    "Scientific computing platforms",
                    "Social networks",
                    "Financial platforms"
                ],
                relatedTech: ["Python", "PostgreSQL", "Redis", "Celery"]
            },
            {
                name: "Spring Boot",
                category: "Framework",
                description: "Java-based framework for building microservices and web applications",
                yearCreated: 2014,
                creator: "Pivotal",
                license: "Apache 2.0",
                primaryLanguage: "Java",
                keyFeatures: [
                    "Auto-configuration",
                    "Embedded servers",
                    "Production-ready features",
                    "Microservices support"
                ],
                useCases: [
                    "Enterprise applications",
                    "Microservices architecture",
                    "RESTful web services",
                    "Cloud-native applications"
                ],
                relatedTech: ["Java", "Spring Framework", "Hibernate", "Maven"]
            }
        ]
    },
    database: {
        title: "Database Technologies",
        description: "Data storage and management systems",
        technologies: [
            {
                name: "PostgreSQL",
                category: "Relational",
                description: "Advanced open-source relational database",
                yearCreated: 1986,
                creator: "PostgreSQL Global Development Group",
                license: "PostgreSQL License",
                primaryLanguage: "C",
                keyFeatures: [
                    "ACID compliance",
                    "Complex queries and joins",
                    "JSON/JSONB support",
                    "Extensibility"
                ],
                useCases: [
                    "Web applications",
                    "Geographic information systems",
                    "Analytics and data warehousing",
                    "Financial applications"
                ],
                relatedTech: ["Supabase", "Prisma", "PostGIS", "pgAdmin"]
            },
            {
                name: "MongoDB",
                category: "NoSQL",
                description: "Document-oriented NoSQL database",
                yearCreated: 2009,
                creator: "MongoDB Inc.",
                license: "SSPL",
                primaryLanguage: "C++",
                keyFeatures: [
                    "Document-based storage",
                    "Flexible schema",
                    "Horizontal scaling",
                    "Rich query language"
                ],
                useCases: [
                    "Content management",
                    "Real-time analytics",
                    "Internet of Things",
                    "Mobile applications"
                ],
                relatedTech: ["Mongoose", "Atlas", "Realm", "Node.js"]
            }
        ]
    },
    devops: {
        title: "DevOps & Infrastructure",
        description: "Tools for deployment, monitoring, and infrastructure management",
        technologies: [
            {
                name: "Docker",
                category: "Containerization",
                description: "Platform for developing, shipping, and running applications in containers",
                yearCreated: 2013,
                creator: "Docker Inc.",
                license: "Apache 2.0",
                primaryLanguage: "Go",
                keyFeatures: [
                    "Container isolation",
                    "Portability",
                    "Resource efficiency",
                    "Version control for infrastructure"
                ],
                useCases: [
                    "Microservices deployment",
                    "CI/CD pipelines",
                    "Development environment consistency",
                    "Application scaling"
                ],
                relatedTech: ["Kubernetes", "Docker Compose", "containerd", "Linux"]
            },
            {
                name: "Kubernetes",
                category: "Orchestration",
                description: "Container orchestration platform for automating deployment and scaling",
                yearCreated: 2014,
                creator: "Google",
                license: "Apache 2.0",
                primaryLanguage: "Go",
                keyFeatures: [
                    "Automatic scaling",
                    "Self-healing",
                    "Service discovery",
                    "Rolling updates"
                ],
                useCases: [
                    "Microservices orchestration",
                    "Cloud-native applications",
                    "Multi-cloud deployments",
                    "High-availability systems"
                ],
                relatedTech: ["Docker", "Helm", "Istio", "Prometheus"]
            }
        ]
    }
    };
}

// Modal functionality for explorer
function createExplorerModal() {
    // Check if modal already exists
    if (document.getElementById('techModal')) return;
    
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
    
    closeBtn.addEventListener('click', () => closeExplorerModal());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeExplorerModal();
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeExplorerModal();
        }
    });
}

function openExplorerModal(techData) {
    const modal = document.getElementById('techModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalName = document.getElementById('modalName');
    const modalCategory = document.getElementById('modalCategory');
    const modalBody = document.getElementById('modalBody');
    
    // Set header content
    modalIcon.textContent = techData.icon || '🔧';
    modalName.textContent = techData.name;
    modalCategory.textContent = techData.category || 'Technology';
    
    // Build body content
    let bodyHTML = '';
    
    // Full Description
    if (techData.fullDescription) {
        bodyHTML += `
            <div class="modal-section">
                <h3>What is ${techData.name}?</h3>
                <p>${techData.fullDescription}</p>
            </div>
        `;
    } else if (techData.description) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Overview</h3>
                <p>${techData.description}</p>
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
    } else if (techData.yearCreated) {
        bodyHTML += `
            <div class="modal-section">
                <h3>History</h3>
                <p>Created in ${techData.yearCreated} by ${techData.creator}</p>
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
    
    // Key Features
    if (techData.keyFeatures && techData.keyFeatures.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="fun-facts-list">
                    ${techData.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
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
    
    // Use Cases / Famous Apps
    if (techData.famousApps && techData.famousApps.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Famous Apps Using ${techData.name}</h3>
                <div class="famous-apps">
                    ${techData.famousApps.map(app => `<span class="app-tag">${app}</span>`).join('')}
                </div>
            </div>
        `;
    } else if (techData.useCases && techData.useCases.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Use Cases</h3>
                <ul class="fun-facts-list">
                    ${techData.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Related Technologies
    if (techData.relatedTech && techData.relatedTech.length > 0) {
        bodyHTML += `
            <div class="modal-section">
                <h3>Related Technologies</h3>
                <div class="connections-grid">
                    ${techData.relatedTech.map(tech => `<div class="connection-item">${tech}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    modalBody.innerHTML = bodyHTML;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExplorerModal() {
    const modal = document.getElementById('techModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Search and filter functionality
function initializeExplorer() {
    const searchInput = document.getElementById('techSearch');
    const categoryFilter = document.getElementById('categoryFilter');
    const resultsContainer = document.getElementById('explorerResults');
    
    if (!searchInput || !categoryFilter || !resultsContainer) return;

    // Build category filter options
    Object.keys(techDatabase).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = techDatabase[category].title;
        categoryFilter.appendChild(option);
    });

    // Search functionality
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        
        resultsContainer.innerHTML = '';
        
        Object.keys(techDatabase).forEach(category => {
            if (selectedCategory && selectedCategory !== category) return;
            
            const categoryData = techDatabase[category];
            const matchingTech = categoryData.technologies.filter(tech => 
                tech.name.toLowerCase().includes(searchTerm) ||
                tech.description.toLowerCase().includes(searchTerm) ||
                tech.keyFeatures.some(feature => feature.toLowerCase().includes(searchTerm)) ||
                tech.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm))
            );
            
            if (matchingTech.length > 0) {
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';
                categorySection.innerHTML = `<h3>${categoryData.title}</h3>`;
                
                const techGrid = document.createElement('div');
                techGrid.className = 'tech-grid';
                
                matchingTech.forEach(tech => {
                    const techCard = createTechCard(tech);
                    techGrid.appendChild(techCard);
                });
                
                categorySection.appendChild(techGrid);
                resultsContainer.appendChild(categorySection);
            }
        });
        
        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = '<p style="text-align: center; color: #8892b0;">No technologies found matching your search.</p>';
        }
    }

    // Create technology card
    function createTechCard(tech) {
        const card = document.createElement('div');
        card.className = 'tech-detail-card';
        card.style.cursor = 'pointer';
        
        const yearInfo = tech.yearCreated ? `Created ${tech.yearCreated} by ${tech.creator}` : '';
        const icon = tech.icon || '🔧';
        
        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <span style="font-size: 2em;">${icon}</span>
                <div>
                    <h4 style="margin: 0;">${tech.name}</h4>
                    <p class="tech-meta" style="margin: 0;">${tech.category} ${yearInfo ? '• ' + yearInfo : ''}</p>
                </div>
            </div>
            <p>${tech.description}</p>
            ${tech.keyFeatures && tech.keyFeatures.length > 0 ? `
                <div class="tech-details">
                    <div class="detail-section">
                        <strong>Key Features:</strong>
                        <ul>
                            ${tech.keyFeatures.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                            ${tech.keyFeatures.length > 3 ? '<li style="color: #667eea;">Click to see more...</li>' : ''}
                        </ul>
                    </div>
                </div>
            ` : ''}
        `;
        
        // Add click handler
        card.addEventListener('click', () => {
            openExplorerModal(tech);
        });
        
        return card;
    }

    // Event listeners
    searchInput.addEventListener('input', performSearch);
    categoryFilter.addEventListener('change', performSearch);
    
    // Initial load
    performSearch();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Load tech data first if available
    const script = document.createElement('script');
    script.src = 'js/techData.js';
    script.onload = () => {
        createExplorerModal();
        initializeExplorer();
    };
    script.onerror = () => {
        // Fallback if techData.js doesn't load
        createExplorerModal();
        initializeExplorer();
    };
    document.head.appendChild(script);
});