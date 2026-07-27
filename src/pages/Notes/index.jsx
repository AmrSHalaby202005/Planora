import React, { useState, useEffect } from "react";
import {
  FileText,
  Lightbulb,
  BookOpen,
  Bookmark,
  Heart,
  ListTodo,
  Code,
  Target,
  Pin,
} from "lucide-react";

import NoteCard from "../../components/features/Notes/NoteCard";
import NoteStats from "../../components/features/Notes/NoteStats";
import NotesFilters from "../../components/features/Notes/NotesFilters";
import pagination from "../../components/features/Notes/pagination";
import AddNoteModal from "../../components/features/Notes/AddNoteModal";
import EditNoteModal from "../../components/features/Notes/EditNoteModal";

export default function Notes() {
  const notesData = [
    {
      id: 1,
      icon: "FileText",
      title: "Project Ideas",
      description:
        "Build a smart dashboard with AI insights and productivity tracking.",
      category: "Work",
      date: "Jul 20, 2026",
      favorite: true,
      pinned: true,
      archived: false,
      styles: {
        iconBg: "#EBF2FF",
        iconColor: "#3B82F6",
        tagBg: "#EBF2FF",
        tagColor: "#3B82F6",
      },
    },
    {
      id: 2,
      icon: "Lightbulb",
      title: "Marketing Strategy",
      description: "Create a social media campaign for the Planora launch.",
      category: "Work",
      date: "Jul 18, 2026",
      favorite: false,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#F3E8FF",
        iconColor: "#A855F7",
        tagBg: "#F3E8FF",
        tagColor: "#A855F7",
      },
    },
    {
      id: 3,
      icon: "BookOpen",
      title: "Atomic Habits",
      description:
        "Focus on building small habits every day to achieve big results.",
      category: "Study",
      date: "Jul 15, 2026",
      favorite: true,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#DCFCE7",
        iconColor: "#22C55E",
        tagBg: "#DCFCE7",
        tagColor: "#22C55E",
      },
    },
    {
      id: 4,
      icon: "Bookmark",
      title: "Daily Journal",
      description:
        "Today I completed the Notes page UI and fixed several bugs.",
      category: "Personal",
      date: "Jul 14, 2026",
      favorite: false,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#FEF3C7",
        iconColor: "#F59E0B",
        tagBg: "#FEF3C7",
        tagColor: "#F59E0B",
      },
    },
    {
      id: 5,
      icon: "Heart",
      title: "Gratitude List",
      description:
        "Family, health, friends, and the opportunity to keep learning.",
      category: "Personal",
      date: "Jul 10, 2026",
      favorite: true,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#FEE2E2",
        iconColor: "#EF4444",
        tagBg: "#FEE2E2",
        tagColor: "#EF4444",
      },
    },
    {
      id: 6,
      icon: "Heart",
      title: "Weekly Study Plan",
      description: "Practice React Context, Redux Toolkit, and React Query.",
      category: "Study",
      date: "Jul 8, 2026",
      favorite: false,
      pinned: true,
      archived: false,
      styles: {
        iconBg: "#FEF3C7",
        iconColor: "#F59E0B",
        tagBg: "#FEF3C7",
        tagColor: "#F59E0B",
      },
    },
    {
      id: 7,
      icon: "Code",
      title: "Useful React Hooks",
      description: "Save examples of useMemo, useCallback, and custom hooks.",
      category: "Work",
      date: "Jul 5, 2026",
      favorite: false,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#EBF2FF",
        iconColor: "#3B82F6",
        tagBg: "#EBF2FF",
        tagColor: "#3B82F6",
      },
    },
    {
      id: 8,
      icon: "Target",
      title: "Goals 2026",
      description: "Finish Planora, learn Next.js, and start freelancing.",
      category: "Personal",
      date: "Jul 1, 2026",
      favorite: true,
      pinned: false,
      archived: false,
      styles: {
        iconBg: "#CCFBF1",
        iconColor: "#14B8A6",
        tagBg: "#CCFBF1",
        tagColor: "#14B8A6",
      },
    },
  ];

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("planora-notes");
    return saved ? JSON.parse(saved) : notesData;
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Notes");

  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 8;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedNote, setSelectedNote] = useState(null);
  const [sortBy, setSortBy] = useState("Newest");

  useEffect(() => {
    localStorage.setItem("planora-notes", JSON.stringify(notes));
  }, [notes]);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openEditModal = (note) => {
    setSelectedNote(note);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedNote(null);
    setIsEditModalOpen(false);
  };

  const addNote = (newNote) => {
    setNotes([
      {
        id: Date.now(),
        favorite: false,
        pinned: false,
        archived: false,
        ...newNote,
      },
      ...notes,
    ]);

    closeAddModal();
  };

  const updateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    );

    closeEditModal();
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const toggleFavorite = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, favorite: !note.favorite } : note,
      ),
    );
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note,
      ),
    );
  };
  /* ---------------- Search ---------------- */

  const searchedNotes = notes.filter((note) => {
    const query = searchQuery.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.description.toLowerCase().includes(query) ||
      note.category.toLowerCase().includes(query)
    );
  });

  /* ---------------- Tabs ---------------- */

  const filteredNotes = searchedNotes.filter((note) => {
    switch (activeTab) {
      case "Pinned":
        return note.pinned;

      case "Favorites":
        return note.favorite;

      case "All Notes":
      default:
        return true;
    }
  });

  /* ---------------- Sort ---------------- */

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return b.id - a.id;

      case "Oldest":
        return a.id - b.id;

      case "Title A-Z":
        return a.title.localeCompare(b.title);

      case "Title Z-A":
        return b.title.localeCompare(a.title);

      default:
        // لو مفيش اختيار خلي الـ pinned يطلع الأول
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return b.id - a.id;
    }
  });

  /* ---------------- Pagination ---------------- */

  const totalPages = Math.ceil(sortedNotes.length / notesPerPage);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;

  const currentNotes = sortedNotes.slice(indexOfFirstNote, indexOfLastNote);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  /* ---------------- Reset Page ---------------- */

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, sortBy]);

  /* ---------------- Stats ---------------- */

  const totalNotes = notes.length;

  const pinnedNotes = notes.filter((note) => note.pinned).length;

  const favoriteNotes = notes.filter((note) => note.favorite).length;

  const archivedNotes = notes.filter((note) => note.archived).length;

  return (
    <div
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 overflow-x-hidden box-border"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <NoteStats
        totalNotes={totalNotes}
        pinnedNotes={pinnedNotes}
        favoriteNotes={favoriteNotes}
        archivedNotes={archivedNotes}
      />

      <NotesFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openAddModal={openAddModal}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCurrentPage={setCurrentPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {currentNotes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {currentNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={() => openEditModal(note)}
              onDelete={() => deleteNote(note.id)}
              onFavorite={() => toggleFavorite(note.id)}
              onPin={() => togglePin(note.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 py-20 text-center">
          <h3 className="text-lg font-semibold text-slate-700">
            No notes found
          </h3>

          <p className="text-slate-500 mt-2">
            Try changing the search or filters.
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPage={nextPage}
          prevPage={prevPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <AddNoteModal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        onSave={addNote}
      />

      <EditNoteModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        note={selectedNote}
        onSave={updateNote}
      />
    </div>
  );
}
