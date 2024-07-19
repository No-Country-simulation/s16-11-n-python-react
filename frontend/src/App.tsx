import { ThemeProvider } from "./components/ThemeProvider";
import Router from "./routes/Router";
import { Toaster } from "./components/ui/toaster";
import { UserIcon } from "./components/UserIcon";
import { ChatBot } from "./components/ChatBot";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="sticky top-0 z-50 bg-zinc-400/75 max-w-1600 mx-auto h-16 flex justify-between px-10 items-center dark:bg-black">
        <h1>
          Tech<strong className="text-blue-600">IA</strong>cademic
        </h1>
        <UserIcon />
      </header>
      <Router />
      <ChatBot />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
