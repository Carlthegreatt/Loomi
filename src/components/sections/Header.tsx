import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="min-h-15 p-2 flex items-center border-b-0 ">
      <div className="mx-20 w-full flex items-center justify-between">
        <div className="flex items-center">
          <p>Loomi</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-white">Login</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}
