import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { Interests } from '../components'

import { staggerContainer } from "../utils/motion";

//template_06w7nng

//service_a96yfag

//ZYQIZZeesmX7T3QY8

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    console.log("wtf")

    if (form.name!="" && form.email!="" && form.message!="") {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          "service_a96yfag",
          "template_06w7nng",
          {
            from_name: form.name,
            to_name: "Tyson Brown",
            from_email: form.email,
            to_email: "thetysonbrown.com",
            message: form.message,
          },
          "ZYQIZZeesmX7T3QY8"
        )
        .then(
          () => {
            setLoading(false);
            setSent(true);

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
          }
        );
    }
  };

  return (
    <div
      className={`sm:px-16 px-6 max-w-7xl mx-auto relative z-0 flex justify-between lg:flex-row flex-col-reverse lg:gap-36 overflow-hidden`}
    >
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:py-16 py-10 relative z-0 flex-1`}
      >
        <span className='hash-span' id="contact">
          &nbsp;
        </span>

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='bg-none rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div
            className='mt-8 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-white py-4 px-6 placeholder:text-tertiary text-primary rounded-md outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-white py-4 px-6 placeholder:text-tertiary text-primary rounded-md outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-2'>Your Message</span>
              <textarea
                rows={9}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-white py-4 px-6 placeholder:text-tertiary text-primary rounded-md outline-none border-none font-medium'
              />
            </label>

            <button
              onClick={handleSubmit}
              className={`${sent ? "hidden" : ""} bg-white py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary`}
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <button
              className={`${sent ? "" : "hidden"} bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary`}
            >
              Sent
            </button>
          </div>
        </motion.div>
      </motion.section>                         

      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`sm:py-16 py-10 relative z-0`}
      >
        <span className='hash-span' id="interests">
          &nbsp;
        </span>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
        >
          <Interests />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact