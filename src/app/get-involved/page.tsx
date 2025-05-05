
"use client"; // Required for specific hooks/interactions if added later

import * as React from "react";
// Removed form imports as form is replaced by contact info
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Removed Form, Input, Select, Textarea, Checkbox imports
// Removed toast import as form submission is handled via direct contact
import { HandHeart, ListChecks, CalendarClock, DollarSign, Gift, Phone, MessageSquare, School } from "lucide-react"; // Added School icon

// Inline SVG for WhatsApp Icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M19.1 17.9a9.9 9.9 0 0 1-14.2-14.2"></path>
  </svg>
);


export default function GetInvolvedPage() {

  // Placeholder wishlist items
  const wishlistItems = [
    { id: 1, name: "Therapy balls and mats", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 2, name: "Art supplies (crayons, paint, paper)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 3, name: "Educational toys and puzzles", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 4, name: "Children's books (picture books)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 5, name: "Sensory integration tools", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 6, name: "Office supplies (printer paper, pens)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 7, name: "Building materials (bricks, cement - for future school)", icon: <School className="h-5 w-5 text-primary mr-2"/> }, // Added wishlist item for school
  ];

  const donationPhoneNumber = "+256782860084";
  const whatsappLink = `https://wa.me/256782860084`; // Use the provided number


  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get Involved</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your support makes a world of difference. Discover how you can contribute to the future of children at One Love Autism Children's Centre, including our goal to build a dedicated school facility. {/* Updated Name & Goal */}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Left Column (Donation Info) */}
        <div className="lg:col-span-3" id="donate">
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-8 w-8 text-primary"/>
                  <CardTitle className="text-3xl">Make a Donation - Help Build Our School!</CardTitle> {/* Emphasize school */}
               </div>
              <CardDescription>
                 Support our daily work and contribute to our dream of building a dedicated school! Currently, we primarily accept donations via MTN Mobile Money in Ugandan Shillings (UGX). Please contact Twinomugisha Mildred via phone or WhatsApp to get the specific MTN Mobile Money details and arrange your contribution. Your generosity provides vital resources and helps build a brighter future.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="border p-4 rounded-md bg-muted/50">
                 <h4 className="font-semibold mb-2 text-foreground">How to Donate (Mobile Money):</h4>
                 <p className="text-sm text-muted-foreground mb-3">
                   1. Contact Twinomugisha Mildred to confirm the current MTN Mobile Money number and recipient name: {/* Updated contact name */}
                 </p>
                 <div className="space-y-2 mb-3">
                   <div className="flex items-center gap-2">
                     <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                     <a href={`tel:${donationPhoneNumber}`} className="text-sm font-medium text-primary hover:underline">{donationPhoneNumber}</a>
                   </div>
                   <div className="flex items-center gap-2">
                      <WhatsAppIcon />
                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">Chat on WhatsApp to get details</a>
                   </div>
                 </div>
                  <p className="text-sm text-muted-foreground mb-3">
                   2. Once you have the details, use your MTN Mobile Money service to send the donation in Ugandan Shillings (UGX).
                 </p>
                 <p className="text-xs text-muted-foreground mt-3">
                    We appreciate your understanding as we work towards more online donation options. Please confirm details with Twinomugisha Mildred before sending. {/* Updated contact name */}
                 </p>
               </div>
               {/* School Building Vision Image */}
                <div className="mt-4">
                    <Image
                      src="https://i.imgur.com/zTbQPC9.jpeg" // Updated image source
                      alt="Vision for the future One Love Centre school classroom with children drawing" // Updated alt text
                      width={600}
                      height={300}
                      className="rounded-md object-cover w-full shadow-md"
                      data-ai-hint="school classroom kids drawing interior uganda" // Updated AI hint
                    />
                </div>
               <Button asChild className="w-full mt-4" size="lg">
                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                   <WhatsAppIcon /> <span className="ml-2">Contact via WhatsApp for Donation Details</span>
                 </a>
               </Button>
                {/* Placeholder for future online donation button */}
               {/* <Button disabled className="w-full" size="lg">Online Donations Coming Soon</Button> */}
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Volunteer, Wishlist, Monthly Giving) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Volunteer Section */}
          <Card className="bg-secondary/30">
            <CardHeader className="flex flex-row items-center gap-4">
              <HandHeart className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Volunteer Your Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Share your skills and passion! We welcome volunteers for classroom assistance, therapy support, event help, and more.
              </p>
              <Button asChild variant="outline">
                <Link href="/contact?subject=Volunteer Inquiry">Learn About Volunteering</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Wishlist Section */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
               <ListChecks className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Our Wishlist</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Help us provide essential resources by donating items from our wishlist. Every item contributes directly to our children's learning and well-being, and helps us prepare for our future school.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {wishlistItems.map(item => (
                    <li key={item.id} className="flex items-center">{item.icon} {item.name}</li>
                ))}
              </ul>
               <Button asChild variant="link" className="mt-3 p-0 h-auto">
                 <Link href="/contact?subject=Wishlist Donation">Contact Us to Donate Items</Link>
               </Button>
            </CardContent>
          </Card>

           {/* Monthly Giving Highlight */}
           <Card className="bg-teal-50 dark:bg-teal-900/30 border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4">
               <CalendarClock className="h-8 w-8 text-primary flex-shrink-0" />
              <CardTitle className="text-2xl">Become a Monthly Supporter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                 Regular giving provides stable funding for daily operations and our school building fund. Please contact us via phone or WhatsApp to discuss setting up a recurring Mobile Money donation.
              </p>
               
            </CardContent>
          </Card>

        </div>

      </div>
       <div className="text-center mt-4">
                The numbers for contact are +256782860084 this is her number Twinomugisha Mildred. The Director
            </div>
    </div>
  );
}
