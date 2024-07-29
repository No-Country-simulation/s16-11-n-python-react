import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';
import { Toaster } from './components/ui/toaster';
import { ChatBot } from './components/ChatBot';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Router />
      <Footer />
      <ChatBot />
      <Toaster />
    </ThemeProvider>
 
  );
}

export default App;
