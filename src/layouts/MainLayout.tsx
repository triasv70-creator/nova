
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};
