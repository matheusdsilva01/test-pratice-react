import React from "react";

const usersData = [
  { id: 1, nome: "João", email: "joao@example.com", telefone: "123456789" },
  { id: 2, nome: "Maria", email: "maria@example.com", telefone: "987654321" },
  { id: 3, nome: "Pedro", email: "pedro@example.com", telefone: "456789123" },
];

const TabelaUsuarios = () => {
  return (
    <div className="m-auto border-blue-600 border-4 p-10">
      <h1 className="text-3xl font-bold mb-3">TabelaUsuarios</h1>
      <table className="table-auto border-separate border-spacing-2 border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">Nome</th>
            <th className="border border-slate-600">E-mail</th>
            <th className="border border-slate-600">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td className="border border-slate-700">{user.nome}</td>
              <td className="border border-slate-700">{user.email}</td>
              <td className="border border-slate-700">{user.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaUsuarios;
