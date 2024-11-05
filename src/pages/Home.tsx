import React from 'react';
import { Helmet } from 'react-helmet-async';
import PodcasterShowcase from '../components/PodcasterShowcase';
import MixtapeShowcase from '../components/MixtapeShowcase';
import PricingSection from '../components/PricingSection';
import UnboxingSection from '../components/UnboxingSection';
import BlogSection from '../components/BlogSection';

function Home() {
  return (
    <>
      <Helmet>
        <title>MINY - Transform Your Podcast into Collectible Experiences</title>
        <meta name="description" content="MINY helps podcasters create unique, collectible experiences for their listeners. Engage your audience, build community, and monetize your content." />
        <meta name="keywords" content="podcast, NFT, digital collectibles, podcast monetization, creator economy" />
        <meta property="og:title" content="MINY - Transform Your Podcast into Collectible Experiences" />
        <meta property="og:description" content="Create unique, collectible experiences for your podcast listeners with MINY." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MINY - Transform Your Podcast Experience" />
        <meta name="twitter:description" content="Create unique, collectible experiences for your podcast listeners with MINY." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000" />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Transform Your Podcast Experience
            </h1>
            <p className="text-xl mb-12">
              Collect and own unique moments from your favorite podcasts.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition">
              Start Collecting
            </button>
          </div>
        </div>
      </section>

      <PodcasterShowcase />
      <MixtapeShowcase />
      <UnboxingSection />
      <PricingSection />
      <BlogSection />
    </>
  );
}

export default Home;