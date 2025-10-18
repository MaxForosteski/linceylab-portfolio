"use client";
import { useState, useRef, useEffect } from "react";

type DropdownHabilitiesProps = {
  actualOption: string,
  SetHabilitygroup: (hability: string) => void
}

export default function DropdownHabilities({ actualOption, SetHabilitygroup }: DropdownHabilitiesProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-[90vw]">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 h-[50px] bg-neutral-800 w-[100%] text-white rounded-lg hover:bg-neutral-700 transition-colors"
      >
        {actualOption} ▾
      </button>

      {open && (
        <div
          className="absolute left-0 mt-2 w-100 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-50"
        >
          <div className="py-1 text-gray-700">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors" onClick={() => {SetHabilitygroup("Linguagens"); setOpen(false);} }>
              Linguagens
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors" onClick={() => {SetHabilitygroup("Frontend"); setOpen(false);}} >
              Frontend
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm transition-colors" onClick={() => {SetHabilitygroup("Ferramentas"); setOpen(false);}} >
              Ferramentas
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm transition-colors" onClick={() => {SetHabilitygroup("Databases"); setOpen(false);}} >
              Databases
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm transition-colors" onClick={() => {SetHabilitygroup("Infra"); setOpen(false);}} >
              Infra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
