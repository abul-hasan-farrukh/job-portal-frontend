import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const GOOGLE_SCRIPT_URL =
  "https://accounts.google.com/gsi/client";

let googleScriptPromise = null;

function loadGoogleScript() {
  if (window.google?.accounts?.id) {
    return Promise.resolve();
  }

  if (googleScriptPromise) {
    return googleScriptPromise;
  }

  googleScriptPromise = new Promise((resolve, reject) => {
    let script = document.querySelector(
      `script[src="${GOOGLE_SCRIPT_URL}"]`
    );

    if (script) {
      if (window.google?.accounts?.id) {
        resolve();
        return;
      }

      script.addEventListener("load", resolve, { once: true });

      script.addEventListener(
        "error",
        () => reject(new Error("Google script failed to load")),
        { once: true }
      );

      return;
    }

    script = document.createElement("script");

    script.src = GOOGLE_SCRIPT_URL;
    script.async = true;
    script.defer = true;

    script.onload = resolve;

    script.onerror = () => {
      googleScriptPromise = null;
      reject(new Error("Google script failed to load"));
    };

    document.head.appendChild(script);
  });

  return googleScriptPromise;
}

export default function GoogleButton({
  children = "Continue with Google",
  onSuccess,
  disabled = false,
}) {
  const buttonRef = useRef(null);
  const onSuccessRef = useRef(onSuccess);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    onSuccessRef.current = onSuccess;
  }, [onSuccess]);

  useEffect(() => {
    let mounted = true;

    const initializeGoogle = async () => {
      try {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

        if (!clientId) {
          throw new Error("Google Client ID is missing");
        }

        await loadGoogleScript();

        if (!mounted || !buttonRef.current) return;

        const google = window.google;

        google.accounts.id.initialize({
          client_id: clientId,

          callback: (response) => {
            if (!response.credential) {
              toast.error("Google authentication failed.");
              return;
            }

            onSuccessRef.current?.(response.credential);
          },

          auto_select: false,
          cancel_on_tap_outside: true,
        });

        // Avoid duplicate rendered buttons in development.
        buttonRef.current.innerHTML = "";

        const width = Math.max(
          200,
          Math.min(buttonRef.current.offsetWidth || 400, 400)
        );

        google.accounts.id.renderButton(buttonRef.current, {
          theme: "outline",
          size: "large",

          text: String(children)
            .toLowerCase()
            .includes("sign up")
            ? "signup_with"
            : "continue_with",

          shape: "rectangular",
          width,
          logo_alignment: "left",
        });

        if (mounted) {
          setIsReady(true);
        }
      } catch (error) {
        console.error("Google initialization error:", error);

        if (mounted) {
          toast.error(
            "Unable to load Google Login. Please try again."
          );
        }
      }
    };

    initializeGoogle();

    return () => {
      mounted = false;
    };
  }, [children]);

  return (
    <div
      ref={buttonRef}
      className={`w-full min-h-11 flex items-center justify-center ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
      aria-label={String(children)}
      aria-disabled={disabled}
      style={{
        visibility: isReady ? "visible" : "hidden",
      }}
    />
  );
}