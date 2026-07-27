import { ArrowLeft } from "lucide-react";

export default function EditHeader() {
  return (
    <div className="rounded-2xl shadow-sm p-6 flex items-center justify-between"
        style={{backgroundColor:"var(--background-color)"}}>

      {/* Left */}
      <div className="flex items-center gap-4">

        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition"
        >
          <ArrowLeft size={20} className="text-xl"
          style={{color:"var( --text-primary)"}}
          />
        </button>

        <div>
          <h1 className="text-3xl font-bold "
          style={{color:"var(--text-primary)"}}
          >
            Edit Profile
          </h1>

          <p className="text-md mt-1"
          style={{color:"var(--text-secondary)"}}
          >
            Update your information and keep your profile up to date.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="px-6 py-3 rounded-xl border border-gray-300  font-medium hover:bg-gray-100 transition cursor-pointer"
        style={{color:"var(--text-primary)"}}
        >
          Cancel
        </button>

        <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700  font-semibold transition cursor-pointer"
        style={{color:"var(--card-color)"
        }}

        >
          Save Changes
        </button>

      </div>

    </div>
  );
}