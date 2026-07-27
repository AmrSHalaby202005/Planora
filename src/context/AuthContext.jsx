import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. حالة المستخدم (قراءة البيانات المخزنة مسبقاً إن وجدت)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. دالة تسجيل الدخول (Login)
  const login = (email, password) => {
    const registeredUser = JSON.parse(localStorage.getItem("registered_user"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setUser(registeredUser);
      localStorage.setItem("user", JSON.stringify(registeredUser));
      localStorage.setItem("isLoggedIn", "true");
      return { success: true };
    }

    if (
      registeredUser &&
      (registeredUser.email !== email || registeredUser.password !== password)
    ) {
      return { success: false, message: "Invalid email or password!" };
    }

    if (email && password) {
      const newUser = { name: email.split("@")[0], email };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isLoggedIn", "true");
      return { success: true };
    }

    return { success: false, message: "Please enter valid credentials." };
  };

  // 3. دالة إنشاء حساب جديد (مع التحقق من التكرار)
  const signup = (userData) => {
    const existingUser = JSON.parse(localStorage.getItem("registered_user"));

    if (existingUser && existingUser.email === userData.email) {
      return { success: false, message: "Email already exists! Please log in." };
    }

    localStorage.setItem("registered_user", JSON.stringify(userData));
    return { success: true };
  };

  // 4. دالة تسجيل الخروج (Logout)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", "false");
  };

  // 5. دالة تحديث بيانات البروفايل (updateUser)
  const updateUser = (updatedData) => {
    setUser((prevUser) => {
      const newUserData = { ...prevUser, ...updatedData };
      localStorage.setItem("user", JSON.stringify(newUserData));

      const registeredUser = JSON.parse(
        localStorage.getItem("registered_user")
      );
      if (registeredUser) {
        localStorage.setItem(
          "registered_user",
          JSON.stringify({ ...registeredUser, ...updatedData })
        );
      }
      return newUserData;
    });
  };

  // 6. دالة إعادة تعيين كلمة المرور (resetPassword)
  const resetPassword = (email, newPassword) => {
    const registeredUser = JSON.parse(
      localStorage.getItem("registered_user")
    );

    if (registeredUser && registeredUser.email === email) {
      const updatedUser = { ...registeredUser, password: newPassword };
      localStorage.setItem("registered_user", JSON.stringify(updatedUser));
      return { success: true, message: "Password updated successfully!" };
    }

    if (email) {
      const dummyUser = { email, password: newPassword };
      localStorage.setItem("registered_user", JSON.stringify(dummyUser));
      return { success: true, message: "Password updated successfully!" };
    }

    return { success: false, message: "Email not found!" };
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, updateUser, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};