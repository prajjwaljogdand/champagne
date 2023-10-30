import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <li onClick={handleClick} key={label} className="w-full">
      <Link
        href={href}
        className={clsx(
          `
            group 
            flex 
            gap-x-3 
            rounded-3xl 
            pl-5 
            py-2
            w-full
            text-sm 
            leading-6 
            font-semibold 
            text-gray-400 
            hover:text-white 
            hover:bg-sky-500
          `,
          active && "dark:bg-white dark:text-gray-800 text-white bg-sky-500"
        )}
      >
        <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
