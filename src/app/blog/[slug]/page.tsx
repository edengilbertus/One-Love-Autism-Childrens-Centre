
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
            imageUrl: "/images/blog/WhatsApp Image 2025-09-21 at 14.06.19.jpeg", // Main image
            imageAlt: "Children happy with new wheelchairs",
            aiHint: "children wheelchairs uganda donation happy",
            content: `
                <p class="mb-4">In March 2023, three of our beautiful children — Natukunda Anisha, Abaasa Divine, and Amutuheire Aullelia — received new wheelchairs through the generous support of our friends Isabella and Herman Zauscher from Austria.</p>
                <p class="mb-4">Before, they faced daily challenges moving around, attending school, playing with other children, and even participating in family activities. Transport was difficult, and they often missed out on moments that every child deserves.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.19 (1).jpeg" alt="Anisha smiling in her wheelchair" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child girl wheelchair smiling uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.19 (2).jpeg" alt="Child receiving wheelchair support" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child wheelchair support uganda community"/>
                </div>
                 <p class="mb-4">Today, thanks to their new wheelchairs, their lives have been transformed. Anisha can now join her friends in class, Divine is able to play outside, and Aullelia moves around her home and community with more independence and joy.</p>
                 <div class="my-6">
                     <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.19 (1).jpeg" alt="Child being helped into wheelchair" class="rounded-lg shadow-md object-cover w-full mx-auto max-w-md" data-ai-hint="child disability support caregiver uganda"/>
                 </div>
                <p class="mb-4">This incredible gift highlights the impact of generosity and the importance of mobility for children with disabilities. We are deeply grateful to Isabella and Herman Zauscher for making such a profound difference.</p>
            `,
            tags: ["Donation", "Impact", "Wheelchair", "Accessibility"], // Example tags
        },
        "medication-support": {
            title: "Impact Update: Providing Vital Medication Support",
            date: "January 25, 2025",
            author: "One Love Centre Team",
            imageUrl: "/images/blog/WhatsApp Image 2025-09-21 at 14.06.19.jpeg", // Updated main image
            imageAlt: "Child receiving medication support",
            aiHint: "medication pharmacy health uganda child",
            content: `
                <p class="mb-4">In January 2025, nine children at One Love Autism Children’s Centre who live with autism and other neurological conditions received much-needed medication support through the support of Gabi Eder, our Austrian friend and donor.</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.20 (1).jpeg" alt="Medication packages" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="medication packages health uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.20.jpeg" alt="Child receiving care" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child health care uganda"/>
                </div>
                <p class="mb-4">These children rely on daily medicines like Sodium Valproate, Carbamazepine, Diazepam, and Folic Acid to help manage seizures, stabilize mood, and support their overall health.</p>
                 <div class="my-6">
                     <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.21 (1).jpeg" alt="Staff organizing medications" class="rounded-lg shadow-md object-cover w-full mx-auto max-w-md" data-ai-hint="staff organizing medication uganda"/>
                 </div>
                <p class="mb-4">For many families, accessing these essential medicines regularly is a challenge due to cost and availability. By providing these medication packets, we are helping our children stay healthy, attend school, and participate more fully in daily life.</p>
                <p class="mb-4">We extend our sincere gratitude to Gabi Eder for her continuous support, which directly impacts the well-being of our children.</p>
            `,
             tags: ["Donation", "Impact", "Health", "Medication"],
        },
        "menstrual-hygiene": {
            title: "Promoting Dignity: Menstrual Hygiene Support for Girls",
            date: "January 20, 2025",
            author: "One Love Centre Team",
            imageUrl: "/images/blog/menstrual-hygiene-main.jpeg", // Updated main image
            imageAlt: "Girls receiving hygiene packs",
            aiHint: "menstrual hygiene pads girls education uganda dignity",
            content: `
                <p class="mb-4">In January 2025, five girls under the care of One Love Autism Children’s Centre received washable sanitary pads as part of our menstrual hygiene support program.</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="/images/blog/menstrual-hygiene-pads.jpeg" alt="Washable sanitary pads" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="reusable menstrual pads hygiene uganda"/>
                    <img src="/images/blog/menstrual-hygiene-education.jpeg" alt="Girls learning about hygiene" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="girls health education uganda"/>
                </div>
                <p class="mb-4">For girls with autism and special needs, managing menstruation can be challenging — especially in communities where access to sanitary products is limited. By providing reusable, eco-friendly pads, we are promoting dignity, comfort, and confidence for our girls, ensuring they can continue attending school and participating in daily activities without interruption.</p>
                <div class="my-6">
                     <img src="/images/blog/menstrual-hygiene-group.jpeg" alt="Group of girls receiving hygiene support" class="rounded-lg shadow-md object-cover w-full mx-auto max-w-md" data-ai-hint="girls hygiene support group uganda"/>
                 </div>
                <p class="mb-4">This initiative is a crucial step in supporting the holistic well-being and inclusion of the girls at our centre.</p>
            `,
             tags: ["Impact", "Health", "Girls Education", "Hygiene"],
        },
        "blanket-drive": {
            title: "Mothers' Initiative Brings Warmth: A Blanket Drive Success",
            date: "December 15, 2024",
            author: "One Love Centre Team",
            imageUrl: "/images/blog/WhatsApp Image 2025-09-21 at 14.06.19.jpeg", // Updated main image (cover)
            imageAlt: "Child happy with new blanket",
            aiHint: "children blankets warm community uganda mother",
            content: `
                <p class="mb-4">In December 2024, 30 children at One Love Autism Children’s Centre received warm blankets — a special gift from their own mothers, who came together to make this possible.</p>
                <p class="mb-4">Throughout the year, these hardworking mothers, many from low-income and resource-limited households, were encouraged to save small amounts through our support groups. At the end of the year, they used their collective savings to buy something meaningful they might otherwise struggle to afford — new blankets to keep their children warm and comfortable.</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.20 (1).jpeg" alt="Children receiving blankets" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="children blankets donation uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.20.jpeg" alt="Mother giving blanket to child" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="mother child blanket gift uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.21 (1).jpeg" alt="Children happy with blankets" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="children happy blankets community uganda"/>
                 </div>
                 <div class="my-6">
                     <img src="/images/blog/WhatsApp Image 2025-09-21 at 14.06.21.jpeg" alt="More children with blankets" class="rounded-lg shadow-md object-cover w-full mx-auto max-w-md" data-ai-hint="children donation warmth uganda"/>
                 </div>
                <p class="mb-4">This effort added to the beautiful bedsheets donated earlier by our friends, creating a full set of cozy bedding for each child. It's a wonderful example of community strength and parental love making a tangible difference.</p>
            `,
             tags: ["Impact", "Community", "Parents", "Donation"],
        },
        // Add other posts here as needed
        "parent-support-groups": {
            title: "Empowering Parents: Highlights from Our Support Groups",
            date: "November 10, 2024",
            author: "One Love Centre Team",
            imageUrl: "https://i.imgur.com/k6ZCCU7.jpeg", // Updated image
            imageAlt: "Parents in a group discussion with therapist",
            aiHint: "parents support group uganda meeting community therapy",
            content: `
                <p class="mb-4">Our parent support groups and counseling sessions are a cornerstone of the support we offer at One Love Autism Children's Centre. These regular meetups provide a safe space for parents and caregivers to connect, share experiences, learn practical strategies, and build a vital support network.</p>
                <p class="mb-4">Recent sessions have focused on understanding communication challenges, managing challenging behaviors, navigating educational resources, and utilizing sensory strategies at home. Through shared knowledge and mutual encouragement, parents feel less isolated and better equipped to support their children's development.</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="https://i.imgur.com/Cmu58fb.jpeg" alt="Parent support group discussion with sensory tools" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="parents meeting discussion uganda sensory tools"/>
                    <img src="https://i.imgur.com/vJ8aGlS.jpeg" alt="Therapist leading a counseling session" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="counseling support group uganda therapist"/>
                 </div>
                <p class="mb-4">We believe that empowering parents is key to creating a supportive environment for every child to thrive.</p>
            `,
            tags: ["Parents", "Support Group", "Community", "Workshop", "Counseling", "Therapy"],
        },
        "understanding-sensory-processing": {
            title: "Understanding Sensory Processing in Children with Autism",
            date: "August 5, 2024",
            author: "Lead Therapist", // Example author
            imageUrl: "https://i.imgur.com/k6ZCCU7.jpeg", // Updated main image
            imageAlt: "Therapy session with sensory tools",
            aiHint: "therapy sensory tools children autism uganda",
            content: `
                <p class="mb-4">Children with autism often experience the world differently through their senses. Some might be overly sensitive to sounds, lights, or touch, while others might seek out intense sensory input. This is known as Sensory Processing Disorder (SPD) or sensory differences.</p>
                <p class="mb-4">At One Love Centre, our occupational therapists work closely with children to understand their unique sensory profiles. We use various strategies and tools, such as swings, weighted blankets, therapy balls, and textured toys, to help children regulate their sensory systems.</p>
                 <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="https://i.imgur.com/Cmu58fb.jpeg" alt="Child using sensory equipment" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="child sensory therapy autism uganda"/>
                    <img src="https://i.imgur.com/vJ8aGlS.jpeg" alt="Therapist working with child" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="therapist child sensory play uganda"/>
                </div>
                <p class="mb-4">Understanding and addressing sensory needs can significantly improve a child's ability to focus, learn, interact socially, and manage their emotions. Our goal is to create a sensory-friendly environment and equip children with coping strategies for everyday situations.</p>
            `,
            tags: ["Autism", "Therapy", "Sensory Processing", "Education"],
        },
        "september-2025-highlights": {
            title: "September 2025 Highlights at One Love Autism Children's Centre",
            date: "September 1, 2025",
            author: "One Love Centre Team",
            imageUrl: "/images/blog/WhatsApp Image 2025-09-21 at 13.30.30.jpeg",
            imageAlt: "September 2025 highlights at One Love Autism Children's Centre",
            aiHint: "september highlights 2025 autism children uganda community",
            content: `
                <p class="mb-4">The month of September began with significant progress for the One Love Autism family.</p>
                <p class="mb-4">On September 1st, our Director met with and counselled potential new members, introducing them to the Centre's mission and offering encouragement for the journey ahead. This marked an essential step in expanding our reach to more families in need.</p>
                <p class="mb-4">Later that same week, the Director conducted home visits to two families, combining awareness-building within the community with counselling and individual assessments. These visits reaffirmed One Love's dedication to meeting families where they are and ensuring that every child is recognised, supported, and celebrated.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 13.30.30 (1).jpeg" alt="Home visit with family" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="home visit autism children uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 13.30.30 (2).jpeg" alt="Counselling session" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="counselling session autism families uganda"/>
                </div>
                <p class="mb-4">On September 6th, the Centre held its quarterly members' meeting, which was full of joy and purpose. We proudly welcomed 13 new members into the One Love community. The day was made even more special by the generosity of our benefactor, Gabby, who donated Mackintosh mattresses. These mattresses provide much-needed relief for parents caring for children with incontinence challenges, ensuring greater dignity and comfort in daily care.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 13.30.31.jpeg" alt="Quarterly members meeting" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="members meeting autism children uganda"/>
                    <img src="/images/blog/WhatsApp Image 2025-09-21 at 13.31.23.jpeg" alt="Mackintosh mattresses donation" class="rounded-lg shadow-md object-cover w-full" data-ai-hint="donation mattresses autism children uganda"/>
                </div>
                <p class="mb-4">As we continue to grow, each milestone reminds us that the heart of One Love Autism Children's Centre lies in the unity of families, supporters, and the community that comes together to uplift our children.</p>
            `,
            tags: ["Community", "Outreach", "Donation", "Membership", "Growth"],
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
            fill={true}
            style={{objectFit:"cover"}}
            priority // Load main image quickly
            data-ai-hint={post.aiHint}
          />
        </div>

        {/* Post Content */}
        <div
            className="text-foreground leading-relaxed [&_img]:my-6 [&_img]:rounded-lg [&_img]:shadow-md [&_img]:object-cover [&_img]:w-full [&_img]:max-h-96 [&_img]:mx-auto" // Consolidated image styling within content
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
            <h3 className="text-2xl font-semibold mb-4">Help Us Build Our Future School</h3>
            <p className="text-muted-foreground mb-6">Your donation helps us provide essential services and work towards building a dedicated school facility for our children.</p>
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

   // Basic text extraction for description
   const excerpt = post.content.substring(0, 160).replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim() + '...';


  return {
    title: `${post.title} | One Love Autism Children's Centre Blog`, // Updated Name
    description: excerpt, // Simple excerpt from content
    openGraph: {
      title: post.title,
      description: excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 800, // Adjust if known, otherwise default
          height: 400, // Adjust if known, otherwise default
          alt: post.imageAlt,
        },
      ],
      type: 'article',
      // publishedTime: new Date(post.date).toISOString(), // Assuming date is parsable - handle potential parse errors if date format varies
       authors: [post.author || 'One Love Centre Team'],
    },
     twitter: {
       card: 'summary_large_image',
       title: post.title,
       description: excerpt,
       images: [post.imageUrl],
     },
  };
}

