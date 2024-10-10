const GithubLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0091 1C5.92135 1 1 6.04165 1 12.2788C1 17.2646 4.15328 21.4849 8.52772 22.9786C9.07463 23.0909 9.27497 22.7359 9.27497 22.4373C9.27497 22.1758 9.25694 21.2796 9.25694 20.3457C6.19447 21.0181 5.55674 19.0012 5.55674 19.0012C5.06458 17.694 4.33536 17.3581 4.33536 17.3581C3.33302 16.6671 4.40837 16.6671 4.40837 16.6671C5.52024 16.7419 6.10366 17.8249 6.10366 17.8249C7.08775 19.5427 8.67352 19.0573 9.31147 18.7585C9.40251 18.0302 9.69434 17.5261 10.0042 17.246C7.56165 16.9845 4.9918 16.0136 4.9918 11.6812C4.9918 10.4487 5.42897 9.4404 6.12169 8.6562C6.01239 8.37616 5.62953 7.21818 6.23121 5.66833C6.23121 5.66833 7.16076 5.3695 9.25671 6.82608C10.1541 6.57919 11.0795 6.4536 12.0091 6.45254C12.9387 6.45254 13.8862 6.58339 14.7613 6.82608C16.8574 5.3695 17.787 5.66833 17.787 5.66833C18.3887 7.21818 18.0056 8.37616 17.8963 8.6562C18.6073 9.4404 19.0264 10.4487 19.0264 11.6812C19.0264 16.0136 16.4565 16.9657 13.9958 17.246C14.3969 17.6008 14.743 18.2729 14.743 19.3374C14.743 20.8499 14.725 22.0638 14.725 22.4371C14.725 22.7359 14.9255 23.0909 15.4722 22.9788C19.8467 21.4847 22.9999 17.2646 22.9999 12.2788C23.018 6.04165 18.0786 1 12.0091 1Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { GithubLogo };