import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
	HeartIcon,
	MenuIcon,
	PaperAirplaneIcon,
	PlusCircleIcon,
	UserGroupIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

export default function Example() {
	const { data: session } = useSession();
	const [open, setOpen] = useRecoilState(modalState);

	return (
		<div className="flex w-56 justify-end fixed top-5 md:hidden">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button>
						<MenuIcon className="w-7 h-7" aria-hidden="true" />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="px-1 py-1 ml-2">
							<Menu.Item>
								<div className="flex mb-3">
									<PaperAirplaneIcon className="hamBtn rotate-45" />
									<h2 className="ml-3 cursor-pointer">DMs</h2>
								</div>
							</Menu.Item>
							<Menu.Item>
								<div className="flex mb-1">
									<PlusCircleIcon
										onClick={() => setOpen(true)}
										className="hamBtn"
									/>
									<h2
										onClick={() => setOpen(true)}
										className="ml-3 cursor-pointer "
									>
										Upload
									</h2>
								</div>
							</Menu.Item>
						</div>
						<div className="px-1 py-1 ml-2">
							<Menu.Item>
								<div className="flex mb-3">
									<UserGroupIcon className="hamBtn" />
									<h2 className="ml-3 cursor-pointer">Groups</h2>
								</div>
							</Menu.Item>
							<Menu.Item>
								<div className="flex mb-3">
									<HeartIcon className="hamBtn" />
									<h2 className="ml-3 cursor-pointer">Liked</h2>
								</div>
							</Menu.Item>
						</div>
						<div className="px-1 py-1">
							<Menu.Item>
								<img
									onClick={signOut}
									className="flex h-10 w-10 rounded-full cursor-pointer"
									src={session?.user?.image}
									alt="profile pic"
								/>
							</Menu.Item>
							<h2 className="absolute bottom-3 ml-12 font-bold">
								{session?.user?.username}
							</h2>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}

function PaperAirPlaneIconActive(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function PaperAirplaneIconInactive(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
}

function DuplicateActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
}

function ArchiveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function ArchiveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function MoveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
}

function MoveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
}
