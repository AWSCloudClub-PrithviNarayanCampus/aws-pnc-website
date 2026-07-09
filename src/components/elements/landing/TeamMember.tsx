import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
    teamMember: Team
}

export function TeamMember({
    teamMember,
}: TeamMemberProps) {
    return (
        <Card className="text-center">
            <CardContent className="pt-6">
                <Image
                    src={teamMember.image[0] ? teamMember.image[0] : "/logo.png"}
                    alt={teamMember.fullname}
                    width={220}
                    height={220}
                    className="mx-auto mb-4 h-56 w-auto max-w-full object-cover rounded-none"
                />
                <h3 className="font-semibold text-lg">{teamMember.fullname}</h3>
                <p className="text-muted-foreground">{teamMember.role}</p>
                <div className="flex justify-center gap-2 mt-4">
                    {
                        teamMember.linkedIn && (
                            <Button variant="ghost" size="sm">
                                <Link href={`${teamMember.linkedIn}`}>
                                    <Linkedin className="text-[#545B64]" />
                                </Link>
                            </Button>
                        )
                    }
                    {
                        teamMember.instagram && (
                            <Button variant="ghost" size="sm">
                                <Link href={`${teamMember.instagram}`}>
                                    <Instagram className="text-[#545B64]" />
                                </Link>
                            </Button>
                        )
                    }
                    {
                        teamMember.facebook && (
                            <Button variant="ghost" size="sm">
                                <Link href={`${teamMember.facebook}`}>
                                    <Facebook className="text-[#545B64]" />
                                </Link>
                            </Button>
                        )
                    }
                    {
                        teamMember.twitter && (
                            <Button variant="ghost" size="sm">
                                <Link href={`${teamMember.twitter}`}>
                                    <Twitter className="text-[#545B64]" />
                                </Link>
                            </Button>
                        )
                    }
                    {
                        teamMember.github && (
                            <Button variant="ghost" size="sm">
                                <Link href={`${teamMember.github}`}>
                                    <Github className="text-[#545B64]" />
                                </Link>
                            </Button>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    )
}
