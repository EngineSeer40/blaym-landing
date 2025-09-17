"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dashboard from "@/public/images/dashboard.png";
import { submitWaitlist } from "@/app/actions/waitlist";
import { useState } from "react";
import toast from "react-hot-toast";

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitWaitlist(formData);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
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
        <form action={handleSubmit} className="flex flex-col gap-4 max-w-md w-full">
          <div className="flex gap-2">
            <Input 
              name="name"
              type="text"
              placeholder="Your name" 
              className="bg-secondary border-none flex-1"
              required
            />
            <Input 
              name="email"
              type="email"
              placeholder="Your email" 
              className="bg-secondary border-none flex-1"
              required
            />
          </div>
          <Button variant="default" size="default" type="submit" disabled={isSubmitting} className="hover:bg-purple hover:text-purple-foreground">
            {isSubmitting ? "Joining..." : "Join the Waitlist"}
          </Button>
        </form>
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="max-w-full w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/11 via-primary/5 to-primary/11 rounded-md blur-2xl scale-150 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/7 via-transparent to-primary/7 rounded-md blur-lg scale-150 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-radial from-primary/7 via-primary/2 to-transparent rounded-md blur-3xl scale-175 -z-10"></div>
            <Image
              src={dashboard}
              alt="Blaym Platform Preview"
              className="rounded-lg w-full h-auto shadow-2xl scale-150 relative z-10 border border-white/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
