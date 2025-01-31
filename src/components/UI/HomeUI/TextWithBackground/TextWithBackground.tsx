const TextWithBackground = ({
  text,
  background = '#008AE1',
}: {
  text: string;
  background?: string;
}) => {
  return text.split(' ').map((item) => {
    return (
      <span key={crypto.randomUUID()} >
        <span
          style={{
            background: background,
            paddingInline: '5px',
            borderRadius: '5px',
          }}
        >
          {item}
        </span>
        &thinsp;
      </span>
    );
  });
};

export default TextWithBackground;
