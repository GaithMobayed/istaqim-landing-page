interface Props {
  label: string;
  className?: string;
}

export default function ContactLink({ label, className }: Props) {
  return (
    <a href="mailto:info@istqim.com" className={className}>
      {label}
    </a>
  );
}