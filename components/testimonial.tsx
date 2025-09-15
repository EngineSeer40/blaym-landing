"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export function Testimonial() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <Badge className="gap-1.5 bg-primary/10 text-primary">Testimonials</Badge>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl max-w-2xl text-balance text-center">
            What Developers Are Saying
          </h2>
        </div>
        <p className="text-muted-foreground text-base max-w-xl text-balance text-center">
          See how Blaym is transforming the way developers code, learn, and share their work.
        </p>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                Blaym has completely changed how I approach debugging. Being able to replay coding
                sessions is a game-changer for understanding complex issues.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">Sarah Chen</h4>
                  <p className="text-muted-foreground text-base leading-none">Senior Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                The ability to showcase my coding process has opened up so many opportunities. Blaym
                is a must-have for any developer looking to build their brand.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">Alex Rodriguez</h4>
                  <p className="text-muted-foreground text-base leading-none">Software Engineer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                Blaym's search functionality is incredibly powerful. I can quickly find and learn
                from specific coding techniques used by other developers.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">Maria Garcia</h4>
                  <p className="text-muted-foreground text-base leading-none">Lead Developer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                I've never seen a platform that makes code exploration so engaging. Blaym is a
                fantastic tool for both learning and teaching.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">David Lee</h4>
                  <p className="text-muted-foreground text-base leading-none">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                Blaym has significantly improved my workflow. I can now easily share my coding
                process with my team, leading to better collaboration and faster development.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">Jessica Kim</h4>
                  <p className="text-muted-foreground text-base leading-none">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardContent className="flex flex-col gap-5 h-full">
              <p className="text-base text-foreground">
                The transparency Blaym provides is invaluable. It's like having a live coding
                session with the best developers in the world.
              </p>
              <Separator className="mt-auto" />
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage
                    src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
                    alt="Avatar"
                    className="object-cover"
                  />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-base leading-none">Kevin Nguyen</h4>
                  <p className="text-muted-foreground text-base leading-none">Software Architect</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
