import Contador from "@/components/contador";
import Cronometro from "@/components/cronometro";
import FormularioContato from "@/components/formularioContato";
import ListaTarefas from "@/components/listaTarefas";
import TabelaUsuarios from "@/components/tabelaUsuarios";

const TaskList = [
  { id: 1, title: "Fazer compras" },
  { id: 2, title: "Estudar para o exame" },
  { id: 3, title: "Limpar a casa" },
  { id: 4, title: "Fazer exercícios" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-center justify-between p-24">
      <div className="w-full">
        <p>
          Projeto criado para concluir o desafio prático usando React, cumprindo
          todos os requisitos.
        </p>
        <p>
          OBS: Apesar de estarem na mesma página o funcionamento de cada
          componente não interfere no funcionamento dos demais.
        </p>
      </div>
      <Cronometro />
      <ListaTarefas list={TaskList} />
      <ListaTarefas />
      <FormularioContato />
      <TabelaUsuarios />
      <Contador />
    </main>
  );
}
