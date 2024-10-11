const XLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.3277 20H21L14.2747 11.299L20.5698 4H17.6613L12.9001 9.52051L8.67229 4.0508H3L9.92074 13.0046L9.90846 12.9892L3.94963 19.8984H6.85814L11.2833 14.7675L15.3277 20ZM17.869 18.4762H16.1031L6.13101 5.57462H7.89688L17.869 18.4762Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { XLogo };
