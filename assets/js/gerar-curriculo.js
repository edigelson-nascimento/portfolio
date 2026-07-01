function gerarCurriculo() {
  if (!window.jspdf) {
    alert('Erro: biblioteca jsPDF nao carregou. Verifique sua conexao com a internet.');
    return;
  }
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  let y = margin;

  // Cabeçalho
  doc.setFillColor(33, 37, 41);
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Edigelson Nascimento Conceicao', pageWidth / 2, 22, { align: 'center' });

  doc.setFontSize(13);
  doc.setFont('helvetica', 'normal');
  doc.text('Futuro Tecnico em Desenvolvimento de Sistemas', pageWidth / 2, 34, { align: 'center' });

  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('Camacari, BA  |  18/11/1995  |  Solteiro  |  Brasileiro', pageWidth / 2, 44, { align: 'center' });

  y = 65;

  // Contato
  doc.setTextColor(33, 37, 41);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Contato', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(80, 80, 80);
  doc.text('E-mail: contato@edigelson.dev', margin, y);
  y += 5;
  doc.text('Email: @edigelson.dev', margin, y);
  y += 5;
  doc.text('GitHub: github.com/edigelson-nascimento', margin, y);
  y += 5;
  doc.text('LinkedIn: linkedin.com/in/edigelson-nascimento', margin, y);
  y += 12;

  // Sobre
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(33, 37, 41);
  doc.text('Sobre', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const sobre = 'Ola! Sou estudante de TI, apaixonado por desenvolvimento web e sempre em busca de aprender mais.';
  const linhasSobre = doc.splitTextToSize(sobre, contentWidth);
  doc.text(linhasSobre, margin, y);
  y += linhasSobre.length * 5 + 10;

  // Habilidades
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(33, 37, 41);
  doc.text('Habilidades', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const habilidades = [
    'HTML5, CSS3, Bootstrap 5',
    'JavaScript (ES6+), DOM, Fetch API, Async/Await',
    'Git e GitHub',
    'Responsividade e acessibilidade web'
  ];
  habilidades.forEach(h => {
    doc.text('- ' + h, margin + 5, y);
    y += 6;
  });
  y += 8;

  // Projetos
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(33, 37, 41);
  doc.text('Projetos', margin, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  const projetos = [
    { titulo: 'CSS Grid', desc: 'Layout responsivo com grid-template-areas, grid-column, grid-row e design adaptavel.', data: '2026-06-19' },
    { titulo: 'Consumo de API', desc: 'Fetch e async/await com ViaCEP e JSONPlaceholder.', data: '2026-06-15' },
    { titulo: 'Manipulacao do DOM', desc: 'Formularios, datasets, estilos dinamicos e multiplos botoes.', data: '2026-06-10' },
    { titulo: 'Fundamentos JS', desc: 'Alert, prompt, eventos de teclado e mouse, contador interativo.', data: '2026-06-05' },
    { titulo: 'Conversor', desc: 'Conversor Bitcoin para Real com cotacao em tempo real.', data: '2026-06-19', repo: 'github.com/edigelson-nascimento/conversor', deploy: 'edigelson-nascimento.github.io/conversor' },
    { titulo: 'SalvusPet', desc: 'Plataforma de financiamento coletivo para causa animal.', data: '2026-06-15', repo: 'github.com/edigelson-nascimento/salvuspet', deploy: 'edigelson-nascimento.github.io/salvuspet' },
    { titulo: 'Decodificador', desc: 'Decodificador com tema hacker para criptografar e descriptografar texto.', data: '2026-06-10', repo: 'github.com/edigelson-nascimento/decodificador', deploy: 'edigelson-nascimento.github.io/decodificador' },
    { titulo: 'Dra. Quantum', desc: 'Bot Discord multifuncional com IA e moderacao automatica.', data: '2026-06-05', repo: 'github.com/edigelson-nascimento/dra.-quantum---discord-bot-multifuncional' }
  ];
  projetos.sort((a, b) => new Date(b.data) - new Date(a.data));
  projetos.forEach(p => {
    if (y > 260) {
      doc.addPage();
      y = margin;
    }
    doc.setFont('helvetica', 'bold');
    doc.text(p.titulo, margin + 5, y);
    y += 5;
    doc.setFont('helvetica', 'normal');
    const desc = doc.splitTextToSize(p.desc, contentWidth - 10);
    doc.text(desc, margin + 10, y);
    y += desc.length * 5 + 5;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    const linhaData = p.data;
    const linhaRepo = p.repo ? ' | ' + p.repo : '';
    const linhaDeploy = p.deploy ? ' | ' + p.deploy : '';
    doc.text(linhaData + linhaRepo + linhaDeploy, margin + 10, y);
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    y += 5;
  });

  // Rodapé
  const footerY = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(180, 180, 180);
  doc.text('Curriculo gerado em ' + new Date().toLocaleDateString('pt-BR'), pageWidth / 2, footerY, { align: 'center' });

  doc.save('curriculo-edigelson.pdf');
}
