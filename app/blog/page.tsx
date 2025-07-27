export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Spring Fashion Trends 2024",
      excerpt: "Discover the latest spring trends that will define your wardrobe this season.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 15, 2024",
      category: "Trends",
    },
    {
      id: 2,
      title: "Sustainable Fashion: A Complete Guide",
      excerpt: "Learn how to build a sustainable wardrobe without compromising on style.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 10, 2024",
      category: "Sustainability",
    },
    {
      id: 3,
      title: "How to Style Denim for Every Occasion",
      excerpt: "From casual to formal, discover versatile ways to wear denim.",
      image: "/placeholder.svg?height=300&width=400",
      date: "March 5, 2024",
      category: "Style Guide",
    },
    {
      id: 4,
      title: "Building a Capsule Wardrobe",
      excerpt: "Create a minimalist wardrobe with maximum impact and versatility.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 28, 2024",
      category: "Minimalism",
    },
    {
      id: 5,
      title: "Color Psychology in Fashion",
      excerpt: "Understand how colors affect your mood and the impression you make.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 20, 2024",
      category: "Psychology",
    },
    {
      id: 6,
      title: "Accessorizing 101: Complete Guide",
      excerpt: "Master the art of accessorizing to elevate any outfit.",
      image: "/placeholder.svg?height=300&width=400",
      date: "February 15, 2024",
      category: "Accessories",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">Fashion Blog</h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
            Stay updated with the latest fashion trends, styling tips, and industry insights from our fashion experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-stone-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-stone-500 dark:text-stone-400">{post.date}</span>
                  <span className="text-xs bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-3 hover:text-stone-600 dark:hover:text-stone-300 transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <button className="text-stone-800 dark:text-stone-200 font-medium hover:text-stone-600 dark:hover:text-stone-400 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-stone-100 dark:bg-stone-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Never Miss a Post</h2>
          <p className="text-stone-600 dark:text-stone-300 mb-6 max-w-md mx-auto">
            Subscribe to our blog newsletter and get the latest fashion insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
            <button className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 text-white px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
