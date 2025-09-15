"use client";

import { Icon } from "@iconify/react";
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

export function Header() {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between gap-10">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon
              icon="solar:bolt-circle-bold-duotone"
              className="text-primary size-7 [&>path:first-child]:opacity-100 [&>path:last-child]:fill-white rounded-full"
            />
            <span className="font-heading text-xl font-extrabold">Logo</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <NavigationMenu className="gap-2 hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#about"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#pricing"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent"
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#community"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent"
                >
                  Community
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contact"
                  className="inline-flex h-9 font-medium w-max items-center justify-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-transparent"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="gap-2 hidden md:flex">
            <Button variant="secondary" size="default">
              Log In
            </Button>
            <Button variant="default" size="default">
              Get Started
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
                      <NavigationMenuLink href="#about" className="flex font-medium text-xl p-2">
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="#pricing" className="flex font-medium text-xl p-2">
                        Pricing
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink
                        href="#community"
                        className="flex font-medium text-xl p-2"
                      >
                        Community
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <NavigationMenuLink href="#contact" className="flex font-medium text-xl p-2">
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
