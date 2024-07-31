interface Props {
  text?: string;
  className?: string;
}

export default function ComponentsText({ text = '', className }: Props) {
  return (
    <div className={className}>
      {text.split('\n').map((i, key) => {
        return (
          <p key={key} className="mt-4">
            {i}
          </p>
        );
      })}
    </div>
  );
}
