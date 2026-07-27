import { MapPin, Calendar } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="rounded-2xl shadow-md p-8 m-6"
    style={{
        backgroundColor:"var(--card-color)",

    }}
    >
      <h2 className="text-lg font-semibold mb-6"
      style={{
        color:"var(--text-primary)"
      }}>
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div>
          <p className=" leading-7 mb-6"
          style={{color:"var(--text-secondary)"
          }}
          >
            I'm passionate about productivity and building better habits every
            day. Planora helps me organize, focus, and achieve my goals.
          </p>

          <div className="space-y-3"
            style={{color:"var(--text-secondary)"}}>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Cairo, Egypt</span>
            </div>

            <div className="flex items-center gap-2"
            style={{color:"var(--text-secondary)"
            }}
            >
              <Calendar size={18} />
              <span>Joined April 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}