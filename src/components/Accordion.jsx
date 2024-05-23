import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion one",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, labore exercitationem aliquam, id molestias aperiam quasi, nam tempore enim repudiandae nulla autem quod veniam ducimus deserunt doloribus beatae cupiditate. Iusto.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, labore exercitationem aliquam, id molestias aperiam quasi, nam tempore enim repudiandae nulla autem quod veniam ducimus deserunt doloribus beatae cupiditate. Iusto.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, labore exercitationem aliquam, id molestias aperiam quasi, nam tempore enim repudiandae nulla autem quod veniam ducimus deserunt doloribus beatae cupiditate. Iusto.",
  },
];

const Accordion = () => {
  return (
    <div className="max-w-[50rem] rounded-2xl overflow-hidden">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Accordion;

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-4">
      <div
        onClick={() => setIsOpen((is) => !is)}
        className="p-4 cursor-pointer flex items-center justify-between font-bold text-xl">
        <div> {item.title}</div>
        <ChevronDownIcon
          className={`w-5 h-5 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`px-4 py-0 text-slate-500 leading-6 overflow-hidden transition-all duration-300 opacity-0 max-h-0 ${
          isOpen ? "max-h-screen opacity-100 p-4" : ""
        }`}>
        {item.text}
      </div>
    </div>
  );
};
