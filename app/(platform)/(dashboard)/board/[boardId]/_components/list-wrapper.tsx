import React from "react"


interface ListWrapperProps {
    children: React.ReactNode;
}

export const ListWrapper = ({
    children
}: ListWrapperProps) => {
    return (
        <li className="h-full shrink-0 w-[272px] select-none">
            {children}
        </li>
    )
}