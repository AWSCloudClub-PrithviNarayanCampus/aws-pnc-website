"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { BlogFormSchema } from "@/lib/validations/blog.form.validation"
import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { Upload, X } from "lucide-react"
import { createBlog } from "@/lib/actions/blog/createBlog"
import { useUploadThing } from "@/lib/utils/uploadthing-client"

interface CreateBlog {
    author: string;
}

export function CreateBlog({
    author
}: CreateBlog) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [files, setFiles] = useState<File[]>([])
    const [previewUrls, setPreviewUrls] = useState<string[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)
    const { startUpload } = useUploadThing("imageUploader")
    const router = useRouter()
    const form = useForm<z.infer<typeof BlogFormSchema>>({
        resolver: zodResolver(BlogFormSchema),
        defaultValues: {
            title: "",
            meta_description: "",
            slug: "",
            category: "",
        },
    })

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = e.target.files
        if (!newFiles) return

        const fileArray = Array.from(newFiles)

        if (files.length + fileArray.length > 5) {
            toast.error("You can only upload up to 5 images")
            return
        }

        for (const file of fileArray) {
            if (file.size > 5 * 1024 * 1024) {
                toast.error(`File ${file.name} is too large (max 5MB)`)
                return
            }
        }
        setFiles((prev) => [...prev, ...fileArray])
    }

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    useEffect(() => {
        const newPreviewUrls: string[] = []
        files.forEach((file) => {
            const reader = new FileReader()
            reader.onloadend = () => {
                newPreviewUrls.push(reader.result as string)
                if (newPreviewUrls.length === files.length) {
                    setPreviewUrls(newPreviewUrls)
                }
            }
            reader.readAsDataURL(file)
        })
        if (files.length === 0) {
            setPreviewUrls([])
        }
    }, [files])

    async function onSubmit(values: z.infer<typeof BlogFormSchema>) {
        let deleteImageOnError: string[] = []
        setIsSubmitting(true)

        let uploadedImages: string[] = []
        try {
            const uploadResults = await startUpload(files);
            if (uploadResults) {
                uploadedImages = uploadResults.map((result) => result.ufsUrl);
                deleteImageOnError = uploadedImages;
            }
        } catch (uploadError) {
            console.error("Error uploading images:", uploadError);
            toast.error("Failed to upload images. Please try again.");
            return;
        }

        const blogData = {
            title: values.title,
            meta_description: values.meta_description,
            slug: values.slug,
            category: values.category,
            headerImageUrl: uploadedImages,
            author: author,
        }
        console.log("data: ", blogData)
        const response = await createBlog({ blogData })
        if (response?.success) {
            form.reset()
            setFiles([])
            setPreviewUrls([])
            toast.success("Book Listed successfully!..")
        }
        if (response?.success) {
            router.push(`/admin/blog/${response.blogId}`)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <FormLabel className="text-[#1E3A8A] font-medium block mb-2">
                        Header Images (Max 5 images)
                        <span className="text-sm text-[#1E3A8A] ml-2">({files.length}/5 images selected)</span>
                    </FormLabel>
                    <div className="border-2 border-dashed border-[#1E3A8A] rounded-lg p-6 text-center bg-[#F9FAFB]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    id="bookImages"
                                    className="hidden"
                                    onChange={handleImageChange}
                                    ref={fileInputRef}
                                    disabled={files.length >= 5 || isSubmitting}
                                />
                                <label
                                    htmlFor="bookImages"
                                    className={`flex flex-col items-center justify-center ${files.length >= 5 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[#F9FAFB] rounded-lg p-4 transition-colors"}`}
                                >
                                    <Upload className="h-10 w-10 text-[#1E3A8A] mb-2" />
                                    <span className="text-sm text-[#1E3A8A] font-medium">
                                        {files.length >= 5 ? "Maximum 5 images reached" : "Drag & drop images or click to browse"}
                                    </span>
                                    <span className="text-xs text-[#1E3A8A] mt-1">Max file size: 5MB each</span>
                                </label>
                            </div>
                        </div>

                        {previewUrls.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                                {previewUrls.map((url, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={url || "/placeholder.svg"}
                                            alt={`Preview ${index}`}
                                            className="w-full h-32 object-cover rounded-lg border border-[#1E3A8A]"
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            disabled={isSubmitting}
                                            size="icon"
                                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6"
                                            onClick={() => removeFile(index)}
                                        >
                                            <X className="h-3 w-3" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                            <FormDescription className="text-[#1E3A8A]">
                                Upload clear photos of the blog page
                            </FormDescription>

                        </div>
                    </div>
                </div>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Title</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="meta_description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Description</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Course Type</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select blog category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="aws-basics">
                                            AWS Basics
                                        </SelectItem>
                                        <SelectItem value="tutorials">
                                            Tutorials
                                        </SelectItem>
                                        <SelectItem value="News">
                                            News
                                        </SelectItem>
                                        <SelectItem value="case-studies">
                                            Case Studies
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}