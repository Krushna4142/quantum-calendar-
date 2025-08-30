// ⚛️ QUANTUM CALENDAR - Advanced Date Calculator
// Quantum Date Calculation System v3.0.0 with Ultra Features

class QuantumCalendar {
    constructor() {
        this.initializeElements();
        this.bindEvents();
        this.setDefaultDate();
        this.createStarfield();
        this.initializeQuantumElements();
        this.initializeUltraFeatures();
    }

    initializeElements() {
        this.dateInput = document.getElementById('dateInput');
        this.navigateBtn = document.getElementById('navigateBtn');
        this.resultDate = document.getElementById('resultDate');
        this.funnyQuote = document.getElementById('funnyQuote');
        this.quantumStatus = document.getElementById('quantumStatus');
        this.infiniteStatus = document.getElementById('infiniteStatus');
        this.chatgptStatus = document.getElementById('chatgptStatus');
        this.robotStatus = document.getElementById('robotStatus');
        this.dramaLevel = document.getElementById('dramaLevel');
        this.circusMode = document.getElementById('circusMode');
        this.pizzaTime = document.getElementById('pizzaTime');
        this.easterEggBtn = document.getElementById('easterEggBtn');
    }

    bindEvents() {
        this.navigateBtn.addEventListener('click', () => this.calculateDate());
        this.easterEggBtn.addEventListener('click', () => this.activateEasterEgg());
        
        // Add quantum particle effects on mouse movement
        document.addEventListener('mousemove', (e) => {
            if (Math.random() < 0.1) { // 10% chance
                this.createQuantumParticle(e.clientX, e.clientY);
            }
        });
    }

    setDefaultDate() {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        this.dateInput.value = formattedDate;
    }

    createStarfield() {
        const starfield = document.getElementById('starfield');
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random star properties
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 3 + 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            star.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                top: ${y}%;
                --duration: ${duration}s;
                animation-delay: ${Math.random() * 2}s;
            `;
            
            starfield.appendChild(star);
        }
    }

    initializeQuantumElements() {
        // Start with initial quantum states
        this.updateQuantumStatus('quantumStatus', 'Ready', 'success');
        this.updateQuantumStatus('infiniteStatus', 'Standby', 'warning');
        this.updateQuantumStatus('chatgptStatus', 'Offline', 'error');
        this.updateQuantumStatus('robotStatus', 'Inactive', 'warning');
    }

    initializeUltraFeatures() {
        // Initialize extra funny elements
        this.dramaLevel.textContent = 'Calculating...';
        this.circusMode.textContent = 'Standby';
        this.pizzaTime.textContent = 'Ready';
    }

    updateQuantumStatus(elementId, status, type) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = status;
            element.className = `element-status ${type}`;
        }
    }

    async calculateDate() {
        // Start quantum calculation sequence
        await this.runQuantumSequence();
        
        // Run ultra features sequence
        await this.runUltraFeaturesSequence();
        
        // Display results
        this.displayDateResult();
    }

    async runQuantumSequence() {
        // Quantum Calculation
        this.updateQuantumStatus('quantumStatus', 'Calculating...', 'processing');
        await this.delay(800);
        this.updateQuantumStatus('quantumStatus', 'Quantum Flux Active', 'success');
        
        // Infinite Readings
        this.updateQuantumStatus('infiniteStatus', 'Reading Temporal Data...', 'processing');
        await this.delay(600);
        this.updateQuantumStatus('infiniteStatus', 'Infinite Loop Detected', 'warning');
        
        // ChatGPT Server
        this.updateQuantumStatus('chatgptStatus', 'Connecting to AI...', 'processing');
        await this.delay(700);
        this.updateQuantumStatus('chatgptStatus', 'AI Response Generated', 'success');
        
        // Robot Verification
        this.updateQuantumStatus('robotStatus', 'Scanning...', 'processing');
        await this.delay(500);
        this.updateQuantumStatus('robotStatus', 'Human Verified', 'success');
        
        // Final delay
        await this.delay(300);
    }

    async runUltraFeaturesSequence() {
        // Drama Level
        this.dramaLevel.textContent = 'Analyzing...';
        await this.delay(400);
        this.dramaLevel.textContent = this.getRandomDramaLevel();
        
        // Circus Mode
        this.circusMode.textContent = 'Activating...';
        await this.delay(400);
        this.circusMode.textContent = this.getRandomCircusMode();
        
        // Pizza Time
        this.pizzaTime.textContent = 'Preparing...';
        await this.delay(400);
        this.pizzaTime.textContent = this.getRandomPizzaTime();
    }

    getRandomDramaLevel() {
        const levels = ['Maximum Drama!', 'Soap Opera Level', 'Reality TV Chaos', 'Theater Performance', 'Drama Queen Mode'];
        return levels[Math.floor(Math.random() * levels.length)];
    }

    getRandomCircusMode() {
        const modes = ['Clown Parade', 'Acrobat Show', 'Lion Taming', 'Juggling Chaos', 'Tightrope Walking'];
        return modes[Math.floor(Math.random() * modes.length)];
    }

    getRandomPizzaTime() {
        const times = ['Pepperoni Time!', 'Margherita Magic', 'Supreme Delight', 'Hawaiian Paradise', 'Cheese Explosion'];
        return times[Math.floor(Math.random() * times.length)];
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    displayDateResult() {
        const selectedDate = new Date(this.dateInput.value);
        const formattedDate = this.formatDate(selectedDate);
        const funnyQuote = this.getRandomFunnyQuote();
        
        this.resultDate.textContent = formattedDate;
        this.funnyQuote.textContent = funnyQuote;
        
        // Add quantum animation effect
        this.resultDate.style.transform = 'scale(1.1)';
        this.funnyQuote.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            this.resultDate.style.transform = 'scale(1)';
            this.funnyQuote.style.transform = 'scale(1)';
        }, 300);
    }

    formatDate(date) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const dayName = dayNames[date.getDay()];
        
        return `${dayName}, ${month} ${day}, ${year}`;
    }

    getRandomFunnyQuote() {
        const quotes = [
            '"Time flies like an arrow. Fruit flies like a banana!" 🍌',
            '"I\'m on a seafood diet. I see food and I eat it!" 🦐',
            '"Why don\'t scientists trust atoms? Because they make up everything!" ⚛️',
            '"I told my wife she was drawing her eyebrows too high. She looked surprised!" 😲',
            '"Why don\'t eggs tell jokes? They\'d crack each other up!" 🥚',
            '"What do you call a fake noodle? An impasta!" 🍝',
            '"Why did the scarecrow win an award? He was outstanding in his field!" 🌾',
            '"I\'m reading a book about anti-gravity. It\'s impossible to put down!" 📚',
            '"Did you hear about the mathematician who\'s afraid of negative numbers? He\'ll stop at nothing!" ➖',
            '"Why don\'t skeletons fight each other? They don\'t have the guts!" 💀',
            '"What do you call a bear with no teeth? A gummy bear!" 🧸',
            '"Why did the bicycle fall over? Because it was two-tired!" 🚲',
            '"What do you call a fish wearing a bowtie? So-fish-ticated!" 🐟',
            '"Why don\'t oysters donate to charity? Because they\'re shellfish!" 🦪',
            '"What do you call a dinosaur that crashes his car? Tyrannosaurus wrecks!" 🦖'
        ];
        
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    createQuantumParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        
        const size = Math.random() * 4 + 2;
        const colors = ['#00ffff', '#00ff88', '#ff00ff', '#ffff00'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${randomColor};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: cosmicFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 2000);
    }

    activateEasterEgg() {
        // Create a spectacular easter egg effect
        this.easterEggBtn.style.transform = 'scale(1.2)';
        this.easterEggBtn.style.background = 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)';
        
        // Add rainbow effect to the entire page
        document.body.style.filter = 'hue-rotate(0deg) saturate(2)';
        
        // Create floating emojis
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createFloatingEmoji();
            }, i * 100);
        }
        
        // Reset after 3 seconds
        setTimeout(() => {
            this.easterEggBtn.style.transform = 'scale(1)';
            this.easterEggBtn.style.background = 'linear-gradient(45deg, #ff69b4, #9370db)';
            document.body.style.filter = 'none';
        }, 3000);
        
        // Show easter egg message
        this.showEasterEggMessage();
    }

    createFloatingEmoji() {
        const emoji = document.createElement('div');
        const emojis = ['🎉', '🎊', '🎈', '🎁', '⭐', '🌟', '✨', '🎭', '🎪', '🎨'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        emoji.textContent = randomEmoji;
        emoji.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}%;
            top: 100%;
            font-size: 2rem;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 3s ease-out forwards;
        `;
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 3000);
    }

    showEasterEggMessage() {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff69b4, #9370db, #00ff88);
            color: white;
            padding: 30px;
            border-radius: 20px;
            border: 3px solid #ffffff;
            box-shadow: 0 0 50px rgba(255, 105, 180, 0.8);
            z-index: 10000;
            text-align: center;
            font-family: 'Orbitron', monospace;
            font-size: 1.2rem;
            font-weight: 900;
            max-width: 400px;
        `;
        
        message.innerHTML = `
            <h2>🎁 SURPRISE ACTIVATED!</h2>
            <p>🎉 You found the secret easter egg!</p>
            <p>🌟 You're now a quantum master!</p>
            <p>✨ Enjoy the rainbow chaos!</p>
            <br>
            <button onclick="this.parentElement.remove()" style="
                background: white;
                color: #ff69b4;
                border: none;
                padding: 10px 20px;
                border-radius: 10px;
                font-weight: bold;
                cursor: pointer;
            ">AWESOME!</button>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 5000);
    }
}

// Initialize the quantum calendar when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuantumCalendar();
    
    // Add quantum console messages
    console.log('⚛️ QUANTUM CALENDAR initialized');
    console.log('♾️ Infinite readings system online');
    console.log('🤖 ChatGPT server connection ready');
    console.log('🔐 Robot verification active');
    console.log('🚀 Ultra features activated');
    
    // Add floating emoji animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cosmicFloat {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0) rotate(0deg);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.5) translateY(-50px) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-100px) rotate(360deg);
            }
        }
        
        @keyframes floatUp {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
