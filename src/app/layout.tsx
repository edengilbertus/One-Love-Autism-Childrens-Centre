
import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Using Geist Sans as the primary font
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Consider adding a secondary, more playful font if needed, but Geist Sans is clean and readable.

export const metadata: Metadata = {
  // Use the heart/hands logo (or placeholder) for favicon - requires specific setup not included here.
  icons: { icon: '/favicon.ico' }, // Reference the favicon in the public directory
  title: {
    template: '%s | One Love Autism Children\'s Centre', // Updated Name
    default: 'One Love Autism Children\'s Centre - Empowering Every Child', // Updated Name
  },
  description: 'One Love Autism Children\'s Centre in Kabale, Uganda, empowers children with autism and neurodevelopmental disabilities through education, therapy, and community support.', // Updated Name
  keywords: ['autism centre', 'neurodevelopmental disabilities', 'Kabale Uganda', 'nonprofit', 'special needs education', 'therapy', 'community support', 'One Love Autism Children\'s Centre'], // Updated Name
  openGraph: {
      title: 'One Love Autism Children\'s Centre', // Updated Name
      description: 'Empowering children with autism and neurodevelopmental disabilities in Kabale, Uganda.',
      url: 'https://www.onelovecentre.org', // Replace with actual URL
      siteName: 'One Love Autism Children\'s Centre', // Updated Name
      // images: [ // Add a relevant image for social sharing
      //   {
      //     url: 'https://www.onelovecentre.org/og-image.jpg', // Replace with actual image URL
      //     width: 1200,
      //     height: 630,
      //   },
      // ],
      locale: 'en_US',
      type: 'website',
    },
    // twitter: { // Add Twitter specific card data if needed
    //   card: 'summary_large_image',
    //   title: 'One Love Autism Children’s Centre',
    //   description: 'Empowering children with autism and neurodevelopmental disabilities.',
    //   // siteId: '@YourTwitterHandle', // Replace if available
    //   // creator: '@YourTwitterHandle',
    //   // images: ['https://www.onelovecentre.org/twitter-image.jpg'], // Replace
    // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster /> {/* Add Toaster component here */}
         </ThemeProvider>
      </body>
    </html>
  );
}
