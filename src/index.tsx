import * as React from "react";
import * as ReactDOM from "react-dom";

import { Test } from "./components/Test";

ReactDOM.render(
    <Test compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
