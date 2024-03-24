"use client";

import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { CreditCard } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {

    const { organization, isLoaded } = useOrganization();

    if ( !isLoaded ) {
        return (
            <Info.Skeleton />
        )
    }

    return (
        <div className="flex items-center gap-x-4">
            <div className="size-[60px] relative">
                <Image 
                    src={organization?.imageUrl!}
                    alt="Organization"
                    fill
                    className="rounded-md object-cover"
                />
            </div>
            <div className="space-y-1">
                <p className="font-semibold text-xl">
                    {organization?.name}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                    <CreditCard className="size-3 mr-1" />
                    Free
                </div>
            </div>
        </div>
    )
}

Info.Skeleton = function SkeletonInfo() {
    return (
        <div className="flex items-center gap-x-4">
            <div className="size-[60px] relative">
                <Skeleton className="size-full absolute" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-10 w-[200px]" />
                <div className="flex items-center">
                    <Skeleton className="size-4 mr-2" />
                    <Skeleton className="h-4 w-[100px]" />
                </div>
            </div>
        </div>
    )
}