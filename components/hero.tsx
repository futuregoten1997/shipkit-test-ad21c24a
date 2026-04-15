import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
      
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
          🚀 Now with Next.js 14 App Router
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Build faster with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            ShipKit AI
          </span>
        </h1>
        
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Production-ready Next.js 14 applications with PocketBase, Better-Auth, 
          and Tailwind CSS. Stop configuring, start shipping.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center text-sm text-muted-foreground md:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold text-foreground">14</div>
            <div>Next.js Version</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold text-foreground">TS</div>
            <div>Strict Mode</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-bold text-foreground">PB</div>
            <div>PocketBase</div>
          </div>
        </div>
      </div>
    </section>
  );
}