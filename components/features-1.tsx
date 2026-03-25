"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
// import { Button } from "@/components/ui/button";
import screen from "@/public/images/screen.png";

export function Features1() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-md blur-xl scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/7 via-transparent to-primary/7 rounded-md blur-md -z-10"></div>
            <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-primary/2 to-transparent rounded-md blur-2xl scale-110 -z-10"></div>
            <Image 
              src={screen} 
              alt="Blaym Platform Screen" 
              className="rounded-md relative z-10 border border-white/50" 
            />
          </div>
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
                Record your coding process either in a solo or live session, 
                rewind to checkpoints, branch, replay and bounce out to Gist.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Showcase your projects with interactive replays, making your code accessible and
                engaging for collaborators and team mates.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="shrink-0 pt-1">
                <Icon icon="lucide:circle-check" className="size-4 text-primary" />
              </div>
              <p className="text-base text-foreground">
                Build a dynamic portfolio of your coding sessions, share to the community 
                or just have a backup for when things go sideways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
