import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
            <Badge className="gap-1.5 bg-primary/10 text-primary">About</Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance">
              About Blaym
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-balance">
              Blaym was born from a vision to make coding more transparent, collaborative, and engaging. 
              We believe that the best way to learn and improve as developers is by sharing our process, 
              not just our results.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl">
            <div className="flex-1">
              <Image
                src="/images/blaym_logo_dark.svg"
                alt="Blaym Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-purple">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-base">
                  To revolutionize how developers share, learn, and collaborate by creating a platform 
                  that captures the entire coding journey. We're building tools that make code streaming, 
                  session replay, and knowledge sharing seamless and engaging.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-4 text-purple">
                  The Vision
                </h2>
                <p className="text-muted-foreground text-base">
                  Imagine a world where every coding session becomes a learning opportunity, where 
                  developers can easily share their thought process, and where the community can 
                  learn from real-world problem-solving in action.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <div className="bg-card rounded-lg p-8 border">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-56 h-56 rounded-full overflow-hidden mx-auto md:mx-0">
                  <Image
                    src="/images/founder.jpg"
                    alt="Founder - Gary Pate"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="font-heading font-bold text-xl">Founder - Gary Pate</h3>
                  <p className="text-muted-foreground text-base">
                    After several frustrating experiences working as an engineer, I realised that developers and coders 
                    did not have an easy way to showcase their work. Not everyone has the time 
                    to set up screen recording and even then such mediums have limited functionality.
                    Blaym was born from this realisation.
                  </p>
                  <p className="text-muted-foreground text-base">
                    "I wanted to make a place where new and seasoned developers could learn and network. I wanted coding to be cool again"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
