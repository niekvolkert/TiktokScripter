import { CreateScriptDialog } from "@/components/dashboard/create-script-dialog"

export default function ScriptsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Scripts</h1>
        <CreateScriptDialog />
      </div>
      <div className="grid gap-4">
        {/* Scripts list will go here */}
        <p>No scripts found. Generate your first script to get started.</p>
      </div>
    </div>
  )
} 