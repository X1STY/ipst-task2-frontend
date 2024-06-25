export type FieldProps = React.ComponentProps<'input'> &
  React.ComponentProps<'textarea'> &
  React.ComponentProps<'select'> & {
    field: FieldDTO;
  };
export const Field: React.FC<FieldProps> = ({ field, ...props }) => {
  const { name, type, variants } = field.attrs;

  // guess it should be different components for textarea, inputs, select, and fieldset
  if (type === 'textarea')
    return (
      <label htmlFor={field.attrs.name} className='text-gray-100'>
        {field.label}
        <textarea
          name={name}
          id={name}
          className='max-h-[250px] min-h-[150px] w-full rounded-md p-1 text-black'
          {...props}
        />
      </label>
    );

  if (!variants) {
    return (
      <label htmlFor={field.attrs.name} className='text-gray-100'>
        {field.label}
        <input
          name={name}
          id={name}
          type={type}
          className='w-full rounded-md p-1 text-black'
          {...props}
        />
      </label>
    );
  }

  if (type === 'select') {
    return (
      <label htmlFor={field.attrs.name} className='text-gray-100'>
        {field.label}
        <br />
        <select name={name} id={name} className='w-full rounded-md p-1 text-black' {...props}>
          {variants.map((variant) => (
            <option key={variant.value} value={variant.value}>
              {variant.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <fieldset className='flex flex-col gap-1'>
      <legend className='text-gray-100'>{field.label}</legend>
      {variants.map((variant) => (
        <label htmlFor={variant.value} key={variant.value}>
          <input
            name={name}
            id={variant.value}
            type={type}
            value={variant.value}
            className='rounded-md'
            {...props}
          />
          <span className='ml-1 text-gray-100'>{variant.label}</span>
        </label>
      ))}
    </fieldset>
  );
};
