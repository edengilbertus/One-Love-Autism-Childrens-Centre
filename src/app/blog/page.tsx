
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder blog post data
const blogPosts = [
  {
    id: 1,
    title: "A Day in the Life: Volunteering at One Love Centre",
    date: "October 26, 2024",
    excerpt: "Read about Maria's heartwarming experience volunteering with our amazing children and dedicated staff...",
    imageUrl: "https://picsum.photos/400/250?random=8",
    imageAlt: "Volunteer playing with child",
    slug: "volunteer-story-maria", // Example slug for full post
    aiHint: "volunteer children playing uganda",
  },
  {
    id: 2,
    title: "Family Testimonial: How One Love Centre Changed David's Life",
    date: "September 15, 2024",
    excerpt: "David's parents share their journey and the incredible progress David has made since joining our programs...",
    imageUrl: "https://picsum.photos/400/250?random=9",
    imageAlt: "Smiling child with parents",
    slug: "family-testimonial-david",
    aiHint: "family child happy uganda",
  },
   {
    id: 3,
    title: "Understanding Sensory Processing Disorder in Children",
    date: "August 5, 2024",
    excerpt: "Our lead therapist provides insights into sensory challenges and strategies used at the centre...",
    imageUrl: "https://picsum.photos/400/250?random=10",
    imageAlt: "Therapy session with sensory tools",
    slug: "understanding-sensory-processing",
    aiHint: "therapy sensory tools children",
  },
  // Add more placeholder posts
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Stories & Updates</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay connected with the latest news, heartwarming stories, and insights from One Love Centre.
        </p>
      </div>

      {/* Blog Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/blog/${post.slug}`} className="block relative h-52 w-full">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt}
                layout="fill"
                objectFit="cover"
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
         <div className="mt-16 p-4 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 text-sm text-center">
             <strong>Developer Note:</strong> Blog posts are currently placeholders. CMS integration (e.g., using a headless CMS like Contentful, Strapi, or Sanity) is needed to allow staff to manage and publish content dynamically. The `/blog/[slug]` route needs to be created to display full posts.
         </div>

    </div>
  );
}
