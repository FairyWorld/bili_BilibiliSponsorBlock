export const chromeP =
    typeof browser === "undefined"
        ? typeof chrome !== "undefined"
            ? chrome
            : (null as unknown as typeof chrome)
        : browser;
