"use client"

import { useState } from "react"
import { Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FilterSection } from "@/components/filter-section"
import { useStore, products } from "@/lib/store"

export default function FashionStore() {
  const [selectedGenders, setSelectedGenders] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<number[]>([0, 500])
  const [sortBy, setSortBy] = useState<string>("popular")

  const { favorites, toggleFavorite, addToCart } = useStore()

  const handleGenderFilter = (gender: string) => {
    setSelectedGenders((prev) => (prev.includes(gender) ? prev.filter((g) => g !== gender) : [...prev, gender]))
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleColorFilter = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const handleSizeFilter = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const handleBrandFilter = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const handleMaterialFilter = (material: string) => {
    setSelectedMaterials((prev) => (prev.includes(material) ? prev.filter((m) => m !== material) : [...prev, material]))
  }

  const clearFilters = () => {
    setSelectedGenders([])
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setSelectedBrands([])
    setSelectedMaterials([])
    setPriceRange([0, 500])
    setSortBy("popular")
  }

  const filteredProducts = products.filter((product) => {
    const matchesGender = selectedGenders.length === 0 || selectedGenders.includes(product.gender)
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
    const matchesSize = selectedSizes.length === 0 || product.size.some((size) => selectedSizes.includes(size))
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const matchesMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return (
      matchesGender && matchesCategory && matchesColor && matchesSize && matchesBrand && matchesMaterial && matchesPrice
    )
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.isNew ? 1 : -1
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return b.rating - a.rating // Default to popular (by rating)
    }
  })

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors">
      {/* Filter Section */}
      

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-stone-100 to-stone-200 dark:from-stone-800 dark:to-stone-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 dark:text-stone-100 mb-6">
            Fashion
            <br />
            <span className="text-stone-600 dark:text-stone-300">Forward</span>
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the latest trends and timeless classics in our curated collection of fashion-forward clothing and
            accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 px-8"
            >
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 px-8 bg-transparent"
            >
              View Trends
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-2">Our Collection</h2>
              <p className="text-stone-600 dark:text-stone-300">{sortedProducts.length} products found</p>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-stone-500 dark:text-stone-400 text-lg">No products found matching your criteria.</p>
              <Button variant="outline" className="mt-4 bg-transparent" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-700 mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <Badge className="bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 text-xs">
                        {product.gender}
                      </Badge>
                      {product.isNew && <Badge className="bg-green-600 text-white text-xs">NEW</Badge>}
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/80 dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 h-8 w-8"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            favorites.some((f) => f.id === product.id)
                              ? "fill-red-500 text-red-500"
                              : "text-stone-600 dark:text-stone-300"
                          }`}
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-white/80 dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 h-8 w-8"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 text-stone-600 dark:text-stone-300" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                        {product.category}
                      </p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-stone-600 dark:text-stone-300">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-stone-800 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-stone-800 dark:text-stone-100">${product.price}</p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-stone-500 dark:text-stone-400">{product.brand}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-stone-500 dark:text-stone-400">Available sizes:</span>
                      <div className="flex gap-1">
                        {product.size.slice(0, 3).map((size) => (
                          <span key={size} className="text-xs bg-stone-200 dark:bg-stone-600 px-1 py-0.5 rounded">
                            {size}
                          </span>
                        ))}
                        {product.size.length > 3 && (
                          <span className="text-xs text-stone-500 dark:text-stone-400">+{product.size.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-stone-100 dark:bg-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 mb-4">Stay Fashion Forward</h2>
          <p className="text-stone-600 dark:text-stone-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and fashion
            trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
            <Button className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 dark:bg-stone-900 text-white py-12 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Fashion Store</h3>
              <p className="text-stone-300 mb-4">
                Your destination for the latest fashion trends and timeless classics. Quality, style, and affordability
                in every piece.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-stone-300">
                <li>
                  <a href="/men" className="hover:text-white transition-colors">
                    Men's Collection
                  </a>
                </li>
                <li>
                  <a href="/women" className="hover:text-white transition-colors">
                    Women's Collection
                  </a>
                </li>
                <li>
                  <a href="/kids" className="hover:text-white transition-colors">
                    Kids Collection
                  </a>
                </li>
                <li>
                  <a href="/sale" className="hover:text-white transition-colors">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-stone-300">
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/size-guide" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="/returns" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-stone-300">
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2024 Fashion Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
