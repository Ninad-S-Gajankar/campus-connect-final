import { useNavigate } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  IdCard,
  LogOut,
  Mail,
  Pencil,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/CampusBadge";
import { Button } from "../components/ui/CampusButton";
import { Card } from "../components/ui/CampusCard";
import { userProfile as defaultProfile, orderHistory } from "../data";
import type { UserProfile } from "../types";

const statusBadge = {
  delivered: { variant: "success" as const, label: "Delivered" },
  cancelled: { variant: "error" as const, label: "Cancelled" },
  pending: { variant: "warning" as const, label: "Pending" },
};

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}

function InfoRow({ icon, label, value, last }: InfoRowProps) {
  return (
    <div
      className={`flex items-center gap-3 py-3 px-4 ${!last ? "border-b border-gray-100" : ""}`}
    >
      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-gray-400 font-medium leading-none mb-0.5">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800 truncate">{value}</p>
      </div>
    </div>
  );
}

interface EditFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  readOnly?: boolean;
}

function EditField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  readOnly,
}: EditFieldProps) {
  const fieldId = `edit-field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={fieldId}
        className="text-[11px] font-bold text-gray-500 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all outline-none
          ${
            readOnly
              ? "bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white border-gray-200 text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          }`}
      />
      {readOnly && (
        <p className="text-[10px] text-gray-400 -mt-0.5">Cannot be changed</p>
      )}
    </div>
  );
}

const BRANCH_OPTIONS = [
  "Computer Science & Engineering",
  "Electronics & Communication Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Information Science & Engineering",
  "Electrical & Electronics Engineering",
  "Biotechnology",
  "Chemical Engineering",
];

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({ ...defaultProfile });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<UserProfile>({ ...defaultProfile });

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function startEdit() {
    setDraft({ ...profile });
    setEditing(true);
  }

  function cancelEdit() {
    setEditing(false);
  }

  function saveEdit() {
    setProfile({ ...draft });
    setEditing(false);
  }

  function updateDraft(key: keyof UserProfile, value: string | number) {
    setDraft((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <div
        className="relative h-36 w-full"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)",
        }}
        data-ocid="profile.hero_banner"
      >
        <button
          type="button"
          onClick={() => navigate({ to: "/dashboard" })}
          className="absolute top-5 left-4 w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          aria-label="Go back"
          data-ocid="profile.back_button"
        >
          <ChevronRight size={18} className="rotate-180" />
        </button>
        <h1 className="absolute top-5 left-1/2 -translate-x-1/2 text-white font-bold text-base tracking-wide">
          My Profile
        </h1>
        <span className="absolute top-5 right-4 bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30">
          Student
        </span>
      </div>

      {/* ── Avatar (overlapping banner) ───────────────────────────────── */}
      <div
        className="flex flex-col items-center -mt-12 mb-4 px-4"
        data-ocid="profile.avatar_section"
      >
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-white shadow-lg border-4 border-white"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)",
            }}
          >
            {initials}
          </div>
          <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
            <Camera size={13} className="text-blue-500" />
          </div>
        </div>
        <h2 className="mt-3 text-xl font-extrabold text-gray-800 leading-tight">
          {profile.name}
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">
          {profile.branch.split(" ").slice(0, 3).join(" ")} · Year{" "}
          {profile.year}
        </p>
      </div>

      <div className="px-4 flex flex-col gap-4 pb-8">
        {/* ── Profile Info Card ─────────────────────────────────────────── */}
        <div
          className="bg-white rounded-2xl shadow-sm overflow-hidden"
          data-ocid="profile.info_card"
        >
          <div className="px-4 pt-4 pb-2 flex items-center justify-between">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Personal Info
            </h3>
            {!editing ? (
              <button
                type="button"
                onClick={startEdit}
                className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-xl transition-colors"
                data-ocid="profile.edit_button"
              >
                <Pencil size={12} />
                Edit Profile
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-xl transition-colors"
                  data-ocid="profile.cancel_button"
                >
                  <X size={12} />
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveEdit}
                  className="flex items-center gap-1 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-xl transition-colors shadow-sm"
                  data-ocid="profile.save_button"
                >
                  <Check size={12} />
                  Save
                </button>
              </div>
            )}
          </div>

          {/* View mode */}
          {!editing && (
            <>
              <InfoRow
                icon={<Phone size={16} className="text-blue-500" />}
                label="Phone Number"
                value={profile.phone}
              />
              <InfoRow
                icon={<Mail size={16} className="text-blue-500" />}
                label="Gmail"
                value={profile.gmail ?? profile.email}
              />
              <InfoRow
                icon={<Mail size={16} className="text-emerald-500" />}
                label="College Email"
                value={profile.email}
              />
              <InfoRow
                icon={<IdCard size={16} className="text-blue-500" />}
                label="USN / Student ID"
                value={profile.usn}
              />
              <InfoRow
                icon={<BookOpen size={16} className="text-emerald-500" />}
                label="Branch"
                value={profile.branch}
              />
              <InfoRow
                icon={<CalendarDays size={16} className="text-blue-500" />}
                label="Year / Semester"
                value={`Year ${profile.year} · Semester ${profile.year * 2 - 1}`}
                last
              />
            </>
          )}

          {/* Edit mode */}
          {editing && (
            <div
              className="px-4 pt-2 pb-5 flex flex-col gap-4"
              data-ocid="profile.edit_form"
            >
              {/* Divider */}
              <div className="h-px bg-gray-100" />

              <EditField
                label="Full Name"
                value={draft.name}
                onChange={(v) => updateDraft("name", v)}
                placeholder="e.g. Alex Kumar"
              />
              <EditField
                label="Phone Number"
                value={draft.phone}
                onChange={(v) => updateDraft("phone", v)}
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />
              <EditField
                label="Gmail"
                value={draft.gmail ?? ""}
                onChange={(v) => updateDraft("gmail", v)}
                type="email"
                placeholder="yourname@gmail.com"
              />

              {/* Branch selector */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="edit-branch"
                  className="text-[11px] font-bold text-gray-500 uppercase tracking-wider"
                >
                  Branch
                </label>
                <select
                  id="edit-branch"
                  value={draft.branch}
                  onChange={(e) => updateDraft("branch", e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none"
                  data-ocid="profile.branch_select"
                >
                  {BRANCH_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year selector */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Year
                </span>
                <fieldset
                  className="flex gap-2 border-0 p-0 m-0"
                  data-ocid="profile.year_select"
                >
                  <legend className="sr-only">Select year</legend>
                  {[1, 2, 3, 4].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => updateDraft("year", yr)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        draft.year === yr
                          ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                          : "bg-white border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </fieldset>
              </div>

              {/* Read-only fields note */}
              <EditField
                label="College Email"
                value={draft.email}
                onChange={() => {}}
                readOnly
              />
              <EditField
                label="USN / Student ID"
                value={draft.usn}
                onChange={() => {}}
                readOnly
              />

              {/* Save / Cancel footer */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="flex-1 py-3 rounded-2xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                  data-ocid="profile.cancel_button"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveEdit}
                  className="flex-1 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #10b981 100%)",
                  }}
                  data-ocid="profile.save_button"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Order History ─────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-gray-800">Order History</h3>
            <button
              type="button"
              onClick={() => navigate({ to: "/food-court" })}
              className="text-xs text-blue-600 font-semibold hover:underline flex items-center gap-0.5"
              data-ocid="profile.order-again-btn"
            >
              Order again <ChevronRight size={13} />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {orderHistory.map((order, idx) => {
              const { variant, label } = statusBadge[order.status];
              return (
                <Card
                  key={order.id}
                  padding="md"
                  className="flex flex-col gap-2"
                  data-ocid={`profile.order.${idx + 1}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold font-mono text-gray-800">
                        {order.id}
                      </p>
                      <p className="text-[11px] text-gray-400">{order.date}</p>
                    </div>
                    <Badge variant={variant}>{label}</Badge>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {order.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex justify-between text-xs"
                      >
                        <span className="text-gray-500">
                          {item.quantity}× {item.name}
                        </span>
                        <span className="font-semibold text-gray-700">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100 text-sm font-bold">
                    <span className="text-gray-600">Total</span>
                    <span className="text-blue-600">₹{order.total}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ── Logout ────────────────────────────────────────────────────── */}
        <Button
          variant="ghost"
          fullWidth
          size="lg"
          leftIcon={<LogOut size={16} />}
          onClick={() => navigate({ to: "/login" })}
          className="text-red-500 hover:bg-red-50 mt-2 border border-red-100"
          data-ocid="profile.logout_button"
        >
          Log Out
        </Button>

        <p className="text-center text-xs text-gray-400 pb-2">
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}
