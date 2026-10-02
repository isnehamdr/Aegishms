import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

const Btn = ({ onClick, active, disabled, title, children }) => (
    <button
        type="button"
        title={title}
        disabled={disabled}
        // keep focus inside the editor when clicking toolbar buttons
        onMouseDown={(e) => e.preventDefault()}
        onClick={onClick}
        className={`rounded px-2.5 py-1.5 text-sm font-medium transition disabled:opacity-40 ${
            active
                ? "bg-black text-white"
                : "text-gray-700 hover:bg-gray-100"
        }`}
    >
        {children}
    </button>
);

const Divider = () => <span className="mx-1 h-5 w-px bg-gray-300" />;

const RichTextEditor = ({ value, onChange, placeholder = "Write your blog content..." }) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
            Underline,
            Link.configure({ openOnClick: false, autolink: true }),
            Placeholder.configure({ placeholder }),
        ],
        content: value || "",
        shouldRerenderOnTransaction: true,
        editorProps: {
            attributes: { class: "rte-content min-h-[320px] px-4 py-3 outline-none" },
        },
        onUpdate: ({ editor }) => {
            // an empty editor returns "<p></p>" - store an empty string instead
            onChange(editor.isEmpty ? "" : editor.getHTML());
        },
    });

    // Sync when the value is changed from outside (e.g. clicking "Edit")
    useEffect(() => {
        if (!editor) return;
        const current = editor.isEmpty ? "" : editor.getHTML();
        if ((value || "") !== current) {
            editor.commands.setContent(value || "", false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, editor]);

    if (!editor) return null;

    const setLink = () => {
        const prev = editor.getAttributes("link").href || "";
        const url = window.prompt("Enter URL (leave empty to remove link)", prev);
        if (url === null) return;
        if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();
        } else {
            editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border border-gray-300 focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <style>{`
                .rte-content { font-size: 0.95rem; line-height: 1.7; color: #111827; }
                .rte-content > * + * { margin-top: 0.75em; }
                .rte-content h2 { font-size: 1.5rem; font-weight: 700; }
                .rte-content h3 { font-size: 1.25rem; font-weight: 700; }
                .rte-content h4 { font-size: 1.1rem; font-weight: 600; }
                .rte-content ul { list-style: disc; padding-left: 1.5rem; }
                .rte-content ol { list-style: decimal; padding-left: 1.5rem; }
                .rte-content blockquote { border-left: 4px solid #d1d5db; padding-left: 1rem; color: #4b5563; font-style: italic; }
                .rte-content pre { background: #f3f4f6; border-radius: 0.5rem; padding: 0.75rem 1rem; overflow-x: auto; font-size: 0.85rem; }
                .rte-content code { background: #f3f4f6; border-radius: 0.25rem; padding: 0.1rem 0.3rem; font-size: 0.85em; }
                .rte-content pre code { background: none; padding: 0; }
                .rte-content a { color: #2563eb; text-decoration: underline; }
                .rte-content hr { border-top: 1px solid #d1d5db; margin: 1.25rem 0; }
                .rte-content p.is-editor-empty:first-child::before {
                    content: attr(data-placeholder);
                    color: #9ca3af;
                    float: left;
                    height: 0;
                    pointer-events: none;
                }
            `}</style>

            <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
                <Btn title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
                    <b>B</b>
                </Btn>
                <Btn title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <i>I</i>
                </Btn>
                <Btn title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <u>U</u>
                </Btn>
                <Btn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <s>S</s>
                </Btn>

                <Divider />

                <Btn title="Heading 2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                    H2
                </Btn>
                <Btn title="Heading 3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                    H3
                </Btn>
                <Btn title="Heading 4" active={editor.isActive("heading", { level: 4 })} onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
                    H4
                </Btn>

                <Divider />

                <Btn title="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    • List
                </Btn>
                <Btn title="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    1. List
                </Btn>
                <Btn title="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    “ ”
                </Btn>
                <Btn title="Code block" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                    {"</>"}
                </Btn>

                <Divider />

                <Btn title="Link" active={editor.isActive("link")} onClick={setLink}>
                    Link
                </Btn>
                <Btn title="Horizontal line" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    —
                </Btn>

                <Divider />

                <Btn title="Undo" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
                    ↶
                </Btn>
                <Btn title="Redo" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
                    ↷
                </Btn>
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default RichTextEditor;