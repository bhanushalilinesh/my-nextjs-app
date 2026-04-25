import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Linesh Codes</title>
      </Head>
      
      <div className="flex flex-col items-center justify-center py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Welcome to Linesh Codes
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          A clean, modern, and accessible Next.js template. Striking the perfect balance between beautiful design and straightforward code.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/about"
            className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Learn More
          </Link>
          <Link 
            href="/blog"
            className="px-8 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
          >
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
