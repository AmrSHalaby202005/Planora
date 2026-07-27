import React, { useState, useEffect } from "react";
import { FiEdit2, FiCheck, FiX, FiCamera } from "react-icons/fi";
import { useAuth } from "../../../context/AuthContext";
import ProfileImage from "../../../assets/images/logo.png"; // المسار الخاص بكي للصورة الافتراضية

export default function AccountSection() {
  const { user, updateUser } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("Cairo, Egypt");
  const [phone, setPhone] = useState("+20 112 345 6789");

  // مزامنة البيانات مع بيانات الـ user الحالي
  useEffect(() => {
    if (user) {
      setName(user.name || user.username || "User");
      setEmail(user.email || "user@example.com");
      setAvatar(user.avatar || "");
    }
  }, [user]);

  // دالة تغيير الصورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // حفظ التعديلات
  const handleSave = () => {
    updateUser({
      name,
      avatar,
    });
    setIsEditing(false);
  };

  return (
    <section
      className="rounded-2xl lg:rounded-3xl border border-[var(--border-color)] bg-gradient-to-br from-[var(--primary-color)]
             via-[var(--card-color)] to-[var(--secondary-color)] p-4 sm:p-6 lg:p-8 shadow-sm transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Title */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
            Account Information
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)] max-w-lg">
            Update your personal information and account details.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col lg:flex-row items-center md:items-start gap-10 xl:gap-16 xl:ml-20">
        {/* Avatar */}
        <div className="shrink-0 flex justify-center">
          <div className="relative group w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={avatar || user?.avatar || ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />

            {/* إيقونة تحكم بالرفع تظهر في وضع التعديل أو عند الماوس */}
            {isEditing && (
              <label
                htmlFor="settings-avatar-input"
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white cursor-pointer transition-all"
              >
                <FiCamera size={28} />
                <span className="text-xs mt-1 font-medium">Change Photo</span>
                <input
                  id="settings-avatar-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* User Information */}
        <div className="flex-1 w-full text-center xl:text-left">
          <div className="space-y-2">
            <EditableInfoRow
              label="Full Name"
              value={name}
              isEditing={isEditing}
              onChange={(e) => setName(e.target.value)}
            />

            <EditableInfoRow
              label="Email Address"
              value={email}
              isEditing={false} // الإيميل للعرض فقط
            />

            <EditableInfoRow
              label="Location"
              value={location}
              isEditing={isEditing}
              onChange={(e) => setLocation(e.target.value)}
            />

            <EditableInfoRow
              label="Phone Number"
              value={phone}
              isEditing={isEditing}
              onChange={(e) => setPhone(e.target.value)}
            />

            <EditableInfoRow
              label="Member Since"
              value="May 2024"
              isEditing={false}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center md:justify-end gap-3">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
            >
              <FiX size={16} />
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 rounded-xl bg-[var(--primary-color)] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 transition cursor-pointer"
            >
              <FiCheck size={16} />
              Save Changes
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full sm:w-fit flex items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] bg-[var(--card-color)] px-6 py-3
                 text-sm font-medium text-[var(--primary-color)] transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white cursor-pointer"
          >
            <FiEdit2 size={16} />
            Edit Profile
          </button>
        )}
      </div>
    </section>
  );
}

// Editable Single Information Row Component
function EditableInfoRow({ label, value, isEditing, onChange }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 py-3 border-b border-[var(--border-color)] last:border-none items-center text-center sm:text-left">
      {/* Label */}
      <span className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
      </span>

      {/* Value OR Input */}
      {isEditing && onChange ? (
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full h-10 px-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-color)] text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)] transition"
        />
      ) : (
        <span className="text-base font-semibold text-[var(--text-primary)] break-words">
          {value}
        </span>
      )}
    </div>
  );
}
