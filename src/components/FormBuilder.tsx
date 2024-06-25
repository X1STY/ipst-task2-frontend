import type { FormEvent } from 'react';

import { Button } from './Button';
import { Field } from './Field';

export interface FormBuilderProps {
  form: FormDTO | undefined;
}

export const FormBuilder: React.FC<FormBuilderProps> = ({ form }) => {
  if (!(form && form.title))
    return <p className='text-3xl text-gray-100'>Не выбран файл для сбора формы</p>;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {form && form.title && (
        <form
          className='flex w-[400px] flex-col items-center justify-center gap-4'
          onSubmit={handleSubmit}
        >
          <h1 className='text-2xl text-gray-100'>{form.title}</h1>
          <p className='text-justify text-xl text-gray-100'>{form.description}</p>
          {form.fields.map((field) => (
            <section key={field.label} className='flex w-full flex-col gap-1'>
              <Field field={field} />
            </section>
          ))}
          <div className='flex w-full flex-row-reverse justify-between'>
            {form.buttons.map((button) => (
              <Button key={button} text={button} />
            ))}
          </div>
        </form>
      )}
    </>
  );
};
