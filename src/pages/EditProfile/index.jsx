import EditHeader from "../../components/features/EditProfile/EditHeader";
import ProfileSidebar from "../../components/features/EditProfile/ProfileSidebar";
import PersonalInformation from "../../components/features/EditProfile/PersonalInformation";
import SocialLinks from "../../components/features/EditProfile/SocialLinks";

export default function EditProfile() {
  return (
    <div 
      className="min-h-screen p-6"
      style={{backgroundColor:"var(--background-color)"}}
    >
      <EditHeader />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">

        <div className="lg:w-80">
          <ProfileSidebar />
        </div>

        <div className="flex-1 space-y-6">
          <PersonalInformation />
          <SocialLinks />
        </div>

      </div>

    </div>
  );
}