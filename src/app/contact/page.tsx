"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Globe from "../../components/globe";
import useToast from "../../hooks/useToast";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const { success, failure } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "personal_email_send",
        "template_dxju7hd",
        {
          from_name: form.name,
          to_name: "Rodrigo M. Ribeiro",
          from_email: form.email,
          to_email: "rodrigomarqribeiro@gmail.com",
          message: form.message,
        },
        "OPgvWU8zNZfWwXWUt",
      );

      success("Email successfully sent");
    } catch (err) {
      console.log(err);
      failure("Error sending email, try later please.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex lg:flex-row flex-col-reverse max-container -mt-20 md:mt-0">
      <div className="flex-1 min-w-[50%] flex flex-col z-10 -mt-20 md:z-0 md:mt-0">
        <h1 className="head-text">
          <span className="blue-gradient_text drop-shadow font-semibold">
            Get in Touch
          </span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="dark:text-white text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="dark:text-white text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="dark:text-white text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" disabled={loading} className="btn">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Globe />
      </div>
    </section>
  );
};

export default Contact;
