import React from 'react';
import Paragraph from './Paragraph';

const Form =   ({props, ref}) => {
  const formRef = React.useRef();

  // Expose the `clear` method
  React.useImperativeHandle(ref, () => ({
    clear() {
      formRef.current.reset();
    },
  }));

  return (
    <form ref={formRef}>
       <Paragraph label="Name" type={"text"}/>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button type="button">Save</button>
      </p>
    </form>
  );
};

export default Form;
