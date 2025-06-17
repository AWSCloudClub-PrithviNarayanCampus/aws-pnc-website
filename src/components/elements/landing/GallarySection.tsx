import Image from "next/image"

export function GallerySection() {
    return (
        <section id="gallery" className="py-16 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Gallery</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Moments from our workshops, events, and community activities
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                            <Image
                                src={`/placeholder.svg?height=300&width=300`}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
