// FadeInOnScroll.tsx
"use client"
import React, { useEffect, useRef } from 'react';
import '/src/app/globals.css'; // Asegúrate de importar el archivo CSS donde defines las transiciones de desvanecimiento

interface FadeInOnScrollProps {
    children: React.ReactNode;
    }
    
    const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
        const elementRef = useRef<HTMLDivElement>(null);
    
        useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;
    
            const elementTop = elementRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
    
            if (elementTop < (scrollTop + windowHeight - 200)) {
            elementRef.current.classList.add('fade-in');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Asegura que el efecto se aplique al cargar la página
        return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    
        return <div ref={elementRef}>{children}</div>;
    };
    
    export default FadeInOnScroll;