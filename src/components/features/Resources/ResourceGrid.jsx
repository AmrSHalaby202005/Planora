import React from "react";
import {
  FileText,
  FileCode,
  Image as ImageIcon,
  Video,
  Link2,
  Eye,
  Download,
  Trash2,
  MoreVertical,
  Star,
} from "lucide-react";
import { getTypeBadge } from "../../../constants/initialResources";

export default function ResourceGrid({
  resources,
  handleDeleteResource,
  toggleFavorite,
  activeMenuId,
  setActiveMenuId,
}) {
  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />;
      case "Document":
        return <FileCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />;
      case "Image":
        return <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />;
      case "Video":
        return <Video className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />;
      case "Link":
        return <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
      default:
        return <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400" />;
    }
  };

  const getIconBg = (type) => {
    switch (type) {
      case "PDF":
        return "bg-rose-50 border-rose-100";
      case "Document":
        return "bg-blue-50 border-blue-100";
      case "Image":
        return "bg-emerald-50 border-emerald-100";
      case "Video":
        return "bg-purple-50 border-purple-100";
      case "Link":
        return "bg-amber-50 border-amber-100";
      default:
        return "bg-slate-50 border-slate-100";
    }
  };

  const handleView = (item) => {
    if (item.url) {
      window.open(item.url, "_blank");
    } else {
      alert(`Viewing "${item.title}".`);
    }
  };

  const handleDownload = (item) => {
    if (item.type === "Link") {
      if (item.url) {
        navigator.clipboard.writeText(item.url);
        alert("Link copied to clipboard!");
      } else {
        alert("No link available to copy.");
      }
      return;
    }

    if (item.url) {
      const a = document.createElement("a");
      a.href = item.url;
      a.download = item.fileName || `${item.title}.${item.type.toLowerCase()}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      const blob = new Blob([`Content of ${item.title}`], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${item.title.replace(/\s+/g, "_")}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  if (resources.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center text-slate-400 text-xs sm:text-sm">
        No resources found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
      {resources.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-4 hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative group w-full box-border"
        >
          {/* Card Top Header */}
          <div className="flex items-start justify-between gap-2 min-w-0">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center shrink-0 ${getIconBg(
                  item.type
                )}`}
              >
                {getIcon(item.type)}
              </div>
              <div className="space-y-0.5 min-w-0 flex-1">
                <h4
                  className="text-xs sm:text-sm font-semibold text-slate-800 truncate leading-snug"
                  title={item.title}
                >
                  {item.title}
                </h4>
                <span
                  className={`inline-block px-1.5 py-0.5 border text-[10px] sm:text-[11px] font-semibold rounded-md ${getTypeBadge(
                    item.type
                  )}`}
                >
                  {item.type}
                </span>
              </div>
            </div>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenuId(activeMenuId === item.id ? null : item.id);
                }}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <MoreVertical className="w-4 h-4" />
              </button>

              {activeMenuId === item.id && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-7 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1 z-30 text-left"
                >
                  <button
                    type="button"
                    onClick={() => {
                      toggleFavorite(item.id);
                      setActiveMenuId(null);
                    }}
                    className="w-full px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                  >
                    <Star
                      className={`w-3.5 h-3.5 ${
                        item.favorite
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-400"
                      }`}
                    />
                    <span>{item.favorite ? "Unfavorite" : "Favorite"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleDeleteResource(item.id);
                      setActiveMenuId(null);
                    }}
                    className="w-full px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Date & Size */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-400 font-medium">
            <span>📅 {item.date}</span>
            <span>•</span>
            <span>{item.size}</span>
          </div>

          {/* Card Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] sm:text-xs font-medium">
            <button
              type="button"
              onClick={() => handleView(item)}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View</span>
            </button>

            <button
              type="button"
              onClick={() => handleDownload(item)}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{item.type === "Link" ? "Copy Link" : "Download"}</span>
            </button>

            <button
              type="button"
              onClick={() => handleDeleteResource(item.id)}
              className="text-slate-300 hover:text-rose-500 transition-colors p-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}