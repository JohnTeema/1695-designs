"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ScrollRevealProvider from "./ScrollRevealProvider";
import type { Contact } from "@/lib/contact";

export default function SiteShell({
  children,
  contact,
}: {
  children: React.ReactNode;
  contact: Contact;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <ScrollRevealProvider />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer email={contact.email} whatsappNumber={contact.whatsappNumber} />
      <WhatsAppButton whatsappNumber={contact.whatsappNumber} />
    </>
  );
}
