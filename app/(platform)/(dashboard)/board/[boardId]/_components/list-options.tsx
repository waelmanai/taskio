"use client";

import { ElementRef, useRef } from "react";
import { List } from "@prisma/client";
import { toast } from "sonner";
import { MoreHorizontal, X } from "lucide-react";

import { 
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverClose 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormSubmit } from "@/components/form/form-submit";

import { useAction } from "@/hooks/use-action";
import { deleteList } from "@/actions/delete-list";


interface ListOptionsProps {
    data: List;
    onAddCard: () => void;
}

export const ListOptions = ({
    data,
    onAddCard
}: ListOptionsProps) => {

    const closeRef = useRef<ElementRef<"button">>(null);

    const { execute: executeDelete } = useAction(deleteList, {
        onSuccess: (data) => {
            toast.success(`List "${data.title}" deleted`);
            closeRef.current?.click();
        },
        onError: (error) => {
            toast.error(error);
        }
    });

    const onDelete = (formData: FormData) => {
        const id = formData.get("id") as string;
        const boardId = formData.get("boardId") as string;

        executeDelete({ id, boardId });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="size-auto p-2"
                    variant="ghost"
                >
                    <MoreHorizontal className="size-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="px-0 pt-3 pb-3"
                side="bottom"
                align="start"
            >
                <div className="text-sm font-medium text-center text-neutral-600 pb-4">
                    List actions
                </div>
                <PopoverClose ref={closeRef} asChild>
                    <Button 
                        className="absolute top-2 right-3 size-auto p-2 text-neutral-600"
                        variant="ghost"
                    >
                        <X className="size-4" />
                    </Button>
                </PopoverClose>
                <Button
                    onClick={onAddCard}
                    className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                    variant="ghost"
                >
                    Add card...
                </Button>
                <form>
                    <input hidden name="id" id="id" value={data.id} />
                    <input hidden name="boardId" id="boardId" value={data.boardId} />
                    <FormSubmit
                        className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                        variant="ghost"
                    >
                        Copy list...
                    </FormSubmit>
                </form>
                <Separator />
                <form
                    action={onDelete}
                >
                    <input hidden name="id" id="id" value={data.id} />
                    <input hidden name="boardId" id="boardId" value={data.boardId} />
                    <FormSubmit
                        className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                        variant="ghost"
                    >
                        Delete this list
                    </FormSubmit>
                </form>
            </PopoverContent>
        </Popover>
    )
}