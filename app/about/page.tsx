export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-8 text-center">
            About MODERNO
          </h1>

          <div className="prose prose-stone dark:prose-invert max-w-none">
            <div className="text-center mb-12">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="MODERNO Store"
                className="w-full h-64 object-cover rounded-lg mb-8"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Our Story</h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  Founded in 2020, MODERNO emerged from a simple belief: fashion should be timeless, sustainable, and
                  accessible to everyone. We started as a small boutique with a vision to curate contemporary pieces
                  that transcend seasonal trends.
                </p>
                <p className="text-stone-600 dark:text-stone-300">
                  Today, we've grown into a modern fashion destination that serves customers worldwide, while
                  maintaining our commitment to quality, craftsmanship, and ethical practices.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Our Mission</h2>
                <p className="text-stone-600 dark:text-stone-300 mb-4">
                  We believe that great style shouldn't come at the expense of our planet or our values. That's why we
                  partner with ethical manufacturers and sustainable brands to bring you clothing that looks good and
                  feels good.
                </p>
                <p className="text-stone-600 dark:text-stone-300">
                  Our mission is to make contemporary fashion accessible while promoting conscious consumption and
                  supporting artisans around the world.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Quality</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    Every piece is carefully selected for its craftsmanship and durability.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Sustainability</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    We prioritize eco-friendly materials and ethical production practices.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-100 mb-2">Style</h3>
                  <p className="text-stone-600 dark:text-stone-300">
                    Timeless designs that complement your individual style and lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Join Our Community</h2>
              <p className="text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
                Follow us on social media and be part of a community that celebrates individual style, sustainable
                fashion, and conscious living.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 px-6 py-2 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors">
                  Instagram
                </button>
                <button className="bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 px-6 py-2 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors">
                  Facebook
                </button>
                <button className="bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 px-6 py-2 rounded-lg hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
