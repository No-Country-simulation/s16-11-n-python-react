import { ThemeProvider } from "./components/ThemeProvider";
import Router from "./routes/Router";
import { Toaster } from "./components/ui/toaster";
import { UserIcon } from "./components/UserIcon";
import { ChatBot } from "./components/ChatBot";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="max-w-1600 mx-auto h-16 flex justify-between px-10 items-center dark:bg-black">
        Header
        <UserIcon />
      </header>
      <Router />
      <div className="h-screen py-52 bg-red-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur officia dolor delectus. Eos eaque necessitatibus doloribus neque iusto ea quasi ex fuga tempora dicta corporis, libero repellendus asperiores saepe. Ratione!</div>
      <ChatBot />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
