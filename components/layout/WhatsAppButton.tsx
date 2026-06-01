export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348000000000";
  const message = encodeURIComponent(
    "Hello, I'd like to discuss a design project with 1695 Designs."
  );
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe57] hover:scale-105 transition-all duration-300"
    >
      {/* WhatsApp icon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.002 2.667C8.637 2.667 2.667 8.636 2.667 16c0 2.37.625 4.6 1.715 6.537L2.667 29.333l7.02-1.682A13.28 13.28 0 0 0 16.002 29.333c7.363 0 13.332-5.97 13.332-13.333 0-7.364-5.969-13.333-13.332-13.333zm0 24c-2.108 0-4.077-.58-5.76-1.587l-.412-.245-4.165.998.998-4.053-.267-.424A10.614 10.614 0 0 1 5.333 16c0-5.882 4.787-10.667 10.669-10.667 5.88 0 10.665 4.785 10.665 10.667 0 5.88-4.785 10.667-10.665 10.667zm5.853-7.987c-.32-.16-1.894-.934-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.214-.374.24-.694.08-.32-.16-1.347-.496-2.565-1.583-.947-.847-1.587-1.893-1.774-2.213-.187-.32-.02-.493.14-.653.145-.143.32-.374.48-.56.16-.187.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.52-.54-.72-.55-.187-.008-.4-.01-.614-.01-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.826.763.33 1.36.527 1.823.674.766.243 1.463.208 2.013.127.614-.09 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.614-.373z" />
      </svg>
    </a>
  );
}
