'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Clock, Video, Type } from "lucide-react"

type TimelineEntry = {
  timestamp: string
  hook: string
  cameraDetails: {
    movement: string
    angle: string
  }
  textOverlay: string
  action: string
}

type VideoAnalysis = {
  summary: string
  timeline: TimelineEntry[]
}

export default function ScriptResultPage() {
  const searchParams = useSearchParams()
  const [selectedProduct, setSelectedProduct] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  // Parse the analysis data from the query
  const analysis: VideoAnalysis = searchParams.get('analysis') 
    ? JSON.parse(searchParams.get('analysis')!) 
    : null

  const products = [
    { id: '1', name: 'Standing Desk' },
    { id: '2', name: 'Ergonomic Chair' },
    { id: '3', name: 'Laptop Stand' },
  ]

  const handleGenerateScript = async () => {
    setIsGenerating(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)
    // Handle script generation based on analysis and selected product
  }

  if (!analysis) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Video Analysis Report</h1>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{analysis.summary}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timeline Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {analysis.timeline.map((entry, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{entry.timestamp}</span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-start gap-2">
                    <Video className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Hook</p>
                      <p className="text-sm text-muted-foreground">{entry.hook}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Type className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Text Overlay</p>
                      <p className="text-sm text-muted-foreground">{entry.textOverlay}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium">Camera:</span> {entry.cameraDetails.movement}, {entry.cameraDetails.angle}
                  </div>
                </div>
                {index < analysis.timeline.length - 1 && <Separator className="my-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Generate Script</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Select Product</label>
              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={handleGenerateScript} 
              disabled={!selectedProduct || isGenerating}
              className="w-full"
            >
              {isGenerating ? 'Generating Script...' : 'Generate Script for Selected Product'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}