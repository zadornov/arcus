const validate = (values: any) => {
  if (values.password !== values.password2) {
    return { password2: 'passwords must match' };
  }
};

export default validate;
