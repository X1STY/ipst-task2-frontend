import { useState } from 'react';

import formTest1 from '../mock/form-test-1.json';
import formTest2 from '../mock/form-test-2.json';
import formTest3 from '../mock/form-test-3.json';

import { Button } from './components/Button';
import { FormBuilder } from './components/FormBuilder';

const App = () => {
  const [fileContent, setFileContent] = useState<FormDTO | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        setError(undefined);
        file
          .text()
          .then((text) => setFileContent(JSON.parse(text) as FormDTO))
          .catch(() => setError('Не удалось загрузить файл'));
      } else {
        setError('Неподходящий тип файла');
      }
    }
  };

  const handleTest1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFileContent(formTest1 as FormDTO);
  };
  const handleTest2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFileContent(formTest2 as FormDTO);
  };
  const handleTest3 = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFileContent(formTest3 as FormDTO);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-start gap-20 bg-gray-700 p-4'>
      <div className='flex flex-col gap-2'>
        <p className='w-auto text-center text-xl text-gray-100'>
          Выберете JSON файл <br />
          <span className='text-gray-100/50'>(Соответствие схеме не проверяется)</span>
        </p>
        <div className='flex flex-row items-center justify-center gap-3 text-center'>
          <input type='file' onChange={handleChangeFile} className='w-[230px] text-gray-100' />
          <span className='text-orange-500'>или</span>
          <div className='flex flex-row items-center justify-center gap-5'>
            <Button text='Тест1' onClick={handleTest1} />
            <Button text='Тест2' onClick={handleTest2} />
            <Button text='Тест3' onClick={handleTest3} />
          </div>
        </div>
        {error && <span className='text-center text-2xl text-red-500'>{error}</span>}
      </div>
      <FormBuilder form={fileContent} key={fileContent?.title} />
    </main>
  );
};

export default App;
