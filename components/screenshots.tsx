"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const screenshots = [
  {
    id: 1,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/heroimage.png?height=600&width=800",
  },
  {
    id: 2,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/ss2.png?height=600&width=800",
  },
  {
    id: 3,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/ss3.png?height=600&width=800",
  },
  {
    id: 4,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/ss4.png?height=600&width=800",
  },
  {
    id: 5,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/ss5.png?height=600&width=800",
  },
  {
    id: 6,
    title: "AI-Powered Code Analysis",
    description:
      "Get instant feedback on your code's time and space complexity.",
    image: "/ss6.png?height=600&width=800",
  },
  {
    id: 7,
    title: "Company Tracking Dashboard",
    description:
      "See which companies ask specific problems and focus your preparation.",
    image: "/ss7.png?height=600&width=800",
  },
  {
    id: 8,
    title: "Integrated YouTube Learning",
    description:
      "Watch tutorial videos without leaving your coding environment.",
    image: "/ss8.png?height=600&width=800",
  },
  {
    id: 9,
    title: "Excalidraw Integration",
    description:
      "Visualize algorithms and data structures with the sketching tool.",
    image: "/ss9.png?height=600&width=800",
  },
  {
    id: 10,
    title: "Excalidraw Integration",
    description:
      "Visualize algorithms and data structures with the sketching tool.",
    image: "/ss10.png?height=600&width=800",
  },
  {
    id: 11,
    title: "Excalidraw Integration",
    description:
      "Visualize algorithms and data structures with the sketching tool.",
    image: "/ss11.png?height=600&width=800",
  },
];

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="screenshots" className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          See <span className="text-primary">LeetBoost</span> in Action
        </h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Explore our intuitive interface and powerful features
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="w-full flex-shrink-0">
                <img
                  src={screenshot.image || "/placeholder.svg"}
                  alt={screenshot.title}
                  className="w-auto h-[50rem] max-h-[60rem] mx-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-y-0 left-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-6">Watch LeetBoost Demo</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Play className="h-4 w-4" />
              Watch Demo Video
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>LeetBoost in Action</DialogTitle>
              <DialogDescription>
                See how LeetBoost can transform your coding interview
                preparation
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video rounded-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YgshWj4CBp8?si=Fv4r14NtgF8N-IKk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Screenshots;
