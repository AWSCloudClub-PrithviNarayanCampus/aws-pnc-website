import { BlogsSection } from "@/components/elements/blog/BlogsSection";
import { ContactSection } from "@/components/elements/contact/ContactSection";
import { Footer } from "@/components/elements/footer/Footer";
import { EventsSection } from "@/components/elements/landing/EventsSection";
import { GallerySection } from "@/components/elements/landing/GallarySection";
import { Header } from "@/components/elements/landing/Header";
import { Hero } from "@/components/elements/landing/Hero";
import { TeamSection } from "@/components/elements/landing/TeamSection";

export default function Component() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <Hero />
            <TeamSection />
            <GallerySection />
            <EventsSection />
            <BlogsSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
