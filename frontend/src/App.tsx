import { ThemeProvider } from './components/ThemeProvider';
import Router from './routes/Router';
import { Toaster } from '@/components/ui/sonner';
import { ChatBot } from './components/ChatBot';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { getCourses } from './services/api';
import { useStore } from './contexts/store';

function App() {
  const allCourses = useStore((state) => state.setCourses);
  useEffect(() => {
    (async () => {
      const coursesData = await getCourses();
      allCourses(coursesData);
    })();
  }, []);
  
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
