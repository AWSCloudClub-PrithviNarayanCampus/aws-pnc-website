import { getMembers } from "@/lib/actions/team/getMembers";
import { deleteTeam } from "@/lib/actions/team/deleteTeam";
import { TeamMember } from "./TeamMember"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Pencil, Plus, Trash2 } from "lucide-react";

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
                    {teamMembers.map((member) => (
                        <div key={member._id} className="flex flex-col gap-2">
                            <TeamMember teamMember={member} />
                            <div className="flex justify-end gap-2">
                                <Link
                                    href={`/admin/create-team?edit=${member._id}`}
                                    className="flex items-center gap-1 rounded-md border bg-background px-3 py-2 text-sm shadow-sm hover:bg-muted"
                                >
                                    <Pencil className="h-4 w-4" />
                                    Edit
                                </Link>
                                <form action={async () => {
                                    "use server";
                                    await deleteTeam(member._id);
                                }}>
                                    <button
                                        type="submit"
                                        className="flex items-center gap-1 rounded-md border bg-background px-3 py-2 text-sm shadow-sm hover:bg-muted"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        Delete
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
