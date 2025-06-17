import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
    teamMember: Team
}

export function TeamMember({
    teamMember
}: TeamMemberProps) {
    return (
            <Card className="text-center">
                <CardContent className="pt-6">
                    <Image
                        src={teamMember.image[0] || "/placeholder.svg"}
                        alt={teamMember.fullname}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold text-lg">{teamMember.fullname}</h3>
                    <p className="text-muted-foreground">{teamMember.role}</p>
                    <div className="flex justify-center gap-2 mt-4">
                        {
                            teamMember.linkedIn && (
                                <Button variant="ghost" size="sm">
                                    <Link href={`${teamMember.linkedIn}`}>
                                        <Linkedin />
                                    </Link>
                                </Button>
                            )
                        }
                        {
                            teamMember.instagram && (
                                <Button variant="ghost" size="sm">
                                    <Link href={`${teamMember.instagram}`}>
                                        <Instagram />
                                    </Link>
                                </Button>
                            )
                        }
                        {
                            teamMember.facebook && (
                                <Button variant="ghost" size="sm">
                                    <Link href={`${teamMember.facebook}`}>
                                        <Facebook />
                                    </Link>
                                </Button>
                            )
                        }
                        {
                            teamMember.twitter && (
                                <Button variant="ghost" size="sm">
                                    <Link href={`${teamMember.twitter}`}>
                                        <Twitter />
                                    </Link>
                                </Button>
                            )
                        }
                        {
                            teamMember.github && (
                                <Button variant="ghost" size="sm">
                                    <Link href={`${teamMember.github}`}>
                                        <Github />
                                    </Link>
                                </Button>
                            )
                        }
                    </div>
                </CardContent>
            </Card>
    )
}
