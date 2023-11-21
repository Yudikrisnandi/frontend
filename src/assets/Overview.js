export default function Overview({
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
        d="M9.5 4H5.5C4.67157 4 4 4.67157 4 5.5V9.5C4 10.3284 4.67157 11 5.5 11H9.5C10.3284 11 11 10.3284 11 9.5V5.5C11 4.67157 10.3284 4 9.5 4Z" 
        fill="currentColor"
      />
      <path 
        opacity="0.3" 
        fill={color}
        clip-rule="evenodd" 
        d="M5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5C4 13.6716 4.67157 13 5.5 13ZM14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5C13 4.67157 13.6716 4 14.5 4ZM14.5 13H18.5C19.3284 13 20 13.6716 20 14.5V18.5C20 19.3284 19.3284 20 18.5 20H14.5C13.6716 20 13 19.3284 13 18.5V14.5C13 13.6716 13.6716 13 14.5 13Z" 
        fill-rule="evenodd" 
      />
    </svg>
  );
}
