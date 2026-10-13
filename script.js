(() => {
  'use strict';

  const copy = {
    en: {
      skip: 'Skip to content', brandName: 'Gita Youth Forum', brandPresents: 'presents',
      navExperience: 'The celebration', navProgramme: 'Programme', navVenue: 'Venue', register: 'Register free',
      heroEyebrow: 'A student celebration by Gita Youth Forum', heroKicker: 'Two days. One joyful celebration.', heroTitleA: 'Celebrate the', heroTitleB: 'spirit of Dussehra.',
      heroDescription: 'Come together for stories, music, devotion and time with friends. Celebrate Dussehra with Gita Youth Forum.',
      dateMeta: '19–20 October 2026', freeMeta: 'Free entry', heroRegister: 'Register free', exploreProgramme: 'Explore the programme', heroNote: 'Bring a friend. Take home a meaningful memory.', posterLabel: 'THE EVENT POSTER', posterCaption: 'The details, at a glance',
      stripDates: '19 & 20 October 2026', stripFree: 'Free entry', stripVenue: 'Ramchandra Hall, near MIT College',
      sectionEyebrow: 'A little something for everyone', celebrationTitleA: 'Make these two days', celebrationTitleB: 'meaningful.', celebrationDescription: 'Good stories, good company and a celebration rooted in culture and devotion. Come experience both days.',
      dayOneLabel: 'DAY ONE', dayOneTitle: 'Movie & munchies', october: 'OCT', dayOneDate: 'Monday · 19 October', movie: 'Movie', popcorn: 'Popcorn', juice: 'Juice', dayOneFooter: 'Settle in, enjoy the show.',
      dayTwoLabel: 'DAY TWO', dayTwoTitle: 'Stories & celebration', dayTwoDate: 'Tuesday · 20 October', katha: 'Katha', music: 'Music', prasad: 'Prasad', surprises: 'Special surprises', dayTwoFooter: 'A day to connect and celebrate.',
      timingNote: 'Event timings have not been included. Please contact the organizer for confirmed details.',
      inviteOverline: 'YOUR INVITATION', inviteTitleA: 'Celebrate together.', inviteTitleB: 'Leave inspired.', inviteDescription: 'Make some space in your week for a warm, joyful celebration with the campus community.', inviteCta: 'Register for free',
      venueEyebrow: 'COME FIND US', venueTitleA: 'A place to', venueTitleB: 'come together.', venueDescription: 'Join the celebration at the venue below. Open directions before you leave so you can plan your route.', venueName: 'Ramchandra Hall', venueAddress: 'Near MIT College, Bypass Road, Chhatrapati Sambhajinagar.', mapDisclaimer: 'Illustration only · open Maps for the actual route', getDirections: 'Get directions', askWhatsapp: 'Ask on WhatsApp', mapCardSub: 'Chhatrapati Sambhajinagar',
      finalEyebrow: '19–20 OCTOBER 2026', finalTitle: 'We’d love to see you there.', finalDescription: 'Register for free, and reach out if you need any event details.', contactOrganizer: 'Contact organizer',
      footerTagline: 'Understand Gita, Transform Life', footerMessage: 'May these two days bring joy, connection and meaningful memories.', footerEvent: 'Dussehra celebration · 19–20 October 2026'
    },
    mr: {
      skip: 'मजकुराकडे जा', brandName: 'गीता युवा मंच', brandPresents: 'सादर करीत आहे',
      navExperience: 'उत्सव', navProgramme: 'कार्यक्रम', navVenue: 'स्थळ', register: 'मोफत नोंदणी',
      heroEyebrow: 'गीता युवा मंचतर्फे विद्यार्थ्यांसाठी उत्सव', heroKicker: 'दोन दिवस. आनंदाचा उत्सव.', heroTitleA: 'साजरा करूया', heroTitleB: 'दसऱ्याचा आनंद.',
      heroDescription: 'कथा, संगीत, भक्ती आणि मित्रांसोबत आनंदाचे क्षण अनुभवण्यासाठी एकत्र या. गीता युवा मंचासोबत दसरा साजरा करा.',
      dateMeta: '१९–२० ऑक्टोबर २०२६', freeMeta: 'प्रवेश विनामूल्य', heroRegister: 'मोफत नोंदणी करा', exploreProgramme: 'कार्यक्रम पाहा', heroNote: 'मित्राला सोबत आणा आणि सुंदर आठवणी घेऊन जा.', posterLabel: 'कार्यक्रमाचे पोस्टर', posterCaption: 'कार्यक्रमाची माहिती एका नजरेत',
      stripDates: '१९ आणि २० ऑक्टोबर २०२६', stripFree: 'प्रवेश विनामूल्य', stripVenue: 'रामचंद्र हॉल, MIT कॉलेजजवळ',
      sectionEyebrow: 'प्रत्येकासाठी काहीतरी खास', celebrationTitleA: 'हे दोन दिवस', celebrationTitleB: 'संस्मरणीय बनवा.', celebrationDescription: 'चांगल्या कथा, चांगली संगत आणि संस्कृती व भक्तीने जोडलेला उत्सव. दोन्ही दिवसांचा आनंद घ्या.',
      dayOneLabel: 'पहिला दिवस', dayOneTitle: 'चित्रपट आणि खाऊ', october: 'ऑक्टो.', dayOneDate: 'सोमवार · १९ ऑक्टोबर', movie: 'चित्रपट', popcorn: 'पॉपकॉर्न', juice: 'ज्यूस', dayOneFooter: 'आरामात बसा आणि चित्रपटाचा आनंद घ्या.',
      dayTwoLabel: 'दुसरा दिवस', dayTwoTitle: 'कथा आणि उत्सव', dayTwoDate: 'मंगळवार · २० ऑक्टोबर', katha: 'कथा', music: 'संगीत', prasad: 'प्रसाद', surprises: 'खास सरप्राइज', dayTwoFooter: 'एकत्र येण्याचा आणि आनंद साजरा करण्याचा दिवस.',
      timingNote: 'कार्यक्रमाच्या वेळा येथे दिलेल्या नाहीत. निश्चित वेळांसाठी आयोजकांशी संपर्क साधा.',
      inviteOverline: 'तुमच्यासाठी आमंत्रण', inviteTitleA: 'एकत्र साजरा करूया.', inviteTitleB: 'प्रेरणा घेऊन जाऊया.', inviteDescription: 'कॅम्पसच्या मित्रपरिवारासोबत आनंददायी उत्सवासाठी वेळ काढा.', inviteCta: 'मोफत नोंदणी करा',
      venueEyebrow: 'आम्हाला भेटा', venueTitleA: 'एकत्र येण्याचे', venueTitleB: 'ठिकाण.', venueDescription: 'खाली दिलेल्या स्थळी उत्सवासाठी या. निघण्यापूर्वी मार्ग पाहून घ्या.', venueName: 'रामचंद्र हॉल', venueAddress: 'MIT कॉलेजजवळ, बायपास रोड, छत्रपती संभाजीनगर.', mapDisclaimer: 'हे केवळ चित्र आहे · प्रत्यक्ष मार्गासाठी Maps उघडा', getDirections: 'मार्ग पाहा', askWhatsapp: 'WhatsApp वर विचारा', mapCardSub: 'छत्रपती संभाजीनगर',
      finalEyebrow: '१९–२० ऑक्टोबर २०२६', finalTitle: 'तुम्हाला भेटायला आवडेल.', finalDescription: 'मोफत नोंदणी करा. कार्यक्रमाबद्दल काही प्रश्न असल्यास संपर्क साधा.', contactOrganizer: 'आयोजकांशी संपर्क',
      footerTagline: 'गीता समजून घ्या, जीवन बदला', footerMessage: 'हे दोन दिवस आनंद, मैत्री आणि सुंदर आठवणी घेऊन येवोत.', footerEvent: 'दसरा उत्सव · १९–२० ऑक्टोबर २०२६'
    },
    hi: {
      skip: 'मुख्य सामग्री पर जाएँ', brandName: 'गीता यूथ फोरम', brandPresents: 'प्रस्तुत करता है',
      navExperience: 'उत्सव', navProgramme: 'कार्यक्रम', navVenue: 'स्थान', register: 'मुफ़्त पंजीकरण',
      heroEyebrow: 'गीता यूथ फोरम द्वारा विद्यार्थियों के लिए उत्सव', heroKicker: 'दो दिन। खुशियों का उत्सव।', heroTitleA: 'मनाएँ', heroTitleB: 'दशहरे का उत्साह।',
      heroDescription: 'कथाओं, संगीत, भक्ति और दोस्तों के साथ समय बिताने के लिए साथ आएँ। गीता यूथ फोरम के साथ दशहरा मनाएँ।',
      dateMeta: '19–20 अक्टूबर 2026', freeMeta: 'प्रवेश निःशुल्क', heroRegister: 'मुफ़्त पंजीकरण करें', exploreProgramme: 'कार्यक्रम देखें', heroNote: 'किसी दोस्त को साथ लाएँ और अच्छी यादें लेकर जाएँ।', posterLabel: 'कार्यक्रम का पोस्टर', posterCaption: 'एक नज़र में पूरी जानकारी',
      stripDates: '19 और 20 अक्टूबर 2026', stripFree: 'प्रवेश निःशुल्क', stripVenue: 'रामचंद्र हॉल, MIT कॉलेज के पास',
      sectionEyebrow: 'हर किसी के लिए कुछ खास', celebrationTitleA: 'इन दो दिनों को', celebrationTitleB: 'यादगार बनाएँ।', celebrationDescription: 'अच्छी कथाएँ, अच्छी संगति और संस्कृति व भक्ति से जुड़ा उत्सव। दोनों दिनों का अनुभव करें।',
      dayOneLabel: 'पहला दिन', dayOneTitle: 'फ़िल्म और नाश्ता', october: 'अक्टू॰', dayOneDate: 'सोमवार · 19 अक्टूबर', movie: 'फ़िल्म', popcorn: 'पॉपकॉर्न', juice: 'जूस', dayOneFooter: 'आराम से बैठें और फ़िल्म का आनंद लें।',
      dayTwoLabel: 'दूसरा दिन', dayTwoTitle: 'कथा और उत्सव', dayTwoDate: 'मंगलवार · 20 अक्टूबर', katha: 'कथा', music: 'संगीत', prasad: 'प्रसाद', surprises: 'खास सरप्राइज़', dayTwoFooter: 'मिलने और उत्सव मनाने का दिन।',
      timingNote: 'कार्यक्रम का समय यहाँ नहीं दिया गया है। निश्चित जानकारी के लिए आयोजक से संपर्क करें।',
      inviteOverline: 'आपके लिए निमंत्रण', inviteTitleA: 'साथ मनाएँ।', inviteTitleB: 'प्रेरणा लेकर जाएँ।', inviteDescription: 'कैंपस के साथियों के साथ इस आनंदमय उत्सव के लिए अपने सप्ताह में थोड़ा समय निकालें।', inviteCta: 'मुफ़्त पंजीकरण करें',
      venueEyebrow: 'यहाँ आइए', venueTitleA: 'मिलने-जुलने की', venueTitleB: 'एक जगह।', venueDescription: 'नीचे दिए गए स्थान पर उत्सव में शामिल हों। निकलने से पहले रास्ता देख लें।', venueName: 'रामचंद्र हॉल', venueAddress: 'MIT कॉलेज के पास, बायपास रोड, छत्रपति संभाजीनगर।', mapDisclaimer: 'केवल चित्रण · वास्तविक रास्ते के लिए Maps खोलें', getDirections: 'रास्ता देखें', askWhatsapp: 'WhatsApp पर पूछें', mapCardSub: 'छत्रपति संभाजीनगर',
      finalEyebrow: '19–20 अक्टूबर 2026', finalTitle: 'आपसे वहाँ मिलकर खुशी होगी।', finalDescription: 'मुफ़्त पंजीकरण करें और जानकारी चाहिए तो संपर्क करें।', contactOrganizer: 'आयोजक से संपर्क करें',
      footerTagline: 'गीता समझें, जीवन बदलें', footerMessage: 'ये दो दिन आनंद, जुड़ाव और अच्छी यादें लेकर आएँ।', footerEvent: 'दशहरा उत्सव · 19–20 अक्टूबर 2026'
    }
  };

  function setLanguage(language) {
    const selected = copy[language] ? language : 'en';
    const dictionary = copy[selected];
    document.documentElement.lang = selected === 'mr' ? 'mr' : selected;
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) node.textContent = dictionary[key];
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('gyf-site-language', selected); } catch (_) { /* Storage may be unavailable; language still works. */ }
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  let initialLanguage = 'en';
  try {
    const stored = localStorage.getItem('gyf-site-language');
    if (stored && copy[stored]) initialLanguage = stored;
  } catch (_) { /* Storage may be unavailable; default to English. */ }
  setLanguage(initialLanguage);

  // Keep the sticky mobile registration action out of the way of the opening poster.
  const mobileRegister = document.querySelector('.mobile-register');
  const heroSection = document.querySelector('.hero');
  if (mobileRegister && heroSection) {
    if ('IntersectionObserver' in window) {
      const stickyObserver = new IntersectionObserver(([entry]) => {
        mobileRegister.classList.toggle('is-visible', !entry.isIntersecting);
      }, { threshold: 0.02 });
      stickyObserver.observe(heroSection);
    } else {
      mobileRegister.classList.add('is-visible');
    }
  }

  // Elegant native motion inspired by modern interaction libraries, kept dependency-free.
  const progressBar = document.querySelector('.scroll-progress');
  let progressTicking = false;
  function updateScrollProgress() {
    if (!progressBar) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const amount = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`;
    progressTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!progressTicking) {
      window.requestAnimationFrame(updateScrollProgress);
      progressTicking = true;
    }
  }, { passive: true });
  updateScrollProgress();

  // Subtle poster tilt on precise-pointer devices only; touch users get the calm default layout.
  const posterFrame = document.querySelector('.poster-frame');
  if (posterFrame && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    posterFrame.addEventListener('pointermove', (event) => {
      const rect = posterFrame.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 3.2;
      const ry = (px - 0.5) * 4.2;
      posterFrame.style.setProperty('--tilt-x', `${rx.toFixed(2)}deg`);
      posterFrame.style.setProperty('--tilt-y', `${ry.toFixed(2)}deg`);
    });
    posterFrame.addEventListener('pointerleave', () => {
      posterFrame.style.setProperty('--tilt-x', '0deg');
      posterFrame.style.setProperty('--tilt-y', '0deg');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = '2026';

  // Add subtle entrance reveals only when the visitor has not requested reduced motion.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealTargets = document.querySelectorAll('.section-heading, .experience-card, .venue-copy, .venue-visual, .final-cta-inner');
    revealTargets.forEach((node) => node.classList.add('reveal'));
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach((node) => observer.observe(node));
  }
})();
