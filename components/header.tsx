"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  MobileNavbarTrigger,
  MobileNavbarClose,
  MobileNavbarContent,
  MobileNavbar,
} from "@/components/ui/mobile-navbar";
import { config } from "@/lib/config";

export function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between gap-10">
        <div className="flex-1">
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
        </div>
        <div className="flex items-center justify-center">
          <NavigationMenu className="gap-2 hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-purple hover:bg-transparent"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-purple hover:bg-transparent"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-purple hover:bg-transparent"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#community"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-purple hover:bg-transparent"
                >
                  Community
                </NavigationMenuLink>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-purple hover:bg-transparent"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="gap-2 hidden md:flex">
            <Button variant="secondary" size="default" asChild>
              <a href={config.app.loginUrl} target="_blank" rel="noopener noreferrer">
                Log In
              </a>
            </Button>
            <Button variant="default" size="default" asChild className="hover:bg-purple hover:text-purple-foreground">
              <a href={config.app.signupUrl} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
          <MobileNavbar>
            <MobileNavbarTrigger className="md:hidden">
              <Icon icon="heroicons:bars-2-solid" className="size-6" />
            </MobileNavbarTrigger>
            <MobileNavbarClose className="md:hidden">
              <Icon icon="lucide:x" className="size-6" />
            </MobileNavbarClose>
            <MobileNavbarContent className="backdrop-blur-2xl absolute inset-0 top-[60px] h-[calc(100vh-60px)]">
              <div className="container py-6">
                <NavigationMenu className="w-full max-w-none items-stretch flex-col">
                  <NavigationMenuList className="flex flex-col gap-1 w-full items-start space-x-0">
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="/" className="flex font-medium text-xl p-2 hover:text-purple">
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="/about" className="flex font-medium text-xl p-2 hover:text-purple">
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="#pricing" className="flex font-medium text-xl p-2 hover:text-purple">
                        Pricing
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        href="#community"
                        className="flex font-medium text-xl p-2 hover:text-purple"
                      >
                        Community
                      </NavigationMenuLink>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="/contact" className="flex font-medium text-xl p-2 hover:text-purple">
                        Contact
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </MobileNavbarContent>
          </MobileNavbar>
        </div>
      </div>
    </header>
  );
}
