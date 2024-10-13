import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { FC, createContext, PropsWithChildren } from 'react';
import { TYPES_NOTIFICATION } from '../enums/types-notification';

type ToastNotificationType = {
  toastList: ToastElementType[];
  updateToastList: (toast: ToastElementType) => void;
};

type ToastElementType = {
  id: number;
  title: string;
  text: string;
  type: TYPES_NOTIFICATION;
};

type Props = PropsWithChildren & {};

export const ToastContext = createContext<ToastNotificationType | null>(null);

export const ToastProvider: FC<Props> = ({ children }) => {
  const [toastList, setToastList] = useState<ToastElementType[]>([]);

  const updateToastList = useCallback(
    (addToastInformation: ToastElementType) => {
      setToastList((prevToasts: ToastElementType[]) => [
        ...prevToasts,
        { ...addToastInformation },
      ]);
    },
    [setToastList],
  );

  return (
    <ToastContext.Provider value={{ updateToastList, toastList }}>
      {toastList && (
        <div className={`toast-notifications__container`}>
          {toastList.map((toast: ToastElementType) => (
            <div
              className={`toast-notifications__item__${toast.type || 'default'}`}
              key={toast.id}
            >
              <span className="toast-notifications__close"></span>
              <h3
                className={`toast-notifications__${toast.type || 'default'}__title`}
              >
                {toast.title}
              </h3>
              <p
                className={`toast-notifications__${toast.type || 'default'}__text`}
              >
                {toast.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {children}
    </ToastContext.Provider>
  );
};
