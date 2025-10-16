"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: "heroImage", url: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling." },
  { id: "aboutImage", url: "https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Experience serene luxury at a Dubai resort with traditional architecture and tranquil pool." },
  { id: "roomsImage", url: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Stylish modern restaurant interior with warm lighting, elegant design, and luxurious ambiance at night." },
  { id: "contactImage", url: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Elegant hotel lobby showcasing a uniformed doorman ready to welcome guests." },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Hotel Luxuria"
          buttonText="Book Now"
          buttonVariant="slide-background"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Hotel Luxuria"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Explore Rooms", href: "rooms" },
              { text: "Contact Us", href: "contact" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Story"
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: "Luxury Rooms", description: "Spacious and elegantly designed.", imageSrc: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { title: "Fine Dining", description: "Experience an exceptional culinary journey.", imageSrc: "https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="Our friendly team is here to assist you."
            imageSrc="https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Company", items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
              ]},
              { title: "Hotel", items: [
                { label: "Rooms", href: "rooms" },
              ]},
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}