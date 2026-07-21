"use client";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { closeAuthModal } from "../redux/slices/authModalSlice";

export default function AuthModal() {
  const isOpen = useSelector((state: RootState) => state.authModal.isOpen);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={() => dispatch(closeAuthModal())}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "320px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => dispatch(closeAuthModal())}
          style={{
            position: "absolute",
            top: "8px",
            right: "12px",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <h2>Auth Modal Placeholder</h2>
        <p>Login/Register forms will go here.</p>
      </div>
    </div>
  );
}