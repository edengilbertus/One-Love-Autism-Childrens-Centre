
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wheelchair, Pill, Droplets, BedDouble } from "lucide-react"; // Using related icons

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
}

const projects: Project[] = [
  {
    id: 1,
    title: "Wheelchair Donations",
    date: "March 2023",
    description: "Anisha, Divine, and Aullelia now attend school and play independently thanks to wheelchairs donated by Isabella and Herman Zauscher.",
    imageUrl: "https://picsum.photos/400/300?random=1",
    imageAlt: "Children using new wheelchairs",
    donor: "Isabella & Herman Zauscher",
    icon: <Wheelchair className="h-6 w-6 text-primary" />,
    aiHint: "children wheelchairs uganda donation happy",
  },
  {
    id: 2,
    title: "Medication Support",
    date: "January 2025",
    description: "Nine children received vital seizure and mood-stabilizing medications through support from Gabi Eder.",
    imageUrl: "https://picsum.photos/400/300?random=2",
    imageAlt: "Medication packages",
    donor: "Gabi Eder",
    icon: <Pill className="h-6 w-6 text-primary" />,
    aiHint: "medication pharmacy health uganda",
  },
  {
    id: 3,
    title: "Menstrual Hygiene Support",
    date: "January 2025",
    description: "Five girls received reusable pads, helping them manage menstruation with dignity and attend school without interruption.",
    imageUrl: "https://picsum.photos/400/300?random=3",
    imageAlt: "Reusable menstrual pads",
    icon: <Droplets className="h-6 w-6 text-primary" />, // Placeholder icon
    aiHint: "menstrual hygiene pads girls education uganda",
  },
  {
    id: 4,
    title: "Blanket Drive",
    date: "December 2024",
    description: "30 children received cozy blankets, purchased with savings from their own mothers through a community initiative.",
    imageUrl: "https://picsum.photos/400/300?random=4",
    imageAlt: "Children with new blankets",
    donor: "Community Mother's Initiative",
    icon: <BedDouble className="h-6 w-6 text-primary" />,
    aiHint: "children blankets warm community uganda",
  },
  // Add more projects here as needed
];

export default function ImpactPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Impact</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          See how the generosity of our community and the dedication of our team are transforming lives at One Love Centre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-52 w-full">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                layout="fill"
                objectFit="cover"
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
              {/* Optional "Read More" button if linking to blog posts */}
              {/* <Button variant="link" size="sm" className="p-0 h-auto">Read More</Button> */}
            </CardFooter>
          </Card>
        ))}
      </div>

        <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Want to contribute to our next success story?</h2>
            <Button asChild size="lg">
                <a href="/get-involved#donate">Make a Donation</a>
            </Button>
        </div>

    </div>
  );
}
