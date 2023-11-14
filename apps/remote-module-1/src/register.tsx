import type { FireflyRuntime, ModuleRegisterFunction } from "@squide/firefly";
import { RemotePage } from "./RemotePage.tsx";

function registerRoutes(runtime: FireflyRuntime) {
    runtime.registerRoute({
        path: "/remote",
        element: <RemotePage />
    });

    runtime.registerNavigationItem({
        $label: "Remote page",
        to: "/remote"
    });
}

export const register: ModuleRegisterFunction<FireflyRuntime> = runtime => {
    return registerRoutes(runtime);
};
