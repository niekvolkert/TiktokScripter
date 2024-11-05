'use client'

import { ScriptTile } from '@/components/dashboard/script-tile'

const sampleScripts = [
  {
    id: 1,
    title: "How to make viral TikTok ads",
    views: 1000000,
    likes: 50000,
    comments: 5000,
    thumbnailUrl: "https://picsum.photos/seed/script1/400/300",
  },
  {
    id: 2,
    title: "5 tips for engaging product videos",
    views: 500000,
    likes: 25000,
    comments: 2500,
    thumbnailUrl: "https://picsum.photos/seed/script2/400/300",
  },
  {
    id: 3,
    title: "Creating eye-catching thumbnails",
    views: 750000,
    likes: 35000,
    comments: 3500,
    thumbnailUrl: "https://picsum.photos/seed/script3/400/300",
  },
  // Add more sample scripts as needed
]

export function ScriptsContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Scripts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleScripts.map((script) => (
          <ScriptTile
            key={script.id}
            title={script.title}
            views={script.views}
            likes={script.likes}
            comments={script.comments}
            thumbnailUrl={script.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  )
}