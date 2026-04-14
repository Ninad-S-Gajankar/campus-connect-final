import { c as createLucideIcon, b as useUI, r as reactExports, j as jsxRuntimeExports } from "./index-3Ay7Q_rP.js";
import { B as Badge } from "./CampusBadge-CTArW4kE.js";
import { B as Button } from "./CampusButton-DMSIN2t5.js";
import { C as Card } from "./CampusCard-0kLhwLfU.js";
import { P as PageHeader } from "./PageHeader-Phty1uEO.js";
import { e as events } from "./index-C4jMyBpZ.js";
import { C as Check } from "./check-4L_L5t2K.js";
import { M as MapPin } from "./map-pin-rhVvjT3q.js";
import { U as Users } from "./users-CBy3q78o.js";
import { C as ChevronRight } from "./chevron-right-Cn6sTkZR.js";
import { X } from "./x-ALhsUHO1.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode);
const emptyForm = {
  name: "",
  gmail: "",
  whatsapp: "",
  usn: "",
  section: ""
};
function validateForm(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.gmail.trim()) {
    errors.gmail = "Gmail is required";
  } else if (!form.gmail.toLowerCase().endsWith("@gmail.com")) {
    errors.gmail = "Must be a valid @gmail.com address";
  }
  if (!form.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp number is required";
  } else if (!/^\d{10}$/.test(form.whatsapp.replace(/\s/g, ""))) {
    errors.whatsapp = "Enter a valid 10-digit number";
  }
  if (!form.usn.trim()) {
    errors.usn = "USN is required";
  } else if (!/^[0-9][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/.test(form.usn.toUpperCase())) {
    errors.usn = "Enter valid USN (e.g. 1BM22CS001)";
  }
  if (!form.section.trim()) {
    errors.section = "Section is required";
  } else if (!/^[A-Za-z]$/.test(form.section.trim())) {
    errors.section = "Enter a single section letter (A, B, C…)";
  }
  return errors;
}
function RegistrationModal({
  event,
  onClose,
  onSuccess
}) {
  const [form, setForm] = reactExports.useState(emptyForm);
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [touched, setTouched] = reactExports.useState({});
  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (touched[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: validateForm({ ...form, [field]: e.target.value })[field]
      }));
    }
  };
  const blur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateForm(form)[field] }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(emptyForm).map((k) => [
        k,
        true
      ])
    );
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    onSuccess(event.title);
  };
  const inputClass = (field) => `w-full px-3 py-2.5 bg-input border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${errors[field] && touched[field] ? "border-destructive focus:ring-destructive/40" : "border-border"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 bg-foreground/40 z-50 flex items-end justify-center",
      onClick: onClose,
      onKeyDown: (e) => e.key === "Escape" && onClose(),
      role: "presentation",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "dialog",
        {
          open: true,
          className: "bg-card w-full max-w-[430px] rounded-t-3xl p-5 animate-slide-up m-0 border-0 bottom-0 fixed inset-x-0 max-h-[92vh] overflow-y-auto",
          onClick: (e) => e.stopPropagation(),
          onKeyDown: (e) => e.stopPropagation(),
          "aria-label": "Event Registration",
          "data-ocid": "event-registration.dialog",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-bold text-foreground font-display", children: "Register for Event" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "p-1.5 rounded-xl hover:bg-muted transition-smooth",
                  "aria-label": "Close",
                  "data-ocid": "event-registration.close_button",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 line-clamp-1", children: event.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1 gradient-primary rounded-full mb-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                noValidate: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "reg-name",
                        className: "text-xs font-semibold text-foreground",
                        children: [
                          "Full Name ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "reg-name",
                        type: "text",
                        placeholder: "e.g. Nischal Kumar",
                        value: form.name,
                        onChange: set("name"),
                        onBlur: blur("name"),
                        className: inputClass("name"),
                        "data-ocid": "event-registration.name",
                        autoComplete: "name"
                      }
                    ),
                    errors.name && touched.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-[11px] text-destructive",
                        "data-ocid": "event-registration.name.field_error",
                        children: errors.name
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "reg-gmail",
                        className: "text-xs font-semibold text-foreground",
                        children: [
                          "Gmail Address ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "reg-gmail",
                        type: "email",
                        placeholder: "e.g. nischal@gmail.com",
                        value: form.gmail,
                        onChange: set("gmail"),
                        onBlur: blur("gmail"),
                        className: inputClass("gmail"),
                        "data-ocid": "event-registration.gmail",
                        autoComplete: "email"
                      }
                    ),
                    errors.gmail && touched.gmail && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-[11px] text-destructive",
                        "data-ocid": "event-registration.gmail.field_error",
                        children: errors.gmail
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "reg-whatsapp",
                        className: "text-xs font-semibold text-foreground",
                        children: [
                          "WhatsApp Number ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "reg-whatsapp",
                        type: "tel",
                        placeholder: "10-digit number (e.g. 9876543210)",
                        value: form.whatsapp,
                        onChange: set("whatsapp"),
                        onBlur: blur("whatsapp"),
                        className: inputClass("whatsapp"),
                        "data-ocid": "event-registration.whatsapp",
                        maxLength: 10,
                        autoComplete: "tel"
                      }
                    ),
                    errors.whatsapp && touched.whatsapp && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-[11px] text-destructive",
                        "data-ocid": "event-registration.whatsapp.field_error",
                        children: errors.whatsapp
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col gap-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "reg-usn",
                          className: "text-xs font-semibold text-foreground",
                          children: [
                            "USN ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-usn",
                          type: "text",
                          placeholder: "1BM22CS001",
                          value: form.usn,
                          onChange: (e) => set("usn")({
                            ...e,
                            target: {
                              ...e.target,
                              value: e.target.value.toUpperCase()
                            }
                          }),
                          onBlur: blur("usn"),
                          className: `${inputClass("usn")} font-mono tracking-wide uppercase`,
                          "data-ocid": "event-registration.usn",
                          maxLength: 10
                        }
                      ),
                      errors.usn && touched.usn && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] text-destructive",
                          "data-ocid": "event-registration.usn.field_error",
                          children: errors.usn
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "reg-section",
                          className: "text-xs font-semibold text-foreground",
                          children: [
                            "Section ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "reg-section",
                          type: "text",
                          placeholder: "A / B",
                          value: form.section,
                          onChange: (e) => set("section")({
                            ...e,
                            target: {
                              ...e.target,
                              value: e.target.value.toUpperCase()
                            }
                          }),
                          onBlur: blur("section"),
                          className: `${inputClass("section")} text-center uppercase`,
                          "data-ocid": "event-registration.section",
                          maxLength: 1
                        }
                      ),
                      errors.section && touched.section && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-[11px] text-destructive",
                          "data-ocid": "event-registration.section.field_error",
                          children: errors.section
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        variant: "outline",
                        onClick: onClose,
                        fullWidth: true,
                        "data-ocid": "event-registration.cancel_button",
                        children: "Cancel"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        fullWidth: true,
                        loading: submitting,
                        "data-ocid": "event-registration.submit_button",
                        children: submitting ? "Registering…" : "Register Now"
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function EventCard({
  event,
  onBook
}) {
  const spotsLow = event.availableSeats < 30;
  const emojis = {
    Technical: "💻",
    Cultural: "🎭",
    Workshop: "🛠️",
    Sports: "⚽"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      padding: "none",
      hoverable: true,
      className: "overflow-hidden",
      onClick: () => onBook(event),
      "data-ocid": `event-card-${event.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-20 bg-primary/10 flex flex-col items-center justify-center gap-1 shrink-0 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: emojis[event.category] ?? "🎪" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: spotsLow ? "warning" : "success",
              className: "text-[10px] px-1.5",
              children: spotsLow ? "Few left" : "Open"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-3 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground line-clamp-1 mb-1", children: event.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              event.date,
              " · ",
              event.time
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: event.venue })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                event.availableSeats,
                " seats left"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs font-semibold text-primary", children: [
              event.price === 0 ? "Free" : `₹${event.price}`,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 13 })
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function EventBooking() {
  const { setHideBottomNav } = useUI();
  const [selectedEvent, setSelectedEvent] = reactExports.useState(null);
  const [successMessage, setSuccessMessage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setHideBottomNav(selectedEvent !== null);
  }, [selectedEvent, setHideBottomNav]);
  reactExports.useEffect(() => {
    return () => setHideBottomNav(false);
  }, [setHideBottomNav]);
  const handleSuccess = (eventTitle) => {
    setSelectedEvent(null);
    setSuccessMessage(
      `Registration successful! You have registered for "${eventTitle}"`
    );
    setTimeout(() => setSuccessMessage(null), 4e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Event Booking", back: true, backTo: "/dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 flex flex-col gap-3 pb-8", children: [
      successMessage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-start gap-2 p-4 bg-accent/10 rounded-2xl border border-accent/20 animate-slide-up",
          "data-ocid": "event-booking.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "text-accent shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Registration Confirmed!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: successMessage })
            ] })
          ]
        }
      ),
      events.map((event) => /* @__PURE__ */ jsxRuntimeExports.jsx(EventCard, { event, onBook: setSelectedEvent }, event.id))
    ] }),
    selectedEvent && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RegistrationModal,
      {
        event: selectedEvent,
        onClose: () => setSelectedEvent(null),
        onSuccess: handleSuccess
      }
    )
  ] });
}
export {
  EventBooking as default
};
