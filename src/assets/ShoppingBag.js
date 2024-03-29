export default function ShoppingBag({
  size = 'inherit',
  color = 'currentColor',
  style = {},
  ...rest
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none" 
      viewBox="0 0 24 24" 
      style={{
        ...style,
        width: '1em',
        height: '1em',
        fill: color,
        fontSize: size,
      }}
      {...rest}
    >
      <path 
        opacity="0.3" 
        d="M14 9V8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8V9H8V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V9H14ZM14 9V8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8V9H8V8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V9H14Z" 
        fill="currentColor"
      />
      <path 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M6.84717 9H17.1529C17.6418 9 18.0589 9.35341 18.1393 9.8356L19.6119 18.6712C19.7935 19.7607 19.0575 20.7912 17.9679 20.9728C17.8593 20.9909 17.7493 21 17.6391 21H6.36096C5.25639 21 4.36096 20.1046 4.36096 19C4.36096 18.8898 4.37006 18.7799 4.38817 18.6712L5.86077 9.8356C5.94114 9.35341 6.35833 9 6.84717 9Z" 
        fill={color}
      />
    </svg>
  );
}
