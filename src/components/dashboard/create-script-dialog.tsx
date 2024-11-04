'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreateScriptDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [tiktokUrl, setTiktokUrl] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<string>('')

  const handleCreateScript = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedProduct) {
      // You might want to add error handling/messaging here
      return
    }
    // TODO: Implement script creation logic
    console.log('Creating script', { tiktokUrl, selectedProduct })
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Create Script</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Script</DialogTitle>
          <DialogDescription>
            Enter the TikTok URL and select a product to generate a script.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateScript} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tiktokUrl">TikTok URL</Label>
            <Input
              id="tiktokUrl"
              value={tiktokUrl}
              onChange={(e) => setTiktokUrl(e.target.value)}
              placeholder="https://www.tiktok.com/@username/video/1234567890"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="product">Select Product</Label>
            <Select 
              value={selectedProduct}
              onValueChange={setSelectedProduct}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="product1">Product 1</SelectItem>
                <SelectItem value="product2">Product 2</SelectItem>
                <SelectItem value="product3">Product 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">Generate Script</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}