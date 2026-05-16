// MENU MOBILE
function toggleMenu() {
  document.getElementById('mobMenu').classList.toggle('open');
}

// MODAL
function openModal() {
  document.getElementById('modalOrc').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ABRIR MODAL COM SEGMENTO
function openModalWithSegment(segment) {
  openModal();
  setTimeout(() => {
    const pj = document.getElementById('seg-pj');
    const pf = document.getElementById('seg-pf');
    if (pj) pj.value = segment;
    if (pf) pf.value = segment;
  }, 300);
}

function closeModal() {
  document.getElementById('modalOrc').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOut(e) {
  if (e.target.id === 'modalOrc') {
    closeModal();
  }
}

// SWITCH TAB
function switchTab(type) {
  document.querySelectorAll('.ftab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.fpanel').forEach(panel => panel.classList.remove('active'));

  if (type === 'pj') {
    document.querySelector('.ftab[onclick*="pj"]').classList.add('active');
    document.getElementById('panel-pj').classList.add('active');
  } else {
    document.querySelector('.ftab[onclick*="pf"]').classList.add('active');
    document.getElementById('panel-pf').classList.add('active');
  }
}

// ENVIAR WHATSAPP - VALIDAÇÃO TOTAL CORRIGIDA
function enviarWpp(tipo) {
  let nome = '', documento = '', telefone = '', email = '', segmento = '', solicitacao = '';

  if (tipo === 'pj') {
    nome = document.getElementById('contato-pj').value.trim();
    documento = document.getElementById('cnpj').value.trim();
    telefone = document.getElementById('tel-pj').value.trim();
    email = document.getElementById('email-pj').value.trim();
    const select = document.getElementById('seg-pj');
    segmento = select.options[select.selectedIndex].text;
    solicitacao = document.getElementById('sol-pj').value.trim();
  } else {
    nome = document.getElementById('nome-pf').value.trim();
    documento = document.getElementById('cpf').value.trim();
    telefone = document.getElementById('tel-pf').value.trim();
    email = document.getElementById('email-pf').value.trim();
    const select = document.getElementById('seg-pf');
    segmento = select.options[select.selectedIndex].text;
    solicitacao = document.getElementById('sol-pf').value.trim();
  }

  // VALIDAÇÃO DE TODOS OS CAMPOS (ORDEM CORRIGIDA)
  if (!nome) {
    alert("❌ Por favor, preencha o campo Nome / Pessoa para Contato.");
    return;
  }
  if (!documento) {
    alert(`❌ Por favor, preencha o campo ${tipo === 'pj' ? 'CNPJ' : 'CPF'}.`);
    return;
  }
  if (!telefone) {
    alert("❌ Por favor, preencha o campo Telefone / Celular (WhatsApp).");
    return;
  }
  if (!email) {
    alert("❌ Por favor, preencha o campo E-mail.");
    return;
  }
  if (segmento.includes("Selecione seu segmento") || segmento === "") {
    alert("❌ Por favor, selecione um Segmento.");
    return;
  }
  if (!solicitacao) {
    alert("❌ Por favor, preencha o campo Solicitação.");
    return;
  }

  // Se todos estiverem preenchidos → envia
  const texto = `📌 *NOVO ORÇAMENTO - US Consultoria Farmacêutica*%0A%0A` +
                `*Nome:* ${nome}%0A` +
                `*${tipo === 'pj' ? 'CNPJ' : 'CPF'}:* ${documento}%0A` +
                `*Telefone:* ${telefone}%0A` +
                `*E-mail:* ${email}%0A` +
                `*Segmento:* ${segmento}%0A%0A` +
                `*Solicitação:* ${solicitacao}`;

  window.open(`https://wa.me/5563992050375?text=${texto}`, '_blank');
  alert("✅ Redirecionando para o WhatsApp...");
}

// ANIMAÇÕES
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-up');
  observer.observe(section);
});

// FECHAR MENU
document.querySelectorAll('.mob-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobMenu').classList.remove('open');
  });
});

// FECHAR COM ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});