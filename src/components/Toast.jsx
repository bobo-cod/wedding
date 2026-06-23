import React from "react";
import { CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

const toastTypes = {
  success: {
    icon: CheckCircle,
    classes: "border-successText/15 bg-successSoft text-successText"
  },
  warning: {
    icon: AlertTriangle,
    classes: "border-warningText/15 bg-warningSoft text-warningText"
  },
  error: {
    icon: AlertCircle,
    classes: "border-red-500/15 bg-red-50 text-red-700"
  }
};

export function Toast({ type = "success", message, onClose }) {
  if (!message) return null;

  const config = toastTypes[type] || toastTypes.success;
  const Icon = config.icon;

  return (
    <div className={`mt-5 flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm font-medium ${config.classes}`}>
      <span className="flex items-center gap-2">
        <Icon size={18} />
        {message}
      </span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-1 hover:bg-white/50"
          aria-label="Close message"
        >
          ×
        </button>
      )}
    </div>
  );
}
export default Toast;
