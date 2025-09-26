
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder blog post data - Updated based on feedback
const blogPosts = [
   {
    id: 1,
    title: "New Wheelchairs Bring Independence to Anisha, Divine, and Aullelia", // Updated title
    date: "March 20, 2023", // Example date
    excerpt: "Read the heartwarming story of how new wheelchairs, donated by Isabella and Herman Zauscher, transformed the lives of three children...", // Updated excerpt
    imageUrl: "https://i.imgur.com/xjNZs6m.jpeg", // Main image for Anisha's story
    imageAlt: "Children happy with new wheelchairs",
    slug: "anishas-story", // Specific slug
    aiHint: "children wheelchairs uganda donation happy",
  },
  {
    id: 2,
    title: "Impact Update: Providing Vital Medication Support", // Updated title
    date: "January 25, 2025", // Updated date
    excerpt: "Thanks to Gabi Eder, nine children received crucial medications this month, helping them manage seizures and stay healthy...", // Updated excerpt
    imageUrl: "https://i.imgur.com/XROsOeU.jpeg", // Updated cover image
    imageAlt: "Child receiving medication support",
    slug: "medication-support", // Updated slug
    aiHint: "medication pharmacy health uganda child",
  },
   {
    id: 3,
    title: "Promoting Dignity: Menstrual Hygiene Support for Girls", // Updated title
    date: "January 20, 2025", // Updated date
    excerpt: "Five girls received reusable sanitary pads, ensuring comfort, confidence, and continued access to education...", // Updated excerpt
    imageUrl: "https://i.imgur.com/kSN8Z8Z.jpeg", // Updated cover image
    imageAlt: "Girls receiving hygiene packs",
    slug: "menstrual-hygiene", // Updated slug
    aiHint: "menstrual hygiene pads girls education uganda dignity",
  },
    {
    id: 4,
    title: "Mothers' Initiative Brings Warmth: A Blanket Drive Success", // New post title
    date: "December 15, 2024", // New post date
    excerpt: "Discover how hardworking mothers used collective savings to purchase cozy blankets for 30 children at the centre...", // New post excerpt
    imageUrl: "https://i.imgur.com/KuVFrl3.jpeg", // Updated cover image
    imageAlt: "Child happy with new blanket",
    slug: "blanket-drive", // New post slug
    aiHint: "children blankets warm community uganda mother",
  },
   {
    id: 5, // Renumbered ID
    title: "Empowering Parents: Highlights from Our Support Groups", // Updated title
    date: "November 10, 2024", // Example date
    excerpt: "Learn about our recent meetups and counseling sessions designed to equip parents with knowledge and build a strong support network...", // Updated excerpt
    imageUrl: "https://i.imgur.com/k6ZCCU7.jpeg", // Updated cover image
    imageAlt: "Parents group session with therapist",
    slug: "parent-support-groups", // Updated slug
    aiHint: "parents support group uganda meeting therapy community",
  },
   {
    id: 6, // Renumbered ID
    title: "Understanding Sensory Processing in Children with Autism", // Kept original title
    date: "August 5, 2024",
    excerpt: "Our lead therapist provides insights into sensory challenges and strategies used at the centre to help children thrive...", // Kept original excerpt
    imageUrl: "https://i.imgur.com/k6ZCCU7.jpeg", // Updated cover image
    imageAlt: "Therapy session with sensory tools",
    slug: "understanding-sensory-processing",
    aiHint: "therapy sensory tools children autism uganda",
  },
   {
    id: 7,
    title: "September 2025 Highlights at One Love Autism Children's Centre",
    date: "September 1, 2025",
    excerpt: "The month of September began with significant progress for the One Love Autism family...",
    imageUrl: "/images/blog/WhatsApp Image 2025-09-21 at 13.30.30.jpeg",
    imageAlt: "September 2025 highlights at One Love Autism Children's Centre",
    slug: "september-2025-highlights",
    aiHint: "september highlights 2025 autism children uganda community",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Stories & Updates</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay connected with the latest news, heartwarming stories, and insights from One Love Autism Children's Centre. {/* Updated Name */}
        </p>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"> {/* Ensure card uses theme variable */}
            <Link href={`/blog/${post.slug}`} className="block relative h-52 w-full">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                fill={true}
                style={{objectFit:"cover"}}
                 data-ai-hint={post.aiHint}
              />
            </Link>
            <CardHeader className="flex-grow">
              <CardTitle className="text-xl mb-1 hover:text-primary transition-colors">
                 <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="py-3 px-4">
               <Button variant="link" asChild className="p-0 h-auto text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
               </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

       {/* Placeholder for Pagination or Load More */}
       <div className="text-center mt-16">
         <Button variant="outline" disabled>Load More Posts (Coming Soon)</Button>
       </div>

        {/* CMS Integration Note - FOR DEVELOPER */}
         <div className="mt-16 p-4 bg-muted/50 border border-border rounded-md text-muted-foreground text-sm text-center"> {/* Use theme variables */}
             <strong>Developer Note:</strong> Blog posts are currently placeholders. CMS integration is needed to allow staff to manage and publish content dynamically. Individual blog post pages (e.g., `/blog/[slug]`) need to be created to display full content.
         </div>

    </div>
  );
}

