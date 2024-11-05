import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/podcasters';

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest from MINY Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in the podcast collectibles space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;