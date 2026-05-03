import type { ReactNode } from 'react';

type PhoneShellProps = {
  children: ReactNode;
  className?: string;
};

/** CSS-only device frame: dark bezel, dynamic island, inner screen slot. */
export function PhoneShell({ children, className = '' }: PhoneShellProps) {
  return (
    <div className={`phone-shell ${className}`.trim()}>
      <div className="phone-island" aria-hidden />
      <div className="phone-bezel">
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  );
}
