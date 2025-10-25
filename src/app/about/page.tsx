import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company and mission',
}

export default function AboutPage() {
  return (
    <main>
      <h1 className="text-center text-4xl font-bold mt-8 mb-6">About Us</h1>
      <p className="text-center ml-30">This is the About Page</p>
      <div className="flex justify-center mt-8">
        <video controls width="800" height="450">
          <source src="/vid-1080p.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
