// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCx-_ZIqzRMdEw_ui2wi5MnHPEG4bPWOYU",
  authDomain: "robo-monitor.firebaseapp.com",
  databaseURL: "https://robo-monitor-default-rtdb.firebaseio.com",
  projectId: "robo-monitor",
  storageBucket: "robo-monitor.firebasestorage.app",
  messagingSenderId: "397355160022",
  appId: "1:397355160022:web:bc90c8598b5e6b156f5477",
  measurementId: "G-NZ55NXV75E"
};


// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// --- Login ---
document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const msg = document.getElementById('login-msg');

  auth.signInWithEmailAndPassword(email, senha)
    .then(() => {
      document.getElementById('login-section').style.display = 'none';
      document.getElementById('area-logada').style.display = 'block';
      document.getElementById('cards-publicos').style.display = 'flex';

      // reativa os toggles (inclui o card do manual)
      ativarToggleCards();
    })
    .catch(error => {
      msg.textContent = "Erro: " + error.message;
    });
});

// --- Logout ---
document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut().then(() => {
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('area-logada').style.display = 'none';
    document.getElementById('cards-publicos').style.display = 'flex';
  });
});

// --- Função para ativar abrir/fechar em todos os cards ---
function ativarToggleCards() {
  document.querySelectorAll(".card").forEach((card) => {
    const header = card.querySelector("h3");

    if (header && !card.dataset.toggleAtivado) {

      header.style.cursor = "pointer";

      header.addEventListener("click", () => {

        document.querySelectorAll(".card").forEach(c => {
          if (c !== card) {
            c.classList.remove("active");
          }
        });

        card.classList.toggle("active");

      });

      card.dataset.toggleAtivado = "true";

    }
  });
}

// roda no início pra já ativar nos públicos
ativarToggleCards();

function abrirPatrocinio() {
  document.getElementById("fundo-patrocinio").style.display = "block";
  document.getElementById("patrocinio-completo").style.display = "block";
}

function fecharPatrocinio() {
  document.getElementById("fundo-patrocinio").style.display = "none";
  document.getElementById("patrocinio-completo").style.display = "none";
}

// --- Manual (abre como bloco separado, não como card) ---
function abrirManual() {
  document.getElementById("fundo-manual").style.display = "block";
  document.getElementById("manual-completo").style.display = "block";
}

function fecharManual() {
  document.getElementById("fundo-manual").style.display = "none";
  document.getElementById("manual-completo").style.display = "none";
}
function abrirTabela() {
  document.getElementById("tabela-completa").style.display = "block";
  document.getElementById("area-logada").style.display = "none";
}

function fecharTabela() {
  document.getElementById("tabela-completa").style.display = "none";
  document.getElementById("area-logada").style.display = "block";
}