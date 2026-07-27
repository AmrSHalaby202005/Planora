import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!email || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const res = resetPassword(email, newPassword);

    if (res.success) {
      setSuccessMsg("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] p-4">
      <div className="w-full max-w-md bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)]">
            Reset Password
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Enter your registered email and new password.
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
            {error}
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-600 text-sm border border-green-200">
            {successMsg}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              New Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[var(--primary-color)] text-white font-medium text-sm hover:opacity-90 transition cursor-pointer"
          >
            Reset Password
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition"
          >
            <FiArrowLeft /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}