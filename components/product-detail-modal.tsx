"use client"

import { useState } from "react"
import { X, Heart, ShoppingCart, Star, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/lib/store"

interface ProductDetailModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: (product: Product, selectedSize: string) => void
  onToggleFavorite: (productId: number) => void
  isFavorite: boolean
}

export function ProductDetailModal({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) return null

  const handleAddToCart = () => {
    const size = selectedSize || product.size[0]
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, size)
    }
    onClose()
  }

  // Mock additional images for demo
  const productImages = [product.image, product.image, product.image]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4 z-10" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-700">
              <img
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-stone-800 dark:border-stone-200"
                      : "border-stone-200 dark:border-stone-600"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                    {product.category} • {product.brand}
                  </p>
                  <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100">{product.name}</h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onToggleFavorite(product.id)}
                  className="text-stone-600 dark:text-stone-300"
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-stone-500 dark:text-stone-400">(127 reviews)</span>
                </div>
                {product.isNew && <Badge className="bg-green-600 text-white">NEW</Badge>}
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-stone-800 dark:text-stone-100">${product.price}</span>
                <span className="text-lg text-stone-500 dark:text-stone-400 line-through">
                  ${Math.round(product.price * 1.2)}
                </span>
                <Badge variant="destructive" className="text-xs">
                  {Math.round(((product.price * 1.2 - product.price) / (product.price * 1.2)) * 100)}% OFF
                </Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-2">Description</h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                  This premium {product.name.toLowerCase()} is crafted from high-quality{" "}
                  {product.material.toLowerCase()}
                  for ultimate comfort and style. Perfect for any occasion, featuring a modern fit and durable
                  construction that will last for years to come.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-stone-800 dark:text-stone-100">Material:</span>
                  <span className="text-stone-600 dark:text-stone-300 ml-2">{product.material}</span>
                </div>
                <div>
                  <span className="font-medium text-stone-800 dark:text-stone-100">Color:</span>
                  <span className="text-stone-600 dark:text-stone-300 ml-2">{product.color}</span>
                </div>
                <div>
                  <span className="font-medium text-stone-800 dark:text-stone-100">Gender:</span>
                  <span className="text-stone-600 dark:text-stone-300 ml-2">{product.gender}</span>
                </div>
                <div>
                  <span className="font-medium text-stone-800 dark:text-stone-100">Brand:</span>
                  <span className="text-stone-600 dark:text-stone-300 ml-2">{product.brand}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-3">
                Size: {selectedSize && <span className="font-normal">({selectedSize})</span>}
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                      selectedSize === size
                        ? "bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 border-stone-800 dark:border-stone-200"
                        : "bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-stone-800 dark:text-stone-100 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
                size="lg"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-1 text-stone-600 dark:text-stone-300">
                  <Truck className="h-3 w-3" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1 text-stone-600 dark:text-stone-300">
                  <RotateCcw className="h-3 w-3" />
                  <span>30-Day Return</span>
                </div>
                <div className="flex items-center gap-1 text-stone-600 dark:text-stone-300">
                  <Shield className="h-3 w-3" />
                  <span>2-Year Warranty</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-stone-50 dark:bg-stone-700 rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-stone-800 dark:text-stone-100 text-sm">Delivery Information</h4>
              <div className="text-xs text-stone-600 dark:text-stone-300 space-y-1">
                <p>• Standard delivery: 3-5 business days</p>
                <p>• Express delivery: 1-2 business days</p>
                <p>• Free shipping on orders over $75</p>
                <p>• Easy returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
