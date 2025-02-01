import React from 'react';
import Paragraph from './Paragraph';
import Button from './Button';

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
       <Paragraph label="Email" type={"email"}/>
     
      <p id="actions">
      <Button type="button">Save</Button>
      </p>
    </form>
  );
};

export default Form;
