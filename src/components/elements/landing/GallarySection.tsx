"use client";

import { useState } from "react";
import { Gallary } from "@/db/gallary";
import Image from "next/image";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog"; // Adjust the path if needed

type ImageItem = {
    id: string;
    src: string;
    alt: string;
};

const generateGallery = (): ImageItem[] => {
    const items: ImageItem[] = [];

    Gallary.forEach((event) => {
        event.images.forEach((filename, i) => {
            items.push({
                id: `${event.event}-${i + 1}`,
                src: `/gallary/${event.event}/${filename}`,
                alt: `Gallery image ${event.event} ${filename}`,
            });
        });
    });

    return items;
};

export default function GallerySection() {
    const gallery = generateGallery();
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

    const getAspectRatio = (index: number) => {
        const patterns = [
            "aspect-[16/9]",
            "aspect-[4/3]",
            "aspect-[3/4]",
            "aspect-square",
            "aspect-[21/9]",
            "aspect-[4/5]",
        ];
        return patterns[index % patterns.length];
    };

    const getGridSpan = (index: number) => {
        if (index === 0) return "md:col-span-2 lg:col-span-2";
        if (index === 4) return "lg:col-span-2";
        if (index === 7) return "md:col-span-2";
        return "";
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <h3 className="text-center text-4xl font-bold">Gallery</h3>
            <p className="text-center text-lg text-muted-foreground mb-20">
                Memories from the events.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
                {gallery.map((item, index) => (
                    <Dialog key={item.id}>
                        <DialogTrigger asChild>
                            <div
                                onClick={() => setSelectedImage(item)}
                                className={`
                  relative 
                  ${getAspectRatio(index)} 
                  ${getGridSpan(index)}
                  overflow-hidden 
                  rounded-lg 
                  group
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
                `}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.alt}
                                </div>
                            </div>
                        </DialogTrigger>

                        <DialogContent className="max-w-4xl w-full p-4 sm:p-6">
                            <DialogTitle>Selected Image</DialogTitle>
                            {selectedImage && (
                                <div className="w-full h-full relative aspect-[4/3] sm:aspect-[16/9]">
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="200vw"
                                    />
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
