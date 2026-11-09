export const config = {
  // Nome da pessoa que vai responder
  nomeDestinatario: 'Rayssa',

  // Nome do remetente
  nomeRemetente: 'Leandro',

  // Número do WhatsApp do remetente (formato: 55XXXXXXXXXXX, sem + ou traços)
  whatsappNumero: '5531982606442',

  // URL do Google Apps Script (configure nos GitHub Secrets como VITE_SCRIPT_URL)
  // Para desenvolvimento local, pode deixar vazio - as respostas vão só pelo WhatsApp
  scriptUrl: import.meta.env.VITE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycby1ChCvGq3cKzDMGteqzl1eyC8EMD3CfkA2a6DabwcrNR_7PH4sTHRobpArrhEsdXIP/exec',

  // Mensagem final que aparece na tela surpresa
  mensagemFinal: 'Rayssa, obrigado por responder tudo (até as safadas 😏). Agora eu sei um pouquinho mais de você… e tô ainda mais apaixonado. Com amor (e segundas intenções), Leandro. ❤️🔥',

  // Caminho da música de fundo (opcional)
  // Coloque o arquivo em public/musicas/ e configure aqui
  musicaFundo: '', // ex.: import.meta.env.BASE_URL + 'musicas/nossa-musica.mp3'

  // Cores do tema
  cores: {
    primaria: '#C05621', // rosa queimado
    secundaria: '#722F37', // vinho
    fundo: '#F5F5DC', // creme
    destaque: '#D4AF37', // dourado suave
  },
};
