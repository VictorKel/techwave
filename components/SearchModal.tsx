import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DARTWOOD = [
  "Mercusys AC12 Cable Router Dual Band with Switch 3x 10/100",
  "Compact PoE Switches 10/100 or 10/100/1000",
  "IEC PDUs with C12 & C19 Mixed Sockets",
  "Router Setup Guide",
  "1U 19 & quot; Horizontally Rack Mounted",
  "Mixed Horizontal PDU 4 x C13 + 5 x C19",
  "Cabling Services",
  "Router Troubleshooting",
  "Network Cabling Tools",
  "Steel Chasis Construction",
  "Fiber Optic Installation",
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
    } else {
      const filtered = DARTWOOD.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    }
  }, [query]);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative inset-0 z-[1100]">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-start justify-center pt-40 px-4">
        <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6">
          <Dialog.Title className="text-lg font-semibold mb-4">Search</Dialog.Title>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cabling, Router"
              className="w-full px-4 py-2 pl-10 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7D0101]" />
          </div>

          {filteredResults.length > 0 && (
            <ul className="mt-4 max-h-60 overflow-y-auto outline-none rounded-md shadow-sm">
              {filteredResults.map((result, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    alert(`You selected: ${result}`);
                    onClose();
                  }}
                >
                  {result}
                </li>
              ))}
            </ul>
          )}

          {query && filteredResults.length === 0 && (
            <p className="text-sm text-gray-500 mt-4">No results found.</p>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SearchModal;
