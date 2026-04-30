
import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { BlueprintSection } from '../components/BlueprintSection';
import { AboutUs } from '../components/AboutUs';
import { TargetAudience } from '../components/TargetAudience';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    const [selectedService, setSelectedService] = React.useState<string>('');

    const handleQuoteService = (service: string) => {
        setSelectedService(service);
        // Instant scroll to contact
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Hero />
            <Services onQuoteService={handleQuoteService} />
            <BlueprintSection />
            <AboutUs />
            <TargetAudience />
            <Contact initialService={selectedService} />
        </>
    );
};
