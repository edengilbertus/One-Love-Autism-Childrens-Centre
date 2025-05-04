
"use client"; // Required for form handling

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { HandHeart, ListChecks, CalendarClock, DollarSign, Gift } from "lucide-react";

// Define Zod schema for the donation form
const donationFormSchema = z.object({
  amount: z.coerce.number().min(1, { message: "Please enter a donation amount." }),
  frequency: z.enum(["one-time", "monthly"]),
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  coverFee: z.boolean().default(false).optional(),
  comment: z.string().optional(),
  // Add fields for payment gateway integration later (e.g., card details, nonce)
});

type DonationFormValues = z.infer<typeof donationFormSchema>;

// Default values
const defaultValues: Partial<DonationFormValues> = {
  frequency: "one-time",
  amount: 25, // Default donation amount
  coverFee: false,
};

export default function GetInvolvedPage() {

   const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // Placeholder submit handler
  function onSubmit(data: DonationFormValues) {
     console.log("Donation Data:", data);
     // TODO: Integrate with actual payment gateway API
     // Show success message (placeholder)
      toast({
        title: "Donation Submitted (Placeholder)",
        description: `Thank you for your ${data.frequency} donation of $${data.amount}! (Payment processing not implemented yet)`,
        variant: "default", // Use default style for now
      });
      // Optionally reset the form: form.reset();
  }

  // Placeholder wishlist items
  const wishlistItems = [
    { id: 1, name: "Therapy balls and mats", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 2, name: "Art supplies (crayons, paint, paper)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 3, name: "Educational toys and puzzles", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 4, name: "Children's books (picture books)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 5, name: "Sensory integration tools", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
    { id: 6, name: "Office supplies (printer paper, pens)", icon: <Gift className="h-5 w-5 text-primary mr-2"/> },
  ];

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Get Involved</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Your support makes a world of difference. Discover how you can contribute to the future of children at One Love Centre.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

        {/* Left Column (Donation Form) */}
        <div className="lg:col-span-3" id="donate">
          <Card className="shadow-lg">
            <CardHeader>
               <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="h-8 w-8 text-primary"/>
                  <CardTitle className="text-3xl">Make a Donation</CardTitle>
               </div>
              <CardDescription>
                Your contribution directly supports our programs, providing vital resources for education, therapy, and care. Choose a one-time or recurring monthly donation.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                     {/* Amount & Frequency */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount (USD)</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="Enter amount" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         <FormField
                           control={form.control}
                           name="frequency"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Frequency</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select frequency" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="one-time">One-Time</SelectItem>
                                    <SelectItem value="monthly">Monthly</SelectItem>
                                  </SelectContent>
                                </Select>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                     </div>

                      {/* Personal Information */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <FormField
                           control={form.control}
                           name="firstName"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>First Name</FormLabel>
                               <FormControl>
                                 <Input placeholder="Your first name" {...field} />
                               </FormControl>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                         <FormField
                           control={form.control}
                           name="lastName"
                           render={({ field }) => (
                             <FormItem>
                               <FormLabel>Last Name</FormLabel>
                               <FormControl>
                                 <Input placeholder="Your last name" {...field} />
                               </FormControl>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                      </div>
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
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number (Optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                       {/* Optional Fields */}
                       <FormField
                         control={form.control}
                         name="comment"
                         render={({ field }) => (
                           <FormItem>
                             <FormLabel>Comment (Optional)</FormLabel>
                             <FormControl>
                               <Textarea placeholder="Leave a comment..." {...field} />
                             </FormControl>
                             <FormMessage />
                           </FormItem>
                         )}
                       />
                       {/* <FormField
                         control={form.control}
                         name="coverFee"
                         render={({ field }) => (
                           <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                             <FormControl>
                               <Checkbox
                                 checked={field.value}
                                 onCheckedChange={field.onChange}
                               />
                             </FormControl>
                             <div className="space-y-1 leading-none">
                               <FormLabel>
                                 Optionally add [X]% to cover transaction fees?
                               </FormLabel>
                               <FormDescription>
                                 This ensures 100% of your intended donation reaches us.
                               </FormDescription>
                             </div>
                           </FormItem>
                         )}
                       /> */}

                      {/* Payment Gateway Placeholder */}
                       <div className="border p-4 rounded-md bg-muted/50 text-center text-muted-foreground">
                         <p className="text-sm font-semibold mb-2">Secure Payment Processing</p>
                         <p className="text-xs">Payment gateway integration (e.g., Stripe, PayPal) will appear here. For now, this is a placeholder.</p>
                         {/* Add payment element from Stripe/PayPal here */}
                       </div>

                    <Button type="submit" className="w-full" size="lg">
                       {form.getValues("frequency") === "monthly" ? "Become a Monthly Donor" : "Donate Now"}
                     </Button>
                  </form>
               </Form>
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
                Help us provide essential resources by donating items from our wishlist. Every item contributes directly to our children's learning and well-being.
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
                Recurring donations provide stable funding, allowing us to plan effectively and ensure consistent support for our children throughout the year. Select "Monthly" in the donation form!
              </p>
               <Image
                  src="https://picsum.photos/400/200?random=7"
                  alt="Happy child receiving consistent support"
                  width={400}
                  height={200}
                  className="rounded-md object-cover w-full"
                  data-ai-hint="child happy learning uganda sustainable"
                />
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}
