import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";

const Editor = (): JSX.Element => {
    const [markdown, setMarkdown] = useState("");
    const opts: EasyMDE.Options = {
        autosave: {
            enabled: true,
            uniqueId: "memorandum",
        },
    };

    return <SimpleMDE onChange={(v) => setMarkdown(v)} options={opts} />;
};

export default Editor;
