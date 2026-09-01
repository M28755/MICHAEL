
export const validateContactForm = (formData) => {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = formData.name?.trim() || '';
  const email = formData.email?.trim() || '';
  const subject = formData.subject?.trim() || '';
  const message = formData.message?.trim() || '';

  if (!name) {
    errors.name = 'Name is required.';
  }

  if (!email) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please select a subject.';
  }

  if (!message) {
    errors.message = 'Message is required.';
  } else if (message.length < 20) {
    errors.message =
      'Please provide a little more detail about your project (at least 20 characters).';
  }

  return errors;
};