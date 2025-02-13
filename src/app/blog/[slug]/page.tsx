import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const blogPosts = {
  'getting-started-with-nextjs': {
    title: "Getting Started with Next.js",
    date: "2024-01-24",
    content: `
      Next.js is a powerful React framework that makes building web applications a breeze.
      It provides features like server-side rendering, static site generation, and API routes out of the box.
      
      In this post, we'll explore the basics of Next.js and why it's becoming the go-to choice for modern web development.
    `.trim()
  },
  'power-of-typescript': {
    title: "The Power of TypeScript",
    date: "2024-01-23",
    content: `
      TypeScript is a superset of JavaScript that adds static typing to the language.
      This helps catch errors early in development and provides better tooling support.
      
      Let's dive into how TypeScript can improve your development workflow and make your code more maintainable.
    `.trim()
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back to home
        </Link>
        
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-400 mb-8">
            By Kivanc (Kevanch) Peltek • {post.date}
          </div>
          <div className="prose prose-invert">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
} 