import React from 'react';
import './globals.css'; // Import the specific stylesheet

const Blog = () => {
  const articles = [
    {
      title: '5 Tips for a Successful Fast Food Franchise',
      author: 'John Doe',
      date: 'August 10, 2024',
      excerpt: 'Learn the key strategies to ensure the success of your fast food franchise. From location scouting to customer service excellence...',
      imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image
      link: '/blog/tips-for-successful-franchise'
    },
    {
      title: 'The Future of Fast Food in Algeria',
      author: 'Jane Smith',
      date: 'July 25, 2024',
      excerpt: 'Explore the upcoming trends in the Algerian fast food industry and what it means for franchise owners...',
      imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image
      link: '/blog/future-of-fast-food-in-algeria'
    },
    {
      title: 'How to Maintain Quality in High-Demand Times',
      author: 'Ahmed Rami',
      date: 'June 15, 2024',
      excerpt: 'Maintaining food quality during peak hours is crucial for customer satisfaction. Here’s how you can do it...',
      imageUrl: 'https://via.placeholder.com/400x200', // Placeholder image
      link: '/blog/maintaining-quality'
    },
  ];

  return (
    <section id="blog" className="blogSection">
      <div className="blogContainer">
        <h2 className="blogTitle">Our Blog</h2>
        <p className="blogSubtitle">Read our latest articles about the fast food industry, franchise tips, and product news.</p>
        
        <div className="blogGrid">
          {articles.map((article, index) => (
            <div key={index} className="blogCard">
              <img src={article.imageUrl} alt={article.title} className="blogImage" />
              <div className="blogContent">
                <h3 className="blogPostTitle">{article.title}</h3>
                <p className="blogPostMeta">By {article.author} | {article.date}</p>
                <p className="blogPostExcerpt">{article.excerpt}</p>
                <a href={article.link} className="readMoreLink">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
