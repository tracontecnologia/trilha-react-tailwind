import { Button, Input } from './components';

export default function App() {
  return (
    <div className="w-full max-w-2xl m-auto p-4 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-bold text-black py-4">Conecte-se em sua conta</h1>
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" />
      <div className="w-full flex flex-col items-center gap-2 mt-4">
        <Button>Conectar</Button>
        <span className="text-gray-400 mt-1">ou</span>
        <Button variant="link">Criar conta agora</Button>
      </div>
    </div>
  );
}
