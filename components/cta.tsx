"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.png";

export function Cta() {
  return (
    <section className="relative py-36">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-col flex-1 items-start gap-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
            Stream, Showcase, and Replay Your Code
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Blaym transforms how developers share and explore code. Stream your coding process,
            showcase your projects, and replay coding sessions for transparent, searchable, and
            engaging code exploration.
          </p>
          <div className="flex gap-2">
            <Button variant="secondary" size="default">
              Explore Features
            </Button>
            <Button variant="default" size="default">
              Sign Up Free
            </Button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}
