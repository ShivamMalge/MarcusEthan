"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import myimg from "@/resources/licensed-image.jpg"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Lead PenTester at TechNova inc."

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
               <div className="hidden">old-Alias EthanTheHacker</div>
              Hi, I&apos;m <span className="text-primary">Ethan Marcus</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground h-8">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Dedicated to uncovering vulnerabilities and strengthening digital defenses. Specializing in penetration
              testing, IoT security, and advanced threat detection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://www.instagram.com/ethan.98x/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <button
                onClick={() => alert("EthanX98")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </button>
              <div className="hidden">old-Alias EthanTheH4cker</div>
              <button
                onClick={() => alert("marcus98@gmail.com")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={myimg}
                alt="Ethan Marcus"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

