"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "BAA",
    role: "Student at RCOEM",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    content:
      "LeetBoost is a game-changer! The AI-powered analysis helped me optimize my solutions and ace my Meta interview. Highly recommend it to anyone serious about DSA.",
  },

  {
    id: 3,
    name: "Aditya Kumar",
    role: "IT Student at RCOEM",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 3.5,
    content:
      "As an AI researcher, I was impressed by how well LeetBoost integrates AI insights into coding problems. It’s intuitive and effective!",
  },

  {
    id: 5,
    name: "Siddharth Singh",
    role: "Student at Symboisis Institute of Technology",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 3,
    content:
      "LeetBoost's structured approach made it easy to improve my problem-solving skills. I went from struggling in interviews to landing a great data science role!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-heading">
          What Our Users <span className="text-primary">Say</span>
        </h2>
        <p className="section-subheading max-w-3xl mx-auto">
          Join thousands of developers who have improved their interview success
          rate with LeetBoost
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          target="_blank"
          href="https://chromewebstore.google.com/detail/leet-boost/flaiolpaemmhhehdgcigplkjgbgiealf/reviews"
        >
          <Button className="w-[8rem] mt-6 ">Write a Review</Button>
        </Link>
      </div>

      <div className="mt-10 text-center">
        <div className="bg-muted/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Success Rate</h3>
          <p className="text-4xl font-bold text-primary mb-2">80%</p>
          <p className="text-muted-foreground">
            of our users report successful interview outcomes after using
            LeetBoost for their preparation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
