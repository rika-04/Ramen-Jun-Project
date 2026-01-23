import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import MenuRed from "@/pages/menu/MenuRed";
import MenuWestend from "@/pages/menu/MenuWestend";
import MenuLocationSelect from "@/pages/menu/MenuLocationSelect";
import RedirectToLang from "./RedirectToLang";
import ScrollToTop from "./ScrollToTop";


import Location from "@/pages/Location";
import OurStory from "@/pages/OurStory";
import NotFound from "@/pages/not-found";


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <ScrollToTop />  
        <Switch>
          <Route path="/" component={RedirectToLang} />

          <Route path="/en" component={Home} />
          <Route path="/en/menu" component={MenuLocationSelect} />
          <Route path="/en/menu/red" component={MenuRed} />
          <Route path="/en/menu/westend" component={MenuWestend} />
          <Route path="/en/location" component={Location} />
          <Route path="/en/ourStory" component={OurStory} />

          <Route path="/de" component={Home} />
          <Route path="/de/menu" component={MenuLocationSelect} />
          <Route path="/de/menu/red" component={MenuRed} />
          <Route path="/de/menu/westend" component={MenuWestend} />
          <Route path="/de/location" component={Location} />
          <Route path="/de/ourStory" component={OurStory} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
