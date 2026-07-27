import React, { useEffect, useState, useRef } from "react";
import {
  X,
  FileText,
  Lightbulb,
  BookOpen,
  Bookmark,
  Heart,
  ListTodo,
  Code,
  Target,
} from "lucide-react";

const icons = {
  FileText: <FileText size={20} />,
  Lightbulb: <Lightbulb size={20} />,
  BookOpen: <BookOpen size={20} />,
  Bookmark: <Bookmark size={20} />,
  Heart: <Heart size={20} />,
  ListTodo: <ListTodo size={20} />,
  Code: <Code size={20} />,
  Target: <Target size={20} />,
};

export default function EditNoteModal({ isOpen, onClose, note, onSave }) {
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Personal",
    icon: "FileText",
  });

  useEffect(() => {
    if (note) {
      setForm({
        title: note.title,
        description: note.description,
        category: note.category,
        icon: "FileText",
      });

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [note]);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, [onClose]);

  if (!isOpen || !note) return null;

  const handleSave = () => {
    if (!form.title.trim()) {
      alert("Please enter a title");
      return;
    }

    if (!form.description.trim()) {
      alert("Please enter a description");
      return;
    }

    onSave({
      ...note,
      title: form.title,
      description: form.description,
      category: form.category,
      icon: icons[form.icon],
      favorite: note.favorite,
      pinned: note.pinned,
      archived: note.archived,
    });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Edit Note
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <input
            ref={inputRef}
            value={form.title}
            placeholder="Title"
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            rows={5}
            value={form.description}
            placeholder="Description"
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-500"
          />

          <select
            value={form.category}
            onChange={(e) =>
              setForm({
                ...form,
                category: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
          >
            <option>Personal</option>
            <option>Work</option>
            <option>Study</option>
          </select>

          <select
            value={form.icon}
            onChange={(e) =>
              setForm({
                ...form,
                icon: e.target.value,
              })
            }
            className="w-full border border-slate-300 rounded-xl px-4 py-3"
          >
            {Object.keys(icons).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
