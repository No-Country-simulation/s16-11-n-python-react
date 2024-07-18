import { ThemeProvider } from "./components/ThemeProvider";
import Router from "./routes/Router";
import { Toaster } from "./components/ui/toaster";
import { UserIcon } from "./components/UserIcon";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className="max-w-1600 mx-auto h-16 flex justify-between items-center bg-black">
        Header
        <UserIcon />
      </header>
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
