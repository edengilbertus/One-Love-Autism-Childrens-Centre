
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Stethoscope, Users, Wrench } from "lucide-react"; // Icons representing program areas

export default function ProgramsPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Our Programs</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a range of tailored programs designed to meet the unique needs of each child and support their families.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Education & Therapy Card */}
        <Card className="shadow-lg overflow-hidden">
          <div className="relative h-60 w-full">
            <Image
              src="https://i.imgur.com/vJ8aGlS.jpeg" // Relevant image
              alt="Therapist working with child using sensory tools"
              layout="fill"
              objectFit="cover"
              data-ai-hint="child therapy session learning uganda sensory"
            />
          </div>
          <CardHeader className="flex flex-row items-start gap-4 p-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl mb-1">Education & Therapy Services</CardTitle>
              <p className="text-muted-foreground">
                Individualized learning plans and therapeutic interventions.
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 text-muted-foreground space-y-3">
             <p>
               Our core program focuses on providing personalized education based on each child's abilities and needs. We utilize evidence-based practices like Applied Behavior Analysis (ABA), speech therapy, occupational therapy, and sensory integration techniques.
             </p>
             <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Individualized Education Plans (IEPs)</li>
                <li>Speech and Language Therapy</li>
                <li>Occupational Therapy</li>
                <li>Behavioral Support (ABA principles)</li>
                <li>Social Skills Groups</li>
                <li>Sensory Integration Activities</li>
             </ul>
             {/* Optional: Add another small relevant image */}
             <div className="pt-4">
                 <Image
                    src="https://i.imgur.com/Cmu58fb.jpeg" // Another therapy image
                    alt="Child engaged in learning activity"
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full"
                    data-ai-hint="child learning education therapy uganda"
                />
             </div>
          </CardContent>
        </Card>

        {/* Skills Training Card */}
        <Card className="shadow-lg overflow-hidden">
           <div className="relative h-60 w-full">
            <Image
              src="https://picsum.photos/600/400?random=6" // Placeholder for now, replace if specific image available
              alt="Children learning life skills"
              layout="fill"
              objectFit="cover"
              data-ai-hint="children life skills training uganda crafts gardening"
            />
          </div>
          <CardHeader className="flex flex-row items-start gap-4 p-6">
             <div className="bg-primary/10 p-3 rounded-full">
                <Wrench className="h-6 w-6 text-primary" />
             </div>
             <div>
                <CardTitle className="text-2xl mb-1">Skills Training</CardTitle>
                <p className="text-muted-foreground">
                  Developing practical life and vocational skills.
                </p>
             </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 text-muted-foreground space-y-3">
            <p>
              We equip older children and young adults with essential life skills to foster independence and prepare them for future opportunities. This includes daily living activities, basic vocational training, and community integration skills.
            </p>
             <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Activities of Daily Living (ADLs) - hygiene, dressing, cooking</li>
                <li>Pre-vocational training (e.g., crafts, gardening)</li>
                <li>Money Management Basics</li>
                <li>Community Safety Awareness</li>
                <li>Following Instructions and Routines</li>
             </ul>
             {/* Optional: Add another small relevant image */}
             <div className="pt-4">
                 <Image
                    src="https://picsum.photos/400/250?random=17" // Placeholder, ideally show crafts or gardening
                    alt="Students participating in vocational training"
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full"
                    data-ai-hint="students vocational training crafts uganda"
                />
             </div>
          </CardContent>
        </Card>
      </div>

      {/* Parent/Caregiver Support */}
       <section className="bg-secondary/30 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-center md:text-left">
             <Users className="h-16 w-16 text-primary mx-auto md:mx-0 mb-4" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-3">Parent & Caregiver Support</h2>
            <p className="text-muted-foreground mb-4">
              We believe that supporting families is crucial. Our parent and caregiver programs include regular meetups, group counseling sessions, and training workshops, providing resources and a supportive community network.
            </p>
             <ul className="list-none space-y-2 text-muted-foreground text-left inline-block mx-auto md:mx-0">
                <li className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-primary flex-shrink-0"/><span>Training Workshops on Autism & Related Conditions</span></li>
                <li className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-primary flex-shrink-0"/><span>Support Group Meetings & Counseling</span></li>
                <li className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-primary flex-shrink-0"/><span>Home Visit Consultations (as needed)</span></li>
                <li className="flex items-center gap-2"><Stethoscope className="h-4 w-4 text-primary flex-shrink-0"/><span>Resource Sharing and Advocacy Support</span></li>
             </ul>
             {/* Optional: Add image of parent group */}
             <div className="pt-4">
                 <Image
                    src="https://picsum.photos/400/250?random=9" // Placeholder image from blog list
                    alt="Parents participating in a support group session"
                    width={400}
                    height={250}
                    className="rounded-md object-cover w-full md:w-2/3 lg:w-1/2 mx-auto md:ml-0"
                    data-ai-hint="parents support group uganda meeting"
                />
             </div>
          </div>
       </section>

    </div>
  );
}

    