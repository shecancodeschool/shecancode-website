// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import Link from "next/link";
// import { GoHome } from "react-icons/go";
// import { HiOutlineUser } from "react-icons/hi2";
// import { CgWorkAlt } from "react-icons/cg";
// import { GrArticle } from "react-icons/gr";
// import { RiPagesFill } from "react-icons/ri";
// import { IoMdAdd } from "react-icons/io";
// import {
//   IoDocumentsOutline,
//   IoSettingsOutline,
//   IoChevronForward,
// } from "react-icons/io5";
// import { AiOutlineFolderView } from "react-icons/ai";
// import { MdDashboard, MdPreview, MdEvent } from "react-icons/md";

// export const Dashboard = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <Link href="/dashboard">
//           <div className="inline-flex w-[240px] justify-between px-3 py-3 text-[16px] text-[#317ACC] font-semibold hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//             <GoHome className="text-[20px] w-[17.42px]" />
//             <p className="text-[16px] w-[90%] hidden justify-center self-center">
//               Dashboard
//             </p>
//           </div>
//         </Link>
//       </div>
//     </Menu>
//   );
// };

// export const DashUsers = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] text-[#317ACC] font-semibold hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <HiOutlineUser className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center md:hidden sm:hidden">
//             Users
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute z-10  w-[240px] rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div>
//           <MenuItem>
//             <Link
//               href="/dashboard/add-user"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoMdAdd />
//               <p>Add user</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="/dashboard/list-user"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoDocumentsOutline />
//               <p>List users</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };

// export const DashJobs = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] font-semibold text-[#317ACC] hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <CgWorkAlt className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center">
//             Jobs
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute  z-10  w-[240px]  rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="">
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoMdAdd />
//               <p>Add new job</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoDocumentsOutline />
//               <p>Job list</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <MdDashboard />
//               <p>Job application</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };

// export const DashCourse = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] font-semibold text-[#317ACC] hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <CgWorkAlt className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center">
//             Courses
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute  z-10  w-[240px]  rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="">
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoMdAdd />
//               <p>Add new course</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <AiOutlineFolderView />
//               <p>View course</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <MdEvent />
//               <p>Event</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };

// export const DashBlogs = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] text-[#317ACC] font-semibold hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <GrArticle className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center">
//             Blogs
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute  z-10  w-[240px]  rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="">
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoMdAdd />
//               <p>Add blog</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <AiOutlineFolderView />
//               <p>View blog</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };

// export const DashReviews = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] text-[#317ACC] font-semibold hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <MdPreview className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center">
//             Reviews
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute  z-10  w-[240px]  rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="">
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoMdAdd />
//               <p>Add new review</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <AiOutlineFolderView />
//               <p>View reviews</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };

// export const DashPages = () => {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <div className="">
//         <MenuButton className="inline-flex w-[278px] justify-between px-3 py-3 text-[16px] text-[#317ACC] font-semibold hover:bg-[#317ACC] hover:text-white hover:rounded-md">
//           <RiPagesFill className="text-[20px] w-[17.42px]" />
//           <p className="text-[16px] w-[90%] hidden justify-center self-center">
//             Pages
//           </p>
//           <IoChevronForward aria-hidden="true" className="text-[20px] hidden" />
//         </MenuButton>
//       </div>

//       <MenuItems
//         transition
//         className="absolute  z-10 w-[240px]  rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="">
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 px-4 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <IoSettingsOutline />
//               <p>Manage pages</p>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <Link
//               href="#"
//               className="flex justify-center items-center gap-3 py-2 text-[16px] text-[#317ACC] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
//             >
//               <AiOutlineFolderView />
//               <p>View pages</p>
//             </Link>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// };
