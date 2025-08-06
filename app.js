    // --- ChatService: Simulates interaction with a backend API ---
    class ChatService {
      constructor() {
        this.qaDatabase = {
          'start': {
            question: 'Initial prompt',
            answer: 'Welcome to <strong>DCM YES School</strong>, a legacy in education since 1946. We are committed to fostering an environment of academic excellence and holistic development. How can we assist you today?'
          },
          // New Category Placeholders
          'about_school_curriculum': {
            question: '🎓 Curriculum & Teaching',
            answer: 'Great! Here are some common questions about our curriculum, faculty, and teaching methods. Please select one.',
          },
          'entrepreneurship_skills_dev': {
            question: '💼 Entrepreneurship & Global Exposure',
            answer: 'Excellent choice. Here are topics related to our focus on entrepreneurship, skills, and technology.',
          },
          'daily_life_admissions': {
            question: '🏫 Admissions, Fees & School Life',
            answer: 'Of course. Here are some questions about admissions, fees, and daily life at the school.',
          },

          // --- 🎓 About the School & Curriculum ---
          'curriculum_options': {
              question: 'What curriculum do you follow?',
              answer: 'DCM YES School offers a multi-faceted curriculum including <strong>CBSE, Cambridge IGCSE, and an American High School Diploma</strong> through our partnership with Houghton Academy, New York. This provides a flexible and globally-recognized educational path for your child.'
          },
          'switch_curriculum': {
              question: 'Can my child switch curricula?',
              answer: 'Flexibility is a key aspect of our approach. For specific details on transition points and eligibility for switching between CBSE, IGCSE, and the American Diploma stream, we recommend consulting with our academic advisors. Please contact the admissions office for a detailed discussion.'
          },
          'compare_curricula': {
              question: 'How do the three curricula compare?',
              answer: 'Each curriculum opens up a wide range of global career and college options. <strong>CBSE</strong> is highly recognized in India, <strong>IGCSE</strong> is a global standard for international universities, and the <strong>American Diploma</strong> is ideal for students targeting US-based institutions. Our career guidance cell provides personalized counseling to help students choose the best path.'
          },
          'languages': {
              question: 'Is Punjabi or French mandatory?',
              answer: 'We offer a diverse language program. For specific details on mandatory and optional language subjects like Punjabi, French, or Spanish for different grades and curricula, please contact our admissions office.'
          },
          'exam_prep': {
              question: 'Do you offer NEET/JEE/SAT prep?',
              answer: 'Yes, we provide special classes and integrated support for competitive exams, including national exams like <strong>IIT, NEET/JEE</strong> and international exams like the <strong>SAT and IELTS</strong>, as part of our commitment to preparing students for top universities worldwide.'
          },
           'teacher_student_ratio': {
              question: 'What’s the teacher-student ratio?',
              answer: 'We maintain a healthy teacher-student ratio to ensure personalized attention for every child. For the specific ratio for different grades, please contact our admissions office as it can vary.'
          },
          'faculty_qualifications': {
              question: 'How qualified is the faculty?',
              answer: 'Our faculty is highly qualified and experienced in teaching both national and international curricula like IGCSE. We invest in continuous professional development to ensure our teachers are adept at global teaching methodologies.'
          },
          'medium_of_instruction': {
              question: 'What is the medium of instruction?',
              answer: 'The medium of instruction at DCM YES School is English. We provide a supportive environment, including a special Language Lab, to help all students develop strong English fluency and communication skills.'
          },
          'public_speaking': {
              question: 'Are students encouraged to be public speakers?',
              answer: 'Yes, developing strong communication and public speaking skills is a key focus. We offer numerous opportunities through debates, presentations, school assemblies, and our "Etiquette Villa" finishing classes to build confidence and eloquence in our students.'
          },

          // --- 💼 Entrepreneurship & Skill Development ---
          'yes_meaning': {
              question: 'What does "Young Entrepreneurs School" mean?',
              answer: 'Being a "Young Entrepreneurs School" means we go beyond traditional academics to actively cultivate an entrepreneurial mindset. This is done through our unique <strong>"Yespreneurship"</strong> program, practical skill development, and real-world business challenges integrated into the curriculum.'
          },
           'entrepreneurship_skills': {
              question: 'How are entrepreneurial skills taught?',
              answer: "Entrepreneurial skills are taught through our specialized 'Yespreneurship' program, which includes mentorship from industry leaders, startup incubation, workshops on financial literacy, and project-based learning where students develop and pitch their own business ideas."
          },
          'startup_opportunities': {
              question: 'Are there real startup opportunities?',
              answer: 'Absolutely. Our Entrepreneurial Development Platform and "Yespreneurship" initiative empower students to ideate, build, and present their own startups, complete with mentorship and opportunities to connect with real investors.'
          },
           'financial_literacy': {
              question: 'How do you teach financial literacy?',
              answer: 'These essential skills are embedded across our curriculum. Financial literacy, problem-solving, and critical thinking are taught through practical workshops, our entrepreneurship programs, and STEM labs that challenge students to find creative solutions to real-world problems.'
          },
          'global_competitions': {
              question: 'Can students join global competitions?',
              answer: 'Yes, we actively encourage and prepare students to participate in a variety of global competitions, innovation challenges, and international conferences, providing them with a platform to showcase their talents on a worldwide stage.'
          },
          'guest_lectures': {
              question: 'Are there guest lectures from mentors?',
              answer: 'Yes, our "Yespreneurship" program and other initiatives regularly feature guest lectures, workshops, and mentorship sessions with experienced professionals and entrepreneurs from various industries to provide students with real-world insights.'
          },
           'tech_integration': {
              question: 'Do you use AI, coding, or STEM labs?',
              answer: 'Yes, technology is at the core of our teaching. Our campus is equipped with advanced labs for <strong>AI, Robotics, and STEM</strong>. Students actively learn and use these technologies to solve real-world problems.'
          },
          'global_exposure': {
              question: 'Is there exposure to global education?',
              answer: 'We provide significant global exposure through international exchange programs, our Dual Diploma partnership with Houghton Academy, New York, and participation in international conferences and webinars to foster cross-cultural understanding.'
          },
           'university_prep': {
              question: 'How are students prepared for global universities?',
              answer: 'We offer a comprehensive preparation strategy. Our multiple curricula (CBSE, IGCSE, American Diploma), specialized coaching for exams like NEET/JEE and SAT/IELTS, and a dedicated career counseling cell ensure students are well-prepared for admissions to top universities in India and abroad.'
          },
          
          // --- 🏫 Daily School Life & Infrastructure ---
          'school_timings': {
              question: 'What are school timings & activities?',
              answer: 'For detailed information on school timings, the academic calendar, and the wide array of co-curricular activities we offer, please refer to the student handbook or contact the school\'s administrative office.'
          },
          'arts_sports_curriculum': {
              question: 'Are sports & arts part of the curriculum?',
              answer: 'Yes, a balanced education is paramount. Sports, arts, music, and dance are integral parts of our curriculum, with dedicated facilities and expert instructors to nurture students\' talents in these areas.'
          },
           'facilities_overview': {
              question: 'What facilities are available?',
              answer: 'Our campus features state-of-the-art facilities, including advanced labs for AI, Robotics, and Sciences, makerspaces, a modern library, an auditorium, expansive sports infrastructure, an Etiquette Villa, and dedicated spaces for activities like music, art, and dance.'
          },
          'parent_communication': {
              question: 'How do parents stay informed?',
              answer: 'We believe in a strong parent-school partnership. Parents are kept informed through regular PTMs, a school portal/mobile app, email updates, and open communication channels with teachers and the administration.'
          },
          'parent_portal': {
              question: 'Is there a parent portal or app?',
              answer: 'Yes, we utilize a modern parent portal and mobile app where parents can easily track their child\'s academic performance, attendance, receive school notices, and communicate with teachers.'
          },
          'ptms': {
              question: 'Are there regular PTMs?',
              answer: 'Yes, regular Parent-Teacher Meetings (PTMs) and feedback sessions are a cornerstone of our communication policy, ensuring parents are actively involved in their child\'s educational journey.'
          },
          'fee_structure': {
              question: 'What is the fee structure for different streams?',
              answer: 'The fee structure varies for the CBSE, IGCSE, and American Diploma streams. For detailed fee information and payment schedules, please contact our admissions office directly at <strong>admissions@dcmyesschool.com</strong> or call us.'
          },
          'scholarships': {
              question: 'Are scholarships or financial aid available?',
              answer: 'We have provisions for scholarships and financial aid to support meritorious and deserving students. For details on eligibility and the application process, please contact the school\'s administration.'
          },
          'transportation': {
            question: 'Is transport available to my area?',
            answer: 'Yes, we offer **secure and reliable transportation services** for students. Our fleet of buses covers various routes, ensuring safe and timely commute. To confirm if your area is covered, please get in touch with our transport department.',
          },
          'admissions': {
            question: 'What is the admission process?',
            answer: 'Our admission process for the new academic year typically begins in <strong>November</strong>. The process, eligibility criteria, and required documents are detailed on the <a href="https://dcmyesschool.com/contact" class="text-theme-blue font-semibold" target="_blank">admissions section of our official website</a>.',
          },
          'contact': {
            question: 'Contact Us',
            answer: 'You can reach us at: <br><br><strong>Landline:</strong> <a href="tel:+911613510099" class="text-theme-blue font-semibold" target="_blank"><strong>+91-161-3510099</strong></a><br><strong>Mobile:</strong> <a href="tel:+918728893030" class="text-theme-blue font-semibold" target="_blank"><strong>+91-8728893030</strong></a><br><strong>Email:</strong> <a href="mailto:contact@dcmyesschool.com" class="text-theme-blue font-semibold" target="_blank">contact@dcmyesschool.com</a><br><strong>Admissions:</strong> <a href="mailto:admissions@dcmyesschool.com" class="text-theme-blue font-semibold" target="_blank">admissions@dcmyesschool.com</a><br><strong>Address:</strong> Block-B, Rajguru Nagar, Ludhiana',
          },
        };

        this.followUpOptions = {
          'start': ['about_school_curriculum', 'entrepreneurship_skills_dev', 'daily_life_admissions', 'contact'],
          
          'about_school_curriculum': ['curriculum_options', 'switch_curriculum', 'compare_curricula', 'exam_prep', 'medium_of_instruction', 'public_speaking', 'teacher_student_ratio', 'faculty_qualifications', 'start'],
          'entrepreneurship_skills_dev': ['yes_meaning', 'startup_opportunities', 'tech_integration', 'global_exposure', 'university_prep', 'financial_literacy', 'global_competitions', 'guest_lectures', 'start'],
          'daily_life_admissions': ['admissions', 'fee_structure', 'scholarships', 'transportation', 'school_timings', 'arts_sports_curriculum', 'facilities_overview', 'parent_communication', 'start'],

          // Deep follow-ups to allow navigation
          'curriculum_options': ['compare_curricula', 'switch_curriculum', 'exam_prep', 'about_school_curriculum'],
          'exam_prep': ['university_prep', 'fee_structure', 'about_school_curriculum'],
          'yes_meaning': ['entrepreneurship_skills', 'startup_opportunities', 'entrepreneurship_skills_dev'],
          'tech_integration': ['facilities_overview', 'global_exposure', 'entrepreneurship_skills_dev'],
          'facilities_overview': ['tech_integration', 'arts_sports_curriculum', 'daily_life_admissions'],
          'parent_communication': ['parent_portal', 'ptms', 'daily_life_admissions'],
          'fee_structure': ['admissions', 'scholarships', 'daily_life_admissions'],
          'admissions': ['fee_structure', 'scholarships', 'daily_life_admissions'],

          // Fallback
          'contact': ['admissions', 'transportation', 'start'],
        };
      }

      async getResponse(message, isFollowUp = false) {
        let normalizedMessage = message.toLowerCase().trim();
        let response = null;

        if (this.qaDatabase[normalizedMessage]) {
          response = {
            answer: isFollowUp && this.qaDatabase[normalizedMessage].followUpAnswer ? this.qaDatabase[normalizedMessage].followUpAnswer : this.qaDatabase[normalizedMessage].answer,
            options: this.getFollowUpOptions(normalizedMessage)
          };
        } else {
          // Fallback to a general search or a default message
          response = {
            answer: 'I\'m sorry, I couldn\'t find a specific answer for that. You can try asking about our curriculum, entrepreneurship programs, or admissions.',
            options: ['about_school_curriculum', 'entrepreneurship_skills_dev', 'daily_life_admissions', 'contact']
          };
        }

        return new Promise(resolve => setTimeout(() => resolve(response), 800));
      }

      getFollowUpOptions(currentKey) {
        // Return follow-up options, defaulting to home if none are specified
        return this.followUpOptions[currentKey] || ['start'];
      }
    }

    // --- DOM Elements and State Management ---
    const chatWindow = document.getElementById('chat-window');
    const messageContainer = document.getElementById('message-container');
    const optionsWrapper = document.getElementById('options-wrapper');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    const clearChatButton = document.getElementById('clear-chat-button');
    const stopReadingButton = document.getElementById('stop-reading-button');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsButton = document.getElementById('settings-button');
    const closeSettingsPanel = document.getElementById('close-settings-panel');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const fontSizeSelector = document.getElementById('font-size-selector');
    const ttsToggle = document.getElementById('tts-toggle');
    const voiceSelector = document.getElementById('voice-selector'); // New voice selector
    const dateDisplay = document.getElementById('date-display');
    const faqContainer = document.getElementById('faq-container');
    const aiChatContainer = document.getElementById('ai-chat-container');
    const tabAiChat = document.getElementById('tab-ai-chat');
    const tabFaqs = document.getElementById('tab-faqs');
    const faqReadAnswerButtons = document.querySelectorAll('.faq-read-btn'); 
    const faqReadQuestionButtons = document.querySelectorAll('.faq-read-question-btn'); 

    const chatService = new ChatService();
    let currentOptions = [];
    let isTyping = false;
    let synth = window.speechSynthesis;
    let currentUtterance = null;
    let isReadingFaq = false;
    let isTtsEnabled = localStorage.getItem('ttsEnabled') === 'true';
    let selectedVoiceURI = localStorage.getItem('selectedVoiceURI') || ''; // Store selected voice URI

    // Helper functions
    function sanitizeMessage(message) {
      // Create a temporary div to parse HTML and get plain text
      const div = document.createElement('div');
      div.innerHTML = message;
      return div.textContent || div.innerText || '';
    }
    
    function updateFaqReadButtonsVisibility() {
      if (isTtsEnabled) {
        document.body.classList.remove('tts-disabled');
      } else {
        document.body.classList.add('tts-disabled');
      }
    }

    function saveSettings() {
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
      localStorage.setItem('fontSize', fontSizeSelector.value);
      localStorage.setItem('ttsEnabled', ttsToggle.checked);
      localStorage.setItem('selectedVoiceURI', voiceSelector.value); // Save selected voice
      updateFaqReadButtonsVisibility();
    }

    function loadSettings() {
      const darkMode = localStorage.getItem('darkMode') === 'true';
      const fontSize = localStorage.getItem('fontSize') || 'normal';
      isTtsEnabled = localStorage.getItem('ttsEnabled') === 'true';
      selectedVoiceURI = localStorage.getItem('selectedVoiceURI') || '';

      if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
      }
      if (fontSize) {
        document.body.style.fontSize = fontSize === 'normal' ? '1rem' : (fontSize === 'large' ? '1.15rem' : '1.3rem');
        fontSizeSelector.value = fontSize;
      }
      ttsToggle.checked = isTtsEnabled;
      updateFaqReadButtonsVisibility();
    }

    // Populate voice selector
    function populateVoiceList() {
        if (typeof speechSynthesis === 'undefined') {
            return;
        }

        const voices = speechSynthesis.getVoices();
        voiceSelector.innerHTML = ''; // Clear existing options

        let defaultVoiceFound = false;
        let preferredVoice = null;

        // Try to find a natural-sounding default voice or the previously selected one
        voices.forEach(voice => {
            if (voice.lang.startsWith('en-US')) {
                // Prioritize Google US English or Microsoft Zira/David for a natural sound
                if (voice.name.includes('Google US English') || voice.name.includes('Microsoft Zira') || voice.name.includes('Microsoft David')) {
                    preferredVoice = voice;
                }
                // If a previously selected voice exists and matches, use it
                if (voice.voiceURI === selectedVoiceURI) {
                    preferredVoice = voice;
                    defaultVoiceFound = true;
                }
            }
        });

        voices.forEach(voice => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.voiceURI;
            if (preferredVoice && voice.voiceURI === preferredVoice.voiceURI) {
                option.selected = true;
            } else if (!preferredVoice && voice.default) { // Fallback to default if no preferred found
                option.selected = true;
                selectedVoiceURI = voice.voiceURI;
            }
            voiceSelector.appendChild(option);
        });

        // If no preferred voice was found and no default was selected, just take the first English voice
        if (!preferredVoice && !defaultVoiceFound && voices.length > 0) {
            const firstEnglishVoice = voices.find(voice => voice.lang.startsWith('en'));
            if (firstEnglishVoice) {
                voiceSelector.value = firstEnglishVoice.voiceURI;
                selectedVoiceURI = firstEnglishVoice.voiceURI;
            } else { // Fallback to first available voice if no English voice
                voiceSelector.value = voices[0].voiceURI;
                selectedVoiceURI = voices[0].voiceURI;
            }
        }
        
        // Ensure the selectedVoiceURI is updated after population
        selectedVoiceURI = voiceSelector.value;
    }

    // Attach voicechange event listener
    synth.onvoiceschanged = populateVoiceList;

    // Generic function to update a single FAQ read button's state
    function updateFaqButtonState(button, isReading) {
      button.textContent = isReading ? 'Stop Reading' : 'Read';
      button.classList.toggle('stop', isReading);
      
      // Disable all other FAQ read buttons (both question and answer) if one is reading
      const allFaqButtons = [...faqReadAnswerButtons, ...faqReadQuestionButtons];
      allFaqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.disabled = isReading;
          otherButton.style.opacity = isReading ? '0.5' : '1';
          otherButton.style.cursor = isReading ? 'not-allowed' : 'pointer';
        }
      });
    }

    function toggleSpeech(text, button, callback) { 
      if (!isTtsEnabled) return;
      
      stopSpeech(); 
      stopReadingButton.style.display = 'inline-block';

      if (button) {
          updateFaqButtonState(button, true);
      }

      currentUtterance = new SpeechSynthesisUtterance(sanitizeMessage(text));
      currentUtterance.lang = 'en-US'; // Default language, voice will override if specified
      
      // Set the selected voice
      const voices = synth.getVoices();
      const selectedVoice = voices.find(voice => voice.voiceURI === selectedVoiceURI);
      if (selectedVoice) {
          currentUtterance.voice = selectedVoice;
      }

      currentUtterance.onend = () => {
        stopSpeech();
        if (callback) callback();
      };
      currentUtterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        stopSpeech();
      };
      synth.speak(currentUtterance);
    }

    function stopSpeech() {
      if (synth.speaking) {
        synth.cancel();
      }
      currentUtterance = null;
      stopReadingButton.style.display = 'none';
      const allFaqButtons = [...faqReadAnswerButtons, ...faqReadQuestionButtons];
      allFaqButtons.forEach(button => {
        updateFaqButtonState(button, false);
      });
      isReadingFaq = false; 
    }

    function addMessage(sender, text, animate = true) {
      const bubble = document.createElement('div');
      bubble.classList.add('chat-bubble', sender === 'user' ? 'user-bubble' : 'bot-bubble', 'opacity-0');
      
      const content = document.createElement('div');
      content.classList.add('message-text-content');
      content.innerHTML = text; 

      const timestamp = document.createElement('div');
      timestamp.classList.add('timestamp');
      timestamp.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

      bubble.appendChild(content);

      if (sender === 'bot' && isTtsEnabled) {
          const speakerIcon = document.createElement('i');
          speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
          speakerIcon.setAttribute('aria-label', 'Read aloud');
          bubble.appendChild(speakerIcon);

          speakerIcon.addEventListener('click', () => {
              if (synth.speaking && currentUtterance && currentUtterance.text === sanitizeMessage(text)) {
                  stopSpeech();
              } else {
                  toggleSpeech(text, null); 
              }
          });
      }
      
      bubble.appendChild(timestamp);
      messageContainer.appendChild(bubble);

      if (animate) {
        void bubble.offsetWidth;
        bubble.classList.remove('opacity-0');
        bubble.style.transform = 'translateY(0)';
      }

      chatWindow.scrollTop = chatWindow.scrollHeight;
      return bubble;
    }

    function addTypingIndicator() {
      const indicator = document.createElement('div');
      indicator.classList.add('typing-indicator', 'bot-bubble');
      indicator.innerHTML = '<span></span><span></span><span></span>';
      messageContainer.appendChild(indicator);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      return indicator;
    }

    async function handleOptionClick(optionKey) {
      if (isTyping) return;
      isTyping = true;
      stopSpeech();

      const { question } = chatService.qaDatabase[optionKey];
      addMessage('user', question);

      clearOptions();
      const typingIndicator = addTypingIndicator();

      const response = await chatService.getResponse(optionKey, true);
      
      isTyping = false;
      messageContainer.removeChild(typingIndicator);

      addMessage('bot', response.answer);
      if (isTtsEnabled && response.answer) {
        toggleSpeech(response.answer, null);
      }
      createOptions(response.options);
    }
    
    function createOptions(options) {
      optionsWrapper.innerHTML = '';
      currentOptions = options;
      
      if (options.length === 0) {
        const homeButton = document.createElement('button');
        homeButton.classList.add('option-button');
        homeButton.textContent = '↩️ Back to Main Menu';
        homeButton.addEventListener('click', () => {
          handleOptionClick('start');
        });
        optionsWrapper.appendChild(homeButton);
      } else {
        options.forEach((optionKey, index) => {
          const button = document.createElement('button');
          button.classList.add('option-button');
          const optionData = chatService.qaDatabase[optionKey];
          // Use 'start' text for the home button
          if (optionKey === 'start') {
            button.textContent = '↩️ Back to Main Menu'
          } else {
            button.textContent = optionData.question;
          }
          button.style.animationDelay = `${index * 0.1}s`;
          button.addEventListener('click', () => handleOptionClick(optionKey));
          optionsWrapper.appendChild(button);
        });
      }
      
      updateScrollButtons();
    }
    
    function clearOptions() {
      optionsWrapper.innerHTML = '';
      scrollLeftBtn.classList.add('disabled');
      scrollRightBtn.classList.add('disabled');
    }

    function clearChat() {
      messageContainer.innerHTML = '';
      addMessage('bot', chatService.qaDatabase['start'].answer, false);
      createOptions(chatService.getFollowUpOptions('start'));
      localStorage.removeItem('chatHistory');
      setDateDisplay();
    }
    
    function setDateDisplay() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      dateDisplay.textContent = today.toLocaleDateString('en-US', options);
    }

    function toggleChatAndFaqs(activeTabId) {
      if (activeTabId === 'ai-chat-container') {
        aiChatContainer.style.display = 'flex';
        faqContainer.style.display = 'none'; 
        tabAiChat.classList.add('active');
        tabFaqs.classList.remove('active');
        stopSpeech(); 
        if (isReadingFaq) {
            const activeFaqButton = document.querySelector('.faq-read-btn.stop');
            if (activeFaqButton) {
                updateFaqButtonState(activeFaqButton, false);
            }
            isReadingFaq = false;
        }
      } else {
        aiChatContainer.style.display = 'none'; 
        faqContainer.style.display = 'flex';
        tabAiChat.classList.remove('active');
        tabFaqs.classList.add('active');
        stopSpeech(); 
      }
    }

    // Event Listeners
    settingsButton.addEventListener('click', () => {
      settingsPanel.classList.remove('hidden');
      populateVoiceList(); // Populate voices when settings panel opens
    });

    closeSettingsPanel.addEventListener('click', () => {
      settingsPanel.classList.add('hidden');
    });

    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode', darkModeToggle.checked);
      if (darkModeToggle.checked) {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-dark)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-dark)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';

        document.querySelectorAll('.timestamp').forEach(el => el.style.color = 'var(--timestamp-color-dark)');
        document.querySelectorAll('.faq-content-container').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li strong').forEach(el => el.style.color = '#FFFFFF');
        document.querySelectorAll('.faq-summary').forEach(el => el.style.color = 'var(--text-color)'); 
      } else {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-light)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-light)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-light)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-light)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';

        document.querySelectorAll('.timestamp').forEach(el => el.style.color = 'var(--timestamp-color-light)');
        document.querySelectorAll('.faq-content-container').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li').forEach(el => el.style.color = 'var(--faq-section-text)');
        document.querySelectorAll('.faq-content-container li strong').forEach(el => el.style.color = '#333333');
        document.querySelectorAll('.faq-summary').forEach(el => el.style.color = 'var(--text-color)'); 
      }
      saveSettings();
    });

    fontSizeSelector.addEventListener('change', () => {
      document.body.style.fontSize = fontSizeSelector.value === 'normal' ? '1rem' : (fontSizeSelector.value === 'large' ? '1.15rem' : '1.3rem');
      saveSettings();
    });
    
    ttsToggle.addEventListener('change', () => {
      isTtsEnabled = ttsToggle.checked;
      saveSettings(); 
      document.querySelectorAll('.bot-bubble').forEach(bubble => {
        let speakerIcon = bubble.querySelector('.speaker-icon');
        if (isTtsEnabled) {
          if (!speakerIcon) {
            speakerIcon = document.createElement('i');
            speakerIcon.classList.add('fas', 'fa-volume-up', 'speaker-icon');
            speakerIcon.setAttribute('aria-label', 'Read aloud');
            bubble.appendChild(speakerIcon);
            speakerIcon.addEventListener('click', () => toggleSpeech(bubble.querySelector('.message-text-content').innerHTML, null));
          }
        } else {
          if (speakerIcon) {
            speakerIcon.remove();
          }
        }
      });
      if (!isTtsEnabled) {
        stopSpeech();
        if (isReadingFaq) {
            updateFaqButtonState(document.querySelector('.faq-read-btn.stop'), false);
            isReadingFaq = false;
        }
      }
    });

    voiceSelector.addEventListener('change', () => {
        selectedVoiceURI = voiceSelector.value;
        saveSettings();
    });

    // Option scrolling logic
    function updateScrollButtons() {
      scrollLeftBtn.classList.toggle('disabled', optionsWrapper.scrollLeft === 0);
      scrollRightBtn.classList.toggle('disabled', optionsWrapper.scrollLeft + optionsWrapper.clientWidth >= optionsWrapper.scrollWidth);
    }
    
    optionsWrapper.addEventListener('scroll', updateScrollButtons);
    
    scrollLeftBtn.addEventListener('click', () => {
      optionsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
      optionsWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
    
    window.addEventListener('resize', updateScrollButtons);
    
    // FAQ Read Answer buttons
    faqReadAnswerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqSection = this.closest('.faq-item');
            const faqContent = faqSection.querySelector('.faq-content-container').innerHTML;
            
            if (isReadingFaq && this.classList.contains('stop')) {
                stopSpeech();
                isReadingFaq = false;
            } else if (isTtsEnabled) {
                stopSpeech();
                isReadingFaq = true;
                toggleSpeech(faqContent, this, () => {
                    isReadingFaq = false;
                });
            }
        });
    });

    // FAQ Read Question buttons
    faqReadQuestionButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); 
            const faqSummarySpan = this.previousElementSibling; 
            const questionText = faqSummarySpan ? faqSummarySpan.textContent : '';
            
            if (isReadingFaq && this.classList.contains('stop')) {
                stopSpeech();
                isReadingFaq = false;
            } else if (isTtsEnabled) {
                stopSpeech();
                isReadingFaq = true;
                toggleSpeech(questionText, this, () => {
                    isReadingFaq = false;
                });
            }
        });
    });

    clearChatButton.addEventListener('click', clearChat);
    stopReadingButton.addEventListener('click', stopSpeech);
    tabAiChat.addEventListener('click', () => toggleChatAndFaqs('ai-chat-container'));
    tabFaqs.addEventListener('click', () => toggleChatAndFaqs('faq-container'));

    // Initialization
    loadSettings();
    setDateDisplay();
    clearChat();
    
    // Initial color application for greeting text based on loaded settings
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-dark)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-dark)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-dark)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';
    } else {
        document.getElementById('greeting-text').style.color = 'var(--greeting-text-color-light)';
        document.getElementById('date-display').style.color = 'var(--timestamp-color-light)';
        document.getElementById('close-settings-panel').style.color = 'var(--timestamp-color-light)';
        document.querySelector('#settings-panel p.text-sm').style.color = 'var(--timestamp-color-light)';
        document.querySelector('footer.text-center').style.color = 'var(--text-color)';
    }
    // Initial color application for timestamps
    document.querySelectorAll('.timestamp').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--timestamp-color-dark)';
        } else {
            el.style.color = 'var(--timestamp-color-light)';
        }
    });
    // Initial color application for FAQ content
    document.querySelectorAll('.faq-content-container').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--faq-section-text)';
        } else {
            el.style.color = 'var(--faq-section-text)';
        }
    });
    document.querySelectorAll('.faq-content-container li').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--faq-section-text)';
        } else {
            el.style.color = 'var(--faq-section-text)';
        }
    });
    document.querySelectorAll('.faq-content-container li strong').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = '#FFFFFF';
        } else {
            el.style.color = '#333333';
        }
    });
    // Initial color application for FAQ questions
    document.querySelectorAll('.faq-summary').forEach(el => {
        if (document.body.classList.contains('dark-mode')) {
            el.style.color = 'var(--text-color)';
        } else {
            el.style.color = 'var(--text-color)';
        }
    });

    // Initial population of voice list
    populateVoiceList();