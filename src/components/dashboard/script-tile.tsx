'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Heart, MessageCircle } from 'lucide-react'

interface ScriptTileProps {
  title: string
  views: number
  likes: number
  comments: number
  thumbnailUrl: string
}

export function ScriptTile({ title, views, likes, comments, thumbnailUrl }: ScriptTileProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={thumbnailUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2 truncate">{title}</CardTitle>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{views.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            <span>{likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            <span>{comments.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}