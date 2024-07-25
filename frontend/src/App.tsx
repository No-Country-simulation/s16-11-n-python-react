import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';
import { Toaster } from './components/ui/toaster';
import { UserIcon } from './components/UserIcon';
import { ChatBot } from './components/ChatBot';
import { Link } from 'wouter';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="sticky top-0 z-50 bg-[#131517] max-w-1600 mx-auto h-16 flex justify-between px-10 items-center dark:bg-black/95">
        <Link href="/">
          <h1 className="text-white">
            Tech<strong className="text-[#006E2F]">IA</strong>cademic
          </h1>
        </Link>
        <Link className="block my-2 py-2 hover:text-zinc-300 text-white text-lg" to="/cursos/cursos-en-progreso">
          Cursos
        </Link>
        <UserIcon />
      </header>
      <Router />
      <ChatBot />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
