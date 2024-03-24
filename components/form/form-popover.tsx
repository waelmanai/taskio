"use client";

import { toast } from "sonner";
import { X } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
    PopoverClose
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

import { FormInput } from "./form-input";
import { FormSubmit } from "./form-submit";

interface FormPopoverProps {
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    sideOffset?: number;
    align?: "start" | "center" | "end";
}

export const FormPopover = ({
    children,
    side = "bottom",
    sideOffset = 0,
    align
}: FormPopoverProps) => {

    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log({ data });
            toast.success("Board created!");
        },
        onError: (error) => {
            console.log({ error });
            toast.error(error);
        } 
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;

        execute({ title });
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent
                align={align}
                side={side}
                sideOffset={sideOffset}
                className="w-80 pt-3"
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    Create board
                </div>
                <PopoverClose asChild>
                    <Button
                        className="size-auto p-2 absolute top-2 right-2 text-neutral-600"
                        variant="ghost"
                    >
                        <X className="size-4" />
                    </Button>
                </PopoverClose>
                <form action={onSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <FormInput 
                            id="title"
                            label="Board title"
                            type="text"
                            errors={fieldErrors}
                        />
                    </div>
                    <FormSubmit className="w-full">
                        Create
                    </FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    )
}