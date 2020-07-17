import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";

const Editor = (): JSX.Element => {
    const [markdown, setMarkdown] = useState("");

    return <SimpleMDE onChange={(v) => setMarkdown(v)} />;
};

export default Editor;
