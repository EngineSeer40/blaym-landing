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
      <div className="container flex flex-col items-start gap-6">
        <div className="flex flex-col gap-3 items-start">
          <Badge className="gap-1.5 bg-primary/10 text-primary">FAQ</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl">
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
                    Blaym is a platform for developers to stream their coding process, showcase
                    their work, and replay coding sessions. It works by capturing your coding
                    activity and allowing you to share it with others, making code exploration
                    transparent and engaging.
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
                    Yes, we offer a free trial so you can experience Blaym's features. Sign up to
                    get started.
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
                    Unlike traditional screen recording, Blaym focuses on the coding process itself.
                    We provide features like searchable code, interactive replays, and a
                    developer-focused community, making code exploration more engaging and
                    efficient.
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
          <Card className="shadow-none py-0">
            <CardContent className="px-0">
              <AccordionItem value="bXHVGA93pTY" className="border-b-0">
                <AccordionTrigger className="hover:no-underline items-center p-6">
                  <span className="font-semibold text-base">How can I get support?</span>
                  <Icon
                    icon="lucide:chevron-down"
                    className="size-4 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-muted-foreground text-base">
                    You can find support through our documentation, community forums, or by
                    contacting our support team directly via email. We're here to help you every
                    step of the way.
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
