'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative h-screen bg-cover bg-center flex items-start" style={{backgroundImage: "url('/couch.png')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative w-full flex flex-col items-center text-white text-center p-4 pt-40 font-serif">
            <h1 className="text-6xl font-light mb-4 font-sacramento">Erin Eagles LCSW</h1> 
            <p className="text-3xl mb-4">Licensed Clinical Social Worker</p> 
            <p className="text-3xl italic">Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.</p>
            <p className="mt-2 text-2xl italic">— Unknown</p> 
          </div>
        </section>

        <section id="services" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl text-gray-600 mb-12 font-sacramento">My Services</h2>
          <div className="flex flex-col text-gray-600 md:flex-row gap-12">
            <div className="md:w-3/5">
              <p className="text-2xl mb-6">At Erin Eagles LCSW, we offer a range of therapy services tailored to meet your individual needs. Our approach is client-centered, focusing on creating a safe and supportive environment for personal growth and healing.</p>
              <p className="text-4xl mb-4 font-sacramento">My services include:</p>
              <ul className="list-disc list-inside mt-4 text-2xl space-y-2">
                <li>Individual Therapy</li>
                <li>Family Therapy</li>
                <li>Anxiety and Depression Treatment</li>
                <li>Trauma-Informed Care</li>
                <li>Ketamine-Assisted Psychotherapy (KAP)</li>
              </ul>
            </div>
            <div className="md:w-2/5">
              <Image src="/conform.png" alt="Therapy Session" width={500} height={600} className="rounded-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}