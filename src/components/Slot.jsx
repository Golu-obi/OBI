// Photograph slot. Renders the image duotoned into the steel accent, or a
// labelled placeholder frame when no image is set yet. Pass `plain` to show the
// photograph in its true colours (used on product pages).
export default function Slot({ src, alt = '', label = 'Photograph', className = '', style, plain = false }) {
  return (
    <div className={'slot ' + (plain ? '' : 'duotone ') + className} style={style}>
      {src ? <img src={src} alt={alt} /> : <span className="slot-label">{label}</span>}
    </div>
  );
}
