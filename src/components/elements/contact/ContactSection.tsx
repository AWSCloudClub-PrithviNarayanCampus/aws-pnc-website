import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export function ContactSection() {
    return (
        <section id="contact" className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Get in touch with us for collaborations, questions, or to join our club
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
