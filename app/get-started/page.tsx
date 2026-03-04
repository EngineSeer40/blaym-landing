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
        className={`${sizeClassName ?? "w-full md:w-[70%] lg:w-[70%] xl:w-[65%]"} block rounded-lg border bg-card p-3 mx-auto text-left`}
        aria-label={`Open ${alt} image in larger view`}
      >
        <Image src={src} alt={alt} width={1200} height={700} className="w-full h-auto rounded-md" />
        <p className="mt-2 text-xs text-muted-foreground text-center">Click image to enlarge</p>
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
        <div className="container flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Get Started</Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-3xl text-balance">
              Blaym for VS Code Walkthrough
            </h1>
          </div>

          <div className="w-full max-w-4xl space-y-14 text-muted-foreground text-base">
          <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Install Extension</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                <p>
                  Search for Blaym in the VS Code Marketplace.
                </p>
                  <StepImage src="/images/get-started/Marketplace_clip.png" alt="Search Market" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
              </ol>
            </section>
            
            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Connect from VSCode</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>
                    Once installed, go to the Blaym sidepanel and click <strong>Connect to Blaym</strong>. You may
                    need to enter the invite code you were sent.
                  </p>
                  <StepImage src="/images/get-started/SidebarPanel_clip.png" alt="Connect prompt" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>

                </li>
                <li className="space-y-6">
                  <p>A window asks to connect to the Blaym website. Click <strong>OK</strong>.</p>
                  <StepImage src="/images/get-started/image1.png" alt="Connect prompt" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    Log in with a valid Google or GitHub account. Once you log in and choose a username, you are taken
                    to your dashboard. Start a live session by pressing <strong>Start Session</strong>.
                  </p>
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
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>
                    By default, the app begins recording your added files and branches immediately. You can then start
                    adding files and creating branches.
                  </p>
                  <StepImage src="/images/get-started/image4.png" alt="Live recording active" sizeClassName="w-full md:w-[50%] lg:w-[45%] xl:w-[40%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    When the session is done, press stop recording. You are asked to confirm and enter a session name.
                    After the session ends and the host leaves, the session is saved to the user&apos;s profile.
                  </p>
                  <StepImage src="/images/get-started/image7.png" alt="Stop recording" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                  <StepImage src="/images/get-started/image10.png" alt="Save session dialog" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Adding Files to Session</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>
                    Once the web interface is loaded, return to VS Code and add files to the session. These files
                    appear in the live session, and tabs update as you edit code.
                  </p>
                  <StepImage src="/images/get-started/image13.png" alt="Add files to stream" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Creating a Branch</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>
                    To add a new branch from the current branch (default <code>main</code>), click{" "}
                    <strong>Create Branch</strong> and enter a name. When switching branches, expect a short pause
                    while backend state updates in VS Code.
                  </p>
                  <StepImage src="/images/get-started/image12.png" alt="Create branch in sidebar" />
                </li>
                <li className="space-y-6">
                  <p>
                    Branches can be viewed independently in the web app from branch/file tabs or the branching
                    timeline. To exit navigation mode and return to host navigation, press <strong>Live</strong>.
                  </p>
                  <StepImage src="/images/get-started/image2.png" alt="Branch and file view" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                  <StepImage src="/images/get-started/image16.png" alt="Branch timeline view"sizeClassName="w-full md:w-[80%] lg:w-[75%] xl:w-[70%]" />
                  <StepImage src="/images/get-started/image11.png" alt="Return to live mode" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Adding a Checkpoint</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>
                    Checkpoints can be set by the host to revert code state, and by viewers to navigate backward and
                    forward through session history.
                  </p>
                  <StepImage src="/images/get-started/image14.png" alt="Set checkpoint" />
                  <StepImage src="/images/get-started/image15.png" alt="Checkpoint actions" />
                  <StepImage src="/images/get-started/image17.png" alt="Checkpoint list and state" />
                </li>
              </ol>
            </section>

            <section className="space-y-6">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-foreground">Viewing Offline Sessions</h2>
              <ol className="list-decimal list-outside pl-6 space-y-8">
                <li className="space-y-6">
                  <p>To view saved sessions for a user, open their profile on the app main page.</p>
                  <StepImage src="/images/get-started/image5.png" alt="User profile" sizeClassName="w-full md:w-[60%] lg:w-[55%] xl:w-[50%]"/>
                </li>
                <li className="space-y-6">
                  <p>
                    Navigate to <strong>Past Sessions</strong> and click the play icon.
                  </p>
                  <StepImage src="/images/get-started/image9.png" alt="Past sessions list" />
                </li>
                <li className="space-y-6">
                  <p>
                    Start playback using the top navigation play button. The coding session plays back in near real
                    time. Offline playback supports seeking forward and back 30 seconds.
                  </p>
                  <StepImage src="/images/get-started/image3.png" alt="Playback controls" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                  <StepImage src="/images/get-started/image8.png" alt="Playback timeline" sizeClassName="w-full md:w-[40%] lg:w-[35%] xl:w-[30%]"/>
                </li>
                <li>
                  At any point, you can switch files and branches. This pauses playback. To resume host navigation,
                  press <strong>Play</strong>.
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

