"use client"

import { useState, FormEvent, ChangeEvent } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log('o que vieo', form)

    // emailjs
    //   .send(
    //     "personal_email_send",
    //     "template_dxju7hd",
    //     {
    //       from_name: form.name,
    //       to_name: "Rodrigo M. Ribeiro",
    //       from_email: form.email,
    //       to_email: "rodrigomarqribeiro@gmail.com",
    //       message: form.message,
    //     },
    //     "OPgvWU8zNZfWwXWUt",
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       showAlert({
    //         show: true,
    //         text: "Thank you for your message 😃",
    //         type: "success",
    //       });

    //       setTimeout(() => {
    //         hideAlert(false);
    //         setCurrentAnimation("idle");
    //         setForm({
    //           name: "",
    //           email: "",
    //           message: "",
    //         });
    //       }, [3000]);
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);
    //       setCurrentAnimation("idle");

    //       showAlert({
    //         show: true,
    //         text: "I didn't receive your message 😢",
    //         type: "danger",
    //       });
    //     }
    //   );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea'
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
      </div>
    </section>
  );
};

export default Contact;
