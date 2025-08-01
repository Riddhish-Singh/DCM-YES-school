// --- ChatService: Simulates interaction with a backend API ---
class ChatService {
    constructor() {
        // In a real application, this would be an actual API endpoint.
        // For demonstration, we simulate data and network delay.
        this.qaDatabase = {
            'start': {
                question: 'Initial prompt',
                answer: 'Welcome to <strong>DCM YES School</strong>, a legacy in education since 1946. We are committed to fostering an environment of academic excellence and holistic development. How can we assist you today?'
            },
            'admissions': {
                question: 'Admissions Info',
                answer: 'Our admission process for the new academic year typically begins in <strong>November</strong>. For detailed information on eligibility, required documents, and key dates, please visit the <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">admissions section on our official website</a>.',
                followUpAnswer: 'To confirm, admissions generally start in November. All details on eligibility and forms are on the <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">official website</a>. Please check there for the most current information.'
            },
            'curriculum': {
                question: 'Our Curriculum',
                answer: 'We proudly follow the <strong>CBSE curriculum</strong>, enriched with a bespoke curriculum for all age groups including <strong>Mother\'s Lap, CCLICK, SLITEE, and CLASSE</strong> programs. This ensures all-round development with a wide variety of co-curricular and extra-curricular activities.',
                followUpAnswer: 'Our curriculum is a blend of <strong>CBSE</strong> and unique programs like <strong>Mother\'s Lap, CCLICK, SLITEE, and CLASSE</strong>, designed for comprehensive development. It emphasizes both academics and co-curricular learning.'
            },
            'facilities': {
                question: 'Campus Facilities',
                answer: 'Our campus boasts world-class, state-of-the-art facilities including: <ul class="list-disc list-inside mt-2"><li>Digitally networked Smart Classrooms</li><li>Ultra Modern Labs (Physics, Chemistry, Biology, Social Studies, Maths, AI/Robotics, Special Language Lab)</li><li>A Hi-tech, well-stocked Library</li><li>Spacious Sports Grounds for indoor & outdoor games (with expert coaches)</li><li>Secure Transportation Services</li><li>Kids Amusement Park with rides & animated characters</li><li>Experiential Learning Studios</li><li>Finishing & Grooming classes for girls (Etiquette Villa)</li><li>Activity Block (Meditation, Music, Art & Craft, Dance room)</li><li>Separate Computer labs for Junior & Senior wings with 24-hour high-speed Internet</li><li>Smart Boards & Conference Room</li><li>STEM (Science, Technology, Engineering and Math) labs</li><li>e-Counseling Cell & Provision for day-boarding</li><li>Special classes for competitive exams (IIT, NEET/JEE, AFMC, AIIMS, NDA, NTSE, KVPY)</li><li>Safe and secure environment with round-the-clock security</li></ul>',
                followUpAnswer: 'In summary, our campus features modern facilities such as Smart Classrooms, a variety of advanced labs including AI and STEM, extensive sports grounds, a library, and unique offerings like our Etiquette Villa and Kids Amusement Park. We also provide secure transportation.'
            },
            'contact': {
                question: 'Contact Us',
                answer: 'You can reach us at: <br><br><strong>Landline:</strong> <a href="tel:+911613510099" class="text-theme-blue font-semibold"><strong>+91-161-3510099</strong></a><br><strong>Mobile:</strong> <a href="tel:+918728893030" class="text-theme-blue font-semibold"><strong>+91-8728893030</strong></a><br><strong>General Email:</strong> <a href="mailto:contact@dcmyesschool.com" class="text-theme-blue font-semibold">contact@dcmyesschool.com</a><br><strong>Admissions Email:</strong> <a href="mailto:admissions@dcmyesschool.com" class="text-theme-blue font-semibold">admissions@dcmyesschool.com</a><br><br>We are located at: DCM Young Entrepreneurs School, Block-B, Rajguru Nagar, Ludhiana, Punjab - 141012 (India).',
                followUpAnswer: 'Our contact numbers are <strong>+91-161-3510099</strong> and <strong>+91-8728893030</strong>. You can email us at <a href="mailto:contact@dcmyesschool.com" class="text-theme-blue font-semibold">contact@dcmyesschool.com</a> or <a href="mailto:admissions@dcmyesschool.com" class="text-theme-blue font-semibold">admissions@dcmyesschool.com</a>. Our school is in Rajguru Nagar, Ludhiana.'
            },
            'about_us': {
                question: 'About The School',
                answer: 'DCM YES School is a premier institution in Ludhiana with <strong>75+ years of acclaimed experience</strong> since its establishment in 1946 by Late Shri M R Dass. We have proudly graduated over <strong>112,500 students</strong> and currently have <strong>20,000+ enrolled students</strong> and <strong>110+ teachers and staff</strong>. Our vision, "From Cradle to Corporate," is dedicated to nurturing young minds and preparing them for the future with a blend of traditional values and modern educational practices, focusing on innovation, entrepreneurship, and emerging technologies like AI, AR, VR, and ML.',
                followUpAnswer: 'Founded in 1946 by Late Shri M R Dass, DCM YES School has over <strong>75 years of educational excellence</strong>. We focus on innovation and entrepreneurship, preparing students for the future with a blend of traditional and modern learning, including emerging technologies. We\'re proud of our large alumni and student community.'
            },
            'achievements': {
                question: 'Our Achievements',
                answer: 'DCM YES School stands out with unique programs and innovative environments: <ul class="list-disc list-inside mt-2"><li><strong>Dual Diplomas:</strong> Partnership with Houghton Academy, New York, USA, offering an American High School diploma alongside CBSE studies.</li><li><strong>Earn While You Learn:</strong> Internship program fostering leadership and real-world work experience.</li><li><strong>Etiquette Villa:</strong> Dedicated program for personality development, grooming, and social skills.</li><li><strong>Entrepreneurial Platform:</strong> Cultivating future leaders and innovators.</li><li><strong>Global Collaboration:</strong> Our students have participated in international forums like the World Entrepreneurship Summit, USA.</li></ul>',
                followUpAnswer: 'Our key achievements include dual diplomas with Houghton Academy, an "Earn While You Learn" internship program, an Etiquette Villa for grooming, a platform for young entrepreneurs, and international collaborations like our participation in the World Entrepreneurship Summit.'
            },
            'safety_security': {
                question: 'Safety & Security',
                answer: 'Your child\'s safety is our highest priority. Our campus is equipped with a comprehensive, round-the-clock security system, including CCTV surveillance. We also have a dedicated team of security personnel to ensure a safe and secure environment for all students and staff.',
                followUpAnswer: 'We maintain a high level of safety with 24/7 security, CCTV surveillance, and dedicated staff to ensure a secure environment for everyone on campus.'
            },
            'health_wellness': {
                question: 'Health & Wellness',
                answer: 'The physical and mental well-being of our students is paramount. We have a dedicated health clinic with a qualified nurse on campus to handle any medical emergencies. Regular health check-ups and wellness workshops are conducted to promote a healthy lifestyle.',
                followUpAnswer: 'We prioritize student health with an on-campus clinic and a nurse. We also conduct regular health check-ups and workshops to promote wellness.'
            },
            'yespreneurship': {
                question: 'Yespreneurship Programs',
                answer: 'Our "Yespreneurship" program is designed to instill a spirit of entrepreneurship in our students from a young age. This initiative provides a platform for students to develop innovative business ideas, learn about market dynamics, and receive mentorship from industry experts.',
                followUpAnswer: 'The "Yespreneurship" program is our initiative to foster entrepreneurship. Students get a platform to develop ideas, learn about business, and receive expert mentorship.'
            },
            'innovation': {
                question: 'Innovation at YES',
                answer: 'At DCM YES, innovation is at the heart of everything we do. Our curriculum integrates emerging technologies like AI, AR, VR, and ML to prepare students for the future. We encourage a culture of curiosity and creative problem-solving across all subjects.',
                followUpAnswer: 'We are committed to innovation, integrating technologies like AI, AR, VR, and ML into our curriculum. Our goal is to foster a culture of curiosity and creative problem-solving.'
            },
            'sports': {
                question: 'Sports Facilities',
                answer: 'We believe a healthy body is as important as a healthy mind. Our school has spacious grounds for various sports like football, cricket, basketball, and athletics. We have a team of expert coaches to train students and help them excel in their chosen sport.',
                followUpAnswer: 'Our sports facilities include large grounds for football, cricket, basketball, and athletics. We have expert coaches to help students develop their skills.'
            },
            'global_programs': {
                question: 'Global Programs & Exposure',
                answer: 'DCM YES School is a globally-minded institution. We have collaborations with international schools and our students participate in global forums and exchange programs. This exposure helps our students develop a global perspective and become world citizens.',
                followUpAnswer: 'We offer global exposure through collaborations with international schools and participation in forums and exchange programs, helping students develop a global perspective.'
            }
        };
        
        // An array of key-value pairs for displaying the FAQs directly.
        this.faqContent = [
            {
                key: 'about_us',
                title: 'The Legacy: A Story of Excellence',
                content: `For over 75 years, DCM YES School has been a beacon of learning in Ludhiana, shaping the futures of over 112,500 students since its founding in 1946 by Late Shri M R Dass. Our vision, "From Cradle to Corporate," is more than a motto—it's a commitment to nurturing young minds with a perfect blend of timeless values and cutting-edge educational practices. We prepare our students for a world of rapid change by focusing on innovation, entrepreneurship, and emerging technologies like AI, AR, VR, and ML.`
            },
            {
                key: 'admissions',
                title: 'Your Journey Starts Here: The Admissions Process',
                content: `Embark on a new chapter with us! Our admission process for the upcoming academic session typically commences in the crisp month of November. To ensure you have all the necessary information—from eligibility criteria and required documents to important deadlines—we invite you to explore the dedicated <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">admissions section on our official website</a>. We look forward to welcoming you to the DCM YES family!`
            },
            {
                key: 'curriculum',
                title: 'A World of Knowledge: Our Innovative Curriculum',
                content: `At DCM YES, we believe in a curriculum that does more than just educate—it inspires. We follow the esteemed <strong>CBSE curriculum</strong>, but we don't stop there. We've enriched it with our own specialized programs tailored for every age group. These include our unique <strong>Mother's Lap, CCLICK, SLITEE, and CLASSE</strong> initiatives, all designed to foster holistic growth. Our students thrive in an environment rich with diverse co-curricular and extra-curricular activities, ensuring a well-rounded educational experience.`
            },
            {
                key: 'facilities',
                title: 'Modern Marvels: Facilities That Inspire',
                content: `Our campus is a hub of innovation and learning, equipped with a wide array of state-of-the-art facilities:
                <ul class="list-disc list-inside mt-2">
                    <li><strong>Smart Classrooms:</strong> Digitally networked for interactive learning.</li>
                    <li><strong>Ultra-Modern Labs:</strong> Specialized labs for Physics, Chemistry, Biology, Social Studies, Maths, AI/Robotics, and languages.</li>
                    <li><strong>Hi-tech Library:</strong> A treasure trove of knowledge for curious minds.</li>
                    <li><strong>Expansive Sports Grounds:</strong> Perfect for indoor and outdoor games with expert coaching.</li>
                    <li><strong>Kids Amusement Park:</strong> A fun and vibrant space with rides and animated characters.</li>
                    <li><strong>Etiquette Villa:</strong> A dedicated space for personality development and grooming.</li>
                </ul>`
            },
            {
                key: 'achievements',
                title: 'Pioneering Pathways: Our Unique Achievements',
                content: `We pride ourselves on programs that go beyond the ordinary:
                <ul class="list-disc list-inside mt-2">
                    <li><strong>Dual Diplomas:</strong> A prestigious partnership with Houghton Academy, New York, USA, allowing students to earn both a CBSE and an American High School diploma.</li>
                    <li><strong>Earn While You Learn:</strong> An innovative internship program to build real-world skills and leadership qualities.</li>
                    <li><strong>Entrepreneurial Platform:</strong> A dynamic space to cultivate the next generation of innovators and business leaders.</li>
                    <li><strong>Global Collaborations:</strong> Our students have made their mark on the international stage at events like the World Entrepreneurship Summit, USA.</li>
                </ul>`
            },
            {
                key: 'contact',
                title: 'Connect with Us',
                content: `We're always here to help. You can reach our team through: <br><br>
                <strong>Phone:</strong> <a href="tel:+911613510099" class="text-theme-blue font-semibold">+91-161-3510099</a><br>
                <strong>Mobile:</strong> <a href="tel:+918728893030" class="text-theme-blue font-semibold">+91-8728893030</a><br>
                <strong>General Email:</strong> <a href="mailto:contact@dcmyesschool.com" class="text-theme-blue font-semibold">contact@dcmyesschool.com</a><br>
                <strong>Admissions Email:</strong> <a href="mailto:admissions@dcmyesschool.com" class="text-theme-blue font-semibold">admissions@dcmyesschool.com</a><br><br>
                Our beautiful campus is located at: DCM Young Entrepreneurs School, Block-B, Rajguru Nagar, Ludhiana, Punjab - 141012 (India).`
            },
            {
                key: 'safety_security',
                title: 'A Safe Haven: Safety and Security',
                content: `Your child's safety is our utmost priority. Our campus is a fortress of security, featuring a comprehensive, round-the-clock CCTV surveillance system and a vigilant team of security personnel. We are committed to providing a secure and nurturing environment where students can learn, play, and grow without a worry.`
            },
            {
                key: 'health_wellness',
                title: 'Holistic Well-Being: Health and Wellness',
                content: `We believe that a healthy body and a healthy mind are the cornerstones of successful learning. Our school has a fully-equipped health clinic staffed by a qualified nurse, ready to handle any medical needs. We also promote a culture of wellness through regular health check-ups and engaging workshops that empower students to make healthy lifestyle choices.`
            },
            {
                key: 'yespreneurship',
                title: 'The Future is Now: Yespreneurship Programs',
                content: `Our innovative "Yespreneurship" program is designed to spark the entrepreneurial spirit in every student. This unique platform encourages young minds to develop groundbreaking business ideas, understand the dynamics of the market, and receive invaluable mentorship from experienced industry leaders. We are building the next generation of innovators and job creators.`
            },
            {
                key: 'innovation',
                title: 'Beyond the Textbook: Innovation at YES',
                content: `Innovation is not just a buzzword at DCM YES—it's a way of life. Our curriculum is forward-thinking, integrating cutting-edge technologies like <strong>Artificial Intelligence (AI), Augmented Reality (AR), Virtual Reality (VR), and Machine Learning (ML)</strong>. We foster an environment of curiosity, encouraging students to think creatively and solve real-world problems.`
            },
            {
                key: 'sports',
                title: 'Championing the Spirit: Sports Facilities',
                content: `We are dedicated to the holistic development of our students, which includes physical fitness and sportsmanship. Our school boasts expansive grounds for a wide range of sports, including football, cricket, basketball, and athletics. Under the guidance of our expert coaches, students are encouraged to pursue their passions and achieve sporting excellence.`
            },
            {
                key: 'global_programs',
                title: 'World-Ready: Global Programs & Exposure',
                content: `We prepare our students to be global citizens. Through partnerships with international schools and active participation in global forums and student exchange programs, we provide unique opportunities for cross-cultural learning. This exposure broadens their horizons and equips them with a global perspective essential for success in the modern world.`
            }
        ];

        // The primary options shown in the chat, including the new ones and a special key for the website link
        this.primaryOptions = ['admissions', 'curriculum', 'facilities', 'contact', 'about_us', 'achievements', 'safety_security', 'health_wellness', 'yespreneurship', 'innovation', 'sports', 'global_programs', 'website'];
    }

    async getStartData() {
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            message: this.qaDatabase['start'].answer,
            options: this.primaryOptions
        };
    }

    async getAnswer(key) {
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = this.qaDatabase[key];
        // Filter out the current key and the special 'website' key from follow-up questions
        const followUpQuestions = this.primaryOptions.filter(opt => opt !== key && opt !== 'website');
        return {
            question: response.question,
            answer: response.answer,
            options: followUpQuestions
        };
    }

    async getFollowUpAnswer(key) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = this.qaDatabase[key];
        // Filter out the current key and the special 'website' key from follow-up questions
        const followUpQuestions = this.primaryOptions.filter(opt => opt !== key && opt !== 'website');
        return {
            question: response.question,
            answer: response.followUpAnswer,
            options: followUpQuestions
        };
    }

    getFaqContent() {
        return this.faqContent;
    }

    getAllPrimaryOptionKeys() {
        // Filter out the special 'website' key when retrieving all options
        return this.primaryOptions.filter(opt => opt !== 'website');
    }
}

// --- ChatUI: Handles all UI rendering and user interactions ---
class ChatUI {
    constructor(chatService) {
        this.chatService = chatService;
        this.chatWindow = document.getElementById('chat-window');
        this.messageContainer = document.getElementById('message-container');
        this.optionsWrapper = document.getElementById('options-wrapper');
        this.scrollLeftBtn = document.getElementById('scroll-left-btn');
        this.scrollRightBtn = document.getElementById('scroll-right-btn');
        this.clearChatButton = document.getElementById('clear-chat-button');
        this.stopReadingButton = document.getElementById('stop-reading-button');
        this.tabAiChat = document.getElementById('tab-ai-chat');
        this.tabFaqs = document.getElementById('tab-faqs');
        this.aiChatContainer = document.getElementById('ai-chat-container');
        this.faqContainer = document.getElementById('faq-container');
        this.greetingText = document.getElementById('greeting-text');

        this.speechSynth = window.speechSynthesis;
        this.currentUtterance = null;
        this.isPaused = false;
        this.currentFaqButton = null;

        this.bindEvents();
        this.chatHistory = [];
    }

    bindEvents() {
        this.optionsWrapper.addEventListener('click', this.handleOptionClick.bind(this));
        this.scrollLeftBtn.addEventListener('click', () => this.scrollOptions(-200));
        this.scrollRightBtn.addEventListener('click', () => this.scrollOptions(200));
        this.clearChatButton.addEventListener('click', this.clearChat.bind(this));
        this.stopReadingButton.addEventListener('click', this.toggleSpeech.bind(this));
        this.optionsWrapper.addEventListener('scroll', this.updateArrowVisibility.bind(this));
        this.tabAiChat.addEventListener('click', () => this.handleTabClick('ai-chat'));
        this.tabFaqs.addEventListener('click', () => this.handleTabClick('faqs'));
    }

    handleTabClick(tab) {
        localStorage.setItem('activeTab', tab);
        this.stopSpeech();

        this.tabAiChat.classList.remove('active');
        this.tabFaqs.classList.remove('active');

        this.aiChatContainer.style.display = 'none';
        this.faqContainer.style.display = 'none';

        if (tab === 'ai-chat') {
            this.tabAiChat.classList.add('active');
            this.aiChatContainer.style.display = 'flex';
            this.greetingText.textContent = 'How can I help you today?';
            this.initChat();
        } else if (tab === 'faqs') {
            this.tabFaqs.classList.add('active');
            this.faqContainer.style.display = 'block';
            this.greetingText.textContent = 'From Cradle To Corporate';
            this.renderFaqs();
        }
    }

    renderFaqs() {
        this.faqContainer.innerHTML = '';
        const faqData = this.chatService.getFaqContent();
        faqData.forEach((faq, index) => {
            const section = document.createElement('div');
            section.classList.add('faq-section');
            section.style.animationDelay = `${index * 0.1}s`;

            const title = document.createElement('h2');
            title.textContent = faq.title;
            title.classList.add('font-playfair');
            
            const contentContainer = document.createElement('div');
            contentContainer.classList.add('faq-content-container');
            contentContainer.innerHTML = faq.content;

            // Create the read button
            const readButton = document.createElement('button');
            readButton.textContent = 'Read';
            readButton.classList.add('faq-read-btn');
            readButton.setAttribute('data-text', title.textContent + '. ' + contentContainer.textContent);
            readButton.addEventListener('click', () => this.toggleFaqSpeech(readButton));

            section.appendChild(readButton);
            section.appendChild(title);
            section.appendChild(contentContainer);
            this.faqContainer.appendChild(section);
        });
    }

    // --- Chat functionality methods ---
    async addMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble', sender === 'user' ? 'user-bubble' : 'bot-bubble');
        
        const content = document.createElement('div');
        content.classList.add('message-text-content');
        content.innerHTML = text;
        
        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.textContent = this.getCurrentTime();

        bubble.appendChild(content);
        bubble.appendChild(timestamp);

        if (sender === 'bot') {
            // Create and add speaker icon for TTS
            const speakerIcon = document.createElement('i');
            speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
            speakerIcon.addEventListener('click', () => this.speakText(content.textContent));
            bubble.appendChild(speakerIcon);
        }

        this.messageContainer.appendChild(bubble);
        this.chatHistory.push({ text, sender, timestamp: timestamp.textContent });
        this.saveChat();
        this.scrollToBottom();
    }

    // Centralized speech control function
    speakText(text, button = null) {
        this.stopSpeech();
        this.currentUtterance = new SpeechSynthesisUtterance(text);
        this.currentUtterance.pitch = 1.0;
        this.currentUtterance.rate = 1.1;
        this.currentUtterance.volume = 1.0;

        this.currentUtterance.onstart = () => {
            this.stopReadingButton.textContent = 'Pause Reading';
            this.stopReadingButton.style.display = 'block';
            if (button) {
                this.currentFaqButton = button;
                this.updateFaqButtonState(button, 'Stop');
            }
        };

        this.currentUtterance.onend = () => {
            this.stopReadingButton.style.display = 'none';
            this.stopReadingButton.textContent = 'Stop Reading';
            this.isPaused = false;
            if (this.currentFaqButton) {
                this.updateFaqButtonState(this.currentFaqButton, 'Read');
                this.currentFaqButton = null;
            }
            this.currentUtterance = null;
        };

        this.speechSynth.speak(this.currentUtterance);
    }

    stopSpeech() {
        if (this.speechSynth.speaking) {
            this.speechSynth.cancel();
        }
        this.stopReadingButton.style.display = 'none';
        this.stopReadingButton.textContent = 'Stop Reading';
        this.isPaused = false;
        if (this.currentFaqButton) {
            this.updateFaqButtonState(this.currentFaqButton, 'Read');
            this.currentFaqButton = null;
        }
        this.currentUtterance = null;
    }

    toggleSpeech() {
        if (!this.currentUtterance) {
            this.stopSpeech();
            return;
        }

        if (this.speechSynth.speaking && !this.isPaused) {
            this.speechSynth.pause();
            this.isPaused = true;
            this.stopReadingButton.textContent = 'Resume Reading';
        } else if (this.speechSynth.speaking && this.isPaused) {
            this.speechSynth.resume();
            this.isPaused = false;
            this.stopReadingButton.textContent = 'Pause Reading';
        } else {
            this.stopSpeech();
        }
    }

    toggleFaqSpeech(button) {
        const text = button.getAttribute('data-text');
        
        // If the same FAQ is already playing, stop it.
        if (this.currentUtterance && this.currentFaqButton === button) {
            this.stopSpeech();
            return;
        }

        // Stop any other current speech (FAQ or chat bubble)
        this.stopSpeech();
        
        // Start speaking the new text
        this.speakText(text, button);
    }

    updateFaqButtonState(button, state) {
        const allButtons = this.faqContainer.querySelectorAll('.faq-read-btn');
        allButtons.forEach(btn => {
            if (btn === button) {
                btn.textContent = state;
                if (state === 'Stop') {
                    btn.classList.add('stop');
                } else {
                    btn.classList.remove('stop');
                }
            } else {
                btn.textContent = 'Read';
                btn.classList.remove('stop');
            }
        });
    }

    handleOptionClick(event) {
        const button = event.target.closest('.option-button');
        if (!button || button.classList.contains('website-button')) return;

        const selectedOption = button.dataset.key;
        this.addMessage(button.textContent, 'user');
        this.clearOptions();
        this.getBotResponse(selectedOption);
    }

    async getBotResponse(key) {
        const typingIndicator = this.showTypingIndicator();
        try {
            const response = await this.chatService.getAnswer(key);
            this.hideTypingIndicator(typingIndicator);
            await this.addMessage(response.answer, 'bot');
            setTimeout(() => {
                this.showOptions(response.options);
            }, 300);
        } catch (error) {
            console.error("Error fetching bot response:", error);
            this.hideTypingIndicator(typingIndicator);
            await this.addMessage("Sorry, I'm unable to get that information right now. Please try again later.", 'bot');
        }
    }

    showOptions(options) {
        this.clearOptions();
        // Flag to check if we are showing a special button
        let specialButtonAdded = false;

        options.forEach((key, index) => {
            if (key === 'website') {
                // Create a distinct button for the website link
                const websiteButton = document.createElement('button');
                websiteButton.classList.add('option-button', 'website-button');
                websiteButton.innerHTML = 'Go to Website <i class="fas fa-external-link-alt ml-2"></i>';
                websiteButton.onclick = () => window.open('https://dcmyesschool.com', '_blank');
                websiteButton.style.animationDelay = `${index * 0.05}s`;
                this.optionsWrapper.appendChild(websiteButton);
                specialButtonAdded = true;
            } else {
                const optionData = this.chatService.qaDatabase[key];
                if (optionData) {
                    const button = document.createElement('button');
                    button.classList.add('option-button');
                    button.textContent = optionData.question;
                    button.dataset.key = key;
                    button.style.animationDelay = `${index * 0.05}s`;
                    this.optionsWrapper.appendChild(button);
                }
            }
        });

        this.updateArrowVisibility();
    }

    clearOptions() {
        this.optionsWrapper.innerHTML = '';
    }

    clearChat() {
        this.stopSpeech(); // Stop any speech when clearing chat
        this.messageContainer.innerHTML = '';
        this.chatHistory = [];
        localStorage.removeItem('chatHistory');
        this.optionsWrapper.innerHTML = '';
        this.initChat();
    }

    // --- UI utility methods ---
    scrollToBottom() {
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
    }

    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('typing-indicator', 'bot-bubble');
        indicator.innerHTML = '<span></span><span></span><span></span>';
        this.messageContainer.appendChild(indicator);
        this.scrollToBottom();
        return indicator;
    }

    hideTypingIndicator(indicator) {
        if (indicator) {
            indicator.remove();
        }
    }
    
    scrollOptions(amount) {
        this.optionsWrapper.scrollLeft += amount;
    }

    updateArrowVisibility() {
        const { scrollLeft, scrollWidth, clientWidth } = this.optionsWrapper;
        this.scrollLeftBtn.classList.toggle('disabled', scrollLeft === 0);
        this.scrollRightBtn.classList.toggle('disabled', scrollLeft + clientWidth >= scrollWidth);
    }

    // --- Local storage for chat history ---
    saveChat() {
        localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory));
    }

    loadChat() {
        const history = localStorage.getItem('chatHistory');
        if (history) {
            this.chatHistory = JSON.parse(history);
            this.chatHistory.forEach(msg => {
                const bubble = document.createElement('div');
                bubble.classList.add('chat-bubble', msg.sender === 'user' ? 'user-bubble' : 'bot-bubble');
                bubble.style.opacity = '1';
                bubble.style.transform = 'translateY(0)';
                
                const content = document.createElement('div');
                content.classList.add('message-text-content');
                content.innerHTML = msg.text;

                const timestamp = document.createElement('span');
                timestamp.classList.add('timestamp');
                timestamp.textContent = msg.timestamp;

                bubble.appendChild(content);
                bubble.appendChild(timestamp);

                if (msg.sender === 'bot') {
                    const speakerIcon = document.createElement('i');
                    speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
                    speakerIcon.addEventListener('click', () => this.speakText(content.textContent));
                    bubble.appendChild(speakerIcon);
                }

                this.messageContainer.appendChild(bubble);
            });
            this.scrollToBottom();
            return true;
        }
        return false;
    }

    async initChat() {
        // Check if chat history exists and has messages
        const history = localStorage.getItem('chatHistory');
        const chatHistoryExists = history && JSON.parse(history).length > 0;

        this.clearOptions();
        
        if (chatHistoryExists) {
            // If history exists, just load it and show options
            this.loadChat();
            // Pass the complete list of options including the 'website' key
            this.showOptions(this.chatService.primaryOptions);
        } else {
            // If no history, show the welcome message for the first time
            const typingIndicator = this.showTypingIndicator();
            try {
                const startData = await this.chatService.getStartData();
                this.hideTypingIndicator(typingIndicator);
                await this.addMessage(startData.message, 'bot');
                setTimeout(() => {
                    this.showOptions(startData.options);
                }, 300);
            } catch (error) {
                console.error("Error fetching start data:", error);
                this.hideTypingIndicator(typingIndicator);
                await this.addMessage("Welcome! I'm currently experiencing some issues. Please try again later.", 'bot');
            }
        }
        this.updateArrowVisibility();
    }
}

// --- Application Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const chatService = new ChatService();
    const chatUI = new ChatUI(chatService);
    // Determine which tab was last active from local storage, or default to 'ai-chat'
    const lastTab = localStorage.getItem('activeTab') || 'ai-chat';
    chatUI.handleTabClick(lastTab);
});

function showWelcomeMessage() {
  const message = "Welcome to DCM YES School, a legacy in education since 1946. We are committed to fostering an environment of academic excellence and holistic development. How can we assist you today?";
  // Code to create and add the message bubble to #message-container
}

// This event listener likely calls the function every time the tab is clicked
document.getElementById('tab-ai-chat').addEventListener('click', () => {
  // ... tab switching logic ...
  showWelcomeMessage(); // This is the likely cause of the repetition
});

// The welcome message might also be called on page load, causing double-display
window.addEventListener('load', showWelcomeMessage);