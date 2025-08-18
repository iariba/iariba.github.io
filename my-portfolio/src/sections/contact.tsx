import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  // 🔑 Your EmailJS keys (replace with your own IDs)
  const SERVICE_ID = "portfolio-1";
  const TEMPLATE_ID = "template_o0er8bc";
  const PUBLIC_KEY = "Xw-5kmvXxHGoCIwY6";

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Show loading toast
    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      toast.success("Message sent successfully!", { id: toastId });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Try again.", { id: toastId });
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#fdfcdc] py-16 px-6 md:px-16 flex flex-col items-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#f07167] mb-8">
        Contact Me
      </h2>

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your full name"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f07167] focus:border-[#f07167] transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f07167] focus:border-[#f07167] transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f07167] focus:border-[#f07167] transition resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#f07167] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#e85a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f07167] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
