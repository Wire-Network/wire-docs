const YoutubeLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.1114 20.7411C5.9216 20.6574 4.49057 20.5822 3.61098 20.3856C3.01588 20.2549 2.49873 19.9649 2.11955 19.5443C1.82649 19.2259 1.59343 18.7402 1.41261 18.0662C1.25751 17.5048 1.1971 17.0376 1.11098 15.8965C0.979139 13.3212 0.94771 11.2158 1.11098 8.8632C1.24567 7.56404 1.31098 6.0218 2.20567 5.12204C2.62812 4.70094 3.11955 4.42995 3.67139 4.31793C4.53343 4.14037 8.20609 4 12.0081 4C15.8016 4 19.4824 4.14037 20.3453 4.31793C21.0347 4.45829 21.6812 4.87894 22.0608 5.42137C22.8771 6.81439 22.8914 8.5466 22.9743 9.90155C23.0086 10.5471 23.0086 14.213 22.9743 14.8586C22.8453 17 22.7416 17.7576 22.4486 18.5431C22.2673 19.039 22.1127 19.3007 21.8449 19.5908C21.425 20.0371 20.8896 20.3339 20.3102 20.4418C16.6845 20.7376 13.6057 20.8018 10.1114 20.7411ZM15.6637 12.1368C13.6465 10.9674 11.7151 9.88295 9.74079 8.76047V15.4759C11.8183 14.2507 14.0086 13.1282 15.6722 12.1275L15.6637 12.1368Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { YoutubeLogo };
