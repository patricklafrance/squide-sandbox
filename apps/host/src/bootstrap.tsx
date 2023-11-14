import { ConsoleLogger, FireflyRuntime, RuntimeContext, registerLocalModules, registerRemoteModules, type RemoteDefinition } from "@squide/firefly";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { registerHost } from "./register.tsx";

const Remotes: RemoteDefinition[] = [
    {
        name: "remote1",
        url: "http://localhost:8081"
    }
];

const runtime = new FireflyRuntime({
    loggers: [new ConsoleLogger()]
});

await registerLocalModules([registerHost], runtime);

await registerRemoteModules(Remotes, runtime);

const root = createRoot(document.getElementById("root")!);

root.render(
    <StrictMode>
        <RuntimeContext.Provider value={runtime}>
            <App />
        </RuntimeContext.Provider>
    </StrictMode>
);
