"use client"

import { useState } from "react"
import { Filter, ChevronDown, X, User, Shirt, Palette, Ruler, Tag, Scissors, DollarSign, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

interface FilterSectionProps {
  selectedGenders: string[]
  selectedCategories: string[]
  selectedColors: string[]
  selectedSizes: string[]
  selectedBrands: string[]
  selectedMaterials: string[]
  priceRange: number[]
  sortBy: string
  onGenderChange: (gender: string) => void
  onCategoryChange: (category: string) => void
  onColorChange: (color: string) => void
  onSizeChange: (size: string) => void
  onBrandChange: (brand: string) => void
  onMaterialChange: (material: string) => void
  onPriceRangeChange: (range: number[]) => void
  onSortChange: (sort: string) => void
  onClearFilters: () => void
}

const filterOptions = {
  genders: ["Men", "Women", "Kids", "Unisex"],
  categories: [
    "T-shirts",
    "Shirts",
    "Dresses",
    "Jeans",
    "Skirts",
    "Shorts",
    "Jackets",
    "Coats",
    "Sweaters",
    "Hoodies",
    "Suits",
    "Sportswear",
    "Accessories",
  ],
  colors: ["White", "Black", "Beige", "Blue", "Red", "Green", "Brown", "Pink", "Gray", "Orange"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "One Size", "Custom Size"],
  brands: ["Zara", "H&M", "Mango", "Nike", "Adidas", "Bershka", "LC Waikiki", "Puma", "Stradivarius", "Pull&Bear"],
  materials: ["Cotton", "Linen", "Silk", "Wool", "Polyester", "Denim", "Leather", "Satin", "Viscose", "Knit"],
  sortOptions: [
    { value: "popular", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Best Rating" },
  ],
}

const colorMap: { [key: string]: string } = {
  White: "bg-white border-2 border-gray-300",
  Black: "bg-black",
  Beige: "bg-amber-100",
  Blue: "bg-blue-500",
  Red: "bg-red-500",
  Green: "bg-green-500",
  Brown: "bg-amber-800",
  Pink: "bg-pink-400",
  Gray: "bg-gray-500",
  Orange: "bg-orange-500",
}

export function FilterSection({
  selectedGenders,
  selectedCategories,
  selectedColors,
  selectedSizes,
  selectedBrands,
  selectedMaterials,
  priceRange,
  sortBy,
  onGenderChange,
  onCategoryChange,
  onColorChange,
  onSizeChange,
  onBrandChange,
  onMaterialChange,
  onPriceRangeChange,
  onSortChange,
  onClearFilters,
}: FilterSectionProps) {
  const [isDesktopFilterOpen, setIsDesktopFilterOpen] = useState(false)

  const totalFilters =
    selectedGenders.length +
    selectedCategories.length +
    selectedColors.length +
    selectedSizes.length +
    selectedBrands.length +
    selectedMaterials.length

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Gender Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <User className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Gender</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filterOptions.genders.map((gender) => (
            <div key={gender} className="flex items-center space-x-2">
              <Checkbox
                id={`gender-${gender}`}
                checked={selectedGenders.includes(gender)}
                onCheckedChange={() => onGenderChange(gender)}
              />
              <Label htmlFor={`gender-${gender}`} className="text-stone-600 dark:text-stone-300 cursor-pointer text-sm">
                {gender}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shirt className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Category</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
          {filterOptions.categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label
                htmlFor={`category-${category}`}
                className="text-stone-600 dark:text-stone-300 cursor-pointer text-sm"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Palette className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Color</h3>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {filterOptions.colors.map((color) => (
            <div key={color} className="flex flex-col items-center space-y-1">
              <button
                onClick={() => onColorChange(color)}
                className={`w-8 h-8 rounded-full ${colorMap[color]} ${
                  selectedColors.includes(color)
                    ? "ring-2 ring-stone-800 dark:ring-stone-200 ring-offset-2"
                    : "hover:ring-1 hover:ring-stone-400"
                } transition-all`}
              />
              <Label className="text-xs text-stone-600 dark:text-stone-300 text-center">{color}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Ruler className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Size</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {filterOptions.sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
                selectedSizes.includes(size)
                  ? "bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800 border-stone-800 dark:border-stone-200"
                  : "bg-white dark:bg-stone-700 text-stone-600 dark:text-stone-300 border-stone-300 dark:border-stone-600 hover:bg-stone-50 dark:hover:bg-stone-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Tag className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Brand</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
          {filterOptions.brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => onBrandChange(brand)}
              />
              <Label htmlFor={`brand-${brand}`} className="text-stone-600 dark:text-stone-300 cursor-pointer text-sm">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Scissors className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Material (Fabric)</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filterOptions.materials.map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                id={`material-${material}`}
                checked={selectedMaterials.includes(material)}
                onCheckedChange={() => onMaterialChange(material)}
              />
              <Label
                htmlFor={`material-${material}`}
                className="text-stone-600 dark:text-stone-300 cursor-pointer text-sm"
              >
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-4 w-4 text-stone-600 dark:text-stone-400" />
          <h3 className="font-semibold text-stone-800 dark:text-stone-100">Price Range (USD)</h3>
        </div>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={onPriceRangeChange} max={500} min={0} step={5} className="w-full" />
          <div className="flex justify-between text-sm text-stone-600 dark:text-stone-300">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => onPriceRangeChange([0, 25])}
              className="px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded hover:bg-stone-200 dark:hover:bg-stone-600"
            >
              $0 – $25
            </button>
            <button
              onClick={() => onPriceRangeChange([25, 50])}
              className="px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded hover:bg-stone-200 dark:hover:bg-stone-600"
            >
              $25 – $50
            </button>
            <button
              onClick={() => onPriceRangeChange([50, 100])}
              className="px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded hover:bg-stone-200 dark:hover:bg-stone-600"
            >
              $50 – $100
            </button>
            <button
              onClick={() => onPriceRangeChange([100, 200])}
              className="px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded hover:bg-stone-200 dark:hover:bg-stone-600"
            >
              $100 – $200
            </button>
            <button
              onClick={() => onPriceRangeChange([200, 500])}
              className="px-2 py-1 bg-stone-100 dark:bg-stone-700 rounded hover:bg-stone-200 dark:hover:bg-stone-600"
            >
              $200+
            </button>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      {totalFilters > 0 && (
        <div className="pt-4 border-t border-stone-200 dark:border-stone-600">
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="w-full bg-transparent border-stone-300 dark:border-stone-600"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All Filters ({totalFilters})
          </Button>
        </div>
      )}
    </div>
  )

  return (
    <section className="bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 transition-colors sticky top-32 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-6">
        {/* Sort By Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-stone-600 dark:text-stone-400" />
              <Label className="font-semibold text-stone-800 dark:text-stone-100">Sort by:</Label>
            </div>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-48 bg-stone-50 dark:bg-stone-700">
                <SelectValue placeholder="Select sorting" />
              </SelectTrigger>
              <SelectContent>
                {filterOptions.sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {totalFilters > 0 && (
            <Button
              variant="ghost"
              onClick={onClearFilters}
              className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100"
            >
              <X className="h-4 w-4 mr-2" />
              Clear All ({totalFilters})
            </Button>
          )}
        </div>

        {/* Desktop Filter */}
        <div className="hidden md:block">
          <Collapsible open={isDesktopFilterOpen} onOpenChange={setIsDesktopFilterOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-stone-50 dark:bg-stone-700 border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-600 w-full md:w-auto"
              >
                <Filter className="h-5 w-5" />
                Filter Products
                {totalFilters > 0 && (
                  <Badge className="ml-2 bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800">
                    {totalFilters}
                  </Badge>
                )}
                <ChevronDown className={`h-4 w-4 transition-transform ${isDesktopFilterOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-6">
              <div className="bg-stone-50 dark:bg-stone-700 rounded-xl p-6 border border-stone-200 dark:border-stone-600">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  <FilterContent />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Mobile Filter */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-stone-50 dark:bg-stone-700 border-stone-300 dark:border-stone-600 w-full justify-center"
              >
                <Filter className="h-5 w-5" />
                Filter Products
                {totalFilters > 0 && (
                  <Badge className="ml-2 bg-stone-800 dark:bg-stone-200 text-white dark:text-stone-800">
                    {totalFilters}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white dark:bg-stone-800 w-80 sm:w-96">
              <SheetHeader className="pb-6">
                <SheetTitle className="dark:text-stone-100 text-xl">Filter Products</SheetTitle>
                <SheetDescription className="dark:text-stone-300">
                  Select your preferences to filter products
                </SheetDescription>
              </SheetHeader>
              <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Active Filters Display */}
        {totalFilters > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-medium text-stone-700 dark:text-stone-300">Active Filters:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedGenders.map((gender) => (
                <Badge
                  key={`gender-${gender}`}
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 cursor-pointer"
                  onClick={() => onGenderChange(gender)}
                >
                  👤 {gender}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
              {selectedCategories.map((category) => (
                <Badge
                  key={`category-${category}`}
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 cursor-pointer"
                  onClick={() => onCategoryChange(category)}
                >
                  👗 {category}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
              {selectedColors.map((color) => (
                <Badge
                  key={`color-${color}`}
                  variant="secondary"
                  className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 cursor-pointer"
                  onClick={() => onColorChange(color)}
                >
                  🎨 {color}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
              {selectedSizes.map((size) => (
                <Badge
                  key={`size-${size}`}
                  variant="secondary"
                  className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 cursor-pointer"
                  onClick={() => onSizeChange(size)}
                >
                  📏 {size}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
              {selectedBrands.map((brand) => (
                <Badge
                  key={`brand-${brand}`}
                  variant="secondary"
                  className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 cursor-pointer"
                  onClick={() => onBrandChange(brand)}
                >
                  🏷️ {brand}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
              {selectedMaterials.map((material) => (
                <Badge
                  key={`material-${material}`}
                  variant="secondary"
                  className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 cursor-pointer"
                  onClick={() => onMaterialChange(material)}
                >
                  🧵 {material}
                  <X className="h-3 w-3 ml-2" />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
