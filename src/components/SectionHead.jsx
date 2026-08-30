export default function SectionHead({ number, kicker, title, body, action }) {
  return (
    <div className="sec-head">
      <div>
        <span className="kick">{number ? number + ' · ' : ''}{kicker}</span>
        <h2>{title}</h2>
        {body && <p className="sec-body">{body}</p>}
      </div>
      {action}
    </div>
  );
}
