
import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { BlueprintSection } from '../components/BlueprintSection';
import { AboutUs } from '../components/AboutUs';
import { TargetAudience } from '../components/TargetAudience';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <BlueprintSection />
            <AboutUs />
            <TargetAudience />
            <Contact />
        </>
    );
};
