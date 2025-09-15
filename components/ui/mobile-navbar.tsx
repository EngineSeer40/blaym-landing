"use client";

import { useEffect, useState, createContext, useContext } from "react";

import { cn } from "@/lib/utils";

import type { ReactNode } from "react";

type MobileNavbarContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const MobileNavbarContext = createContext<MobileNavbarContextType | undefined>(undefined);

const useMobileNavbar = () => {
  const context = useContext(MobileNavbarContext);
  if (!context) {
    throw new Error("useMobileNavbar must be used within a MobileNavbar");
  }
  return context;
};

export const MobileNavbar = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;
  }, [isOpen]);

  useEffect(() => {
    const closeMenu = () => {
      setIsOpen(false);
    };

    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("orientationchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <MobileNavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileNavbarContext.Provider>
  );
};

export const MobileNavbarTrigger = (props: React.ComponentProps<"button">) => {
  const { isOpen, setIsOpen } = useMobileNavbar();

  if (isOpen) return null;

  return (
    <button
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      {...props}
    />
  );
};

type MobileNavbarContentProps = {
  className?: string;
  children: ReactNode;
};

export const MobileNavbarContent = ({ className, children }: MobileNavbarContentProps) => {
  const { isOpen } = useMobileNavbar();

  if (!isOpen) return null;

  return <div className={cn("absolute inset-0 z-50", className)}>{children}</div>;
};

type MobileNavbarOverlayProps = {
  className?: string;
};

export const MobileNavbarOverlay = ({ className }: MobileNavbarOverlayProps) => {
  const { isOpen, setIsOpen } = useMobileNavbar();

  if (!isOpen) return null;

  return (
    <div
      className={cn("fixed inset-0 z-40 size-full overflow-auto bg-black/40", className)}
      onClick={() => {
        setIsOpen(false);
      }}
    />
  );
};

export const MobileNavbarClose = (props: React.ComponentProps<"button">) => {
  const { isOpen, setIsOpen } = useMobileNavbar();

  if (!isOpen) return null;

  return (
    <button
      onClick={() => {
        setIsOpen(false);
      }}
      {...props}
    />
  );
};
