type RecaplyLogoProps = {
  variant: 'nav' | 'footer';
};

const SRC = '/recaply-logo-light@2x.png';
const INTRINSIC_W = 6200;
const INTRINSIC_H = 1972;

export function RecaplyLogo({ variant }: RecaplyLogoProps) {
  return (
    <img
      src={SRC}
      alt="Recaply"
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      className={`recaply-logo recaply-logo--${variant}`}
      decoding="async"
    />
  );
}
