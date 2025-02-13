import Link from 'next/link';

interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js",
    date: "2024-01-24",
    description: "Learn the basics of Next.js and why it's a great framework for building modern web applications.",
    slug: "getting-started-with-nextjs"
  },
  {
    title: "The Power of TypeScript",
    date: "2024-01-23",
    description: "Discover how TypeScript can improve your development experience and catch bugs early.",
    slug: "power-of-typescript"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-3xl font-bold mb-4">Kivanc (Kevanch) Peltek</h1>
        <nav className="space-x-6">
          <Link href="https://twitter.com" className="hover:text-gray-300">Twitter</Link>
          <Link href="https://youtube.com" className="hover:text-gray-300">YouTube</Link>
          <Link href="https://linkedin.com" className="hover:text-gray-300">LinkedIn</Link>
        </nav>
      </header>

      {/* Blog Posts Section */}
      <section className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <div className="text-gray-400 mb-2">
                  By Kivanc (Kevanch) Peltek • {post.date}
                </div>
                <p className="text-gray-300">{post.description}</p>
                <div className="mt-4">
                  <span className="text-gray-400 hover:text-white inline-flex items-center">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
