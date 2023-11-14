import { ManagedRoutes, type FireflyRuntime, type ModuleRegisterFunction } from "@squide/firefly";
import { HomePage } from "./HomePage.tsx";
import { Layout } from "./Layout.tsx";

function registerRoutes(runtime: FireflyRuntime) {
    runtime.registerRoute({
        element: <Layout />,
        children: [
            ManagedRoutes
        ]
    }, {
        hoist: true
    });

    runtime.registerRoute({
        index: true,
        element: <HomePage />
    });

    runtime.registerNavigationItem({
        $label: "Home",
        $priority: 999,
        to: "/"
    });
}

export const registerHost: ModuleRegisterFunction<FireflyRuntime> = async runtime => {
    return registerRoutes(runtime);
};
