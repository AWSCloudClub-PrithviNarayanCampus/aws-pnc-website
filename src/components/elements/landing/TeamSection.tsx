import { getMembers } from "@/lib/actions/team/getMembers";
import { TeamMember } from "./TeamMember"

export async function TeamSection() {
    const response = await getMembers();
    if (!response.success) {
        return <div>{response.message}</div>
    }
    const teamMembers = response.data as Team[]
    const sortedTeam = [...teamMembers].sort((a, b) => Number.parseInt(a.order) - Number.parseInt(b.order))

    const featuredMember = sortedTeam.find((member) => member.order === "1")

    const secondRowMembers = sortedTeam.filter((member) => {
        const order = Number.parseInt(member.order)
        return order >= 2 && order <= 6
    })

    const remainingMembers = sortedTeam.filter((member) => Number.parseInt(member.order) > 6)
    return (
        <section id="team" className="py-16 px-4 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the passionate individuals leading our AWS Cloud Club
                    </p>
                </div>
                {featuredMember && (
                    <div className="w-fit">
                        <TeamMember teamMember={featuredMember} />
                    </div>
                )}

                {secondRowMembers.length > 0 && (
                    <div className="mb-12 px-20">
                        <h2 className="text-2xl font-bold tracking-tight mt-8 mb-8 text-center">Core Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {secondRowMembers.map((member, index) => (
                                <TeamMember key={index} teamMember={member}  />
                            ))}
                        </div>
                    </div>
                )}

                {remainingMembers.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Executive Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                            {remainingMembers.map((member, index) => (
                                <TeamMember key={index} teamMember={member}  />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
