// 'use client'
// import React from 'react';
// import userIcn from "../public/ACC.svg"
// import jobIcn from "../public/JOB.svg"
// import courseIcn from "../public/COURSE.svg"
// import blogIcn from "../public/BLOGS.svg"
// import reviewIcn from "../public/REVIEWS.svg"
// import pageIcn from "../public/PAGES.svg"

// import { Layout, Menu, theme } from 'antd';
// const { Header, Content, Sider } = Layout;
// const items1 = [
//     { key: '1', label: 'Users' },
//     { key: '2', label: 'Jobs' },
//     { key: '3', label: 'Courses' },
//     { key: '4', label: 'Blogs' },
//     { key: '5', label: 'Reviews' },
//     { key: '6', label: 'Page' },
// ].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2 = [
//      { key: '1', icon: <React.createElement('img src={userIcn} alt="User Icon" /> },
//      { key: '2', icon: <img src={jobIcn} alt="Job Icon" /> },
//      { key: '3', icon: <img src={courseIcn} alt="course Icon" /> },
//      { key: '4', icon: <img src={blogIcn} alt="blog Icon" /> },
//      { key: '5', icon: <img src={reviewIcn} alt="review Icon" /> },
//      { key: '6', icon: <img src={pageIcn} alt="page Icon" /> },
//     ].map((icon, index) => {
//   const key = String(index + 1);
//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `User ${key}`,
//     children: new Array(3).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });
// const DashDash = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['2']}
//           style={{
//             flex: 1,
//             minWidth: 0,
//           }}
//         />
//       </Header>
//       <Layout>
//       <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//           items={items1}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             items={items2}
//           />
//         </Sider>
//       </Layout>
//     </Layout>
//   );
// };