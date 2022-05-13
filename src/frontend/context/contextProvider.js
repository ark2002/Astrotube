import { AuthProvider } from "./auth-context";
import { ExploreProvider } from "./explore-context";
import { FilterProvider } from "./filter-context";
import { HistoryProvider } from "./history-context";
import { LikesProvider } from "./likes-context";
import { ThemeProvider } from "./theme-context";
import { WatchLaterProvider } from "./watchlater-context";


const ContextProvider = ({ children }) => {

    return (
        <ThemeProvider>
            <AuthProvider>
                <ExploreProvider>
                    <FilterProvider>
                        <LikesProvider>
                            <WatchLaterProvider>
                                <HistoryProvider>
                                    {children}
                                </HistoryProvider>
                            </WatchLaterProvider>
                        </LikesProvider>
                    </FilterProvider>
                </ExploreProvider>
            </AuthProvider>
        </ThemeProvider>
    );
}

export { ContextProvider };