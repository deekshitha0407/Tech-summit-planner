let sessions = [
    { id: 1, title: "Neural_Link_Integration", speaker: "Dr. Aris", fav: false, bio: "Lead architect of the Global Mind Protocol." },
    { id: 2, title: "Ghost_In_The_Server", speaker: "Null_Ptr", fav: true, bio: "Encryption specialist and digital phantom." }
];

const board = document.getElementById('scheduleBoard');

function render() {
    board.innerHTML = '';
    sessions.forEach(s => {
        const card = document.createElement('div');
        card.className = 'session-card';
        card.innerHTML = `
            <span class="fav-btn ${s.fav ? 'active' : ''}" onclick="toggleFav(${s.id})">★</span>
            <h3 class="magenta-text">${s.title}</h3>
            <p>ID: 0x${s.id.toString(16)}</p>
            <button onclick="showSpeaker(${s.id})">VIEW_SPEAKER</button>
        `;
        board.appendChild(card);
    });
}

function addSession() {
    const t = document.getElementById('talkTitle').value;
    const n = document.getElementById('speakerName').value;
    if(!t || !n) return;
    sessions.push({
        id: Date.now(),
        title: t,
        speaker: n,
        fav: false,
        bio: "DATA_NOT_FOUND_IN_ARCHIVES."
    });
    render();
}

function toggleFav(id) {
    const s = sessions.find(x => x.id === id);
    s.fav = !s.fav;
    render();
}

function showSpeaker(id) {
    const s = sessions.find(x => x.id === id);
    document.getElementById('modalName').innerText = `[ ${s.speaker} ]`;
    document.getElementById('modalBio').innerText = s.bio;
    document.getElementById('speakerModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('speakerModal').classList.add('hidden');
}

render();