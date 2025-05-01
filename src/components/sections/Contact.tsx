import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5173/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
    >
      <motion.div
        ref={ref}
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to contact me using the form below or through any of the
            provided channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm">
                  <Mail className="text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    Email
                  </h4>
                  <a
                    href="mailto:john.doe@example.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    patiltejas189@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm">
                  <Phone className="text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    +91 869 180 5257
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-md shadow-sm">
                  <MapPin className="text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    Location
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Bhayander, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6">
              <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-4">
                Available For:
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <span>Freelance Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <span>Full-time Positions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <span>Consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                  <span>Speaking Engagements</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 outline-none transition-all"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 outline-none transition-all resize-y"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="p-4 bg-success-100 text-success-900 rounded-md">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-error-100 text-error-900 rounded-md">
                  There was an error sending your message. Please try again
                  later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
