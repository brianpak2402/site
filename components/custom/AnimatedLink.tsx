export type AnimatedLinkColorVariant = keyof typeof COLOR_VARIANTS;

const COLOR_VARIANTS = {
  purple: {
    border: "group-hover:border-purple-400",
    text: "hover:text-purple-400 focus-visible:text-purple-400",
  },
  teal: {
    border: "group-hover:border-teal-300",
    text: "hover:text-teal-300 focus-visible:text-teal-300",
  },
  yellow: {
    border: "group-hover:border-yellow-500",
    text: "hover:text-yellow-500 focus-visible:text-yellow-500",
  },
};

export default function AnimatedLink({
  text,
  variant,
  href,
  hoverColor = "purple",
}: {
  hoverColor?: AnimatedLinkColorVariant;
  href: string;
  text: string;
  variant: "up" | "right";
}) {
  const modifiedText = text.split(" ");
  const lastWord = modifiedText.pop();

  const borderStyles = COLOR_VARIANTS[hoverColor].border;

  return (
    <>
      {variant === "up" && (
        <a
          className={`inline-flex items-baseline font-medium leading-tight text-slate-200 ${COLOR_VARIANTS[hoverColor].text} group/link text-base`}
          href={href}
        >
          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
          <span>{modifiedText.join(" ")}</span>
          <span className="inline-block">
            &#160;{lastWord}
            <svg
              aria-hidden="true"
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </a>
      )}
      {variant === "right" && (
        <a
          className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
          href={href}
        >
          <span>
            <span
              className={`border-b border-transparent pb-px transition ${borderStyles} motion-reduce:transition-none`}
            >
              {modifiedText.join(" ")}
            </span>
            <span className="whitespace-nowrap">
              <span
                className={`border-b border-transparent pb-px transition ${borderStyles} motion-reduce:transition-none`}
              >
                &#160;{lastWord}
              </span>
              <svg
                aria-hidden="true"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </a>
      )}
    </>
  );
}
