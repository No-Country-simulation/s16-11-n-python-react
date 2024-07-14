import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="max-w-1600 mx-auto h-16 flex items-center">Header</header>
      <Router />
    </ThemeProvider>
  );
}

export default App;
