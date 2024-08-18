import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function AuthForm({ className, ...props }) {
  return (
    <form className={cn("w-fit mx-auto h-full space-y-2", className)} {...props}>
      <div className="space-y-1">
        <Input label="username" />
        <Input label="password" type="password" />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}
