import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Linesh Codes</title>
      </Head>
      
      <div className="max-w-xl mx-auto py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
          <p className="mb-8 text-slate-600">We'd love to hear from you. Please fill out the form below.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="5"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-colors resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
