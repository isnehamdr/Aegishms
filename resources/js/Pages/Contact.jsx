import React, { useRef, useState } from "react";
import { Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SEO from "@/Components/SEO";

export default function Contact() {
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const contactDepartments = {
    sales: {
      label: "Sales",
      toEmail: "info@aegishms.com",
      ccEmail: "",
    },
    support: {
      label: "Support",
      toEmail:"support@aegishms.com",
      ccEmail:"info@aegishms.com",
    },
  };

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    inquiry_type: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const siteUrl = 'https://www.aegishms.com';
  const canonicalUrl = `${siteUrl}/contact`;
  const ogImageUrl = `${siteUrl}/images/og-contact.jpg`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Inquiry type validation
    if (!formData.inquiry_type) {
      newErrors.inquiry_type = "Please select sales or support";
    } else if (!contactDepartments[formData.inquiry_type]) {
      newErrors.inquiry_type = "Please select a valid inquiry type";
    }
    
    // First Name validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    } else if (formData.first_name.trim().length < 2) {
      newErrors.first_name = "First name must be at least 2 characters";
    }
    
    // Last Name validation
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    } else if (formData.last_name.trim().length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone number validation
    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/;
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Please enter a valid phone number";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // Scroll to the first error
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          element.focus();
        }
      }
      return;
    }

    if (!captchaToken) {
      alert("Please verify that you are not a robot");
      return;
    }

    setLoading(true);
    const selectedDepartment = contactDepartments[formData.inquiry_type];

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          inquiry_type: selectedDepartment.label,
          to_email: selectedDepartment.toEmail,
          cc_email: selectedDepartment.ccEmail,
          first_name: formData.first_name,
          last_name: formData.last_name,
          full_name: `${formData.first_name} ${formData.last_name}`,
          email: formData.email,
          reply_to: formData.email,
          phone_number: formData.phone_number,
          message: formData.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      alert("Message sent successfully! We'll get back to you soon.");
      setFormData({
        inquiry_type: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
      setErrors({});
      recaptchaRef.current.reset();
      setCaptchaToken("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert(`Failed to send message. Please try again later. Error: ${error?.text || error?.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    "name": "Aegis Software",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dhantil Lane 1",
      "addressLocality": "Lalitpur",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+9779707096690",
        "contactType": "customer service",
        "email": "info@aegishms.com",
        "availableLanguage": ["English", "Nepali"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/aegishms",
      "https://www.linkedin.com/company/aegishms",
      "https://twitter.com/aegishms"
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": "Aegis Software",
    "publisher": { "@id": `${siteUrl}#organization` }
  };

  // WebPage Schema
  const webpageSchema = {
    "@type": "ContactPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": "Contact Us | Aegis Software",
    "description": "Get in touch with Aegis Software for inquiries about our hotel and restaurant management solutions. Contact us via phone, email, or our contact form.",
    "isPartOf": { "@id": `${siteUrl}#website` },
    "about": { "@id": `${siteUrl}#organization` }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": canonicalUrl
      }
    ]
  };

  // Combine all schemas
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      webpageSchema,
      breadcrumbSchema
    ]
  };

  return (
    <GuestLayout>
      <SEO 
        title="Contact Us | Aegis Software"
        description="Get in touch with Aegis Software for inquiries about our hotel and restaurant management solutions. Contact us via phone, email, or our contact form. We're here to help transform your hospitality business."
        keywords="contact Aegis, hotel software inquiry, demo request Nepal, pricing information, support contact, Aegis HMS contact, hotel management software help"
        image={ogImageUrl}
        canonical={canonicalUrl}
        schema={fullSchema}
      />

      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 lg:px-32">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#005c94]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-[#0EA5E9]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#33C3F0]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(109.6deg, rgba(0,92,148,0.05) 11.2%, rgba(14,165,233,0.05) 91.1%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="mt-[68px] bg-[url('/images/half-circle-bg.png')] bg-cover h-[50vh] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl sm:text-6xl font-semibold mb-6">Contact Us</h1>

        <nav aria-label="Breadcrumb" className="flex items-center text-sm uppercase bg-black/30 rounded-lg px-4 py-2">
          <Link href="/" className="text-white hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-200" aria-current="page">Contact</span>
        </nav>
      </div>

      {/* Content */}
      <div className="py-16 flex justify-center">
        <div className="max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#005c94] to-[#0EA5E9]">Get in touch</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Have questions or feedback about our hotel management software? Reach out using the form below or contact us directly.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">📍 Address</h3>
                <p className="text-gray-600">Dhantil Lane 1, Lalitpur, Nepal</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">📞 Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+9779707096690" className="hover:text-[#005c94] transition-colors">
                    +977 9707096690
                  </a>
                </p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">✉️ Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@aegishms.com" className="hover:text-[#005c94] transition-colors">
                    info@aegishms.com
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: Closed</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-lg shadow-lg" noValidate>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <p className="text-sm text-gray-500 mb-4">* All fields are required</p>

            <div>
              <label htmlFor="inquiry_type" className="block text-sm font-medium text-gray-700 mb-1">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiry_type"
                name="inquiry_type"
                value={formData.inquiry_type}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={errors.inquiry_type ? "true" : "false"}
                className={`w-full border ${errors.inquiry_type ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
              >
                <option value="">Select sales or support</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
              </select>
              {errors.inquiry_type && (
                <p className="text-red-500 text-xs mt-1">{errors.inquiry_type}</p>
              )}
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your first name"
                  aria-required="true"
                  aria-invalid={errors.first_name ? "true" : "false"}
                  className={`w-full border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your last name"
                  aria-required="true"
                  aria-invalid={errors.last_name ? "true" : "false"}
                  className={`w-full border ${errors.last_name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                aria-required="true"
                aria-invalid={errors.phone_number ? "true" : "false"}
                className={`w-full border ${errors.phone_number ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
              />
              {errors.phone_number && (
                <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell us how we can help you..."
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#005c94] focus:border-transparent transition-colors`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center my-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken("")}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[#005c94] to-[#0EA5E9] text-white font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="map-container w-full mt-8 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28264.36440534234!2d85.32339!3d27.684987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19735ce5cb9b%3A0x9937647256eca8d8!2sAegis%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1740720723449!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aegis Software Location"
              aria-label="Google Maps showing Aegis Software location in Kathmandu"
            ></iframe>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
