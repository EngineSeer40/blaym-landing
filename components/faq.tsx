"use client";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@iconify/react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { CardContent, Card } from "@/components/ui/card";

export function Faq() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-6">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">FAQ</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-center">
          Find answers to common questions about Blaym, including features, pricing, and support.
        </p>
        <Accordion collapsible type="single" className="flex flex-col gap-4 w-full">
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="R5h44RjXWtM" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">
                    What is Blaym and how does it work?
                  </span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    Blaym is a development layer for coders to record, branch or rewind their files, 
                    and replay their sessions. You can then review, share, or bounce to traditional 
                    version control systems.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="edUeGCqkS31" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">Is there a free trial available?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    We are currently in closed beta and you can get an activation code from the request form above.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="jgevcQA6NBu" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">
                    How does Blaym compare to other platforms?
                  </span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    Unlike traditional screen recording, Blaym focuses on the coding itself, with 
                    features like searchable code, interactive replays, and integrations with Gist, 
                    making code exploration more engaging and interactive.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="mZiNZ5xN4lr" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">
                    How long does it take to get started with Blaym?
                  </span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    Getting started with Blaym is quick and easy. Simply sign up, install the Blaym
                    extension, and start streaming your coding sessions. You'll be sharing your work
                    in minutes.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </CardContent>
          </Card>
        </Accordion>
      </div>
    </section>
  );
}
