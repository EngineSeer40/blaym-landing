"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="container flex items-center justify-between gap-x-10 gap-y-5 flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src="/images/blaym_logo_dark.svg"
            alt="Blaym Logo"
            width={32}
            height={32}
            className="size-8"
          />
          <span className="font-heading text-xl font-extrabold">Blaym</span>
        </div>
        <p className="text-muted-foreground text-sm w-full text-center order-last md:w-auto md:order-none md:ml-auto">
          © 2024 Blaym. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://www.facebook.com/blaym">
            <Icon icon="mdi:facebook" className="size-5" />
          </a>
          <a href="https://twitter.com/blaym">
            <Icon icon="mdi:twitter" className="size-5" />
          </a>
          <a href="https://www.instagram.com/blaym">
            <Icon icon="mdi:instagram" className="size-5" />
          </a>
          <a href="https://www.linkedin.com/company/blaym">
            <Icon icon="mdi:linkedin" className="size-5" />
          </a>
          <a href="https://www.youtube.com/channel/blaym">
            <Icon icon="mdi:youtube" className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
