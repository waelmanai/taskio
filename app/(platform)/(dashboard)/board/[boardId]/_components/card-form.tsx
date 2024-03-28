"use client";

import { forwardRef } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CardFormProps {
    listId: string;
    isEditing: boolean;
    enableEditing: () => void;
    disableEditing: () => void;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
    listId,
    isEditing,
    enableEditing,
    disableEditing
}, ref) => {
    return (
        <div className="pt-2 px-2">
            <Button
                className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
                size="sm"
                variant="ghost"
                onClick={enableEditing}
            >
                <Plus className="size-4 mr-2" />
                Add a card    
            </Button>            
        </div>
    )
});

CardForm.displayName = "CardForm";