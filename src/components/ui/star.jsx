export function Star({ count }) {
  return Array(count)
    .fill()
    .map((_, index) => {
      return (
        <figure key={index}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_32_64)">
              <path
                d="M11.0035 0.703125C10.8194 0.273437 10.4306 0 10.0035 0C9.57639 0 9.19097 0.273437 9.00347 0.703125L6.77083 5.87109L1.78472 6.69922C1.36806 6.76953 1.02083 7.09766 0.892361 7.54687C0.763889 7.99609 0.868055 8.49219 1.16667 8.82422L4.78472 12.8516L3.93056 18.543C3.86111 19.0117 4.03472 19.4883 4.37847 19.7656C4.72222 20.043 5.17708 20.0781 5.55208 19.8555L10.0069 17.1797L14.4618 19.8555C14.8368 20.0781 15.2917 20.0469 15.6354 19.7656C15.9792 19.4844 16.1528 19.0117 16.0833 18.543L15.2257 12.8516L18.8438 8.82422C19.1424 8.49219 19.25 7.99609 19.1181 7.54687C18.9861 7.09766 18.6424 6.76953 18.2257 6.69922L13.2361 5.87109L11.0035 0.703125Z"
                fill="#1B2430"
              />
            </g>
            <defs>
              <clipPath id="clip0_32_64">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </figure>
      );
    });
}