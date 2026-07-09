const Card = ({ as: Component = 'div', className = '', children, ...props }) => {
  return (
    <Component className={`glass-card glass-card-hover ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Card;
