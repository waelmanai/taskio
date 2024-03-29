"use client";

import { ElementRef, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";

import { ListHeader } from "./list-header";
import { CardForm } from "./card-form";
import { CardItem } from "./card-item";


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
                <ol
                    className={cn(
                        "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                        data.cards.length > 0 ? "mt-2" : "mt-0"
                    )}
                >
                    {data.cards.map((card, index) => (
                        <CardItem 
                            key={card.id}
                            index={index}
                            data={card}
                        />
                    ))}
                </ol>
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

