'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"

export function CreateScriptDialog() {
  const router = useRouter()
  const [tiktokUrl, setTiktokUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsOpen(false)
    
    // Navigate to results page with mock analysis data
    const queryParams = new URLSearchParams({
      videoUrl: tiktokUrl,
      analysis: JSON.stringify({
        summary: "The video shows a woman unboxing and setting up a new monitor. She is excited about her new monitor and can't wait to use it for work. The video is well-lit and has a chill lofi hip-hop beat playing in the background.",
        timeline: [
          {
            timestamp: "00:00-00:05",
            hook: "A woman is standing in front of a desk with a large box labeled 'monitor upgrade.'",
            cameraDetails: { movement: "static", angle: "medium shot" },
            textOverlay: "monitor upgrade",
            action: "The woman is looking at the box with a surprised expression."
          },
          // Additional timeline entries would go here
        ]
      })
    }).toString()
    
    router.push(`/dashboard/script-result?${queryParams}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Create New Script</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Analyze TikTok Video</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tiktokUrl">TikTok Video URL</Label>
            <Input
              id="tiktokUrl"
              placeholder="https://www.tiktok.com/@username/video/..."
              value={tiktokUrl}
              onChange={(e) => setTiktokUrl(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Video...
              </>
            ) : (
              'Start Analysis'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}