import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="dark:bg-zinc-950 bg-gray-300 px-10 h-screen mx-auto dark:text-white">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          TechIAdemic
        </h1>
        <Router />
      </main>
    </ThemeProvider>
  );
}

export default App;
