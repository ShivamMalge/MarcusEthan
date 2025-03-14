"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, CyberSec.inc",
            text: "Best cybersec intern we've ever had. Ethan's ability to identify vulnerabilities and propose innovative solutions is exceptional.",
            rating: 5,
        },
        {
            name: "Dr. James Wilson",
            role: "Professor, MIT",
            text: "Ethan's research on IoT security vulnerabilities was groundbreaking. His dedication to cybersecurity is truly inspiring.",
            rating: 5,
        },
        {
            name: "Lisa Thompson",
            role: "Security Director, TechGuard Solutions",
            text: "Working with Ethan was a game-changer for our security infrastructure. His penetration testing revealed critical vulnerabilities we hadn't identified.",
            rating: 5,
        },
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    return (
        <section className="py-16 md:py-24 relative">
             <div className="hidden">old-Alias EthanHacke</div>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center">Testimonials</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => {
                        const isTarget = testimonial.text.includes("Best cybersec intern")

                        return (
                            <Card key={index} className="bg-card relative">
                                <CardContent className="p-6">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground mb-4 relative">
                                        {isTarget ? (
                                            <>
                                                <span
                                                    className="cursor-pointer relative"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    onMouseMove={(e) =>
                                                        setMousePos({ x: e.clientX, y: e.clientY - 20 })
                                                    }
                                                    style={{ fontWeight: "inherit", color: "inherit" }}
                                                >
                                                    Best cybersec intern
                                                    {hoveredIndex === index && (
                                                        <div
                                                            className="fixed bg-black text-white text-xs px-2 py-1 rounded shadow-md z-50 transition-opacity duration-150"
                                                            style={{
                                                                top: mousePos.y,
                                                                left: mousePos.x,
                                                                transform: "translate(-50%, -100%)",
                                                                pointerEvents: "none",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            *_*
                                                        </div>
                                                    )}
                                                </span>
                                                {" we've ever had. Ethan's ability to identify vulnerabilities and propose innovative solutions is exceptional."}
                                            </>
                                        ) : (
                                            <>{testimonial.text}</>
                                        )}
                                    </p>

                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

