import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

export const SkeletonDetail = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex justify-center">
        <Skeleton className="h-[570px] w-[450px] rounded-xl" />
      </div>
      <div className="flex flex-col gap-3">
        <Card className="p-3">
          <div className="space-y-3">
            {[...Array(16)].map((_, idx) => (
              <Skeleton className="h-4 w-[250px]" key={idx} />
            ))}
          </div>
        </Card>
        <Card className="p-3">
          <div className="space-y-3">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-8 w-[100px]" />
            <Skeleton className="h-8 w-[100px]" />
          </div>
        </Card>
      </div>
    </div>
  );
};
