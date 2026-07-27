import React, { useState } from "react";
import ResourceStats from "../../components/features/Resources/ResourceStats";
import ResourceFilters from "../../components/features/Resources/ResourceFilters";
import ResourceGrid from "../../components/features/Resources/ResourceGrid";
import UploadModal from "../../components/features/Resources/UploadModal";
import { initialResources } from "../../constants/initialResources";

export default function ResourcesPage() {
  const [resources, setResources] = useState(initialResources);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Sort by: Recent");

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleGlobalClick = () => {
    setIsCategoryOpen(false);
    setIsSortOpen(false);
    setActiveMenuId(null);
  };

  const handleAddResource = (newRes) => {
    setResources((prev) => [{ id: Date.now(), ...newRes }, ...prev]);
  };

  const handleDeleteResource = (id) => {
    setResources((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (id) => {
    setResources((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      ),
    );
  };

  const filteredResources = resources
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Favorites" && item.favorite) ||
        (activeTab === "PDFs" && item.type === "PDF") ||
        (activeTab === "Documents" && item.type === "Document") ||
        (activeTab === "Images" && item.type === "Image") ||
        (activeTab === "Videos" && item.type === "Video") ||
        (activeTab === "Links" && item.type === "Link");

      const matchesCategory =
        selectedCategory === "All Categories" ||
        item.category === selectedCategory;

      return matchesSearch && matchesTab && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "Sort by: Name") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div
      onClick={handleGlobalClick}
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-4 overflow-x-hidden box-border"
    >
      <ResourceStats resources={resources} />

      <ResourceFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openUploadModal={() => setIsModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
        isSortOpen={isSortOpen}
        setIsSortOpen={setIsSortOpen}
        setCurrentPage={setCurrentPage}
      />

      <ResourceGrid
        resources={filteredResources}
        handleDeleteResource={handleDeleteResource}
        toggleFavorite={toggleFavorite}
        activeMenuId={activeMenuId}
        setActiveMenuId={setActiveMenuId}
      />

      <UploadModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddResource={handleAddResource}
      />
    </div>
  );
}
