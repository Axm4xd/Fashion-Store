"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, ShoppingBag, User, Search, Menu, X, Plus, Minus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { useStore } from "@/lib/store"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const { favorites, cartItems, toggleFavorite, updateCartQuantity, removeFromCart } = useStore()

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 fixed top-0 left-0 right-0 z-50 transition-colors shadow-sm">
      <div className="container mx-auto px-4 py-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-stone-800 dark:text-stone-100">
            Fashion Store
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-stone-800 dark:text-stone-100"
                    : "text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />

            {/* Favorites */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800">
                      {favorites.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white dark:bg-stone-800">
                <SheetHeader>
                  <SheetTitle className="dark:text-stone-100">Favorites</SheetTitle>
                  <SheetDescription className="dark:text-stone-300">Items you've saved for later</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {favorites.length === 0 ? (
                    <p className="text-stone-500 dark:text-stone-400 text-center py-8">No favorites yet</p>
                  ) : (
                    favorites.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-3 p-3 border border-stone-200 dark:border-stone-600 rounded-lg"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-15 h-20 rounded object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-stone-800 dark:text-stone-100">{item.name}</h4>
                          <p className="text-stone-600 dark:text-stone-300">${item.price}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => toggleFavorite(item.id)}>
                          <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Shopping Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800">
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white dark:bg-stone-800">
                <SheetHeader>
                  <SheetTitle className="dark:text-stone-100">Shopping Cart</SheetTitle>
                  <SheetDescription className="dark:text-stone-300">Review your selected items</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cartItems.length === 0 ? (
                    <p className="text-stone-500 dark:text-stone-400 text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 p-3 border border-stone-200 dark:border-stone-600 rounded-lg"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-15 h-20 rounded object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-stone-800 dark:text-stone-100">{item.name}</h4>
                            <p className="text-stone-600 dark:text-stone-300">${item.price}</p>
                            <p className="text-xs text-stone-500 dark:text-stone-400">Size: {item.selectedSize}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 bg-transparent"
                                onClick={() => updateCartQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium dark:text-stone-200">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6 bg-transparent"
                                onClick={() => updateCartQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      ))}
                      <div className="border-t border-stone-200 dark:border-stone-600 pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-semibold dark:text-stone-100">Total: ${cartTotal}</span>
                        </div>
                        <Button className="w-full bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300">
                          Checkout
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* User Account */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white dark:bg-stone-800">
                <DialogHeader>
                  <DialogTitle className="dark:text-stone-100">Account</DialogTitle>
                  <DialogDescription className="dark:text-stone-300">
                    Sign in to your account or create a new one
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="dark:text-stone-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="dark:bg-stone-700 dark:border-stone-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="dark:text-stone-200">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="dark:bg-stone-700 dark:border-stone-600"
                      />
                    </div>
                    <Button className="w-full bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300">
                      Sign In
                    </Button>
                    <p className="text-sm text-center text-stone-600 dark:text-stone-400">
                      <Link href="/forgot-password" className="hover:underline">
                        Forgot your password?
                      </Link>
                    </p>
                  </TabsContent>
                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="dark:text-stone-200">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="dark:bg-stone-700 dark:border-stone-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="dark:text-stone-200">
                        Email
                      </Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="dark:bg-stone-700 dark:border-stone-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="dark:text-stone-200">
                        Password
                      </Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Create a password"
                        className="dark:bg-stone-700 dark:border-stone-600"
                      />
                    </div>
                    <Button className="w-full bg-stone-800 hover:bg-stone-700 dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300">
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-4">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 h-5 w-5" />
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg bg-stone-100 dark:bg-stone-700 border-stone-200 dark:border-stone-600 focus:border-stone-400 dark:focus:border-stone-400 rounded-full"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-stone-200 dark:border-stone-700 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    pathname === link.href
                      ? "text-stone-800 dark:text-stone-100"
                      : "text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
