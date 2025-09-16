"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.png";
import { config } from "@/lib/config";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      // Replace with your actual waitlist API endpoint
      const response = await fetch(config.waitlist.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error('Waitlist signup failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 size-full -z-10">
        <svg
          aria-hidden="true"
          className="fill-foreground/15 pointer-events-none absolute inset-0 size-full -z-10"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <circle id="pattern-circle" cx="10" cy="10" r="1.25" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)" />
        </svg>
        <div className="absolute inset-0 size-full bg-radial-[at_50%_50%] from-transparent via-background/5 to-background via-70% to-95%" />
      </div>
      <div className="container flex flex-col gap-6 items-center">
        {/* <Badge className="bg-primary/10 text-primary gap-2 pl-0.5">
          <Badge className="text-xs font-medium rounded-sm">New</Badge>
          Launching Soon
          <Icon icon="lucide:chevron-right" className="size-4" />
        </Badge> */}
        <div className="py-8">
          <Image
            src="/images/blaym_text_wide_dark_c.svg"
            alt="Blaym - Code Streaming Platform"
            width={400}
            height={80}
            className="max-w-md w-full h-auto scale-75"
          />
        </div>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance text-center">
          Code Streaming, Reimagined.
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl text-balance text-center">
          Stream your coding process, showcase your work, and replay coding sessions. Make code
          exploration transparent, searchable, and deeply engaging.
        </p>
        {isSubmitted ? (
          <div className="flex flex-col items-center gap-2">
            <p className="text-green-500 font-medium">Thanks for joining our waitlist!</p>
            <Button variant="default" size="default" asChild>
              <a href={config.app.dashboardUrl} target="_blank" rel="noopener noreferrer">
                Get Early Access
              </a>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
            <Input 
              type="email"
              placeholder="Enter your email" 
              className="bg-secondary border-none min-w-54"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button variant="default" size="default" type="submit" disabled={isSubmitting} className="hover:bg-purple hover:text-purple-foreground">
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
        )}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg p-8 max-w-4xl w-full">
            <Image
              src={placeholder}
              alt="Blaym Platform Preview"
              className="rounded-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
