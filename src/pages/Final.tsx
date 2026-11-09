import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { config } from '../config';
import { Botao } from '../components/Botao';
import { FloatingHearts } from '../components/FloatingHearts';
import type { Resposta } from '../data/perguntas';
import { perguntas } from '../data/perguntas';

interface FinalProps {
  respostas: Map<number, Resposta>;
  outrasRespostas: Map<number, string>;
}

export function Final({ respostas, outrasRespostas }: FinalProps) {
  const [musicaTocando, setMusicaTocando] = useState(false);
  const [beijoAnimacao, setBeijoAnimacao] = useState(false);
  const [audio] = useState(() => {
    if (config.musicaFundo) {
      const audio = new Audio(config.musicaFundo);
      audio.loop = true;
      return audio;
    }
    return null;
  });

  useEffect(() => {
    // Explosão de confetes em formato de coração e chamas
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C05621', '#722F37', '#D4AF37', '#FF69B4', '#FF4500'],
        shapes: ['circle', 'star'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C05621', '#722F37', '#D4AF37', '#FF69B4', '#FF4500'],
        shapes: ['circle', 'star'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleTocarMusica = () => {
    if (audio) {
      if (musicaTocando) {
        audio.pause();
      } else {
        audio.play();
      }
      setMusicaTocando(!musicaTocando);
    }
  };

  const perguntasOrdenadas = Array.from(respostas.entries())
    .map(([id, resp]) => ({ id, resp }))
    .sort((a, b) => a.id - b.id);

  const gerarMensagemWhatsApp = () => {
    let mensagem = `Oi ${config.nomeRemetente}! ❤️\n\nAqui estão minhas respostas do quiz:\n\n`;

    perguntasOrdenadas.forEach(({ id }) => {
      const pergunta = perguntas.find((p) => p.id === id);
      const resposta = respostas.get(id);
      if (resposta && pergunta) {
        mensagem += `${pergunta.emoji} ${pergunta.texto}\n`;
        if (Array.isArray(resposta.valor)) {
          mensagem += `Resposta: ${resposta.valor.join(', ')}\n`;
        } else {
          mensagem += `Resposta: ${resposta.valor}\n`;
        }
        const outro = outrasRespostas.get(id);
        if (outro) {
          mensagem += `Outra: ${outro}\n`;
        }
        mensagem += '\n';
      }
    });

    mensagem += '\nCom amor, ' + config.nomeDestinatario + ' 💕';

    return encodeURIComponent(mensagem);
  };

  return (
    <div className="min-h-screen bg-creme p-4 relative">
      <FloatingHearts />

      <div className="max-w-lg mx-auto pt-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-serif text-vinho mb-4">
            Parabéns, {config.nomeDestinatario}! 🎉
          </h1>
          <p className="text-lg text-gray-700 whitespace-pre-line font-dancing-script">
            {config.mensagemFinal}
          </p>
        </motion.div>

        {/* Miniatura do vídeo do bom dia */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 text-center"
        >
          <video
            src={import.meta.env.BASE_URL + 'memes/bom-dia.mp4'}
            className="w-48 h-auto rounded-xl shadow-lg mx-auto"
            muted
            playsInline
          />
          <p className="text-sm text-gray-600 mt-2">Tá certo? 🕶️❤️</p>
        </motion.div>

        {config.musicaFundo && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleTocarMusica}
            className="fixed bottom-24 right-4 bg-vinho text-white p-4 rounded-full shadow-lg z-10"
          >
            {musicaTocando ? '⏸️' : '🎵'}
          </motion.button>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="space-y-4"
        >
          <Botao
            onClick={() => {
              const url = `https://wa.me/${config.whatsappNumero}?text=${gerarMensagemWhatsApp()}`;
              window.open(url, '_blank');
            }}
          >
            Mandar minhas respostas pro {config.nomeRemetente} 💌
          </Botao>
          <Botao
            onClick={() => setBeijoAnimacao(true)}
          >
            Quero um beijo agora 😘
          </Botao>
        </motion.div>
      </div>

      {/* Animação de beijo */}
      <AnimatePresence>
        {beijoAnimacao && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-vinho flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 2, 1] }}
              transition={{ duration: 1.5 }}
              className="text-9xl"
            >
              💋
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setBeijoAnimacao(false)}
              className="absolute bottom-20 text-white text-xl"
            >
              Fechar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
