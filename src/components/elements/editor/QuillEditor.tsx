/* eslint-disable */
"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import "quill/dist/quill.snow.css";

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline"],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
];

type QuilEditorProps = {
    onChange: (value: string) => void;
    initialData?: string;
};

export default function QuilEditor({
    onChange,
    initialData = ""
}: QuilEditorProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [quill, setQuill] = useState<any>(null);

    const setupEditor = useCallback(async () => {
        const Quill = (await import("quill")).default;

        if (wrapperRef.current) {
            wrapperRef.current.innerHTML = "";
            const editor = document.createElement("div");
            wrapperRef.current.append(editor);

            const q = new Quill(editor, {
                theme: "snow",
                modules: {
                    toolbar: TOOLBAR_OPTIONS,
                },
            });

            if (initialData) {
                q.clipboard.dangerouslyPasteHTML(initialData);
            }

            setQuill(q);
        }
    }, [initialData]);

    useEffect(() => {
        setupEditor();
    }, [setupEditor]);

    useEffect(() => {
        if (!quill) return;

        const handler = () => {
            const html = quill.root.innerHTML;
            onChange(html);
        };

        quill.on("text-change", handler);

        return () => {
            quill.off("text-change", handler);
        };
    }, [quill, onChange]);

    return <div className="editor" ref={wrapperRef} />;
}
