"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitContact } from "@/app/actions/contact";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await submitContact(formData);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) form.reset();
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container flex flex-col gap-12 items-center">
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl">
            <Badge className="gap-1.5 bg-primary/10 text-primary">Contact</Badge>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl max-w-2xl text-balance">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-balance">
              Have questions about Blaym? Want to join our waitlist? We'd love to hear from you. 
              Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="w-full max-w-2xl">
            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bg-secondary border-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-secondary border-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="bg-secondary border-none"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-secondary border-none rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full hover:bg-purple hover:text-purple-foreground"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="w-full max-w-4xl text-center">
            <h2 className="font-heading font-bold text-2xl mb-6 text-purple">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">
                  hello@blaym.io
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-heading font-bold text-lg mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  Within 24 hours
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-heading font-bold text-lg mb-2">Support</h3>
                <p className="text-muted-foreground text-sm">
                  support@blaym.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
