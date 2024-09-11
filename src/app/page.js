import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title className='text-indigo-600'>Erin Eagles LCSW - Therapy Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main>
        <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/office.png')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4"> {/* Added padding */}
            <div className="mb-12"> {/* Increased margin-bottom */}
              <Image src="/possum.png" alt="All About That Breath" width={250} height={250} /> {/* Increased image size */}
            </div>
            <h1 className="text-6xl font-light mb-4">Erin Eagles LCSW</h1> {/* Increased font size and margin */}
            <p className="text-3xl mb-2">Licensed Clinical Social Worker</p> {/* Increased font size and margin */}
            <p className="text-3xl mb-12">Therapy Services</p> {/* Increased font size and margin */}
            <p className="text-2xl italic max-w-3xl">
              &ldquo;Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.&rdquo;
              <footer className="mt-4 text-xl">— Unknown</footer> {/* Increased margin and font size */}
            </p>
          </div>
        </section>

        <section id="services" className="py-24 px-8 max-w-6xl mx-auto">
          <h2 className="text-4xl text-gray-600 mb-12">Our Services</h2>
          <div className="flex flex-col text-gray-600 md:flex-row gap-12">
            <div className="md:w-3/5">
              <p className="text-xl mb-6">At Erin Eagles LCSW, we offer a range of therapy services tailored to meet your individual needs. Our approach is client-centered, focusing on creating a safe and supportive environment for personal growth and healing.</p>
              <p className="text-xl mb-4">Our services include:</p>
              <ul className="list-disc list-inside mt-4 text-lg space-y-2">
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