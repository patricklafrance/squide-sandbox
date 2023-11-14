import { AppRouter } from "@squide/firefly";

export function App() {
    return (
        <AppRouter
            fallbackElement={<div>Loading...</div>}
            errorElement={<div>An error happened!</div>}
            waitForMsw={false}
        />
    );
}
