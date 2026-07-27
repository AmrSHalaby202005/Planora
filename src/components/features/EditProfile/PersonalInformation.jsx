import { User, Mail, MapPin, Calendar } from "lucide-react";

export default function PersonalInformation() {
  return (
    <div className=" rounded-2xl shadow-sm p-8 m-6"
    style={{backgroundColor:"var(--card-color)"}}>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center">
          <User className="text-md"
          style={{color:"var(--primary-color)",
            backgroundColor:"var(--card-color)"
          }}
          size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold"
          >
            Personal Information
          </h2>

          <p className="text-sm"
          style={{color:"var(--text-secondary)",

          }}
          >
            Update your personal details.
          </p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Full Name
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <User size={18} className="mr-3"
            style={{color:"var(--text-secondary)"}}
            />

            <input
              type="text"
              placeholder="rahma"
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Email
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <Mail size={18} className="mr-3"
             style={{color:"var(--text-secondary)"}}
            />

            <input
              type="email"
              placeholder="rahma@gmail.com"
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Location
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <MapPin size={18} className=" mr-3" 
            style={{color:"var(--text-secondary)"}}
            />

            <input
              type="text"
              placeholder="Cairo, Egypt"
              className="w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Join Date
          </label>

          <div className="flex items-center border rounded-xl px-4 py-3">
            <Calendar size={18} className=" mr-3" 
            style={{color:"var(--text-secondary)"}}
            />

            <input
              type="text"
              placeholder="April 2025"
              className="w-full outline-none"
            />
          </div>
        </div>

      </div>

      {/* Bio */}

      <div className="mt-8">

        <label className="block mb-2 font-medium">
          Bio
        </label>

        <textarea
          rows="5"
          placeholder="Tell us about yourself..."
          className="w-full border rounded-xl p-4 outline-none resize-none"
        ></textarea>

      </div>
      
    </div>

  );
}