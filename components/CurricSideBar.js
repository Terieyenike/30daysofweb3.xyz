/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { SparklesIcon as SolidSparkles } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid";
import CurriculumContent from "./CurriculumContent";
import Image from "next/image";
import { updateIndexSignature } from "typescript";

function NavItem({ value, index }) {
  return (
    <Link href={"/course/" + value} passHref>
      <div className="text-indigo-100 hover:bg-indigo-600 cursor-pointer">
        <SparklesIcon
          className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
          aria-hidden="true"
        />
        Lesson {index} - {value}
      </div>
    </Link>
  );
}

function NumberList(props) {
  const paths = props.paths;
  const listItems = paths.map((path, index) => (
    <NavItem key={path.params.id} value={path.params.id} index={updateIndexSignature} />
  ));
  return <div>{listItems}</div>;
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function CurricSidebar({ curricData, id, paths }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex -ml-20 flex-col flex-grow pt-5 bg-[#000]   overflow-y-auto">
            <div className="mt-5 ml-3 flex-1 flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                <NumberList paths={paths} />
              </nav>
            </div>
          </div>
        </div>

        <CurriculumContent curricData={curricData} id={id} />
      </div>
    </>
  );
}
