import { motion } from 'framer-motion';
import { Botao } from './Botao';

interface MemePauseProps {
  titulo: string;
  emoji?: string;
  texto?: string;
  tipo?: 'video' | 'audio' | 'instagram' | 'texto';
  mediaUrl?: string;
  instagramUrl?: string;
  onContinuar: () => void;
}

export function MemePause({
  titulo,
  emoji = '😂',
  texto,
  tipo = 'texto',
  mediaUrl,
  instagramUrl,
  onContinuar,
}: MemePauseProps) {
  return (
    <div className="min-h-screen bg-creme flex flex-col items-center justify-center p-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full border-4 border-dashed border-amber-300"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-6xl text-center mb-4"
        >
          {emoji}
        </motion.div>

        <h2 className="text-2xl font-bold text-vinho text-center mb-6 font-bangers">
          {titulo}
        </h2>

        {tipo === 'video' && mediaUrl && (
          <div className="mb-6">
            <video
              src={mediaUrl}
              controls
              playsInline
              className="w-full rounded-xl"
              poster={mediaUrl}
            />
          </div>
        )}

        {tipo === 'audio' && mediaUrl && (
          <div className="mb-6">
            <audio
              src={mediaUrl}
              controls
              className="w-full"
            />
          </div>
        )}

        {tipo === 'instagram' && instagramUrl && (
          <div className="mb-6">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
            >
              Assistir no Instagram 😂
            </a>
          </div>
        )}

        {texto && (
          <p className="text-lg text-gray-700 text-center mb-6">{texto}</p>
        )}

        <Botao onClick={onContinuar}>kkkk próxima</Botao>
      </motion.div>
    </div>
  );
}
