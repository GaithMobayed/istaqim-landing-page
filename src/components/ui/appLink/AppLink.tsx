interface Props {
  label: string;
  className?: string;
}

export default function AppLink({ label, className }: Props) {
  return (
    <a
      href="https://app.istqim.com/"
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {label}
    </a>
  );
}