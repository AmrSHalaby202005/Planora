export const initialResources = [
  {
    id: 1,
    title: "React Cheat Sheet",
    type: "PDF",
    category: "Documents",
    size: "2.4 MB",
    date: "May 24, 2024",
    favorite: false,
    iconType: "pdf",
  },
  {
    id: 2,
    title: "Project Proposal",
    type: "Document",
    category: "Documents",
    size: "1.1 MB",
    date: "May 24, 2024",
    favorite: true,
    iconType: "doc",
  },
  {
    id: 3,
    title: "Inspiration Board",
    type: "Image",
    category: "Images",
    size: "3.8 MB",
    date: "May 22, 2024",
    favorite: false,
    iconType: "image",
  },
  {
    id: 4,
    title: "UI/UX Design Process",
    type: "Video",
    category: "Videos",
    size: "24.7 MB",
    date: "May 21, 2024",
    favorite: true,
    iconType: "video",
  },
  {
    id: 5,
    title: "Useful Design Resources",
    type: "Link",
    category: "Links",
    size: "Link",
    date: "May 20, 2024",
    favorite: false,
    iconType: "link",
  },
  {
    id: 6,
    title: "Time Management Guide",
    type: "PDF",
    category: "Documents",
    size: "1.8 MB",
    date: "May 19, 2024",
    favorite: false,
    iconType: "pdf",
  },
  {
    id: 7,
    title: "Study Plan Template",
    type: "Document",
    category: "Documents",
    size: "950 KB",
    date: "May 18, 2024",
    favorite: false,
    iconType: "doc",
  },
  {
    id: 8,
    title: "Mind Map Example",
    type: "Image",
    category: "Images",
    size: "1.2 MB",
    date: "May 17, 2024",
    favorite: true,
    iconType: "image",
  },
  {
    id: 9,
    title: "Focus Techniques",
    type: "Video",
    category: "Videos",
    size: "15.3 MB",
    date: "May 16, 2024",
    favorite: false,
    iconType: "video",
  },
];

export const getTypeBadge = (type) => {
  switch (type) {
    case "PDF":
      return "bg-rose-50 text-rose-500 border-rose-100";
    case "Document":
      return "bg-blue-50 text-blue-500 border-blue-100";
    case "Image":
      return "bg-emerald-50 text-emerald-500 border-emerald-100";
    case "Video":
      return "bg-purple-50 text-purple-500 border-purple-100";
    case "Link":
      return "bg-amber-50 text-amber-500 border-amber-100";
    default:
      return "bg-slate-50 text-slate-500 border-slate-100";
  }
};