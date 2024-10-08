import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

export const useToastNotification = () => {
    const useToastNotification = useContext(ToastContext);

    if (!useToastNotification) throw new Error('Ошибка: проблема контекста');

    return useToastNotification;
}
