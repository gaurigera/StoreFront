import { cn } from "@/lib/utils";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Rating({ className, children, width, props }) {
  return (
    <div
      className={cn("flex gap-0.5 text-white w-fit p-1 rounded-lg text-xs", className)}
      {...props}
    >
      <StarFilledIcon width={width} />
      {children}
    </div>
  );
}
