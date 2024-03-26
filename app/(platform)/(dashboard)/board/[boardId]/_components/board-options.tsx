"use client";

import { toast } from "sonner";
import { MoreHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";


interface BoardOptionsProps {
    id: string;
}

export const BoardOptions = ({
    id
}: BoardOptionsProps) => {

    const { execute, isLoading } = useAction(deleteBoard, {
        onError: (error) => {
            toast.error(error);
        }
    });

    const onDelete = () => {
        execute({ id });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button 
                    variant="transparent"
                    className="size-auto p-2"
                >
                    <MoreHorizontal className="size-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side="bottom"
                align="start"
                className="px-0 py-3"
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Board actions
                </div>
                <PopoverClose asChild>
                    <Button 
                        className="size-auto p-2 absolute top-2 right-2 text-neutral-600"
                        variant="ghost"
                    >
                        <X className="size-4" />
                    </Button>
                </PopoverClose>
                <Button
                    variant="ghost"
                    onClick={onDelete}
                    disabled={isLoading}
                    className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                >
                    Delete this board
                </Button>
            </PopoverContent>
        </Popover>
    )
}