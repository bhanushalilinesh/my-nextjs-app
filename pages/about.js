import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About | Linesh Codes</title>
      </Head>
      
      <div className="max-w-3xl mx-auto py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">About Us</h1>
          
          <div className="prose prose-slate lg:prose-lg text-slate-600">
            <p>
              Hello! I'm a web developer passionate about building clean, functional, and user-friendly web applications. Linesh Codes is a practical template designed to showcase modern web technologies in an approachable way.
            </p>
            <p>
              This project balances aesthetics with simplicity. It isn't over-engineered with complex animations, nor is it overly simplistic. It aims to be exactly what you need to start a great web project.
            </p>
            
            <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">Core Principles</h2>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Clarity</h3>
                <p className="text-sm text-slate-600 m-0">Writing clean, maintainable code that others can easily understand and build upon.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-2">Balance</h3>
                <p className="text-sm text-slate-600 m-0">Finding the sweet spot between a beautiful user interface and straightforward implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
