"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/images/placeholder.png";

export function Features1() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <Image src={placeholder} alt="placeholder Image" className="rounded-md" />
        </div>
        <div className="flex flex-col flex-1 items-start gap-6">
          <div className="flex flex-col gap-3 items-start">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Features</Badge>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
              Unlock Your Coding Potential
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xl">
            Blaym empowers developers to stream their coding, showcase projects, and replay
            sessions, fostering a transparent and engaging coding experience.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Stream your coding process live, allowing others to learn from your workflow and
                techniques.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Showcase your projects with interactive replays, making your code accessible and
                engaging for potential employers or collaborators.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Build a dynamic portfolio of your coding sessions, demonstrating your skills and
                expertise in a unique and compelling way.
              </p>
            </div>
          </div>
          <div>
            <Button variant="default" size="default">
              Start Streaming
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
