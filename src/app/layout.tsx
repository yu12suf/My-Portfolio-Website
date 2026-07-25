import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Yusuf Kedir | Software Engineer',
  description: 'Professional portfolio showcasing full-stack development expertise, AI integration, and system design.',
  keywords: 'Software Engineer, Full-Stack Developer, Next.js, React, Node.js, Ethiopia',
  authors: [{ name: 'Yusuf Kedir' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yusuf-portfolio.vercel.app',
    title: 'Yusuf Kedir | Software Engineer',
    description: 'Full-Stack Developer | AI Integration | System Design',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
