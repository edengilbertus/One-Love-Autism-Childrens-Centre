
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accessibility, Pill, Droplets, BedDouble } from "lucide-react";
import Link from "next/link"; // Import Link
import { Button } from "@/components/ui/button"; // Import Button


interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  donor?: string;
  icon?: React.ReactNode;
  aiHint: string;
  blogSlug?: string; // Optional slug for linking to blog post
}

const projects: Project[] = [
  {
    id: 1,
    title: "New Wheelchairs Bring Independence", // Updated title
    date: "March 2023",
    description: "Natukunda Anisha, Abaasa Divine, and Amutuheire Aullelia received new wheelchairs, transforming their mobility and allowing them to participate more fully in school and play.", // Simplified description for card
    imageUrl: "https://i.imgur.com/xjNZs6m.jpeg", // Updated image
    imageAlt: "Children using new wheelchairs",
    donor: "Isabella & Herman Zauscher",
    icon: <Accessibility className="h-6 w-6 text-primary" />,
    aiHint: "children wheelchairs uganda donation happy",
    blogSlug: "anishas-story",
  },
  {
    id: 2,
    title: "Vital Medication Support Provided", // Updated title
    date: "January 2025",
    description: "Thanks to Gabi Eder, nine children received essential medications like Sodium Valproate and Carbamazepine to manage seizures and support their health.", // Updated description
    imageUrl: "https://i.imgur.com/XROsOeU.jpeg", // Updated image
    imageAlt: "Child receiving medication support",
    donor: "Gabi Eder",
    icon: <Pill className="h-6 w-6 text-primary" />,
    aiHint: "medication pharmacy health uganda child",
    blogSlug: "medication-support",
  },
  {
    id: 3,
    title: "Menstrual Hygiene Support for Girls", // Updated title
    date: "January 2025",
    description: "Five girls received washable sanitary pads, promoting dignity and comfort, and ensuring they can attend school without interruption.", // Updated description
    imageUrl: "https://i.imgur.com/kSN8Z8Z.jpeg", // Updated image
    imageAlt: "Girls receiving hygiene packs",
    icon: <Droplets className="h-6 w-6 text-primary" />,
    aiHint: "menstrual hygiene pads girls education uganda dignity",
    blogSlug: "menstrual-hygiene",
  },
  {
    id: 4,
    title: "Warm Blankets from Mothers' Savings", // Updated title
    date: "December 2024",
    description: "Through a collective savings initiative, 30 mothers purchased warm blankets for their children, adding to bedding donated by friends.", // Updated description
    imageUrl: "https://i.imgur.com/KuVFrl3.jpeg", // Updated image
    imageAlt: "Child happy with new blanket",
    donor: "Community Mothers' Initiative & Friends", // Updated donor info
    icon: <BedDouble className="h-6 w-6 text-primary" />,
    aiHint: "children blankets warm community uganda mother",
    blogSlug: "blanket-drive",
  },
  // Add more projects here as needed
];

export default function ImpactPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Impact</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          See how the generosity of our community and the dedication of our team are transforming lives at One Love Autism Children's Centre. {/* Updated Name */}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-52 w-full">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                fill={true}
                style={{objectFit: "cover"}}
                data-ai-hint={project.aiHint}
              />
              {project.icon && (
                <div className="absolute top-3 right-3 bg-background/80 p-2 rounded-full backdrop-blur-sm">
                  {project.icon}
                </div>
              )}
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center bg-muted/50 py-3 px-4">
              {project.donor ? (
                  <p className="text-xs text-muted-foreground italic">Supported by: {project.donor}</p>
              ) : <span/> /* Empty span to maintain layout */}
              {/* Link to relevant blog post if slug exists */}
              {project.blogSlug && (
                 <Link href={`/blog/${project.blogSlug}`} className="text-xs text-primary hover:underline">Read More</Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

       <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Help Us Build Our Future School</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our ultimate goal is to build a dedicated school facility to provide a stable, enriching environment for our children. Your contribution brings us closer to this dream.
            </p>
             {/* Grid for school building vision images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <Image src="https://picsum.photos/300/200?random=13" alt="Future school building concept 1" width={300} height={200} className="rounded-md object-cover w-full shadow-md" data-ai-hint="school building concept drawing exterior"/>
                <Image src="https://picsum.photos/300/200?random=14" alt="Future school building concept 2" width={300} height={200} className="rounded-md object-cover w-full shadow-md" data-ai-hint="school classroom concept rendering interior"/>
                <Image src="https://picsum.photos/300/200?random=15" alt="Future school playground concept" width={300} height={200} className="rounded-md object-cover w-full shadow-md" data-ai-hint="school playground children concept design"/>
                <Image src="https://picsum.photos/300/200?random=16" alt="Future school therapy room concept" width={300} height={200} className="rounded-md object-cover w-full shadow-md" data-ai-hint="therapy room school concept design interior"/>
            </div>
            {/* Using Button component with Link */}
             <Button asChild size="lg">
                 <Link href="/get-involved#donate">
                    Make a Donation
                 </Link>
             </Button>
        </div>

    </div>
  );
}

    