import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us'
}

export default function ContactPage() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mt-8 mb-6">Contact Us</h1>
      <h2 className="text-left text-2xl font-bold mt-8 ml-25">E-Mail</h2>
      <p className="text-left ml-30">
          <a href="mailto:21988151@students.latrobe.edu.au" className="text-blue-600 hover:text-blue-800 underline">
              21988151@students.latrobe.edu.au
          </a>
      </p>
      <h2 className="text-left text-2xl font-bold mt-8 ml-25">Phone</h2>
      <p className="text-left ml-30">+61 410 628 802</p>
    </main>
  );
}

