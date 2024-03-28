"use client";

import { ElementRef, useRef, useState } from "react";

import { ListWithCards } from "@/types";

import { ListHeader } from "./list-header";
import { CardForm } from "./card-form";


interface ListItemProps {
    index: number;
    data: ListWithCards;
}

export const ListItem = ({
    index,
    data
}: ListItemProps) => {

    const textareaRef = useRef<ElementRef<"textarea">>(null);
    const [isEditing, setIsEditing] = useState(false);

    const enableEditing = () => {
        setIsEditing(true);
        setTimeout(() => {
            textareaRef.current?.focus();
        });
    };
    
    const disableEditing = () => {
        setIsEditing(false);
    };

    return (
        <li className="h-full shrink-0 w-[272px] select-none">
            <div className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
                <ListHeader 
                    data={data}
                    onAddCard={enableEditing}
                />
                <CardForm
                    listId={data.id}
                    ref={textareaRef}
                    isEditing={isEditing}
                    enableEditing={enableEditing}
                    disableEditing={disableEditing}
                />
            </div>
        </li>
    )
}

