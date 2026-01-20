"use client";

import { useState } from "react";

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
}: SearchableSelectProps) {
  const [filter, setFilter] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const selectedItem = items.find((item) => item.id === valueId);
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

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
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
        {label}
      </label>

      {isLoading ? (
        <div className="flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 py-8">
          <div className="h-6 w-6 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>
      ) : (
        <>
          {/* Selected item display */}
          {selectedItem && (
            <div className="mb-2 flex items-center gap-3 rounded-lg bg-amber-500/20 border-2 border-amber-500 px-4 py-2">
              {selectedItem.photoUrl && (
                <img
                  src={selectedItem.photoUrl}
                  alt={selectedItem.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <span className="font-medium text-amber-200">{selectedItem.name}</span>
              <button
                onClick={() => onChange("")}
                className="ml-auto text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          {/* Search input */}
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder={placeholder}
            className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
          />

          {/* Results */}
          {filter && (
            <div className="mt-2 max-h-64 overflow-y-auto rounded-lg border border-slate-700 bg-slate-900">
              {filteredItems.length > 0 ? (
                <div className="divide-y divide-slate-800">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onChange(item.id);
                        setFilter("");
                      }}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-800"
                    >
                      {item.photoUrl && (
                        <img
                          src={item.photoUrl}
                          alt={item.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      <span className="font-medium text-white">{item.name}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center">
                  <p className="mb-3 text-slate-400">{emptyText}</p>
                  {onCreate && (
                    <button
                      onClick={() => {
                        setNewName(filter);
                        setShowCreateForm(true);
                      }}
                      className="rounded-lg bg-amber-600 px-4 py-2 font-medium text-black transition-all hover:bg-amber-500"
                    >
                      {createLabel}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
