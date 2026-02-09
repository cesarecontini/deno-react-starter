import { Button } from "@/components/ui/button";
import { useApiGetCountries } from "@/hooks/use-api-get-countries";
import { useNavigate } from "@tanstack/react-router";

// Define the Home Component
export function Countries() {

  const navigate = useNavigate();

  const { data: countries } = useApiGetCountries();

  console.log("countries", countries);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <ul>
        {countries?.map((country: any) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
      <Button onClick={() => navigate({ to: "/" })}>Back to Home</Button>
    </div>
  )
}