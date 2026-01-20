"use client";

import { useState, useRef, useEffect } from "react";

type Item = {
  id: string;
  name: string;
  photoUrl?: string | null;
};

type SearchableSelectProps = {
  label: string;
  items: Item[];
  valueId: string;
  onChange: (id: string) => void;
  placeholder?: string;
  isLoading?: boolean;
  emptyText?: string;
  createLabel?: string;
  onCreate?: (input: { name: string; photoUrl?: string }) => Promise<{ id: string }>;
  allowClear?: boolean;
};

export function SearchableSelect({
  label,
  items,
  valueId,
  onChange,
  placeholder = "Search...",
  isLoading = false,
  emptyText = "No items found",
  createLabel = "Add new",
  onCreate,
  allowClear = false,
}: SearchableSelectProps) {
  const [filter, setFilter] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedItem = items.find((item) => item.id === valueId);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCreate = async () => {
    if (!onCreate || !newName.trim()) return;
    setIsCreating(true);
    try {
      const created = await onCreate({
        name: newName.trim(),
        photoUrl: newPhotoUrl.trim() || undefined,
      });
      onChange(created.id);
      setShowCreateForm(false);
      setShowDropdown(false);
      setNewName("");
      setNewPhotoUrl("");
      setFilter("");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Failed to create");
    } finally {
      setIsCreating(false);
    }
  };

  if (showCreateForm) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-4">
        <h3 className="mb-3 font-medium text-slate-200">{createLabel}</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter name"
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Photo URL (optional)
            </label>
            <input
              type="url"
              value={newPhotoUrl}
              onChange={(e) => setNewPhotoUrl(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
            />
            {newPhotoUrl.trim() && (
              <div className="mt-2">
                <img
                  src={newPhotoUrl}
                  alt="Preview"
                  className="h-16 w-16 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              disabled={!newName.trim() || isCreating}
              className="flex-1 rounded-lg bg-amber-600 px-4 py-2 font-medium text-black transition-all hover:bg-amber-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isCreating ? "Creating..." : "Create"}
            </button>
            <button
              onClick={() => {
                setShowCreateForm(false);
                setNewName("");
                setNewPhotoUrl("");
              }}
              disabled={isCreating}
              className="flex-1 rounded-lg border border-slate-600 px-4 py-2 font-medium text-slate-300 transition-all hover:bg-slate-700 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>

      {isLoading ? (
        <div className="flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : (
        <>
          {/* Dropdown trigger button */}
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-left text-white hover:border-amber-500 focus:border-amber-500 focus:outline-none flex items-center justify-between"
          >
            {selectedItem ? (
              <div className="flex items-center gap-3 flex-1">
                {selectedItem.photoUrl ? (
                  <img
                    src={selectedItem.photoUrl}
                    alt={selectedItem.name}
                    className="h-6 w-6 rounded-full object-cover bg-slate-700"
                    onError={(e) => {
                      // Replace with initial on error
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs font-medium">
                    {selectedItem.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-medium">{selectedItem.name}</span>
              </div>
            ) : (
              <span className="text-slate-500">{placeholder}</span>
            )}
            <div className="flex items-center gap-2">
              {allowClear && selectedItem && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange("");
                    setShowDropdown(false);
                  }}
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              )}
              <svg
                className={`h-5 w-5 text-slate-400 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute z-50 mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 shadow-xl">
              {/* Search input */}
              <div className="p-2 border-b border-slate-800">
                <input
                  type="text"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  placeholder="Type to search..."
                  className="w-full rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none text-sm"
                  autoFocus
                />
              </div>

              {/* Results */}
              <div className="max-h-64 overflow-y-auto">
                {filteredItems.length > 0 ? (
                  <div className="divide-y divide-slate-800">
                    {filteredItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          onChange(item.id);
                          setFilter("");
                          setShowDropdown(false);
                        }}
                        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-800"
                      >
                        {item.photoUrl ? (
                          <img
                            src={item.photoUrl}
                            alt={item.name}
                            className="h-8 w-8 rounded-full object-cover bg-slate-700"
                            onError={(e) => {
                              // Hide broken images
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-sm font-medium">
                            {item.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <span className="font-medium text-white">{item.name}</span>
                        {item.id === valueId && (
                          <svg className="ml-auto h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="mb-3 text-sm text-slate-400">{emptyText}</p>
                    {onCreate && (
                      <button
                        type="button"
                        onClick={() => {
                          setNewName(filter);
                          setShowCreateForm(true);
                          setShowDropdown(false);
                        }}
                        className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-amber-500"
                      >
                        {createLabel}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
