import { Sidebar } from "flowbite-react";
import {
  HiAnnotation,
  HiArrowCircleDown,
  HiBadgeCheck,
  HiBell,
  HiChevronDoubleRight,
  HiClipboardList,
  HiCollection,
  HiCreditCard,
  HiDeviceTablet,
  HiDuplicate,
  HiHome,
  HiMinus,
  HiOutlineChevronDoubleRight,
  HiOutlineClock,
  HiPencilAlt,
    HiStar,
    HiInbox,
    HiArrowSmRight,
    HiShoppingBag,
  HiViewBoards,
  HiTable,
    HiUser,
  HiChartPie
} from "react-icons/hi";

export default function MainSideBar() {
    return (
      <div className="w-fit">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="alternative"
              >
                Kanban
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} label="3">
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    );
}