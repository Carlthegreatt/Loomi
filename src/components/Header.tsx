import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="min-h-10 bg-black flex">
      <h1 className="text-white">Loomi</h1>
      <div>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}
