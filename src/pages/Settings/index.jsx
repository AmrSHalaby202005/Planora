import React from "react";
import AccountSection from "../../components/features/Settings/AccountSection";
import PreferencesSection from "../../components/features/Settings/PreferencesSection";
import NotificationsSection from "../../components/features/Settings/NotificationsSection";
import AppearanceSection from "../../components/features/Settings/AppearanceSection";

export default function Settings() {
  return (
    <main className="w-full">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Sections */}
        <div className="space-y-6 lg:space-y-8">
          <AccountSection />
          <PreferencesSection />
          <NotificationsSection />
          <AppearanceSection />
        </div>
      </div>
    </main>
  );
}
