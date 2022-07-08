import UiLayout from "@/ui/layout/Layout";

const components = {
    UiLayout,
};

export const RegisterGlobalComponents = function (app) {
    Object.keys(components).forEach((key) => {
        app.component(key, components[key]);
    });

    return app;
};
