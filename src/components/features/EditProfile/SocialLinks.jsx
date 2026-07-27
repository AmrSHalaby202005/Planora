import { FaGithub, FaInstagram , FaLinkedin , FaTwitter } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <div className="rounded-2xl p-8  m-6 shadow-sm"
    style={{background:"var(--card-color)"}}>

      <h2 className="text-2xl font-bold mb-6">
        Social Links
      </h2>

      <div className="space-y-4">

        <div className="flex items-center gap-3 border rounded-xl p-3">
          <FaGithub size={22} />
          <input
            className="outline-none w-full"
            placeholder="GitHub Profile"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl p-3">
          <FaLinkedin size={22} />
          <input
            className="outline-none w-full"
            placeholder="LinkedIn Profile"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl p-3">
          <FaTwitter size={22} />
          <input
            className="outline-none w-full"
            placeholder="Twitter Profile"
          />
        </div>

        <div className="flex items-center gap-3 border rounded-xl p-3">
        <FaInstagram size={22} />         
         <input
            className="outline-none w-full"
            placeholder="Instagram Profile"
          />
        </div>

      </div>

    </div>
  );
}