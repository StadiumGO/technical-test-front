import clsx from "clsx";

const Tag = ({
  className,
  tagName,
}: {
  className?: string;
  tagName: string | number;
}) => {
  return (
    <>
      <li className={clsx(className, "rounded bg-yellow-200 p-1")}>
        {tagName}
      </li>
    </>
  );
};

export default Tag;
