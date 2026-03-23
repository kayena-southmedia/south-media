import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Solucoes from "./pages/Solucoes";
import Resultados from "./pages/Resultados";
import Sobre from "./pages/Sobre";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solucoes" component={Solucoes} />
      <Route path="/resultados" component={Resultados} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/blog" component={Blog} />
      <Route path="/contato" component={Contato} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
