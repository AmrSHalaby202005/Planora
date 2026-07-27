import FeatureCard from "./FeatureCard";
import {
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineLightningBolt,
} from "react-icons/hi";

// Features Data
const features = [
  {
    icon: <HiOutlineClipboardList />,
    title: "Manage Tasks",
    text: "Create and track your daily tasks easily.",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Organize Notes",
    text: "Keep your ideas and information in one place.",
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: "Boost Productivity",
    text: "Focus on what matters and achieve your goals.",
  },
];

// Features Section
export default function Features() {
  return (
    // Section Container
    <section style={{ backgroundColor: "var(--background-color)" }}>
      <div className="container mx-auto px-5 px-5 sm:px-8 lg:px-12 py-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Why Choose Planora?
          </h2>

          <p
            className="mt-3 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything you need to organize your work, manage your ideas, and
            stay productive every day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
