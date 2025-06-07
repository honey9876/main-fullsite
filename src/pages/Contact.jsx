// import React, { useEffect, useRef } from "react";
// import ContactForm from "../components/ContactForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const contactInfoRef = useRef(null);
//   const imageSectionRef = useRef(null);

//   useEffect(() => {
//     // Get In Touch animation: slide in from right
//     gsap.fromTo(
//       titleRef.current,
//       {
//         x: 100, // Start from right
//         opacity: 0, // Invisible
//       },
//       {
//         x: 0, // Move to center
//         opacity: 1, // Fully visible
//         ease: "power2.out",
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 90%", // Trigger earlier for visibility
//           end: "top 40%",
//           scrub: 0.5, // Smooth scroll-linked animation
//           toggleActions: "play none none reverse", // Reverse on scroll up
//           markers: false, // Disable for production
//         },
//       }
//     );

//     // Form animation: slide in from left
//     gsap.fromTo(
//       formRef.current,
//       {
//         x: -100, // Start from left
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Contact Info animation: slide in from right
//     gsap.fromTo(
//       contactInfoRef.current,
//       {
//         x: 100, // Start from right
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: contactInfoRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Image Section animation: zoom in
//     gsap.fromTo(
//       imageSectionRef.current,
//       {
//         scale: 0.8, // Start smaller
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: imageSectionRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Cleanup ScrollTriggers on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="contact"
//       className="h-screen flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-12 xl:px-12 xl:py-16 gradient-bg overflow-hidden"
//     >
//       <div className="container mx-auto max-w-4xl w-full">
//         <h2
//           ref={titleRef}
//           className="text-2xl sm:text-3xl lg:text-4xl font-aquire-bold mb-6 sm:mb-8 lg:mb-10 text-center text-[#4a3728]"
//         >
//           Get In Touch
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
//           {/* Contact Form */}
//           <div ref={formRef} className="w-full">
//             <ContactForm />
//           </div>

//           {/* Contact Info */}
//           <div ref={contactInfoRef} className="flex flex-col w-full">
//             <div className="bg-[#f6ede8] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg mb-4 sm:mb-6 lg:mb-8">
//               <h3 className="text-lg sm:text-xl font-aquire-bold mb-4 sm:mb-6 text-[#4a3728]">
//                 Contact Information
//               </h3>

//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4">
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728]">Email</h4>
//                     <p className="text-[#0D2B14] text-sm sm:text-base">
//                       offical@throne8.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728]">Location</h4>
//                     <p className="text-[#4a3728] text-sm sm:text-base">
//                       G-01, Anjani Residency Church Road, Manak Vihar Patel
//                       Nagar, Bhopal Madhya Pradesh – 462022, India
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div
//               ref={imageSectionRef}
//               className="bg-[#f6ede8] p-3 sm:p-4 rounded-xl shadow-lg overflow-hidden"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
//                 alt="Throne8 office space"
//                 className="w-full h-auto max-h-[30vh] sm:max-h-[35vh] lg:max-h-[40vh] rounded-lg object-cover"
//               />
//               <p className="text-[#4a3728] text-xs sm:text-sm mt-2 text-center">
//                 Our innovation hub (coming soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import ContactForm from "../components/ContactForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const contactInfoRef = useRef(null);
//   const imageSectionRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   useEffect(() => {
//     // Get In Touch animation: slide in from right
//     gsap.fromTo(
//       titleRef.current,
//       {
//         x: 100,
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Form animation: slide in from left
//     gsap.fromTo(
//       formRef.current,
//       {
//         x: -100,
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Contact Info animation: slide in from right
//     gsap.fromTo(
//       contactInfoRef.current,
//       {
//         x: 100,
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: contactInfoRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Image Section animation: zoom in
//     gsap.fromTo(
//       imageSectionRef.current,
//       {
//         scale: 0.8,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         ease: "power2.out",
//         duration: 0.6,
//         scrollTrigger: {
//           trigger: imageSectionRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Social Icons animation: fade in one by one
//     gsap.fromTo(
//       socialIconsRef.current.children,
//       {
//         opacity: 0,
//         y: 20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         ease: "power2.out",
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: socialIconsRef.current,
//           start: "top 90%",
//           end: "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Cleanup ScrollTriggers on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <

// section
//       id="contact"
//       className="h-screen flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-12 xl:px-12 xl:py-16 gradient-bg overflow-hidden"
//     >
//       <div className="container mx-auto max-w-4xl w-full">
//         <h2
//           ref={titleRef}
//           className="text-2xl sm:text-3xl lg:text-4xl font-aquire-bold mb-6 sm:mb-8 lg:mb-10 text-center text-[#4a3728]"
//         >
//           Get In Touch
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
//           {/* Contact Form */}
//           <div ref={formRef} className="w-full">
//             <ContactForm />
//           </div>

//           {/* Contact Info */}
//           <div ref={contactInfoRef} className="flex flex-col w-full">
//             <div className="bg-[#f6ede8] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg mb-4 sm:mb-6 lg:mb-8 border border-[#e0d7d2]">
//               <h3 className="text-lg sm:text-xl font-aquire-bold mb-4 sm:mb-6 text-[#4a3728] relative inline-block">
//                 Contact Information
//                 <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//               </h3>

//               <div className="space-y-4 sm:space-y-5">
//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-sm sm:text-base">Email</h4>
//                     <p className="text-[#0D2B14] text-sm sm:text-base">
//                       offical@throne8.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-sm sm:text-base">Location</h4>
//                     <a
//                       href="https://www.google.com/maps/place/G-01,+Anjani+Residency,+Church+Road,+Manak+Vihar,+Patel+Nagar,+Bhopal,+Madhya+Pradesh+462022,+India"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#4a3728] text-sm sm:text-base hover:underline"
//                       aria-label="View location on Google Maps"
//                     >
//                       G-01, Anjani Residency, Church Road, Manak Vihar, Patel Nagar, Bhopal, Madhya Pradesh – 462022, India
//                     </a>
//                   </div>
//                 </div>

//                 <hr className="border-t border-[#e0d7d2] my-2 sm:my-3" />

//                 <h4 className="font-medium text-[#4a3728] text-sm sm:text-base relative inline-block">
//                   Connect With Us on Social Media
//                   <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//                 </h4>
//                 <div ref={socialIconsRef} className="flex flex-wrap gap-4 sm:gap-6 bg-gradient-to-r from-[#f6ede8] to-[#e0d7d2] p-3 rounded-lg">
//                   <a
//                     href="https://www.linkedin.com/company/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on LinkedIn"
//                     title="LinkedIn"
//                   >
//                     <FontAwesomeIcon icon={faLinkedin} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                   <a
//                     href="https://twitter.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on Twitter"
//                     title="Twitter"
//                   >
//                     <FontAwesomeIcon icon={faTwitter} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on Facebook"
//                     title="Facebook"
//                   >
//                     <FontAwesomeIcon icon={faFacebook} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on Instagram"
//                     title="Instagram"
//                   >
//                     <FontAwesomeIcon icon={faInstagram} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                   <a
//                     href="https://www.youtube.com/@throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on YouTube"
//                     title="YouTube"
//                   >
//                     <FontAwesomeIcon icon={faYoutube} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                   <a
//                     href="https://t.me/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl hover:scale-110 hover:text-[#0D2B14] transition-transform duration-300"
//                     aria-label="Visit Throne8 on Telegram"
//                     title="Telegram"
//                   >
//                     <FontAwesomeIcon icon={faTelegram} className="bg-[#e0d7d2] p-2 rounded-full" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               ref={imageSectionRef}
//               className="bg-[#f6ede8] p-3 sm:p-4 rounded-xl shadow-lg overflow-hidden border border-[#e0d7d2]"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
//                 alt="Throne8 office space"
//                 className="w-full h-auto max-h-[30vh] sm:max-h-[35vh] lg:max-h-[40vh] rounded-lg object-cover"
//               />
//               <p className="text-[#4a3728] text-xs sm:text-sm mt-2 text-center">
//                 Our innovation hub (coming soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import ContactForm from "../components/ContactForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import {
//   faLinkedin,
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faYoutube,
//   faTelegram,
// } from "@fortawesome/free-brands-svg-icons";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const contactInfoRef = useRef(null);
//   const imageSectionRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   useEffect(() => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;

//     // Get In Touch animation
//     gsap.fromTo(
//       titleRef.current,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.8,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: isMobile ? "top 95%" : "top 90%",
//           end: isMobile ? "top 50%" : "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Form animation
//     gsap.fromTo(
//       formRef.current,
//       { x: -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: isMobile ? "top 95%" : "top 90%",
//           end: isMobile ? "top 50%" : "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Contact Info animation
//     gsap.fromTo(
//       contactInfoRef.current,
//       { x: 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: contactInfoRef.current,
//           start: isMobile ? "top 95%" : "top 90%",
//           end: isMobile ? "top 50%" : "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Image Section animation
//     gsap.fromTo(
//       imageSectionRef.current,
//       { scale: 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: imageSectionRef.current,
//           start: isMobile ? "top 95%" : "top 90%",
//           end: isMobile ? "top 50%" : "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Social Icons animation
//     gsap.fromTo(
//       socialIconsRef.current.children,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         ease: "power2.out",
//         duration: isMobile ? 0.4 : 0.5,
//         scrollTrigger: {
//           trigger: socialIconsRef.current,
//           start: isMobile ? "top 95%" : "top 90%",
//           end: isMobile ? "top 50%" : "top 40%",
//           scrub: 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col items-center justify-start px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-16 gradient-bg"
//     >
//       <div className="container mx-auto max-w-4xl w-full">
//         <h2
//           ref={titleRef}
//           className="text-2xl sm:text-3xl lg:text-4xl font-aquire-bold mb-6 sm:mb-8 lg:mb-10 text-center text-[#4a3728]"
//         >
//           Get In Touch
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
//           {/* Contact Form */}
//           <div ref={formRef} className="w-full">
//             <ContactForm />
//           </div>

//           {/* Contact Info */}
//           <div ref={contactInfoRef} className="flex flex-col w-full">
//             <div className="bg-[#f6ede8] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg mb-4 sm:mb-6 lg:mb-8 border border-[#e0d7d2]">
//               <h3 className="text-lg sm:text-xl font-aquire-bold mb-4 sm:mb-6 text-[#4a3728] relative inline-block">
//                 Contact Information
//                 <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//               </h3>

//               <div className="space-y-4 sm:space-y-5">
//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-sm sm:text-base">
//                       Email
//                     </h4>
//                     <p className="text-[#0D2B14] text-sm sm:text-base">
//                       offical@throne8.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-lg sm:text-xl mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-sm sm:text-base">
//                       Location
//                     </h4>
//                     <a
//                       href="https://www.google.com/maps/place/G-01,+Anjani+Residency,+Church+Road,+Manak+Vihar,+Patel+Nagar,+Bhopal,+Madhya+Pradesh+462022,+India"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#4a3728] text-sm sm:text-base hover:underline"
//                       aria-label="View location on Google Maps"
//                     >
//                       G-01, Anjani Residency, Church Road, Manak Vihar, Patel
//                       Nagar, Bhopal, Madhya Pradesh – 462022, India
//                     </a>
//                   </div>
//                 </div>

//                 <hr className="border-t border-[#e0d7d2] my-2 sm:my-3" />

//                 <h4 className="font-medium text-[#4a3728] text-sm sm:text-base relative inline-block">
//                   Connect With Us on Social Media
//                   <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//                 </h4>
//                 <div
//                   ref={socialIconsRef}
//                   className="flex flex-wrap gap-4 sm:gap-6 bg-gradient-to-r from-[#f6ede8] to-[#e0d7d2] p-3 rounded-lg"
//                 >
//                   <a
//                     href="https://www.linkedin.com/company/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on LinkedIn"
//                     title="LinkedIn"
//                   >
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://twitter.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Twitter"
//                     title="Twitter"
//                   >
//                     <FontAwesomeIcon
//                       icon={faTwitter}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Facebook"
//                     title="Facebook"
//                   >
//                     <FontAwesomeIcon
//                       icon={faFacebook}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Instagram"
//                     title="Instagram"
//                   >
//                     <FontAwesomeIcon
//                       icon={faInstagram}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.youtube.com/@throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on YouTube"
//                     title="YouTube"
//                   >
//                     <FontAwesomeIcon
//                       icon={faYoutube}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://t.me/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-lg sm:text-xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Telegram"
//                     title="Telegram"
//                   >
//                     <FontAwesomeIcon
//                       icon={faTelegram}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               ref={imageSectionRef}
//               className="bg-[#f6ede8] p-3 sm:p-4 rounded-xl shadow-lg overflow-hidden border border-[#e0d7d2]"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
//                 alt="Throne8 office space"
//                 className="w-full h-auto max-h-[25vh] xs:max-h-[30vh] sm:max-h-[35vh] lg:max-h-[40vh] rounded-lg object-cover"
//               />
//               <p className="text-[#4a3728] text-xs sm:text-sm mt-2 text-center">
//                 Our innovation hub (coming soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import ContactForm from "../components/ContactForm";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import {
//   faLinkedin,
//   faTwitter,
//   faFacebook,
//   faInstagram,
//   faYoutube,
//   faTelegram,
// } from "@fortawesome/free-brands-svg-icons";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Contact() {
//   const titleRef = useRef(null);
//   const formRef = useRef(null);
//   const contactInfoRef = useRef(null);
//   const imageSectionRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   useEffect(() => {
//     const isMobile = window.matchMedia("(max-width: 768px)").matches;

//     // Get In Touch animation
//     gsap.fromTo(
//       titleRef.current,
//       { x: isMobile ? 50 : 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.8,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: isMobile ? "top 85%" : "top 90%",
//           end: isMobile ? "top 60%" : "top 40%",
//           scrub: isMobile ? false : 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Form animation
//     gsap.fromTo(
//       formRef.current,
//       { x: isMobile ? -50 : -100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: formRef.current,
//           start: isMobile ? "top 85%" : "top 90%",
//           end: isMobile ? "top 60%" : "top 40%",
//           scrub: isMobile ? false : 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Contact Info animation
//     gsap.fromTo(
//       contactInfoRef.current,
//       { x: isMobile ? 50 : 100, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: contactInfoRef.current,
//           start: isMobile ? "top 85%" : "top 90%",
//           end: isMobile ? "top 60%" : "top 40%",
//           scrub: isMobile ? false : 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Image Section animation
//     gsap.fromTo(
//       imageSectionRef.current,
//       { scale: isMobile ? 0.9 : 0.8, opacity: 0 },
//       {
//         scale: 1,
//         opacity: 1,
//         ease: "power2.out",
//         duration: isMobile ? 0.5 : 0.6,
//         scrollTrigger: {
//           trigger: imageSectionRef.current,
//           start: isMobile ? "top 85%" : "top 90%",
//           end: isMobile ? "top 60%" : "top 40%",
//           scrub: isMobile ? false : 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     // Social Icons animation
//     gsap.fromTo(
//       socialIconsRef.current.children,
//       { opacity: 0, y: isMobile ? 10 : 20 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.2,
//         ease: "power2.out",
//         duration: isMobile ? 0.4 : 0.5,
//         scrollTrigger: {
//           trigger: socialIconsRef.current,
//           start: isMobile ? "top 85%" : "top 90%",
//           end: isMobile ? "top 60%" : "top 40%",
//           scrub: isMobile ? false : 0.5,
//           toggleActions: "play none none reverse",
//           markers: false,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex flex-col items-center justify-start px-2 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-16 gradient-bg"
//     >
//       <div className="container mx-auto w-full max-w-full sm:max-w-4xl">
//         <h2
//           ref={titleRef}
//           className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-aquire-bold mb-4 xs:mb-6 sm:mb-8 lg:mb-10 text-center text-[#4a3728]"
//         >
//           Get In Touch
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 w-full">
//           {/* Contact Form */}
//           <div ref={formRef} className="w-full">
//             <ContactForm />
//           </div>

//           {/* Contact Info */}
//           <div ref={contactInfoRef} className="flex flex-col w-full">
//             <div className="bg-[#f6ede8] p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg mb-4 sm:mb-6 lg:mb-8 border border-[#e0d7d2]">
//               <h3 className="text-base xs:text-lg sm:text-xl font-aquire-bold mb-4 sm:mb-6 text-[#4a3728] relative inline-block">
//                 Contact Information
//                 <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//               </h3>

//               <div className="space-y-3 xs:space-y-4 sm:space-y-5">
//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-base xs:text-lg sm:text-xl mr-2 xs:mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faEnvelope} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base">
//                       Email
//                     </h4>
//                     <p className="text-[#0D2B14] text-xs xs:text-sm sm:text-base">
//                       offical@throne8.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start">
//                   <div className="text-[#4a3728] text-base xs:text-lg sm:text-xl mr-2 xs:mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
//                     <FontAwesomeIcon icon={faMapMarkerAlt} />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base">
//                       Location
//                     </h4>
//                     <a
//                       href="https://www.google.com/maps/place/G-01,+Anjani+Residency,+Church+Road,+Manak+Vihar,+Patel+Nagar,+Bhopal,+Madhya+Pradesh+462022,+India"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-[#4a3728] text-xs xs:text-sm sm:text-base hover:underline"
//                       aria-label="View location on Google Maps"
//                     >
//                       G-01, Anjani Residency, Church Road, Manak Vihar, Patel
//                       Nagar, Bhopal, Madhya Pradesh – 462022, India
//                     </a>
//                   </div>
//                 </div>

//                 <hr className="border-t border-[#e0d7d2] my-2 sm:my-3" />

//                 <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base relative inline-block">
//                   Connect With Us on Social Media
//                   <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
//                 </h4>
//                 <div
//                   ref={socialIconsRef}
//                   className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 bg-gradient-to-r from-[#f6ede8] to-[#e0d7d2] p-3 rounded-lg"
//                 >
//                   <a
//                     href="https://www.linkedin.com/company/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on LinkedIn"
//                     title="LinkedIn"
//                   >
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://twitter.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Twitter"
//                     title="Twitter"
//                   >
//                     <FontAwesomeIcon
//                       icon={faTwitter}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.facebook.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Facebook"
//                     title="Facebook"
//                   >
//                     <FontAwesomeIcon
//                       icon={faFacebook}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Instagram"
//                     title="Instagram"
//                   >
//                     <FontAwesomeIcon
//                       icon={faInstagram}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://www.youtube.com/@throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on YouTube"
//                     title="YouTube"
//                   >
//                     <FontAwesomeIcon
//                       icon={faYoutube}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                   <a
//                     href="https://t.me/throne8"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-[#4a3728] text-base xs:text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
//                     aria-label="Visit Throne8 on Telegram"
//                     title="Telegram"
//                   >
//                     <FontAwesomeIcon
//                       icon={faTelegram}
//                       className="bg-[#e0d7d2] p-2 rounded-full hover:bg-[#d8cdc6]"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div
//               ref={imageSectionRef}
//               className="bg-[#f6ede8] p-4 sm:p-4 rounded-xl shadow-lg overflow-hidden border border-[#e0d7d2]"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
//                 alt="Throne8 office space"
//                 className="w-full h-auto max-h-[40vh] sm:max-h-[35vh] lg:max-h-[40vh] rounded-lg object-contain"
//               />
//               <p className="text-[#4a3728] text-xs xs:text-sm sm:text-sm mt-2 text-center">
//                 Our innovation hub (coming soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const imageSectionRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Get In Touch animation
    gsap.fromTo(
      titleRef.current,
      { x: isMobile ? 50 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: isMobile ? 0.5 : 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: isMobile ? "top 85%" : "top 90%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Form animation
    gsap.fromTo(
      formRef.current,
      { x: isMobile ? -50 : -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: isMobile ? 0.5 : 0.6,
        scrollTrigger: {
          trigger: formRef.current,
          start: isMobile ? "top 85%" : "top 90%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Contact Info animation
    gsap.fromTo(
      contactInfoRef.current,
      { x: isMobile ? 50 : 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: isMobile ? 0.5 : 0.6,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: isMobile ? "top 85%" : "top 90%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Image Section animation
    gsap.fromTo(
      imageSectionRef.current,
      { scale: isMobile ? 0.9 : 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        duration: isMobile ? 0.5 : 0.6,
        scrollTrigger: {
          trigger: imageSectionRef.current,
          start: isMobile ? "top 85%" : "top 90%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    // Social Icons animation
    gsap.fromTo(
      socialIconsRef.current.children,
      { opacity: 0, y: isMobile ? 10 : 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: isMobile ? 0.4 : 0.5,
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: isMobile ? "top 85%" : "top 90%",
          end: isMobile ? "top 60%" : "top 40%",
          scrub: isMobile ? false : 0.5,
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="contact"
      className="h-auto flex flex-col items-center justify-start px-2 py-3 xs:px-3 xs:py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-16 gradient-bg overflow-hidden"
    >
      <div className="container mx-auto w-full max-w-full sm:max-w-4xl">
        <h2
          ref={titleRef}
          className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-aquire-bold mb-3 xs:mb-4 sm:mb-8 lg:mb-10 text-center text-[#4a3728]"
        >
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-8 lg:gap-10 w-full">
          {/* Contact Form */}
          <div ref={formRef} className="w-full">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="flex flex-col w-full">
            <div className="bg-[#f6ede8] p-3 xs:p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg mb-3 xs:mb-4 sm:mb-6 lg:mb-8 border border-[#e0d7d2]">
              <h3 className="text-base xs:text-lg sm:text-xl font-aquire-bold mb-3 xs:mb-4 sm:mb-6 text-[#4a3728] relative inline-block">
                Contact Information
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
              </h3>

              <div className="space-y-2 xs:space-y-3 sm:space-y-5">
                <div className="flex items-start">
                  <div className="text-[#4a3728] text-base xs:text-lg sm:text-xl mr-2 xs:mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base">
                      Email
                    </h4>
                    <p className="text-[#0D2B14] text-xs xs:text-sm sm:text-base">
                      offical@throne8.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-[#4a3728] text-base xs:text-lg sm:text-xl mr-2 xs:mr-3 sm:mr-4 bg-[#e0d7d2] p-2 rounded-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base">
                      Location
                    </h4>
                    <a
                      href="https://www.google.com/maps/place/G-01,+Anjani+Residency,+Church+Road,+Manak+Vihar,+Patel+Nagar,+Bhopal,+Madhya+Pradesh+462022,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a3728] text-xs xs:text-sm sm:text-base hover:underline"
                      aria-label="View location on Google Maps"
                    >
                      G-01, Anjani Residency, Church Road, Manak Vihar, Patel
                      Nagar, Bhopal, Madhya Pradesh – 462022, India
                    </a>
                  </div>
                </div>

                <hr className="border-t border-[#e0d7d2] my-1 xs:my-2 sm:my-3" />

                <h4 className="font-medium text-[#4a3728] text-xs xs:text-sm sm:text-base relative inline-block">
                  Connect With Us on Social Media
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#4a3728] opacity-30"></span>
                </h4>
                <div
                  ref={socialIconsRef}
                  className="flex flex-wrap gap-2 xs:gap-3 sm:gap-6 bg-gradient-to-r from-[#f6ede8] to-[#e0d7d2] p-2 xs:p-3 rounded-lg"
                >
                  <a
                    href="https://www.linkedin.com/company/throne8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on LinkedIn"
                    title="LinkedIn"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                  <a
                    href="https://x.com/Throne8_?t=2L7kEBms4w9hrO8FNlEnfw&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on Twitter"
                    title="Twitter"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/16iWTqq3KP/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on Facebook"
                    title="Facebook"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/throne8_?igsh=NjY0ZTBweTNzb2Jn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on Instagram"
                    title="Instagram"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                  <a
                    href="http://www.youtube.com/@Throne8-t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on YouTube"
                    title="YouTube"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                  <a
                    href="https://t.me/+PusfnE8Ojmk3M2I1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3728] text-sm xs:text-base sm:text-xl transition-all duration-300 hover:scale-110 hover:rotate-6 hover:text-[#0D2B14] hover:shadow-lg hover:bg-[#d8cdc6] rounded-full"
                    aria-label="Visit Throne8 on Telegram"
                    title="Telegram"
                  >
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="bg-[#e0d7d2] p-1 xs:p-2 rounded-full hover:bg-[#d8cdc6]"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div
              ref={imageSectionRef}
              className="bg-[#f6ede8] p-3 xs:p-4 sm:p-4 rounded-xl shadow-lg overflow-hidden border border-[#e0d7d2]"
            >
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Throne8 office space"
                className="w-full h-auto max-h-[30vh] xs:max-h-[35vh] sm:max-h-[35vh] lg:max-h-[40vh] rounded-lg object-contain"
              />
              <p className="text-[#4a3728] text-xs xs:text-sm sm:text-sm mt-1 xs:mt-2 text-center">
                Our innovation hub (coming soon)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
