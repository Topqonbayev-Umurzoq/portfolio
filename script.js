let scene, camera, renderer;
let stars, planets = [], projectArtifacts = [];
let currentSection = 0;
let raycaster, mouse;
let isZoomed = false;
let zoomedArtifact = null;
let secretStar;
let secretActivated = false;
let contactPlatform;

const projectsData = [
    {
        name: "AI Chatbot UI Clone",
        emoji: "🚀",
        desc: "A futuristic AI chatbot interface clone with smooth animations and glassmorphism design.",
        tech: ["React", "Tailwind CSS", "Framer Motion", "Three.js"],
        demo: "#",
        github: "#"
    },
    {
        name: "AgentX",
        emoji: "🤖",
        desc: "AI Assistant project featuring advanced NLP capabilities and intuitive user interactions.",
        tech: ["Python", "LangChain", "OpenAI", "FastAPI"],
        demo: "#",
        github: "#"
    },
    {
        name: "Portfolio Generator",
        emoji: "🌐",
        desc: "Automated portfolio generator that creates stunning websites from user data.",
        tech: ["Vue.js", "Node.js", "MongoDB", "Express"],
        demo: "#",
        github: "#"
    },
    {
        name: "Mini Space Game",
        emoji: "🎮",
        desc: "A fun mini space shooter game built with HTML5 Canvas and vanilla JavaScript.",
        tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
        demo: "#",
        github: "#"
    }
];

const contactLinks = [
    { icon: "📧", label: "Email", url: "mailto:Umurzoquz08@gmail.com", text: "Umurzoquz08@gmail.com" },
    { icon: "🐙", label: "GitHub", url: "https://github.com/Topqonbayev-Umurzoq", text: "Topqonbayev-Umurzoq" },
    { icon: "✈️", label: "Telegram", url: "https://t.me/TOPQONBAYEV_UMURZOQ", text: "@TOPQONBAYEV_UMURZOQ" },
    { icon: "📸", label: "Instagram", url: "https://www.instagram.com/TOPQONBAYEV_UMURZOQ", text: "@TOPQONBAYEV_UMURZOQ" },
    { icon: "📹", label: "YouTube", url: "https://www.youtube.com/@Umurzoq_uz", text: "@Umurzoq_uz" }
];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    createStars();
    createPlanets();
    createProjectArtifacts();
    createContactSection();
    createSecretStar();

    camera.position.z = 20;

    setupEventListeners();
    animate();
}

function createStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const positions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        sizeAttenuation: true
    });
    
    stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
}

function createPlanets() {
    const planetColors = [0x00eaff, 0x7a5cff, 0xff6b00, 0x00ff88];
    const planetPositions = [
        { x: -15, y: 0, z: 0 },
        { x: -5, y: 0, z: 0 },
        { x: 5, y: 0, z: 0 },
        { x: 15, y: 0, z: 0 }
    ];
    
    for (let i = 0; i < 4; i++) {
        const geometry = new THREE.SphereGeometry(1.5, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: planetColors[i],
            emissive: planetColors[i],
            emissiveIntensity: 0.3,
            shininess: 100
        });
        
        const planet = new THREE.Mesh(geometry, material);
        planet.position.set(planetPositions[i].x, planetPositions[i].y, planetPositions[i].z);
        planet.userData = { section: i };
        
        planets.push(planet);
        scene.add(planet);
        
        const ringGeometry = new THREE.RingGeometry(2, 2.3, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: planetColors[i],
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.3
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.copy(planet.position);
        scene.add(ring);
    }
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00eaff, 1, 100);
    pointLight.position.set(0, 5, 10);
    scene.add(pointLight);
}

function createProjectArtifacts() {
    const artifactPositions = [
        { x: 2, y: 2, z: 0 },
        { x: 8, y: 1.5, z: -1 },
        { x: 3, y: -2, z: 1 },
        { x: 7, y: -1.5, z: 0.5 }
    ];
    
    const colors = [0x00eaff, 0x7a5cff, 0xff6b00, 0x00ff88];
    
    projectsData.forEach((project, i) => {
        const geometry = new THREE.IcosahedronGeometry(0.8, 1);
        const material = new THREE.MeshPhongMaterial({
            color: colors[i],
            emissive: colors[i],
            emissiveIntensity: 0.2,
            wireframe: false,
            transparent: true,
            opacity: 0.9
        });
        
        const artifact = new THREE.Mesh(geometry, material);
        artifact.position.set(artifactPositions[i].x + 5, artifactPositions[i].y, artifactPositions[i].z);
        artifact.userData = { type: 'artifact', index: i, originalPos: artifact.position.clone(), originalScale: artifact.scale.clone() };
        
        projectArtifacts.push(artifact);
        scene.add(artifact);
        
        const glowGeometry = new THREE.SphereGeometry(1.2, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: colors[i],
            transparent: true,
            opacity: 0.1
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.copy(artifact.position);
        glow.userData = { linkedArtifact: artifact };
        projectArtifacts.push(glow);
        scene.add(glow);
    });
}

function createContactSection() {
    const platformGeometry = new THREE.CylinderGeometry(3, 3.5, 0.5, 32);
    const platformMaterial = new THREE.MeshPhongMaterial({
        color: 0x333344,
        emissive: 0x00eaff,
        emissiveIntensity: 0.1,
        metalness: 0.8,
        roughness: 0.2
    });
    
    contactPlatform = new THREE.Mesh(platformGeometry, platformMaterial);
    contactPlatform.position.set(15, 0, 0);
    scene.add(contactPlatform);
    
    const waveGeometry = new THREE.RingGeometry(3.2, 3.8, 32);
    const waveMaterial = new THREE.MeshBasicMaterial({
        color: 0x00eaff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.3
    });
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.rotation.x = Math.PI / 2;
    wave.position.set(15, 0.3, 0);
    wave.userData = { type: 'wave' };
    scene.add(wave);
}

function createSecretStar() {
    const starGeometry = new THREE.OctahedronGeometry(0.3, 0);
    const starMaterial = new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        emissive: 0xff00ff,
        emissiveIntensity: 0.5
    });
    
    secretStar = new THREE.Mesh(starGeometry, starMaterial);
    secretStar.position.set(25, 15, -10);
    secretStar.userData = { type: 'secretStar' };
    scene.add(secretStar);
}

function setupEventListeners() {
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = parseInt(btn.dataset.section);
            navigateToSection(section);
        });
    });
    
    document.getElementById('back-btn').addEventListener('click', closeProjectDetail);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    
    const artifacts = projectArtifacts.filter(a => a.userData.type === 'artifact' || a.userData.type === undefined);
    const intersects = raycaster.intersectObjects(artifacts);
    
    artifacts.forEach(artifact => {
        if (artifact.userData.type !== 'artifact' && artifact.userData.linkedArtifact === undefined) return;
        const targetArtifact = artifact.userData.linkedArtifact || artifact;
        if (intersects.length > 0 && (intersects[0].object === artifact || intersects[0].object.userData.linkedArtifact === artifact)) {
            if (targetArtifact.userData.originalScale) {
                targetArtifact.scale.set(targetArtifact.userData.originalScale.x * 1.3, targetArtifact.userData.originalScale.y * 1.3, targetArtifact.userData.originalScale.z * 1.3);
            }
            targetArtifact.material.emissiveIntensity = 0.8;
            document.body.style.cursor = 'pointer';
        } else {
            if (targetArtifact.userData.originalScale) {
                targetArtifact.scale.copy(targetArtifact.userData.originalScale);
            }
            targetArtifact.material.emissiveIntensity = 0.2;
            document.body.style.cursor = 'default';
        }
    });
    
    if (secretStar) {
        const secretIntersects = raycaster.intersectObject(secretStar);
        if (secretIntersects.length > 0) {
            document.body.style.cursor = 'pointer';
        }
    }
}

function onMouseClick(event) {
    raycaster.setFromCamera(mouse, camera);
    
    const artifacts = projectArtifacts.filter(a => a.userData.type === 'artifact');
    const intersects = raycaster.intersectObjects(artifacts);
    
    if (intersects.length > 0 && !isZoomed) {
        const artifact = intersects[0].object;
        if (artifact.userData.type === 'artifact') {
            openProjectDetail(artifact.userData.index);
        }
    }
    
    if (secretStar) {
        const secretIntersects = raycaster.intersectObject(secretStar);
        if (secretIntersects.length > 0 && !secretActivated) {
            activateSecret();
        }
    }
}

function navigateToSection(section) {
    currentSection = section;
    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === section);
    });
    
    const targetX = [ -15, -5, 5, 15 ][section];
    animateCameraTo(targetX, 0, 20);
}

function animateCameraTo(x, y, z) {
    const startX = camera.position.x;
    const startY = camera.position.y;
    const startZ = camera.position.z;
    const duration = 1000;
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        camera.position.x = startX + (x - startX) * easeProgress;
        camera.position.y = startY + (y - startY) * easeProgress;
        camera.position.z = startZ + (z - startZ) * easeProgress;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

function openProjectDetail(index) {
    isZoomed = true;
    zoomedArtifact = index;
    
    const project = projectsData[index];
    
    document.getElementById('project-title').textContent = project.emoji + ' ' + project.name;
    document.getElementById('project-desc').textContent = project.desc;
    document.getElementById('project-demo').href = project.demo;
    document.getElementById('project-github').href = project.github;
    
    const techContainer = document.getElementById('project-tech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });
    
    document.getElementById('project-detail').classList.add('active');
}

function closeProjectDetail() {
    isZoomed = false;
    zoomedArtifact = null;
    document.getElementById('project-detail').classList.remove('active');
}

function activateSecret() {
    secretActivated = true;
    const secretCode = document.getElementById('secret-code');
    secretCode.classList.remove('hidden');
    
    const nameHologram = document.createElement('div');
    nameHologram.id = 'name-hologram';
    nameHologram.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Orbitron', sans-serif;
        font-size: 4rem;
        font-weight: 900;
        color: #7a5cff;
        text-shadow: 0 0 50px #7a5cff, 0 0 100px #00eaff;
        z-index: 150;
        animation: spinName 3s ease-in-out;
        pointer-events: none;
    `;
    nameHologram.textContent = 'Topqonbayev Umurzoq';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spinName {
            0% { transform: translate(-50%, -50%) rotate(0deg) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.5); opacity: 1; }
            100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(nameHologram);
    
    setTimeout(() => {
        secretCode.classList.add('hidden');
        setTimeout(() => {
            nameHologram.remove();
            secretActivated = false;
        }, 2000);
    }, 3000);
}

function animate() {
    requestAnimationFrame(animate);
    
    const time = Date.now() * 0.001;
    
    if (stars) {
        stars.rotation.y = time * 0.05;
    }
    
    planets.forEach((planet, i) => {
        planet.rotation.y = time * (0.5 + i * 0.2);
    });
    
    projectArtifacts.forEach((artifact, i) => {
        if (artifact.userData.type === 'artifact' || artifact.userData.type === undefined) {
            const targetArtifact = artifact.userData.linkedArtifact || artifact;
            if (targetArtifact.userData.type === 'artifact' || targetArtifact.userData.originalPos) {
                targetArtifact.rotation.x = time * 0.8;
                targetArtifact.rotation.y = time * 1.2;
                if (targetArtifact.userData.originalPos) {
                    targetArtifact.position.y = targetArtifact.userData.originalPos.y + Math.sin(time * 2 + i) * 0.3;
                }
            }
        }
    });
    
    if (contactPlatform) {
        contactPlatform.rotation.y = time * 0.3;
    }
    
    scene.traverse(obj => {
        if (obj.userData.type === 'wave') {
            const scale = 1 + Math.sin(time * 3) * 0.2;
            obj.scale.set(scale, scale, scale);
            obj.material.opacity = 0.3 + Math.sin(time * 3) * 0.2;
        }
    });
    
    if (secretStar) {
        const hue = (time * 0.5) % 1;
        secretStar.material.color.setHSL(hue, 1, 0.5);
        secretStar.material.emissive.setHSL(hue, 1, 0.5);
        secretStar.rotation.x = time * 1.5;
        secretStar.rotation.y = time * 2;
    }
    
    renderer.render(scene, camera);
}

init();
