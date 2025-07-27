import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-100 mb-4">Contact Us</h1>
            <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 text-white py-3 rounded-lg transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-stone-600 dark:text-stone-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-stone-800 dark:text-stone-100">Email</h3>
                      <p className="text-stone-600 dark:text-stone-300">hello@moderno.com</p>
                      <p className="text-stone-600 dark:text-stone-300">support@moderno.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-stone-600 dark:text-stone-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-stone-800 dark:text-stone-100">Phone</h3>
                      <p className="text-stone-600 dark:text-stone-300">+1 (555) 123-4567</p>
                      <p className="text-stone-600 dark:text-stone-300">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-stone-600 dark:text-stone-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-stone-800 dark:text-stone-100">Address</h3>
                      <p className="text-stone-600 dark:text-stone-300">
                        123 Fashion Street
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-stone-600 dark:text-stone-400 mt-1" />
                    <div>
                      <h3 className="font-medium text-stone-800 dark:text-stone-100">Business Hours</h3>
                      <p className="text-stone-600 dark:text-stone-300">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white dark:bg-stone-800 rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-100 mb-2">What is your return policy?</h3>
                    <p className="text-stone-600 dark:text-stone-300 text-sm">
                      We offer a 30-day return policy for all unworn items with original tags.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-100 mb-2">
                      Do you ship internationally?
                    </h3>
                    <p className="text-stone-600 dark:text-stone-300 text-sm">
                      Yes, we ship to over 50 countries worldwide. Shipping costs vary by location.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 dark:text-stone-100 mb-2">How can I track my order?</h3>
                    <p className="text-stone-600 dark:text-stone-300 text-sm">
                      You'll receive a tracking number via email once your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
