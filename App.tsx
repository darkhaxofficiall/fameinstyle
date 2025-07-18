import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect } from "react";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import LoadingScreen from "@/components/LoadingScreen";
import AIChatbot from "@/components/AIChatbot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Router />
            <AIChatbot />
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
