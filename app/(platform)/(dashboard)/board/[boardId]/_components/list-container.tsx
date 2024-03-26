"use client"

import { ListWithCards } from "@/types";

import { ListForm } from "./list-form";


interface ListContainerProps {
    boardId: string;
    data: ListWithCards[]
}

export const ListContainer = ({
    boardId,
    data
}: ListContainerProps) => {
    return (
        <ol>
            <ListForm />
            <div className="w-1 flex-shrink-0" />
        </ol>
    )
}