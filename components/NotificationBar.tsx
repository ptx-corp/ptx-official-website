"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface NotificationConfig {
    enabled: boolean;
    message: string;
    backgroundColor: string;
    textColor: string;
}

export function NotificationBar({ config }: { config: NotificationConfig }) {
    const [isVisible, setIsVisible] = useState(true);

    if (!config.enabled || !isVisible) {
        return null;
    }

    return (
        <div
            className="w-full py-2 px-4 text-center text-sm font-medium z-50 relative flex items-center justify-center"
            style={{
                backgroundColor: config.backgroundColor || '#ef4444',
                color: config.textColor || '#ffffff'
            }}
        >
            <span className="flex-1">{config.message}</span>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
                aria-label="Close notification"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
