/* ==============================================
   CHIPS & CHIPS — Mockup State
   ============================================== */

const STATE = {
  username: 'INVITADO',
  fichas: 1000,
  luck: 5,
  exp: 100,
  rank: 'PRINCIPIANTE',
  skin: '#2563eb',
  missions: {}
};

// Funciones vacías para evitar errores en las interfaces
function saveState(){}
function addExp(n){}
function addFichas(n){ updateFichasUI(); }
function updateFichasUI(){
  document.querySelectorAll('.fichas-count').forEach(e=>{
    e.textContent = STATE.fichas.toLocaleString('es-ES');
  });
}
function updateExpUI(){}
function updateLuckUI(){}
function showToast(msg, color){}
function addMissionProgress(){}
function getMissionHTML(){ return ''; }

document.addEventListener('DOMContentLoaded', () => {
    updateFichasUI();
});
