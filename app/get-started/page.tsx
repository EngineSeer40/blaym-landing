 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

function StepImage({
  src,
  alt,
  sizeClassName,
}: {
  src: string;
  alt: string;
  sizeClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`${sizeClassName ?? "w-full md:w-[70%] lg:w-[70%] xl:w-[65%]"} block rounded-lg border bg-card p-3 mr-auto text-left`}
        aria-label={`Open ${alt} image in larger view`}
      >
        <Image src={src} alt={alt} width={1200} height={700} className="w-full h-auto rounded-md" />
        <p className="mt-2 text-xs text-muted-foreground text-left">Click image to enlarge</p>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-[66vw] h-[66vh] flex items-center justify-center overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={1800}
              height={1100}
              className="w-full h-auto max-w-[1050px] max-h-[64vh] rounded-md object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default function GetStarted() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container flex flex-col gap-12 items-start">
          <div className="flex flex-col gap-6 items-start text-left max-w-4xl">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Get Started</Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-3xl text-balance">
              Blaym for VS Code Walkthrough
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Start your first session in minutes. Follow the flow, click any screenshot to expand, and you are live.
            </p>
          </div>

          <div className="w-full max-w-4xl space-y-14 text-muted-foreground text-base [&_p]:text-balance">
          <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Install Extension</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>Search for Blaym in the VS Code Marketplace.</p>
                  <StepImage src="/images/get-started/Marketplace_clip.png" alt="Search Market" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
              </ol>
            </section>
            
            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Connect as Host</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    Open the Blaym side panel and click <strong>Connect to Blaym</strong>. If prompted, enter your
                    invite code.
                  </p>
                  <StepImage src="/images/get-started/SidebarPanel_clip.png" alt="Connect prompt" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>

                </li>
                <li className="space-y-6">
                  <p>A window asks to connect to the Blaym website. Click <strong>OK</strong>.</p>
                  <StepImage src="/images/get-started/image1.png" alt="Connect prompt" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    Sign in with Google or GitHub. In your workspace, press <strong>Go Live</strong>, then{" "}
                    <strong>Start Session</strong> in the lobby.
                  </p>
                  <StepImage src="/images/get-started/image22.png" alt="Go Live in workspace" sizeClassName="w-full md:w-[55%] lg:w-[50%] xl:w-[45%]" />
                  <StepImage src="/images/get-started/image6.png" alt="Start session dashboard" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Recording a Live Session</h2>
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-4 text-foreground">
                <p>
                  <strong>Note:</strong> To record a live session currently, files must be added <strong>after</strong>{" "}
                  recording has started.
                </p>
              </div>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    Once recording starts, Blaym captures file edits and branch activity in real time.
                  </p>
                  <StepImage src="/images/get-started/image4.png" alt="Live recording active" sizeClassName="w-full md:w-[50%] lg:w-[45%] xl:w-[40%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    When you are done, press stop recording, confirm, and name the session. After the host leaves, the
                    session is saved to the profile.
                  </p>
                  <StepImage src="/images/get-started/image7.png" alt="Stop recording" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                  <StepImage src="/images/get-started/image10.png" alt="Save session dialog" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Adding Files to Session</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    Once the web app loads, return to VS Code and add files. They appear in-session instantly, and tabs
                    update while you edit.
                  </p>
                  <StepImage src="/images/get-started/image13.png" alt="Add files to stream" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Creating a Branch</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    From your current branch (default <code>main</code>), click <strong>Create Branch</strong> and
                    enter a name. Switching branches can take a short moment while VS Code state refreshes.
                  </p>
                  <StepImage src="/images/get-started/image12.png" alt="Create branch in sidebar" />
                </li>
                <li className="space-y-6">
                  <p>
                    View each branch independently in the web app from branch/file tabs or the timeline. To follow the
                    host again, press <strong>Live</strong>.
                  </p>
                  <StepImage src="/images/get-started/image2.png" alt="Branch and file view" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                  <StepImage src="/images/get-started/image16.png" alt="Branch timeline view"sizeClassName="w-full md:w-[80%] lg:w-[75%] xl:w-[70%]" />
                  <StepImage src="/images/get-started/image11.png" alt="Return to live mode" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Adding a Checkpoint</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    Add checkpoints to mark key moments. Hosts can restore previous states, and viewers can jump through
                    session history.
                  </p>
                  <StepImage src="/images/get-started/image14.png" alt="Set checkpoint" />
                  <StepImage src="/images/get-started/image15.png" alt="Checkpoint actions" />
                  <StepImage src="/images/get-started/image17.png" alt="Checkpoint list and state" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Viewing Offline Sessions</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>To view saved sessions, open a user profile from the app main page or from your workspace menu.</p>
                  <StepImage src="/images/get-started/image5.png" alt="User profile" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    Go to <strong>Sessions</strong> and click the play icon.
                  </p>
                  <StepImage src="/images/get-started/image23.png" alt="Session replays in workspace" sizeClassName="w-full md:w-[55%] lg:w-[50%] xl:w-[45%]" />
                  <StepImage src="/images/get-started/image9.png" alt="Past sessions list" />
                </li>
                <li className="space-y-6">
                  <p>
                    Start playback from the top navigation. Sessions replay in near real time, with 30-second skip
                    controls.
                  </p>
                  <StepImage src="/images/get-started/image3.png" alt="Playback controls" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                  <StepImage src="/images/get-started/image8.png" alt="Playback timeline" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    You can switch files and branches at any point. Playback pauses automatically; press{" "}
                    <strong>Play</strong> to continue.
                  </p>
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">
                Adding Comments and Exporting to Gist
              </h2>
              <ol className="list-decimal list-outside pl-6 space-y-8 text-left">
                <li className="space-y-6">
                  <p>
                    Hosts can add comments in recorded sessions, and in live sessions with host-approved comments shown
                    to everyone.
                  </p>
                  <StepImage src="/images/get-started/image18.png" alt="Insert comment action" sizeClassName="w-full md:w-[55%] lg:w-[50%] xl:w-[45%]" />
                  <StepImage src="/images/get-started/image19.png" alt="Insert comment dialog" sizeClassName="w-full md:w-[65%] lg:w-[60%] xl:w-[55%]" />
                </li>
                <li className="space-y-6">
                  <p>
                    To export to Gist, first sign in to GitHub. Then jump to any point in the session and export those
                    files directly to a Gist.
                  </p>
                  <StepImage src="/images/get-started/image20.png" alt="Export to gist action" sizeClassName="w-full md:w-[55%] lg:w-[50%] xl:w-[45%]" />
                  <StepImage src="/images/get-started/image21.png" alt="Export gist panel" />
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

