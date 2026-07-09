import { getMembers } from "@/lib/actions/team/getMembers";
import { TeamMember } from "./TeamMember"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { deleteTeam } from "@/lib/actions/team/deleteTeam";
import { revalidatePath } from "next/cache";

async function handleDelete(teamId: string) {
    "use server";
    await deleteTeam(teamId);
}

export async function AdminTeamSection() {
    const response = await getMembers();
    if (!response.success) {
        return <div>{response.message}</div>
    }
    const teamMembers = response.data as Team[]
    console.log(teamMembers)
    return (
        <section id="team" className="py-16 px-4 bg-muted/50">
            <Link href="/admin/create-team" className={buttonVariants({ variant: "default" })}>
                <Plus className="h-4 w-4 mr-2" />
                Add Members
            </Link>
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Meet the passionate individuals leading our AWS Cloud Club
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="relative">
                            <TeamMember teamMember={member} />
                            <div className="absolute top-3 right-3 flex gap-2">
                                <Link
                                    href={`/admin/create-team?edit=${member._id}`}
                                    className="rounded-md bg-background/90 p-2 shadow-sm hover:bg-background"
                                >
                                    <Pencil className="h-4 w-4" />
                                </Link>
                                <form action={async () => {
                                    "use server";
                                    await deleteTeam(member._id);
                                }}>
                                    <button
                                        type="submit"
                                        className="rounded-md bg-background/90 p-2 shadow-sm hover:bg-background"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
