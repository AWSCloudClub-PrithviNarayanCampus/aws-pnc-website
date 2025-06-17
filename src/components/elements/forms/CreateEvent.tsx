"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createEvent } from "@/lib/actions/event/createEvent"
import { EventFormSchema } from "@/lib/validations/event.form.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"
import QuilEditor from "../editor/QuillEditor"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function CreateEventForm() {
    const [editorContent, setEditorContent] = useState("")
    const router = useRouter()
    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: {
            eventTitle: "",
            eventDescription: "",
            eventType: "",
            eventDate: "",
            guest: "",
            guestProfile: "",
            venue: "",
        },
    })


    async function onSubmit(values: z.infer<typeof EventFormSchema>) {
        const eventData = {
            eventTitle: values.eventTitle,
            eventDescription: values.eventDescription,
            eventType: values.eventType,
            eventDate: values.eventDate,
            deliverables: editorContent,
            guest: values.guest,
            guestProfile: values.guestProfile,
            venue: values.venue
        }

        const response = await createEvent({ eventData })
        if (response?.success) {
            form.reset()
            toast.success("Book Listed successfully!..")
        }
        if (response?.success) {
            router.push(`/admin/events`)
        }
    }
    return (
        <div className="py-6">
            <Link
                href={"/admin/events"}
                className={buttonVariants({ variant: "outline" })}
            >
                <ArrowLeft /> Go Back
            </Link>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-6 px-20 max-w-6xl">
                    <div className="grid grid-cols-4 gap-5">
                        <FormField
                            control={form.control}
                            name="eventTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="eventDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="eventType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Status</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Date Schedule</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <FormField
                            control={form.control}
                            name="guest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Guest</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter guest" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="guestProfile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Guest Profile Link</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="venue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Venue</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-2 flex flex-col gap-5">
                        <h1 className='text-2xl'>Deliverables</h1>
                        <QuilEditor
                            onChange={setEditorContent}
                            initialData={"Write something in here"}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}