import { PaginationManagerProvider } from "@/context/pagination"
import { UiProvider } from "@/context/ui"

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <UiProvider>
            <PaginationManagerProvider>
                {children}
            </PaginationManagerProvider>
        </UiProvider>
    )
}
