import { Button } from "@/components/ui/button";
import { useApiGetHealth } from "@/hooks/use-api-get-health";
import { useNavigate } from "@tanstack/react-router";

// Define the Home Component
export function Home() {

  const navigate = useNavigate();

  const { data: health } = useApiGetHealth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="mb-4">Welcome to the app! Health: {health?.message}</p>
      <Button onClick={() => navigate({ to: "/countries" })}>Click me to go to countries</Button>
    </div>
  )
}