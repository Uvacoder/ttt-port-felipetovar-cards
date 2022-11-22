import "./PublicationsSubView.scss";

export default function PublicationsSubView({ publications }) {
  return (
    <div className="publications">
      {publications
        .sort((a, b) => b.date - a.date)
        .map((publication, i) => (
          <div className="publication" key={i}>
            <span className="author">{publication.author}</span>
            <span className="name">{publication.name}</span>
            <span className="date">{publication.date}</span>
            <span className="publisher">{publication.publisher}</span>
            <span className="edition">{publication.edition}</span>
            <span className="pages">{publication.pages}</span>
            <span className="doi">{publication.doi}</span>
          </div>
        ))}
    </div>
  );
}
