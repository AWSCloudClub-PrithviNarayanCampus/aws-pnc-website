import { ContactSection } from "@/components/elements/contact/ContactSection";
import { EventsSection } from "@/components/elements/landing/EventsSection";
import { Hero } from "@/components/elements/landing/Hero";
import { TeamSection } from "@/components/elements/landing/TeamSection";

export const dynamic = "force-dynamic";

export default function Component() {
    return (
        <div className="min-h-screen bg-background">
            <Hero />
            <TeamSection />
            <EventsSection />
            <ContactSection />
        </div>
    )
}
