import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Star, Pin, Pencil, Trash2 } from "lucide-react";

import {
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
  FileText,
  Lightbulb,
  BookOpen,
  Bookmark,
  Heart,
  ListTodo,
  Code,
  Target,
};

export default function NoteCard({
  note,
  onEdit,
  onDelete,
  onFavorite,
  onPin,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Icon = icons[note.icon] || FileText;

  return (
    <div
      className="relative rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[270px]"
      style={{ backgroundColor: "var(--card-color)" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
          style={{
            backgroundColor: note.styles.iconBg,
            color: note.styles.iconColor,
          }}
        >
          <Icon size={24} />
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="p-2 rounded-lg hover:bg-slate-100 transition cursor-pointer"
          >
            <MoreVertical
              size={20}
              style={{ color: "var(--text-secondary)" }}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 z-[999] overflow-hidden">
              <button
                onClick={() => {
                  onFavorite();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition cursor-pointer"
              >
                <Star
                  size={16}
                  fill={note.favorite ? "#facc15" : "none"}
                  color="#facc15"
                />
                <span>
                  {note.favorite ? "Remove Favorite" : "Add Favorite"}
                </span>
              </button>

              <button
                onClick={() => {
                  onPin();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition cursor-pointer"
              >
                <Pin size={16} style={{ color: "var(--primary-color)" }} />
                <span>{note.pinned ? "Unpin" : "Pin Note"}</span>
              </button>

              <button
                onClick={() => {
                  onEdit();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition cursor-pointer"
              >
                <Pencil size={16} />
                <span>Edit</span>
              </button>

              <button
                onClick={() => {
                  if (window.confirm("Delete this note?")) {
                    onDelete();
                  }

                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition cursor-pointer"
              >
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="my-6 flex-1">
        <h3
          className="font-bold text-lg sm:text-xl mb-3 line-clamp-2"
          style={{ color: "var(--text-primary)" }}
        >
          {note.title}
        </h3>

        <p
          className="text-sm sm:text-base leading-6 line-clamp-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {note.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <span
          className="px-3 py-1 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: note.styles.tagBg,
            color: note.styles.tagColor,
          }}
        >
          {note.category}
        </span>

        <div className="flex items-center gap-2">
          {note.favorite && <Star size={16} fill="#facc15" color="#facc15" />}

          {note.pinned && (
            <Pin size={16} style={{ color: "var(--primary-color)" }} />
          )}

          <span
            className="text-xs sm:text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            {note.date}
          </span>
        </div>
      </div>
    </div>
  );
}
