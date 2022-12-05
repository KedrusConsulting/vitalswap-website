import React, { useEffect, useRef, useState } from "react";

function FAQCard({ title, body }) {
  const [open, setOpen] = useState(false);
  const paraRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    if (open) {
      bodyRef.current.style.height = paraRef.current.offsetHeight + "px";
    } else {
      bodyRef.current.style.height = 0;
    }
  }, [open]);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className={`faq__faq faq__faq--${open ? "is-open" : ""}`}
    >
      <div className="faq__title" onClick={() => setOpen((prev) => !prev)}>
        <h5>{title}</h5>

        {!open ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.625 3C11.9234 3 12.2095 3.11853 12.4205 3.32951C12.6315 3.54048 12.75 3.82664 12.75 4.125V10.5H19.125C19.4233 10.5 19.7096 10.6185 19.9205 10.8295C20.1315 11.0405 20.25 11.3266 20.25 11.625C20.25 11.9234 20.1315 12.2095 19.9205 12.4205C19.7096 12.6315 19.4233 12.75 19.125 12.75H12.75V19.125C12.75 19.4233 12.6315 19.7096 12.4205 19.9205C12.2095 20.1315 11.9234 20.25 11.625 20.25C11.3266 20.25 11.0405 20.1315 10.8295 19.9205C10.6185 19.7096 10.5 19.4233 10.5 19.125V12.75H4.125C3.82664 12.75 3.54048 12.6315 3.32951 12.4205C3.11853 12.2095 3 11.9234 3 11.625C3 11.3266 3.11853 11.0405 3.32951 10.8295C3.54048 10.6185 3.82664 10.5 4.125 10.5H10.5V4.125C10.5 3.82664 10.6185 3.54048 10.8295 3.32951C11.0405 3.11853 11.3266 3 11.625 3Z"
              fill="#0875E0"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.375 11.625C0.375 11.0037 0.87868 10.5 1.5 10.5H22.5C23.1213 10.5 23.625 11.0037 23.625 11.625C23.625 12.2463 23.1213 12.75 22.5 12.75H1.5C0.87868 12.75 0.375 12.2463 0.375 11.625Z"
              fill="#0875E0"
            />
          </svg>
        )}
      </div>

      <div ref={bodyRef} className="faq__body">
        <p ref={paraRef} className="faq__answer">
          {body}
        </p>
      </div>
    </div>
  );
}

export default FAQCard;
