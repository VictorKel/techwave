import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchModal from "@/components/SearchModal";
import CategorySearch from "@/components/CategorySearch";
import Newsletter from "@/components/Newsletter";


export default function HelpSlugPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <>
        <section className="bg-contain h-[85vh] bg-no-repeat bg-center " style={{ backgroundImage: 'url(/category-image.png)' }}>
          <div className="pl-20 pt-60 text-white flex flex-col items-center">
              <p className="bg-[#7D0101] text-white text-center text-sm px-4 py-2 rounded-full w-fit mb-2">{slug}</p>
              <h1 className="text-5xl font-medium text-center">Golden Protection: Track <br />
                  with Confidence
              </h1>

              <div
                  className="flex items-center bg-[#262626] rounded-full mt-6 px-4 py-2 max-w-xl w-80 mx-auto cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
              >
                  <FaSearch className="text-gray-600 mr-2" />
                  <span className="text-gray-600">Search cabling, Router</span>
              </div>
          </div>
          <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
        <CategorySearch />
        <Newsletter />
    </>
  );
};