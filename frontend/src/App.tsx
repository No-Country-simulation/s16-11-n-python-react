import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';
import { Toaster } from './components/ui/toaster';
import { UserIcon } from './components/UserIcon';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="max-w-1600 mx-auto h-16 flex justify-between px-10 items-center">
        Header
        <UserIcon />
      </header>
      <main className="dark:bg-zinc-950 bg-gray-300 px-10 h-screen mx-auto dark:text-white">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          TechIAdemic
        </h1>
        <Router />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
