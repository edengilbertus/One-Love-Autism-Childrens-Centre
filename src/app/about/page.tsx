

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, History, Target, Eye, LinkIcon, Briefcase, Phone } from "lucide-react"; // Added LinkIcon, Briefcase, Phone
// Map component needs API key setup, using placeholder for now
// import { Map } from '@/components/map'; // Assume a map component exists
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Inline SVG for Instagram Icon (if not using lucide-react)
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


export default function AboutPage() {
  // Placeholder location for Kabale - Use the specific one from contact page
   const oneLoveCentreLocation = { lat: -1.249803, lng: 29.986100 };

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">About One Love Autism Children's Centre</h1>

      {/* Mission & Vision Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://i.imgur.com/FTxyfjH.jpeg" // Updated image source
            alt="Children and staff at One Love Autism Children's Centre" // Updated alt text
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
            data-ai-hint="children staff group photo uganda" // Updated AI hint
          />
        </div>
        <div className="space-y-6">
          <Card className="bg-secondary/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To empower children with autism and neurodevelopmental disabilities in Kabale District, Uganda, by providing accessible, high-quality education, therapy, and community support, fostering inclusion and maximizing their potential.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-accent/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <Eye className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A community where every child with neurodevelopmental challenges is loved, understood, supported, and has the opportunity to thrive and lead a fulfilling life.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* History Section */}
      <section className="mb-16">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
             <History className="h-8 w-8 text-primary flex-shrink-0" />
             <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              One Love Autism Children’s Centre Kabale was founded with a deep passion for supporting children often overlooked by society.
            </p>
            <p>
              Witnessing the lack of specialized resources for children with autism and neurodevelopmental disabilities in the region, we established the centre to provide a safe, nurturing, and stimulating environment.
            </p>
             <p>
             Jeremiah’s Journey: The Inspiration
           </p>
            <p>
            Jeremiah was born on February 16, 2010. His early days were filled with medical challenges. Just after birth, he developed severe complications, including pneumonia and was later diagnosed with congenital heart disease. At only six months old, Jeremiah underwent life-saving heart surgery in Italy, a procedure that was made possible through the support of kind-hearted individuals and organizations. Despite the successful surgery, his developmental journey was marked by delays—he struggled with seizures, poor sleep, and missed many early milestones like sitting, crawling, walking, and talking.
           </p>
           <p>
            At the age of three, further medical evaluations confirmed that Jeremiah was autistic. This diagnosis was unfamiliar to the family and community, where awareness about autism was minimal, and stigma was high. Finding appropriate care and education became an uphill battle. The family faced rejection from local schools and grappled with the high costs of specialized education and therapy. Despite these challenges, Jeremiah's parents remained determined to give him the best possible chance at a fulfilling life.
           </p>
           <p>
            The Birth of a Vision
           </p>
           <p>
            Through their journey with Jeremiah, his family saw firsthand the urgent need for specialized support for children with autism and other developmental conditions in Western Uganda. They encountered many other parents facing similar struggles—parents who, due to poverty, stigma, and lack of services, were forced to hide their children or deny them the care they needed.
           </p>
           <p>
            Motivated by their experiences, Jeremiah’s mother wrote a proposal to establish a dedicated centre where children like her son could access therapy, skills training, education, and social support. The idea was to create a safe, inclusive space that would not only help children develop but also provide relief and empowerment to their caregivers through counselling and community awareness.
           </p>
           <p>
            Forming a Community
           </p>
           <p>
            In the early days, a small group of seven mothers came together to form the Special Mothers Group. They meet monthly to share their stories, learn about autism, and support each other emotionally and financially. Though the group faced setbacks—including financial constraints and the challenges brought by the COVID-19 pandemic—they remained committed to their vision.
           </p>
           <p>
            The One Love Autism Children’s Centre was thus conceived, not as a dream fulfilled, but as a mission in progress. The centre is not yet built, but with proposals written and partnerships sought, its founders are actively seeking support from donors and well-wishers to turn this dream into reality.
           </p>
           <p>
            Looking Ahead
           </p>
           <p>
            The One Love Autism Children’s Centre aims to serve as a beacon of hope for families across Western Uganda. It will provide therapeutic services, educational opportunities, and a platform for advocacy to reduce stigma and improve community inclusion for children with autism and other neurodevelopmental conditions.
           </p>
           <p>
            The journey of Jeremiah—and the resolve of his family—continues to inspire this initiative, with the hope that many more children will benefit from the support that Jeremiah once struggled to find.
           </p>
           <p>
            To support the building of One Love Autism Children’s Centre or to learn more about our mission, please get in touch.Founder’s Story: The Birth of One Love Autism Children’s Centre
           </p>
           <p>
            My name is Twinomugisha Mildred, and my journey toward founding One Love Autism Children’s Centre began with my son, Jeremiah. Born on February 16, 2010, Jeremiah faced significant health challenges from the very start. Although my pregnancy was normal, after birth he struggled with severe medical complications. He was diagnosed with congenital heart disease and required urgent treatment, including surgery overseas. Thanks to the generosity of kind-hearted people from around the world, we were able to raise funds for his operation in Italy. Despite his critical condition, Jeremiah survived — though his recovery was long and difficult.
           </p>
           <p>
            At around three years old, Jeremiah began experiencing seizures and developmental delays. After many hospital visits and consultations, doctors confirmed he had autism — a term that was unfamiliar to our family at the time. His development was slower than other children: walking, talking, and even sitting came much later. Attempts to enroll him in local schools were unsuccessful, as they could not accommodate his special needs. We eventually found a specialized school that helped with his behavior and daily routines, but the costs were overwhelming, and his health remained fragile.
           </p>
           <p>
            Caring for Jeremiah was both a blessing and a struggle. I witnessed firsthand the stigma, discrimination, and isolation faced by families raising children with autism and other developmental conditions in Western Uganda. Many parents remain in denial or hide their children due to fear of judgment or cultural misconceptions. This deeply painful reality inspired me to think bigger: I wanted to create a place where children like Jeremiah could receive the care, education, and therapies they need, and where parents could find support and hope.
           </p>
           <p>
            In the midst of these challenges, I wrote a proposal to establish a dedicated centre for children with autism and related conditions. Supported by friends in Europe and local mothers who shared similar struggles, we formed a group initially called the Special Mothers Group. We met monthly to share experiences, learn about autism, and contribute small savings. Over time, our vision grew into what is now called One Love Autism Children’s Centre.
           </p>
           <p>
            Our dream is to construct a centre in Kabale District — a safe, inclusive space that will offer therapy, skills training, education, and counseling for children and their families. While we have written proposals and continue to seek donations to turn this dream into reality, our commitment remains firm. One Love Autism Children’s Centre stands as a beacon of hope and advocacy, driven by lived experience and fueled by the belief that every child deserves love, dignity, and the chance to thrive.
           </p>
           <p>
            We are calling on partners, donors, and compassionate individuals to join us in making this vision a reality. With your support, we can build the centre and transform the lives of many more children like Jeremiah
           </p>
          </CardContent>
        </Card>
      </section>

      {/* Team Section */}
      <section className="mb-16">
         <div className="text-center mb-8">
            <Users className="h-10 w-10 text-primary mx-auto mb-2" />
            <h2 className="text-3xl font-semibold tracking-tight">Meet Our Dedicated Team</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
               Our passionate team of educators, therapists, and support staff are the heart of One Love Autism Children’s Centre.
            </p>
         </div>
         {/* Grid for team members */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Twinomugisha Mildred Card */}
            <Card className="text-center">
                <CardHeader>
                   <Image
                     src="https://i.imgur.com/tDBdhAi.jpeg" // Updated photo
                     alt="Twinomugisha Mildred, Director" // Updated alt text
                     width={120}
                     height={120}
                     className="rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover"
                     data-ai-hint="person portrait director woman uganda" // Updated AI hint
                   />
                   <CardTitle className="text-xl">Twinomugisha Mildred</CardTitle> {/* Updated name */}
                   <p className="text-sm text-primary font-medium">Director</p> {/* Updated role */}
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground mb-3">
                     Leading the Centre with dedication and passion for supporting children with autism and their families.
                   </p>
                   <div className="flex justify-center items-center gap-2">
                     <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0"/>
                     <a href="tel:+256782860084" className="text-sm text-muted-foreground hover:text-primary transition-colors">+256 782 860084</a>
                   </div>
                </CardContent>
            </Card>
            {/* Example Team Member Card 2 */}
             
            {/* Eden Gilbert Kiseka Card */}
             <Card className="text-center">
                <CardHeader>
                   <Image
                     src="https://i.imgur.com/qG5Jtpl.jpeg"
                     alt="Eden Gilbert Kiseka"
                     width={120}
                     height={120}
                     className="rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover"
                     data-ai-hint="person portrait engineer tech"
                   />
                   <CardTitle className="text-xl">Eden Gilbert Kiseka</CardTitle>
                   <p className="text-sm text-primary font-medium">Engineer</p>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground mb-3">
                     A self-taught software engineer and UI & UX designer. Electrical Engineer by profession. Founder and CEO of Carthigan Electronics.
                   </p>
                   <div className="flex justify-center items-center space-x-3">
                      <a href="https://edengilbertus.github.io/edengilbertportfolio/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Eden Gilbert's Portfolio">
                         <LinkIcon className="h-5 w-5" />
                      </a>
                      <a href="https://www.instagram.com/carthiganelectronics?igsh=MXRuazc3OXdyMmFzNw==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Carthigan Electronics Instagram">
                         <InstagramIcon />
                      </a>
                      {/* Optionally add briefcase for CEO role */}
                       <TooltipProvider>
                           <Tooltip>
                             <TooltipTrigger>
                               <Briefcase className="h-5 w-5 text-muted-foreground"/>
                             </TooltipTrigger>
                             <TooltipContent>
                               <p>Founder & CEO, Carthigan Electronics</p>
                             </TooltipContent>
                           </Tooltip>
                       </TooltipProvider>
                   </div>
                </CardContent>
            </Card>
            {/* Add more team member cards */}
         </div>
      </section>

      {/* Location Map Section */}
      <section>
         <div className="text-center mb-8">
            <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
             <h2 className="text-3xl font-semibold tracking-tight">Our Location</h2>
             <p className="text-muted-foreground mt-2">We are located in the heart of Kabale District, Uganda.</p>
         </div>
        {/* Map Placeholder - Requires integration with a map library and API key */}
        <div className="aspect-video w-full bg-muted rounded-lg shadow-md flex items-center justify-center text-muted-foreground overflow-hidden">
            {/* Embedded Google Map using iframe */}
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${oneLoveCentreLocation.lat},${oneLoveCentreLocation.lng}`} // Replace YOUR_GOOGLE_MAPS_API_KEY
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="One Love Autism Children's Centre Location"
            ></iframe>
        </div>
         <div className="text-center mt-4">
          <a
             href={`https://www.google.com/maps/search/?api=1&query=${oneLoveCentreLocation.lat},${oneLoveCentreLocation.lng}`}
             target="_blank"
             rel="noopener noreferrer"
             className="text-primary hover:underline text-sm font-medium"
          >
             View on Google Maps
          </a>
        </div>
         <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 text-xs text-center max-w-md mx-auto">
            <strong>Developer Note:</strong> Map embed requires a Google Maps API key. Replace `YOUR_GOOGLE_MAPS_API_KEY` in the `iframe src`.
         </div>
      </section>
    </div>
  );
}
