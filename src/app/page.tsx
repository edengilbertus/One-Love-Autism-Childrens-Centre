import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-center bg-gradient-to-b from-accent/30 to-background">
        {/* Background Image/Video Placeholder */}
        <Image
          src="https://picsum.photos/1600/900"
          alt="Children at One Love Centre"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-30"
          priority
          data-ai-hint="children playing learning uganda"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-1"></div> {/* Gradient overlay */}
        <div className="container relative z-10 px-4 md:px-6 text-foreground">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
            Empowering Every Child with Love and Understanding
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl mb-8">
            Providing specialized education, therapy, and support for children with autism and neurodevelopmental disabilities in Kabale, Uganda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/get-involved#donate">
                <Heart className="mr-2 h-5 w-5" /> Donate Now
              </Link>
            </Button>
             <Button size="lg" variant="outline" asChild>
               <Link href="/about">
                 Learn More <ArrowRight className="ml-2 h-5 w-5" />
               </Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
           <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Making a Difference, One Story at a Time</h2>
          <Card className="overflow-hidden md:flex md:items-center max-w-4xl mx-auto shadow-lg">
            <div className="md:w-1/2">
              <Image
                src="https://i.imgur.com/xjNZs6m.jpeg" // Updated main image
                alt="Anisha using her new wheelchair"
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-full"
                data-ai-hint="child wheelchair happy uganda"
              />
            </div>
            <div className="md:w-1/2">
              <CardHeader>
                <CardTitle className="text-2xl">New Wheelchairs Bring Independence</CardTitle>
                <CardDescription>March 2023 - Wheelchair Donation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In March 2023, three of our beautiful children — Natukunda Anisha, Abaasa Divine, and Amutuheire Aullelia — received new wheelchairs through the generous support of our friends Isabella and Herman Zauscher from Austria. Before, they faced daily challenges moving around, attending school, playing with other children, and even participating in family activities. Transport was difficult, and they often missed out on moments that every child deserves.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                 <p className="text-xs text-muted-foreground">Donor: Isabella & Herman Zauscher</p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="/blog/anishas-story"> {/* Update link to specific blog post slug */}
                    Read Anisha's Story <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Welcome to One Love Autism Children’s Centre</h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            One Love Autism Children’s Centre Kabale is a beacon of hope in Kabale District, Uganda. We are dedicated to nurturing the potential of children with autism and related neurodevelopmental challenges through tailored education, therapeutic interventions, and strong community partnerships.
          </p>
          <Button asChild>
            <Link href="/about">Discover Our Mission</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
