"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";

export function Features() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Features</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Unlock the Power of Transparent Code
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          Blaym empowers developers to stream their coding, replay sessions, and create a searchable
          library of code snippets, fostering collaboration and accelerating learning.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 max-w-2xl gap-12 mt-4">
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:layout-grid" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Replayable Sessions</h3>
              <p className="text-muted-foreground text-base">
                Lorem ipsum dolor sit amet, consecter adipis elit. Aene nulla diam, lacinia vitae.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:sparkles" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">AI Integrations</h3>
              <p className="text-muted-foreground text-base">
                Lorem ipsum dolor sit amet, consecter adipis elit. Aene nulla diam, lacinia vitae.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:pencil-ruler" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Solo or Team</h3>
              <p className="text-muted-foreground text-base">
                Lorem ipsum dolor sit amet, consecter adipis elit. Aene nulla diam, lacinia vitae.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="rounded-md p-3 bg-primary/10 text-primary">
              <Icon icon="lucide:palette" className="size-4" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-lg">Branching Streams</h3>
              <p className="text-muted-foreground text-base">
                Lorem ipsum dolor sit amet, consecter adipis elit. Aene nulla diam, lacinia vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
