'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, X } from 'lucide-react'

export function CreateProductDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [productName, setProductName] = useState('')
  const [targetGroup, setTargetGroup] = useState('')
  const [uniqueFeatures, setUniqueFeatures] = useState(['', '', ''])

  const handleAddFeature = () => {
    setUniqueFeatures([...uniqueFeatures, ''])
  }

  const handleRemoveFeature = (index: number) => {
    const newFeatures = uniqueFeatures.filter((_, i) => i !== index)
    setUniqueFeatures(newFeatures)
  }

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...uniqueFeatures]
    newFeatures[index] = value
    setUniqueFeatures(newFeatures)
  }

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement product creation logic
    console.log('Creating product', { productName, uniqueFeatures, targetGroup })
    setIsOpen(false)
    // Reset form
    setProductName('')
    setTargetGroup('')
    setUniqueFeatures(['', '', ''])
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Create Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Enter the details of your new product.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateProduct} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="productName">Product Name</Label>
            <Input
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Unique Features</Label>
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="relative group">
                <Input
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                  required={index < 3}
                  className="pr-10"
                />
                {index >= 3 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveFeature(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            {uniqueFeatures.length < 5 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={handleAddFeature}
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Feature
              </Button>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="targetGroup">Target Group</Label>
            <Input
              id="targetGroup"
              value={targetGroup}
              onChange={(e) => setTargetGroup(e.target.value)}
              placeholder="Enter target group"
              required
            />
          </div>
          <Button type="submit" className="w-full">Create Product</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}