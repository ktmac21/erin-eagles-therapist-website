'use client'

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="relative h-[80vh] bg-cover bg-center flex items-start" style={{backgroundImage: "url('/couch.png')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative w-full flex flex-col items-center justify-center text-white text-center p-4 pt-40 font-serif">
            <h1 className="text-8xl font-light mb-4 font-sacramento">Erin Eagles LCSW</h1> 
            <p className="text-4xl mb-4">Licensed Clinical Social Worker</p> 
            <p className="text-4xl italic">Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.</p>
            <p className="mt-2 text-xl italic">— Unknown</p> 
          </div>
        </section>

        <section id="services" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-5xl text-gray-600 mb-12 font-sacramento">My Services</h2>
          <div className="flex flex-col text-gray-600 md:flex-row gap-12 items-start">
            <div className="md:w-3/5">
              <p className="text-2xl mb-6">At Erin Eagles LCSW, we offer a range of therapy services tailored to meet your individual needs. Our approach is client-centered, focusing on creating a safe and supportive environment for personal growth and healing.</p>
              <p className="text-5xl mb-4 font-sacramento">My services include:</p>
              <ul className="list-disc list-inside mt-4 text-2xl space-y-2">
                <li>Individual Therapy</li>
                <li>Family Therapy</li>
                <li>Anxiety and Depression Treatment</li>
                <li>Trauma-Informed Care</li>
                <li>Ketamine-Assisted Psychotherapy (KAP)</li>
              </ul>
            </div>
            <div className="md:w-1/2 md:-mt-16">
              <Image src="/conform.png" alt="Therapy Session" width={600} height={200} className="rounded-lg" />
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-5xl text-gray-600 mb-12 font-sacramento text-center mx-auto">Who I am</h2>
          <div className="flex flex-col-reverse text-gray-600 md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image src="/erin.png" alt="Erin Eagles LCSW" width={600} height={200} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-2xl mb-6">I am a Licensed Clinical Social Worker (LCSW) dedicated to providing compassionate and comprehensive mental health care. With expertise in eating disorders, LGBTQ+ issues, depression, anxiety, and trauma, I offer a safe and supportive environment for clients to explore their challenges and achieve personal growth. My client-centered approach combines empathy with clinical expertise, including specialized training in Ketamine-Assisted Psychotherapy (KAP). Whether you're struggling with long-standing issues or facing new life challenges, I am committed to empowering you on your journey towards healing and self-discovery, helping you build resilience and lead a more fulfilling life.</p>
              <p className="text-4xl mb-4 font-sacramento">- Erin Eagles</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}