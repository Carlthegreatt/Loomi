import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 min-h-15 p-2 bg-[#0a0a0a] flex items-center border-b-0 w-full">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="font-bold flex items-center">
          <p>Loomi</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-white">Login</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
