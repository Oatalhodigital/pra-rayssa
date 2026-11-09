export type TipoPergunta = 'multipla_escolha' | 'multipla_selecao' | 'escala' | 'texto';

export interface Pergunta {
  id: number;
  bloco: string;
  emoji: string;
  tipo: TipoPergunta;
  texto: string;
  opcoes?: string[];
  permitirPular?: boolean; // Para bloco Picante
}

export const perguntas: Pergunta[] = [
  // Bloco 1: Dates 🍷
  {
    id: 1,
    bloco: 'Dates',
    emoji: '🍷',
    tipo: 'multipla_escolha',
    texto: 'Qual é o date perfeito pra você?',
    opcoes: ['Jantar romântico', 'Cinema + pipoca', 'Piquenique', 'Filme e conchinha em casa', 'Barzinho com música ao vivo'],
  },
  {
    id: 2,
    bloco: 'Dates',
    emoji: '🍷',
    tipo: 'multipla_escolha',
    texto: 'Date planejado ou surpresa?',
    opcoes: ['Quero saber de tudo antes', 'Me surpreende!', 'Um pouco de cada'],
  },
  {
    id: 3,
    bloco: 'Dates',
    emoji: '🍷',
    tipo: 'multipla_selecao',
    texto: 'Que comidas não podem faltar num date nosso?',
    opcoes: ['Japonesa', 'Hambúrguer', 'Pizza', 'Massas', 'Churrasco', 'Doces'],
  },

  // Bloco 2: Zoeira 😂
  {
    id: 4,
    bloco: 'Zoeira',
    emoji: '😂',
    tipo: 'multipla_escolha',
    texto: 'Se eu fosse um meme, eu seria…',
    opcoes: ['O cara do "tá certo?" 🕶️', 'O cachorro no incêndio "tá tudo bem" 🔥🐶', 'O Nazaré confusa 🤔', 'O gato gritando �'],
  },
  {
    id: 5,
    bloco: 'Zoeira',
    emoji: '�',
    tipo: 'multipla_escolha',
    texto: 'Quem ronca mais?',
    opcoes: ['Você', 'Eu', 'Os dois', 'Ninguém admite'],
  },
  {
    id: 6,
    bloco: 'Zoeira',
    emoji: '�',
    tipo: 'texto',
    texto: 'Qual é a mania minha que mais te irrita (pode falar, sem dó)?',
  },
  {
    id: 7,
    bloco: 'Zoeira',
    emoji: '�',
    tipo: 'escala',
    texto: 'De 0 a 10, nota pro meu bom dia ☀️',
  },
  {
    id: 8,
    bloco: 'Zoeira',
    emoji: '�',
    tipo: 'multipla_escolha',
    texto: 'Numa briga boba, quem pede desculpa primeiro?',
    opcoes: ['Eu, sempre', 'Você, sempre', 'Depende do dia', 'A gente faz as pazes na cama 😏'],
  },

  // Bloco 3: Lugares e aventuras 📍
  {
    id: 9,
    bloco: 'Lugares e aventuras',
    emoji: '📍',
    tipo: 'multipla_escolha',
    texto: 'Praia ou montanha?',
    opcoes: ['Praia, sempre', 'Montanha e friozinho', 'Os dois', 'Cidade grande'],
  },
  {
    id: 10,
    bloco: 'Lugares e aventuras',
    emoji: '📍',
    tipo: 'texto',
    texto: 'Qual lugar aqui perto você quer conhecer comigo?',
  },
  {
    id: 11,
    bloco: 'Lugares e aventuras',
    emoji: '📍',
    tipo: 'multipla_selecao',
    texto: 'Coisas que você quer fazer comigo pelo menos uma vez:',
    opcoes: ['Viagem internacional', 'Ver o nascer do sol', 'Acampar', 'Show ou festival', 'Tatuagem juntos', 'Andar de balão'],
  },

  // Bloco 4: Futuro 🌙
  {
    id: 12,
    bloco: 'Futuro',
    emoji: '🌙',
    tipo: 'multipla_escolha',
    texto: 'Como você imagina a gente daqui a 5 anos?',
    opcoes: ['Morando juntos', 'Casados', 'Com filhos', 'Viajando o mundo', 'Crescendo juntos'],
  },
  {
    id: 13,
    bloco: 'Futuro',
    emoji: '🌙',
    tipo: 'multipla_escolha',
    texto: 'Filhos?',
    opcoes: ['Quero sim', 'Talvez, mais pra frente', 'Pet já tá ótimo', 'Não quero', 'Ainda não sei'],
  },
  {
    id: 14,
    bloco: 'Futuro',
    emoji: '🌙',
    tipo: 'texto',
    texto: 'Qual é o seu maior sonho hoje?',
  },

  // Bloco 5: Picante �
  {
    id: 15,
    bloco: 'Picante',
    emoji: '�',
    tipo: 'multipla_escolha',
    texto: 'Qual hora do dia te deixa com mais vontade de mim?',
    opcoes: ['Manhã', 'Tarde', 'Noite', 'Madrugada', 'Toda hora 😈'],
    permitirPular: true,
  },
  {
    id: 16,
    bloco: 'Picante',
    emoji: '�',
    tipo: 'multipla_escolha',
    texto: 'Quem toma mais a iniciativa?',
    opcoes: ['Você', 'Eu', 'Meio a meio', 'Quem tiver mais saudade'],
    permitirPular: true,
  },
  {
    id: 17,
    bloco: 'Picante',
    emoji: '🔥',
    tipo: 'multipla_selecao',
    texto: 'Lugares onde você toparia uma aventura comigo:',
    opcoes: ['Chuveiro', 'Hotel/viagem', 'Carro', 'Piscina', 'Cozinha'],
    permitirPular: true,
  },
  {
    id: 18,
    bloco: 'Picante',
    emoji: '🔥',
    tipo: 'escala',
    texto: 'De 0 a 10, quão ousada você quer que a gente seja daqui pra frente?',
    permitirPular: true,
  },
  {
    id: 19,
    bloco: 'Picante',
    emoji: '�',
    tipo: 'multipla_escolha',
    texto: 'O que mais te provoca em mim?',
    opcoes: ['Meu beijo', 'Meu cheiro', 'Meu olhar', 'Minha voz no seu ouvido', 'Minhas mãos'],
    permitirPular: true,
  },
  {
    id: 20,
    bloco: 'Picante',
    emoji: '�',
    tipo: 'texto',
    texto: 'Uma fantasia ou desejo que você quer realizar comigo… 😏',
    permitirPular: true,
  },
];

export interface Resposta {
  perguntaId: number;
  valor: string | string[] | number;
  outro?: string;
  pulada?: boolean; // Para perguntas do bloco Picante
}
