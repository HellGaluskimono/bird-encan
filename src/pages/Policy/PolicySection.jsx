export default function PolicySection({ title, paragraphs, subSections, list, paragraphsAfterList }) {
    return (
      <div className="policy-section">
        {title && <p className="policy__text point">{title}</p>}
        {paragraphs && paragraphs.map((text, i) => (
          <p className="policy__text" key={`p-${i}`}>{text}</p>
        ))}
        {subSections && subSections.map((sub, i) => (
          <div key={`sub-${i}`}>
            <p className="policy__text point">{sub.subtitle}</p>
            <ul className="policy__text">
              {sub.list.map((item, j) => <li key={`sub-li-${j}`}>{item}</li>)}
            </ul>
          </div>
        ))}
        {list && (
          <ul className="policy__text">
            {list.map((item, i) => <li key={`li-${i}`}>{item}</li>)}
          </ul>
        )}
        {paragraphsAfterList && paragraphsAfterList.map((text, i) => (
          <p className="policy__text" key={`pa-${i}`}>{text}</p>
        ))}
      </div>
    );
  }
  