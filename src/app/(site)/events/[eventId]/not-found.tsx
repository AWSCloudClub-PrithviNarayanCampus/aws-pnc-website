import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Calendar className="h-24 w-24 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Event Not Found</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The event you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
        </div>
        <Button asChild>
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    </div>
  )
}
