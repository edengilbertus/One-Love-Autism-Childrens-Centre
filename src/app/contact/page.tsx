

"use client"; // Required for form handling

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube } from "lucide-react"; // Removed Twitter, Linkedin
// Map component placeholder
// import { Map } from '@/components/map';

// Inline SVG for WhatsApp Icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M19.1 17.9a9.9 9.9 0 0 1-14.2-14.2"></path>
  </svg>
);

// Zod schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name (at least 2 characters)." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().optional(), // Optional subject selection
  message: z.string().min(10, { message: "Please enter your message (at least 10 characters)." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Default values - handle potential subject from URL query params
const defaultValues: Partial<ContactFormValues> = {
   subject: "", // Default empty, will be set via query param if present
   name: "",
   email: "",
   message: "",
};

export default function ContactPage() {
   // Read subject from URL query parameters on client side
   const [initialSubject, setInitialSubject] = React.useState("");
   React.useEffect(() => {
       const params = new URLSearchParams(window.location.search);
       const subjectParam = params.get("subject");
       if (subjectParam) {
           setInitialSubject(subjectParam);
           // Update form default value if subject param exists
           form.reset({ ...defaultValues, subject: subjectParam });
       }
   }, []); // Empty dependency array ensures this runs once on mount


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // Placeholder submit handler
  function onSubmit(data: ContactFormValues) {
    console.log("Contact Form Data:", data);
    // TODO: Implement actual form submission logic (e.g., send email via API route/server action)
    toast({
      title: "Message Sent (Placeholder)",
      description: "Thank you for contacting us! We will get back to you shortly. (Submission not implemented yet)",
    });
    form.reset(defaultValues); // Reset form after submission
    // Reset initial subject if it was set via query param
     if (initialSubject) {
        form.reset({ ...defaultValues, subject: initialSubject });
     } else {
         form.reset(defaultValues);
     }
  }

   // Updated location for One Love Centre
   const oneLoveCentreLocation = { lat: -1.249803, lng: 29.986100 }; // Approximate coordinates from Google Maps link

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have questions, want to volunteer, or wish to support our cause, please reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Left Column: Contact Form */}
        <div className="lg:col-span-3">
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3 mb-2">
                  <Send className="h-7 w-7 text-primary"/>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
               </div>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                     control={form.control}
                     name="subject"
                     render={({ field }) => (
                       <FormItem>
                         <FormLabel>Subject (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || ""} /* Use controlled value */>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                              <SelectItem value="Donation Inquiry">Donation Inquiry</SelectItem>
                              <SelectItem value="Volunteer Inquiry">Volunteer Inquiry</SelectItem>
                              <SelectItem value="Wishlist Donation">Wishlist Donation</SelectItem>
                              <SelectItem value="Program Information">Program Information</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                         <FormMessage />
                       </FormItem>
                     )}
                   />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Type your message here..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Contact Details & Map */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm text-muted-foreground">One Love Autism Children's Centre<br />Kabale District, Uganda</p> {/* Updated Name */}
                   <a
                      href={`https://maps.app.goo.gl/vDXwtUTueg9Hx1RK9`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-medium mt-1 block"
                   >
                      View on Google Maps
                   </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                {/* Updated phone number */}
                <a href="tel:+256782860084" className="text-sm text-muted-foreground hover:text-primary transition-colors">+256 782 860084</a>
              </div>
              <div className="flex items-start gap-3">
                 <WhatsAppIcon />
                 <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    {/* Updated WhatsApp link/number */}
                    <a href="https://wa.me/256782860084" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chat with us (+256 782 860084)</a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  {/* Updated email */}
                  <a href="mailto:oneloveacck@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">oneloveacck@gmail.com</a>
                </div>
              </div>
            </CardContent>
          </Card>

           <Card>
                <CardHeader>
                   <CardTitle className="text-xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex space-x-4">
                      {/* Updated social links */}
                      <a href="https://m.facebook.com/p/One-Love-Autism-Childrens-Centre-Kabale-100070132868066/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                      <a href="https://www.instagram.com/one_love_autisim_center?utm_source=qr&igsh=MXM2Zno4czk2cnEyZQ==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a> {/* Keep YouTube for now or replace if needed */}
                    </div>
                </CardContent>
           </Card>

          <Card id="map">
             <CardHeader>
                <CardTitle className="text-xl">Find Us</CardTitle>
             </CardHeader>
             <CardContent>
               {/* Embedded Google Map using iframe */}
               <div className="aspect-square w-full bg-muted rounded-lg shadow-inner overflow-hidden">
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
               </div>
                <div className="text-center mt-3">
                   {/* Link to Google Maps */}
                   <a
                      href={`https://www.google.com/maps/search/?api=1&query=${oneLoveCentreLocation.lat},${oneLoveCentreLocation.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline font-medium"
                   >
                      View on Google Maps
                   </a>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 text-xs text-center">
                   <strong>Developer Note:</strong> Map embed requires a Google Maps API key. Replace `YOUR_GOOGLE_MAPS_API_KEY` in the `iframe src`.
                </div>
             </CardContent>
          </Card>
        </div>

      </div>
       {/* CMS Integration Note - FOR DEVELOPER */}
         <div className="mt-16 p-4 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 text-sm text-center">
             <strong>Developer Note:</strong> The contact form currently logs data to the console. Implement a backend solution (API route or server action) to handle form submissions. Map requires a valid Google Maps API key. Payment gateway integration is needed for the donation form.
         </div>
    </div>
  );
}
