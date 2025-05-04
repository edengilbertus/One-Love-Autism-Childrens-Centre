
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CalendarDays, UserCircle } from "lucide-react";
import { notFound } from 'next/navigation';

// Placeholder function to get post data by slug
// In a real CMS integration, this would fetch data from the CMS
async function getPostData(slug: string) {
    // Simulating fetching data for known slugs based on previous definitions
    const posts = {
        "anishas-story": {
            title: "New Wheelchairs Bring Independence to Anisha, Divine, and Aullelia",
            date: "March 20, 2023",
            author: "One Love Centre Team", // Example author
            imageUrl: "https://i.imgur.com/xjNZs6m.jpeg", // Main image
            imageAlt: "Children happy with new wheelchairs",
            aiHint: "children wheelchairs uganda donation happy",
            content: `
                <p class="mb-4">In March 2023, three of our beautiful children — Natukunda Anisha, Abaasa Divine, and Amutuheire Aullelia — received new wheelchairs through the generous support of our friends Isabella and Herman Zauscher from Austria.</p>
                <p class="mb-4">Before, they faced daily challenges moving around, attending school, playing with other children, and even participating in family activities. Transport was difficult, and they often missed out on moments that every child deserves.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="https://i.imgur.com/IhhwtVi.jpeg" alt="Anisha smiling in her wheelchair" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child girl wheelchair smiling uganda"/>
                    <img src="https://i.imgur.com/NKdOMOM.jpeg" alt="Child receiving wheelchair support" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child wheelchair support uganda community"/>
                </div>
                 <p class="mb-4">Today, thanks to their new wheelchairs, their lives have been transformed. Anisha can now join her friends in class, Divine is able to play outside, and Aullelia moves around her home and community with more independence and joy.</p>
                 <div class="my-6">
                     <img src="https://i.imgur.com/KGLMQJk.jpeg" alt="Child being helped into wheelchair" class="rounded-lg shadow-md object-cover w-full mx-auto max-w-md" data-ai-hint="child disability support caregiver uganda"/>
                 </div>
                <p class="mb-4">This incredible gift highlights the impact of generosity and the importance of mobility for children with disabilities. We are deeply grateful to Isabella and Herman Zauscher for making such a profound difference.</p>
            `,
            tags: ["Donation", "Impact", "Wheelchair", "Accessibility"], // Example tags
        },
        "medication-support": {
            title: "Impact Update: Providing Vital Medication Support",
            date: "January 25, 2025",
            author: "One Love Centre Team",
            imageUrl: "https://picsum.photos/800/400?random=2",
            imageAlt: "Medication packages",
            aiHint: "medication pharmacy health uganda",
            content: `
                <p class="mb-4">In January 2025, nine children at One Love Autism Children’s Centre who live with autism and other neurological conditions received much-needed medication support through the support of Gabi Eder, our Austrian friend and donor.</p>
                <p class="mb-4">These children rely on daily medicines like Sodium Valproate, Carbamazepine, Diazepam, and Folic Acid to help manage seizures, stabilize mood, and support their overall health.</p>
                <p class="mb-4">For many families, accessing these essential medicines regularly is a challenge due to cost and availability. By providing these medication packets, we are helping our children stay healthy, attend school, and participate more fully in daily life.</p>
                <p class="mb-4">We extend our sincere gratitude to Gabi Eder for her continuous support, which directly impacts the well-being of our children.</p>
            `,
             tags: ["Donation", "Impact", "Health", "Medication"],
        },
        "menstrual-hygiene": {
            title: "Promoting Dignity: Menstrual Hygiene Support for Girls",
            date: "January 20, 2025",
            author: "One Love Centre Team",
            imageUrl: "https://picsum.photos/800/400?random=3",
            imageAlt: "Reusable menstrual pads",
            aiHint: "menstrual hygiene pads girls education uganda",
            content: `
                <p class="mb-4">In January 2025, five girls under the care of One Love Autism Children’s Centre received washable sanitary pads as part of our menstrual hygiene support program.</p>
                <p class="mb-4">For girls with autism and special needs, managing menstruation can be challenging — especially in communities where access to sanitary products is limited. By providing reusable, eco-friendly pads, we are promoting dignity, comfort, and confidence for our girls, ensuring they can continue attending school and participating in daily activities without interruption.</p>
                <p class="mb-4">This initiative is a crucial step in supporting the holistic well-being and inclusion of the girls at our centre.</p>
            `,
             tags: ["Impact", "Health", "Girls Education", "Hygiene"],
        },
        "blanket-drive": {
            title: "Mothers' Initiative Brings Warmth: A Blanket Drive Success",
            date: "December 15, 2024",
            author: "One Love Centre Team",
            imageUrl: "https://picsum.photos/800/400?random=4",
            imageAlt: "Children happy with new blankets",
            aiHint: "children blankets warm community uganda",
            content: `
                <p class="mb-4">In December 2024, 30 children at One Love Autism Children’s Centre received warm blankets — a special gift from their own mothers, who came together to make this possible.</p>
                <p class="mb-4">Throughout the year, these hardworking mothers, many from low-income and resource-limited households, were encouraged to save small amounts through our support groups. At the end of the year, they used their collective savings to buy something meaningful they might otherwise struggle to afford — new blankets to keep their children warm and comfortable.</p>
                <p class="mb-4">This effort added to the beautiful bedsheets donated earlier by our friends, creating a full set of cozy bedding for each child. It's a wonderful example of community strength and parental love making a tangible difference.</p>
            `,
             tags: ["Impact", "Community", "Parents", "Donation"],
        },
        // Add other posts here as needed
        "parent-support-groups": {
            title: "Empowering Parents: Highlights from Our Support Groups",
            date: "November 10, 2024",
            author: "One Love Centre Team",
            imageUrl: "https://picsum.photos/800/400?random=9",
            imageAlt: "Parents in a group discussion",
            aiHint: "parents support group uganda meeting community",
            content: `
                <p class="mb-4">Our parent support groups and counseling sessions are a cornerstone of the support we offer at One Love Autism Children's Centre. These regular meetups provide a safe space for parents and caregivers to connect, share experiences, learn practical strategies, and build a vital support network.</p>
                <p class="mb-4">Recent sessions have focused on [Mention specific topics if known, e.g., understanding communication challenges, managing challenging behaviors, navigating educational resources]. Through shared knowledge and mutual encouragement, parents feel less isolated and better equipped to support their children's development.</p>
                <p class="mb-4">We believe that empowering parents is key to creating a supportive environment for every child to thrive.</p>
            `,
            tags: ["Parents", "Support Group", "Community", "Workshop"],
        },
        "understanding-sensory-processing": {
            title: "Understanding Sensory Processing in Children with Autism",
            date: "August 5, 2024",
            author: "Lead Therapist", // Example author
            imageUrl: "https://picsum.photos/800/400?random=10",
            imageAlt: "Therapy session with sensory tools",
            aiHint: "therapy sensory tools children autism",
            content: `
                <p class="mb-4">Children with autism often experience the world differently through their senses. Some might be overly sensitive to sounds, lights, or touch, while others might seek out intense sensory input. This is known as Sensory Processing Disorder (SPD) or sensory differences.</p>
                <p class="mb-4">At One Love Centre, our occupational therapists work closely with children to understand their unique sensory profiles. We use various strategies and tools, such as swings, weighted blankets, therapy balls, and textured toys, to help children regulate their sensory systems.</p>
                <p class="mb-4">Understanding and addressing sensory needs can significantly improve a child's ability to focus, learn, interact socially, and manage their emotions. Our goal is to create a sensory-friendly environment and equip children with coping strategies for everyday situations.</p>
                <p class="mb-4">[Optional: Add a specific example or strategy used].</p>
            `,
            tags: ["Autism", "Therapy", "Sensory Processing", "Education"],
        },
    };

    // @ts-ignore
    const post = posts[slug];

    if (!post) {
        return null; // Indicate post not found
    }
    return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound(); // Show 404 page if post doesn't exist
  }

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
      <article className="prose prose-lg dark:prose-invert max-w-none"> {/* Added prose styling */}
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild size="sm">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <header className="mb-8 border-b pb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-3">{post.title}</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
             {post.author && (
                <div className="flex items-center gap-1">
                    <UserCircle className="h-4 w-4" />
                    <span>By {post.author}</span>
                </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={post.imageUrl}
            alt={post.imageAlt}
            layout="fill"
            objectFit="cover"
            priority // Load main image quickly
            data-ai-hint={post.aiHint}
          />
        </div>

        {/* Post Content */}
        <div
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }} // Render HTML content safely
        />


        {/* Optional: Tags */}
        {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t">
                <h4 className="text-sm font-semibold mb-2 uppercase text-muted-foreground">Tags</h4>
                <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                    </span>
                ))}
                </div>
            </div>
        )}

      </article>

       {/* Call to Action */}
       <div className="mt-16 text-center border-t pt-10">
            <h3 className="text-2xl font-semibold mb-4">Support Our Work</h3>
            <p className="text-muted-foreground mb-6">Your donation helps us continue providing essential services and support to children and families.</p>
            <Button asChild size="lg">
                <Link href="/get-involved#donate">Donate Now</Link>
            </Button>
       </div>
    </div>
  );
}

// Optional: Generate static paths if using SSG and have a known list of slugs
// export async function generateStaticParams() {
//   // Fetch all slugs from your CMS or define them manually
//   const slugs = ["anishas-story", "medication-support", "menstrual-hygiene", "blanket-drive", "parent-support-groups", "understanding-sensory-processing"];
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// Optional: Add metadata generation
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | One Love Autism Children’s Centre Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // Simple excerpt from content
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
      images: [
        {
          url: post.imageUrl,
          width: 800, // Adjust if known
          height: 400, // Adjust if known
          alt: post.imageAlt,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(), // Assuming date is parsable
      authors: [post.author || 'One Love Centre Team'],
    },
     twitter: {
       card: 'summary_large_image',
       title: post.title,
       description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
       images: [post.imageUrl],
     },
  };
}
