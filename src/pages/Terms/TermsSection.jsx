export default function TermsSection({ title, paragraphs, list }) {
    return (
      <div className="policy-section">
        {title && <p className="policy__text point">{title}</p>}
        {paragraphs && paragraphs.map((text, i) => (
          <p className="policy__text" key={`p-${i}`}>{text}</p>
        ))}
        {list && (
          <ul className="policy__text">
            {list.map((item, i) => <li key={`li-${i}`}>{item}</li>)}
          </ul>
        )}
      </div>
    );
  }
  