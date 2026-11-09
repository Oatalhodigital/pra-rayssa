import { motion } from 'framer-motion';
import type { TipoPergunta } from '../data/perguntas';
import { OpcaoItem } from './OpcaoItem';
import { MultiplaSelecao } from './MultiplaSelecao';
import { EscalaSlider } from './EscalaSlider';
import { CampoTexto } from './CampoTexto';

interface PerguntaCardProps {
  tipo: TipoPergunta;
  texto: string;
  opcoes?: string[];
  valor: string | string[] | number;
  onChange: (valor: string | string[] | number) => void;
  outro?: string;
  onChangeOutro: (valor: string) => void;
  disabled?: boolean;
  permitirPular?: boolean;
  onPular?: () => void;
  pulada?: boolean;
}

export function PerguntaCard({
  tipo,
  texto,
  opcoes,
  valor,
  onChange,
  outro,
  onChangeOutro,
  disabled,
  permitirPular,
  onPular,
  pulada,
}: PerguntaCardProps) {
  const temOutro = outro !== undefined;

  const handleOutroClick = () => {
    if (tipo === 'multipla_escolha') {
      onChange('Outra...');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl p-6 shadow-lg"
    >
      <h2 className="text-2xl font-serif text-vinho mb-6">{texto}</h2>

      {tipo === 'multipla_escolha' && opcoes && (
        <div className="space-y-3">
          {opcoes.map((opcao) => (
            <OpcaoItem
              key={opcao}
              texto={opcao}
              selecionado={valor === opcao}
              onClick={() => onChange(opcao)}
              disabled={disabled}
            />
          ))}
          <OpcaoItem
            texto="Outra…"
            selecionado={valor === 'Outra...'}
            onClick={handleOutroClick}
            disabled={disabled}
          />
          {valor === 'Outra...' && (
            <CampoTexto
              valor={outro || ''}
              onChange={onChangeOutro}
              placeholder="Escreva sua resposta..."
              disabled={disabled}
            />
          )}
        </div>
      )}

      {tipo === 'multipla_selecao' && opcoes && (
        <div className="space-y-3">
          <MultiplaSelecao
            opcoes={opcoes}
            selecionados={valor as string[]}
            onSelect={(opcao) => {
              const selecionados = valor as string[];
              if (selecionados.includes(opcao)) {
                onChange(selecionados.filter((s) => s !== opcao));
              } else {
                onChange([...selecionados, opcao]);
              }
            }}
            disabled={disabled}
          />
          <OpcaoItem
            texto="Outra…"
            selecionado={temOutro && outro !== ''}
            onClick={() => {}}
            disabled={disabled}
          />
          {temOutro && (
            <CampoTexto
              valor={outro || ''}
              onChange={onChangeOutro}
              placeholder="Escreva sua resposta..."
              disabled={disabled}
            />
          )}
        </div>
      )}

      {tipo === 'escala' && (
        <EscalaSlider valor={valor as number} onChange={onChange as (v: number) => void} disabled={disabled} />
      )}

      {tipo === 'texto' && (
        <CampoTexto
          valor={valor as string}
          onChange={onChange as (v: string) => void}
          placeholder="Sua resposta..."
          disabled={disabled}
        />
      )}

      {permitirPular && !pulada && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onPular}
          disabled={disabled}
          className="mt-4 w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors disabled:opacity-50"
        >
          Prefiro responder pessoalmente 😏
        </motion.button>
      )}

      {pulada && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl text-center"
        >
          <p className="text-amber-800 font-medium">Quer responder pessoalmente 😏</p>
        </motion.div>
      )}
    </motion.div>
  );
}
