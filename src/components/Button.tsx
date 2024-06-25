export interface ButtonProps extends React.ComponentProps<'button'> {
  text: string;
}
export const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
  if (text === 'submit')
    return (
      <button
        type='submit'
        className='rounded-xl bg-green-600 p-2 text-xl text-gray-100'
        {...props}
      >
        Подтвердить
      </button>
    );
  if (text === 'clear')
    return (
      <button type='reset' className='rounded-xl bg-red-600 p-2 text-xl text-gray-100' {...props}>
        Очистить
      </button>
    );
  return (
    <button className='rounded-xl bg-blue-600 p-2 text-xl text-gray-100' {...props}>
      {text}
    </button>
  );
};
