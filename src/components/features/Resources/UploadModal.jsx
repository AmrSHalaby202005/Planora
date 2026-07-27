import React, { useState, useRef } from "react";
import { X, UploadCloud, Link as LinkIcon, FileCheck } from "lucide-react";

export default function UploadModal({ isModalOpen, setIsModalOpen, handleAddResource }) {
  const [activeMode, setActiveMode] = useState("file");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("PDF");
  const [category, setCategory] = useState("Documents");
  const [linkUrl, setLinkUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  if (!isModalOpen) return null;

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (!title) {
        const fileNameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
        setTitle(fileNameWithoutExt);
      }

      if (file.type.includes("pdf")) setType("PDF");
      else if (file.type.includes("image")) setType("Image");
      else if (file.type.includes("video")) setType("Video");
      else setType("Document");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (activeMode === "link" && !linkUrl.trim()) return;

    const fileSizeStr = selectedFile ? formatFileSize(selectedFile.size) : "2.5 MB";
    const generatedUrl = selectedFile
      ? URL.createObjectURL(selectedFile)
      : activeMode === "link"
      ? linkUrl
      : null;

    handleAddResource({
      title,
      type: activeMode === "link" ? "Link" : type,
      category,
      size: activeMode === "link" ? "Link" : fileSizeStr,
      date: "Today",
      favorite: false,
      url: generatedUrl,
      fileName: selectedFile ? selectedFile.name : title,
    });

    setTitle("");
    setLinkUrl("");
    setType("PDF");
    setSelectedFile(null);
    setActiveMode("file");
    setIsModalOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-800">
            Add New Resource
          </h3>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-xl my-4">
          <button
            type="button"
            onClick={() => {
              setActiveMode("file");
              setType("PDF");
            }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeMode === "file"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Upload File
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode("link");
              setType("Link");
            }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeMode === "link"
                ? "bg-white text-blue-600 shadow-xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Add External Link
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Resource Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Design Systems Handbook"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {activeMode === "file" && (
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                >
                  <option value="PDF">PDF</option>
                  <option value="Document">Document</option>
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                </select>
              </div>
            )}

            <div className={activeMode === "link" ? "col-span-2" : ""}>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              >
                <option value="Documents">Documents</option>
                <option value="Images">Images</option>
                <option value="Videos">Videos</option>
                <option value="Links">Links</option>
              </select>
            </div>
          </div>

          {activeMode === "file" ? (
            <div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-xl p-5 text-center bg-slate-50/50 hover:bg-blue-50/20 transition-all cursor-pointer group"
              >
                {selectedFile ? (
                  <div className="flex items-center justify-center gap-2 text-emerald-600">
                    <FileCheck className="w-6 h-6 shrink-0" />
                    <span className="text-xs font-semibold truncate max-w-[200px]">
                      {selectedFile.name}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      ({formatFileSize(selectedFile.size)})
                    </span>
                  </div>
                ) : (
                  <>
                    <UploadCloud className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform mx-auto mb-2" />
                    <p className="text-xs text-slate-600 font-medium">
                      Drag and drop your file here, or{" "}
                      <span className="text-blue-600 font-semibold hover:underline">
                        browse
                      </span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Supports PDF, DOCX, PNG, MP4 up to 50MB
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                URL / Link
              </label>
              <div className="relative">
                <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="url"
                  required
                  placeholder="https://example.com/resource"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              {activeMode === "file" ? "Upload File" : "Add Link"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}