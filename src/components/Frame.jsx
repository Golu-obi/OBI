// The Industry design system's wireframe object: square, hairline border,
// four registration marks. Every card, figure and plate wears it.
export default function Frame({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={'blueprint ' + className} {...rest}>
      <i className="corner tl" />
      <i className="corner tr" />
      <i className="corner bl" />
      <i className="corner br" />
      {children}
    </Tag>
  );
}
