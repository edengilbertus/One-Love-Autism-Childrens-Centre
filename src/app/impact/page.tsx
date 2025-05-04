
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Removed Button import as it's not directly used here, donations are linked via href
import { Accessibility, Pill, Droplets, BedDouble } from "lucide-react";

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
    title: "New Wheelchairs Bring Independence", // Updated title
    date: "March 2023",
    description: "Natukunda Anisha, Abaasa Divine, and Amutuheire Aullelia received new wheelchairs, transforming their mobility and allowing them to participate more fully in school and play.", // Simplified description for card
    imageUrl: "https://i.imgur.com/xjNZs6m.jpeg", // Updated image
    imageAlt: "Children using new wheelchairs",
    donor: "Isabella & Herman Zauscher",
    icon: <Accessibility className="h-6 w-6 text-primary" />,
    aiHint: "children wheelchairs uganda donation happy",
  },
  {
    id: 2,
    title: "Vital Medication Support Provided", // Updated title
    date: "January 2025",
    description: "Thanks to Gabi Eder, nine children received essential medications like Sodium Valproate and Carbamazepine to manage seizures and support their health.", // Updated description
    imageUrl: "https://picsum.photos/400/300?random=2",
    imageAlt: "Medication packages",
    donor: "Gabi Eder",
    icon: <Pill className="h-6 w-6 text-primary" />,
    aiHint: "medication pharmacy health uganda",
  },
  {
    id: 3,
    title: "Menstrual Hygiene Support for Girls", // Updated title
    date: "January 2025",
    description: "Five girls received washable sanitary pads, promoting dignity and comfort, and ensuring they can attend school without interruption.", // Updated description
    imageUrl: "https://picsum.photos/400/300?random=3",
    imageAlt: "Reusable menstrual pads",
    icon: <Droplets className="h-6 w-6 text-primary" />,
    aiHint: "menstrual hygiene pads girls education uganda",
  },
  {
    id: 4,
    title: "Warm Blankets from Mothers' Savings", // Updated title
    date: "December 2024",
    description: "Through a collective savings initiative, 30 mothers purchased warm blankets for their children, adding to bedding donated by friends.", // Updated description
    imageUrl: "https://picsum.photos/400/300?random=4",
    imageAlt: "Children with new blankets",
    donor: "Community Mothers' Initiative & Friends", // Updated donor info
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
              {/* Link to relevant blog post or section if applicable */}
              {/* Example: Linking wheelchair story to a potential blog post */}
              {project.id === 1 && (
                 <a href="/blog/anishas-story" className="text-xs text-primary hover:underline">Read More</a>
              )}
               {/* Example: Linking medication story */}
              {project.id === 2 && (
                 <a href="/blog/medication-support" className="text-xs text-primary hover:underline">Read More</a>
              )}
               {/* Example: Linking hygiene story */}
              {project.id === 3 && (
                 <a href="/blog/menstrual-hygiene" className="text-xs text-primary hover:underline">Read More</a>
              )}
               {/* Example: Linking blanket story */}
              {project.id === 4 && (
                 <a href="/blog/blanket-drive" className="text-xs text-primary hover:underline">Read More</a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

        <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold mb-4">Want to contribute to our next success story?</h2>
            {/* Using a direct link instead of Button component */}
             <a href="/get-involved#donate" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
                Make a Donation
             </a>
        </div>

    </div>
  );
}
