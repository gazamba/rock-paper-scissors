import ReactDOM from 'react-dom';
import { cn } from './utils/cn';

type ModalProps = {
  shouldRender: boolean;
  onClose: () => void;
} & JSX.IntrinsicElements['dialog'];

export function Modal({ className, shouldRender, children}: ModalProps) {
  if (!shouldRender) return null;

  return (
    <ReactPortal>
      <dialog
        open
        className={cn(
          `
          fixed
          left-0
          top-0
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-black/60
        `,
          className,
        )}
      >
        {children}
      </dialog>
    </ReactPortal>
  );
}

function ReactPortal({ children }: { children: React.ReactNode }) {
    const containerId = 'portal-root';
    let container = document.getElementById(containerId);
  
    if (!container) {
      container = document.createElement('div');
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
    }
  
    return ReactDOM.createPortal(children, container);
  }