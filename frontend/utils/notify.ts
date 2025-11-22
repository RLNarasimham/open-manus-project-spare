import { toast, type ToastOptions } from "react-toastify";

const baseOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3200,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const withDefaults = (options?: ToastOptions) => ({
  ...baseOptions,
  ...options,
});

export const notify = {
  info: (message: string, options?: ToastOptions) =>
    toast.info(message, withDefaults(options)),
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, withDefaults(options)),
  warning: (message: string, options?: ToastOptions) =>
    toast.warning(message, withDefaults(options)),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, withDefaults(options)),
  unexpected: (options?: ToastOptions) =>
    toast.error("Something went wrong.", withDefaults(options)),
};

export type Notify = typeof notify;

