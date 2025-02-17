import { loadConfig } from "unconfig";

loadConfig({
    sources: {
        files: "my-config",
    },
}).then((res) => {
    console.log(res);
});
