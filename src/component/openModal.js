import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ModalLoading from './modalLoading';

export default function openModal() {
  /* Loads the component when needed */
  const Modal = lazy(() => import('./modalSettings'));
  /* Creates a layer */
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal';
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de configuraciones" />
    </Suspense>
  );
}

export function openModalAccount() {
  const Modal = lazy(() => import('./modalAccount'));
  const modalDiv = document.createElement('div');
  modalDiv.id = 'modal';
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de tu cuenta" />
    </Suspense>
  );
}
