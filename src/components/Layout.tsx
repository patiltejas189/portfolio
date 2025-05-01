import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={theme}>
      <div className="progress-bar fixed top-0 left-0 right-0 h-1 bg-accent-500 z-50" style={{ width: `${scrollProgress}%` }} />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;