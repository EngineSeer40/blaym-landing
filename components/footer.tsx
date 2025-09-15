"use client";

import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="py-10">
      <div className="container flex items-center justify-between gap-x-10 gap-y-5 flex-wrap">
        <div className="flex items-center gap-2">
          <Icon
            icon="solar:bolt-circle-bold-duotone"
            className="text-primary size-7 [&>path:first-child]:opacity-100 [&>path:last-child]:fill-white rounded-full"
          />
          <span className="font-heading text-xl font-extrabold">Logo</span>
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
