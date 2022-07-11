import { useEffect, useState } from 'react';

export default function SampleForm(props) {
  const { data, add, edit } = props;
  const [inputValue, setValue] = useState(null);

  useEffect(() => {
    if (data) {
      setValue(data);
    } else {
      setValue(null);
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    data ? edit(e, data.id, inputValue) : add(e, inputValue);
    setValue(null);
  };

  return (
    <form>
      <label>Name : </label>
      <input type='text' name='name' value={inputValue ? inputValue.name : ''} onChange={handleInputChange} />
      &nbsp;
      <button onClick={handleSubmit}>{data ? 'Edit' : 'Add'}</button>
    </form>
  );
}
