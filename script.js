// Navigation & UI interactions
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToRegister = document.getElementById('switch-to-register');
    const jumpButtons = document.querySelectorAll('[data-page-jump]');
    const globalSearch = document.getElementById('global-search');

    // Player elements
    const audio = document.getElementById('audio');
    const btnPlay = document.getElementById('btn-play');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnShuffle = document.getElementById('btn-shuffle');
    const btnRepeat = document.getElementById('btn-repeat');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const volumeBar = document.getElementById('volume-bar');
    const volumeLevel = document.getElementById('volume-level');
    const songNameEl = document.querySelector('.song-name');
    const artistNameEl = document.querySelector('.artist-name');

    // State
    let queue = [];
    let currentIndex = -1;
    let isShuffle = false;
    let isRepeat = false; // repeat all when true, repeat one when alt-click
    let repeatMode = 'none'; // 'none' | 'all' | 'one'

    // Helpers
    function formatTime(seconds) {
        const m = Math.floor(seconds / 60) || 0;
        const s = Math.floor(seconds % 60) || 0;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    function setActiveNav(pageName) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-page="${pageName}"]`);
        if (active) active.classList.add('active');
    }

    // Show page
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('active'));
        const pageEl = document.getElementById(pageId);
        if (pageEl) pageEl.classList.add('active');
        window.history.pushState({}, '', `#${pageId}`);
        const pageName = pageId.replace('-page', '');
        setActiveNav(pageName);
    }

    // Jump buttons
    jumpButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-page-jump');
            showPage(`${target}-page`);
        });
    });

    // Nav
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page') + '-page';
            showPage(pageId);
        });
    });

    // Auth buttons
    if (loginBtn) loginBtn.addEventListener('click', function() { showPage('login-page'); });
    if (registerBtn) registerBtn.addEventListener('click', function() { showPage('register-page'); });

    // Auth forms
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (switchToLogin) switchToLogin.addEventListener('click', e => { e.preventDefault(); showPage('login-page'); });
    if (switchToRegister) switchToRegister.addEventListener('click', e => { e.preventDefault(); showPage('register-page'); });

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            if (email && password) {
                alert('Connexion réussie!');
                showPage('home-page');
                document.getElementById('login-btn').style.display = 'none';
                document.getElementById('register-btn').style.display = 'none';
                document.querySelector('.search-bar').style.order = '0';
            } else {
                alert('Veuillez remplir tous les champs');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const accountType = document.getElementById('register-type').value;
            if (name && email && password && accountType) {
                alert('Inscription réussie! Bienvenue sur YABISSO.');
                showPage('home-page');
                document.getElementById('login-btn').style.display = 'none';
                document.getElementById('register-btn').style.display = 'none';
                document.querySelector('.search-bar').style.order = '0';
            } else {
                alert('Veuillez remplir tous les champs');
            }
        });
    }

    // Library tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab') + '-tab';
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            tabContents.forEach(content => content.classList.remove('active'));
            const el = document.getElementById(tabId);
            if (el) el.classList.add('active');
        });
    });

    // Discover filters
    const moodChips = document.querySelectorAll('#mood-chips .chip');
    moodChips.forEach(chip => {
        chip.addEventListener('click', () => {
            moodChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-filter');
            const cards = document.querySelectorAll('#discover-page .music-card');
            cards.forEach(card => {
                const mood = card.getAttribute('data-mood') || 'all';
                card.style.display = (filter === 'all' || filter === mood) ? '' : 'none';
            });
        });
    });
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            // Demo only: no-op for now
        });
    }

    // Global search (basic demo: highlights matching titles)
    if (globalSearch) {
        globalSearch.addEventListener('input', () => {
            const q = globalSearch.value.trim().toLowerCase();
            const allTitles = document.querySelectorAll('.card-title, .playlist-title, .track-title');
            allTitles.forEach(el => {
                el.parentElement?.parentElement?.classList?.remove('highlighted');
                if (q && el.textContent.toLowerCase().includes(q)) {
                    el.parentElement?.parentElement?.classList?.add('highlighted');
                }
            });
        });
    }

    // Category cards -> navigate and alert demo
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const genre = this.getAttribute('data-genre');
            showPage('discover-page');
            alert(`Affichage du contenu pour le genre: ${genre}`);
        });
    });

    // Initialize from hash
    const hash = window.location.hash.substring(1);
    if (hash) showPage(hash);

    // Player logic
    function updatePlayerUI(track) {
        if (!track) return;
        songNameEl.textContent = track.title || 'Titre inconnu';
        artistNameEl.textContent = track.artist || 'Artiste inconnu';
        document.title = `${track.title} · ${track.artist} — YABISSO`;
    }

    function loadTrack(index, autoplay = true) {
        if (index < 0 || index >= queue.length) return;
        currentIndex = index;
        const track = queue[currentIndex];
        audio.src = track.src;
        audio.load();
        updatePlayerUI(track);
        if (autoplay) audio.play().catch(() => {});
        btnPlay.classList.remove('fa-play');
        btnPlay.classList.add('fa-pause');
    }

    function buildQueueFromElements(els) {
        const tracks = Array.from(els).map(el => ({
            title: el.querySelector('.card-title')?.textContent || el.querySelector('.track-title')?.textContent || 'Titre',
            artist: el.querySelector('.card-artist')?.textContent || el.querySelector('.track-artist')?.textContent || 'Artiste',
            src: el.getAttribute('data-src')
        })).filter(t => !!t.src);
        return tracks;
    }

    function appendToQueue(track) {
        if (track && track.src) queue.push(track);
    }

    function playElement(el) {
        const track = {
            title: el.querySelector('.card-title')?.textContent || el.querySelector('.track-title')?.textContent || 'Titre',
            artist: el.querySelector('.card-artist')?.textContent || el.querySelector('.track-artist')?.textContent || 'Artiste',
            src: el.getAttribute('data-src')
        };
        if (!track.src) return;
        queue = [track, ...queue.filter(t => t.src !== track.src)];
        loadTrack(0, true);
    }

    function nextTrack() {
        if (repeatMode === 'one') return loadTrack(currentIndex, true);
        if (isShuffle) {
            const next = Math.floor(Math.random() * queue.length);
            return loadTrack(next, true);
        }
        const next = currentIndex + 1;
        if (next >= queue.length) {
            if (repeatMode === 'all') return loadTrack(0, true);
            audio.pause();
            btnPlay.classList.remove('fa-pause');
            btnPlay.classList.add('fa-play');
            return;
        }
        loadTrack(next, true);
    }

    function prevTrack() {
        if (audio.currentTime > 3) {
            audio.currentTime = 0; return;
        }
        const prev = currentIndex - 1;
        if (prev < 0) {
            if (repeatMode === 'all') return loadTrack(queue.length - 1, true);
            audio.currentTime = 0; return;
        }
        loadTrack(prev, true);
    }

    // Attach play handlers to cards and tracks
    function addTrackEventListeners() {
        const tracks = document.querySelectorAll('.track[data-src]');
        const musicCards = document.querySelectorAll('.music-card[data-src], .playlist-card[data-src]');
        tracks.forEach(trackEl => {
            const playButton = trackEl.querySelector('.fa-play');
            if (playButton) {
                playButton.addEventListener('click', function() { playElement(trackEl); });
            }
            const heartButton = trackEl.querySelector('.fa-heart');
            if (heartButton) {
                heartButton.addEventListener('click', function() {
                    this.classList.toggle('fas');
                    this.classList.toggle('far');
                });
            }
        });
        musicCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.play-overlay') || e.target.closest('.playlist-card')) {
                    playElement(card); return;
                }
                // Clicking elsewhere also plays
                playElement(card);
            });
            const playOverlay = card.querySelector('.play-overlay');
            if (playOverlay) {
                playOverlay.addEventListener('click', function(e) {
                    e.stopPropagation();
                    playElement(card);
                });
            }
        });
    }

    addTrackEventListeners();

    // Build initial queue from all playable elements
    queue = buildQueueFromElements(document.querySelectorAll('[data-src]'));

    // Player controls
    btnPlay.addEventListener('click', function() {
        if (!audio.src && queue.length) loadTrack(0, false);
        if (audio.paused) {
            audio.play().catch(() => {});
            this.classList.remove('fa-play');
            this.classList.add('fa-pause');
        } else {
            audio.pause();
            this.classList.remove('fa-pause');
            this.classList.add('fa-play');
        }
    });
    btnPrev.addEventListener('click', prevTrack);
    btnNext.addEventListener('click', nextTrack);
    btnShuffle.addEventListener('click', function() {
        isShuffle = !isShuffle;
        this.style.color = isShuffle ? 'var(--accent-color)' : 'var(--text-secondary)';
    });
    btnRepeat.addEventListener('click', function(e) {
        if (repeatMode === 'none') repeatMode = 'all';
        else if (repeatMode === 'all') repeatMode = 'one';
        else repeatMode = 'none';
        this.style.color = repeatMode === 'none' ? 'var(--text-secondary)' : 'var(--accent-color)';
        this.title = repeatMode === 'one' ? 'Répéter un' : (repeatMode === 'all' ? 'Répéter tout' : 'Répéter désactivé');
    });

    // Time/progress
    audio.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audio;
        if (!isNaN(duration)) {
            const percent = (currentTime / duration) * 100;
            progress.style.width = `${percent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    });
    audio.addEventListener('ended', nextTrack);

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        if (!isNaN(audio.duration)) audio.currentTime = ratio * audio.duration;
    });

    // Volume
    function setVolumeFromRatio(ratio) {
        const r = Math.max(0, Math.min(1, ratio));
        audio.volume = r;
        volumeLevel.style.width = `${r * 100}%`;
    }
    setVolumeFromRatio(0.7);
    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const ratio = (e.clientX - rect.left) / rect.width;
        setVolumeFromRatio(ratio);
    });
});

