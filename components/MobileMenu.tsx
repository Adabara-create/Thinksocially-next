"use client";

import { useState } from "react";
import Link from "next/link";

type MobileSection =
  | "managed-services"
  | "cloud-computing"
  | "professional-services"
  | "cybersecurity";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<MobileSection | null>(null);

  const toggleSection = (section: MobileSection) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      {/* =========================================================
          MOBILE NAVIGATION OVERLAY
          ========================================================= */}

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[100] lg:hidden ${
          isOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {/* =======================================================
            BACKDROP
            ======================================================== */}

        <button
          id="mobile-navigation-backdrop"
          type="button"
          className={`absolute inset-0 cursor-default bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close navigation menu"
          tabIndex={-1}
          onClick={closeMenu}
        />

        {/* =======================================================
            MOBILE NAVIGATION PANEL
            ======================================================== */}

        <aside
          id="mobile-navigation-panel"
          className={`absolute inset-y-0 right-0 flex w-full max-w-[430px] translate-x-0 flex-col border-l border-white/10 bg-slate-950 shadow-2xl shadow-black/40 transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
          role="dialog"
          aria-modal="true"
        >
          {/* =====================================================
              PANEL HEADER
              ====================================================== */}

          <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-6">
            {/* BRAND */}

            <Link
              href="/"
              id="mobile-navigation-brand"
              className="group inline-flex items-center gap-3"
              onClick={closeMenu}
            >
              <span className="text-[1rem] font-semibold tracking-[-0.025em] text-white transition-opacity duration-200 group-hover:opacity-80">
                THINKSOCIALLY
              </span>
            </Link>

            {/* CLOSE BUTTON */}

            <button
              id="mobile-navigation-close"
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <i
                data-lucide="x"
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>

          {/* =====================================================
              NAVIGATION CONTENT
              ====================================================== */}

          <div
            id="mobile-navigation-scroll"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6"
          >
            {/* ===================================================
                INTRODUCTION
                ==================================================== */}

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                ThinkSocially
              </p>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                Technology, thoughtfully engineered.
              </p>
            </div>

            {/* ===================================================
                PRIMARY NAVIGATION
                ==================================================== */}

            <nav aria-label="Mobile primary navigation">
              <ul className="space-y-2" role="list">
                {/* ===============================================
                    MANAGED SERVICES
                    ================================================ */}

                <li>
                  <button
                    type="button"
                    className="mobile-nav-section-trigger group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-left transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                    aria-expanded={openSection === "managed-services"}
                    aria-controls="mobile-managed-services"
                    data-mobile-section-trigger="mobile-managed-services"
                    onClick={() => toggleSection("managed-services")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <i
                          data-lucide="server-cog"
                          className="h-[18px] w-[18px]"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-sm font-semibold text-white">
                        Managed Services
                      </span>
                    </span>

                    <i
                      data-lucide="chevron-down"
                      className={`mobile-section-chevron h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        openSection === "managed-services"
                          ? "rotate-180"
                          : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* MANAGED SERVICES CHILDREN */}

                  <div
                    id="mobile-managed-services"
                    className={`mobile-nav-section grid transition-[grid-template-rows,opacity] duration-300 ${
                      openSection === "managed-services"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={openSection !== "managed-services"}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <ul
                        className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4"
                        role="list"
                      >
                        <li>
                          <Link
                            href="/managed-services#desktop-support"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="monitor-cog"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Desktop Support
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#server-support"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="server"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Server Support
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#network-support"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="network"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Network Support
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#monitoring"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="activity"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Monitoring
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#preventive-maintenance"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="wrench"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Preventive Maintenance
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#backup-recovery"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="database-backup"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Backup &amp; Recovery
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#sla-management"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="file-check-2"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            SLA Management
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/managed-services#help-desk"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="headset"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Help Desk
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* ===============================================
                    CLOUD COMPUTING
                    ================================================ */}

                <li>
                  <button
                    type="button"
                    className="mobile-nav-section-trigger group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-left transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                    aria-expanded={openSection === "cloud-computing"}
                    aria-controls="mobile-cloud-computing"
                    data-mobile-section-trigger="mobile-cloud-computing"
                    onClick={() => toggleSection("cloud-computing")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <i
                          data-lucide="cloud"
                          className="h-[18px] w-[18px]"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-sm font-semibold text-white">
                        Cloud Computing
                      </span>
                    </span>

                    <i
                      data-lucide="chevron-down"
                      className={`mobile-section-chevron h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        openSection === "cloud-computing" ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* CLOUD COMPUTING CHILDREN */}

                  <div
                    id="mobile-cloud-computing"
                    className={`mobile-nav-section grid transition-[grid-template-rows,opacity] duration-300 ${
                      openSection === "cloud-computing"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={openSection !== "cloud-computing"}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <ul
                        className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4"
                        role="list"
                      >
                        <li>
                          <Link
                            href="/cloud-computing#cloud-solutions"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="cloud-cog"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Cloud Solutions
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cloud-computing#legacy-upgrades"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="server-cog"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Legacy Upgrades
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cloud-computing#data-migration"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="database-zap"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Data Migration
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cloud-computing#voip"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="phone-call"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            VoIP
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* ===============================================
                    PROFESSIONAL SERVICES
                    ================================================ */}

                <li>
                  <button
                    type="button"
                    className="mobile-nav-section-trigger group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-left transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                    aria-expanded={openSection === "professional-services"}
                    aria-controls="mobile-professional-services"
                    data-mobile-section-trigger="mobile-professional-services"
                    onClick={() => toggleSection("professional-services")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <i
                          data-lucide="briefcase-business"
                          className="h-[18px] w-[18px]"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-sm font-semibold text-white">
                        Professional Services
                      </span>
                    </span>

                    <i
                      data-lucide="chevron-down"
                      className={`mobile-section-chevron h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        openSection === "professional-services"
                          ? "rotate-180"
                          : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* PROFESSIONAL SERVICES CHILDREN */}

                  <div
                    id="mobile-professional-services"
                    className={`mobile-nav-section grid transition-[grid-template-rows,opacity] duration-300 ${
                      openSection === "professional-services"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={openSection !== "professional-services"}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <ul
                        className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4"
                        role="list"
                      >
                        <li>
                          <Link
                            href="/professional-services#it-strategy"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="compass"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            IT Strategy
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/professional-services#business-continuity"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="shield"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Business Continuity Planning
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/professional-services#web-development"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="globe"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Web Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/professional-services#application-development"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="blocks"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Application Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/professional-services#mobile-app-development"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="smartphone"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Mobile App Development
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/professional-services#annual-it-assessments"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="clipboard-check"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Annual IT Assessments
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* ===============================================
                    CYBERSECURITY
                    ================================================ */}

                <li>
                  <button
                    type="button"
                    className="mobile-nav-section-trigger group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3.5 text-left transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                    aria-expanded={openSection === "cybersecurity"}
                    aria-controls="mobile-cybersecurity"
                    data-mobile-section-trigger="mobile-cybersecurity"
                    onClick={() => toggleSection("cybersecurity")}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <i
                          data-lucide="shield-check"
                          className="h-[18px] w-[18px]"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="text-sm font-semibold text-white">
                        Cybersecurity
                      </span>
                    </span>

                    <i
                      data-lucide="chevron-down"
                      className={`mobile-section-chevron h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        openSection === "cybersecurity" ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* CYBERSECURITY CHILDREN */}

                  <div
                    id="mobile-cybersecurity"
                    className={`mobile-nav-section grid transition-[grid-template-rows,opacity] duration-300 ${
                      openSection === "cybersecurity"
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={openSection !== "cybersecurity"}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <ul
                        className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4"
                        role="list"
                      >
                        <li>
                          <Link
                            href="/cybersecurity#risk-assessment"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="scan-search"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Cybersecurity Risk Assessment
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cybersecurity#governance-risk-compliance"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="file-shield"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            IT Governance, Risk &amp; Compliance
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/cybersecurity#threat-monitoring"
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                          >
                            <i
                              data-lucide="radar"
                              className="h-4 w-4 text-slate-500"
                              aria-hidden="true"
                            />
                            Threat Monitoring, Detection &amp; Response
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* ===============================================
                    ABOUT US
                    ================================================ */}

                <li>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-slate-400">
                      <i
                        data-lucide="building-2"
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                      />
                    </span>
                    About Us
                  </Link>
                </li>

                {/* ===============================================
                    SUPPORT
                    ================================================ */}

                <li>
                  <Link
                    href="/support"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/10 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-slate-400">
                      <i
                        data-lucide="life-buoy"
                        className="h-[18px] w-[18px]"
                        aria-hidden="true"
                      />
                    </span>
                    Support
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ===================================================
                SUPPORT / CONTACT ACTIONS
                ==================================================== */}

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="px-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Need assistance?
              </p>

              {/* DESKTOP SUPPORT */}

              <Link
                href="/support"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-200 hover:border-blue-400/30 hover:bg-blue-500/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <i
                      data-lucide="monitor-cog"
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Desktop Support
                    </span>

                    <span className="mt-0.5 block text-xs text-slate-500">
                      Get technical assistance
                    </span>
                  </span>
                </span>

                <i
                  data-lucide="arrow-up-right"
                  className="h-4 w-4 text-slate-500"
                  aria-hidden="true"
                />
              </Link>

              {/* CONTACT */}

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-between rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-950/30 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <i
                      data-lucide="message-square"
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold">
                      Contact Us
                    </span>

                    <span className="mt-0.5 block text-xs text-blue-100">
                      Start a conversation
                    </span>
                  </span>
                </span>

                <i
                  data-lucide="arrow-up-right"
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              PANEL FOOTER
              ====================================================== */}

          <div className="shrink-0 border-t border-white/10 px-6 py-4">
            <p className="text-center text-xs text-slate-600">
              ThinkSocially
            </p>
          </div>
        </aside>
      </div>

      {/* =========================================================
          MOBILE MENU TRIGGER
          ========================================================= */}

      <button
        id="nav-mobile-toggle"
        type="button"
        className="ts-mobile-toggle"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <i
          data-lucide={isOpen ? "x" : "menu"}
          id="nav-mobile-icon"
          aria-hidden="true"
        />
      </button>
    </>
  );
}