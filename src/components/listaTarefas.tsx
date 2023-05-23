import React from "react";

interface ListaTarefasProps {
  list?: task[];
}

interface task {
  id: number;
  title: string;
}

const ListaTarefas = ({ list }: ListaTarefasProps) => {
  return (
    <div className="m-auto border-blue-600 border-4 p-10 my-5">
      <h1 className="text-3xl font-bold mb-3">ListaTarefas</h1>
      <ul>
        {list ? (
          list.map((task) => (
            <li className="text-2xl list-disc" key={task.id}>
              {task.title}
            </li>
          ))
        ) : (
          <h2 className="text-3xl">Você não possui tarefas :(</h2>
        )}
      </ul>
    </div>
  );
};

export default ListaTarefas;
