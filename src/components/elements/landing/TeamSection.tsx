import { TeamMember } from "./TeamMember"

const teamMembers = [
    { name: "Rajesh Sharma", role: "President", image: "/placeholder.svg?height=200&width=200" },
    { name: "Priya Thapa", role: "Vice President", image: "/placeholder.svg?height=200&width=200" },
    { name: "Amit Gurung", role: "Technical Lead", image: "/placeholder.svg?height=200&width=200" },
    { name: "Sita Rai", role: "Event Coordinator", image: "/placeholder.svg?height=200&width=200" },
]

export function TeamSection() {
    return (
        <section id="team" className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the passionate individuals leading our AWS Cloud Club
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    )
}
