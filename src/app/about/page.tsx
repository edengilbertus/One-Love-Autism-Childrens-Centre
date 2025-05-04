
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, History, Target, Eye } from "lucide-react";
// Map component needs API key setup, using placeholder for now
// import { Map } from '@/components/map'; // Assume a map component exists

export default function AboutPage() {
  // Placeholder location for Kabale - Use the specific one from contact page
   const oneLoveCentreLocation = { lat: -1.249803, lng: 29.986100 };

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-center mb-12">About One Love Autism Children's Centre</h1> {/* Updated Name */}

      {/* Mission & Vision Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://picsum.photos/600/400"
            alt="Children learning at the centre"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
            data-ai-hint="children learning classroom uganda"
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
              One Love Autism Children’s Centre Kabale was founded in [Year Founded - Replace] by [Founder's Name - Replace] with a deep passion for supporting children often overlooked by society. Witnessing the lack of specialized resources for children with autism and neurodevelopmental disabilities in the region, [He/She/They] established the centre to provide a safe, nurturing, and stimulating environment.
            </p>
            <p>
              Starting with just a handful of children, the centre has grown thanks to the dedication of our team, the resilience of our families, and the generosity of supporters like you. We continuously strive to expand our programs and reach, adapting to the evolving needs of our community.
            </p>
             {/* Optional: Add a key milestone */}
             {/* <p>In [Year], we achieved [Significant Milestone], further solidifying our commitment...</p> */}
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
         {/* Grid for team members - Placeholder */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Team Member Card (Repeat for each member) */}
            <Card className="text-center">
                <CardHeader>
                   <Image
                     src="https://picsum.photos/200/200?grayscale" // Use grayscale for consistency or individual photos
                     alt="Team Member Name"
                     width={120}
                     height={120}
                     className="rounded-full mx-auto mb-4 border-4 border-primary/50"
                     data-ai-hint="person portrait professional"
                   />
                   <CardTitle className="text-xl">[Founder's Name]</CardTitle>
                   <p className="text-sm text-primary font-medium">Founder & Director</p>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground">
                     [Brief bio about the founder or team member, their passion and role.]
                   </p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                   <Image
                     src="https://picsum.photos/200/200?grayscale"
                     alt="Team Member Name"
                     width={120}
                     height={120}
                     className="rounded-full mx-auto mb-4 border-4 border-primary/50"
                     data-ai-hint="person portrait teacher therapist"
                   />
                   <CardTitle className="text-xl">[Team Member Name]</CardTitle>
                   <p className="text-sm text-primary font-medium">[Role, e.g., Lead Therapist]</p>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground">
                     [Brief bio about the team member.]
                   </p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader>
                   <Image
                     src="https://picsum.photos/200/200?grayscale"
                     alt="Team Member Name"
                     width={120}
                     height={120}
                     className="rounded-full mx-auto mb-4 border-4 border-primary/50"
                     data-ai-hint="person portrait educator"
                   />
                   <CardTitle className="text-xl">[Team Member Name]</CardTitle>
                   <p className="text-sm text-primary font-medium">[Role, e.g., Special Educator]</p>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground">
                     [Brief bio about the team member.]
                   </p>
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
           {/* Replace this div with the actual Map component when available */}
          {/* <p>Map of Kabale, Uganda will be displayed here.</p> */}
           {/* Embedded Google Map using iframe */}
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${oneLoveCentreLocation.lat},${oneLoveCentreLocation.lng}`} // Replace YOUR_GOOGLE_MAPS_API_KEY
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="One Love Autism Children's Centre Location" // Updated Name
            ></iframe>
          {/* <Map center={oneLoveCentreLocation} zoom={13} /> */}
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
