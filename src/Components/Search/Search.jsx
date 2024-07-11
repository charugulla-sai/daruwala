import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import axios from "axios";

export default function Search() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getSearchItems() {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_SERVER
        }/api/products/filter?title=${searchText}`,
        { signal: controller.signal }
      );
      setSearchItems(response.data);
    }
    const timeout = setTimeout(() => {
      searchText?.length > 2 && getSearchItems();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [searchText]);

  function handleSearchText(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className={styles.search_form_container}>
      <div
        className={`${styles.search_form} ${
          searchActive && styles.search_active
        }`}
      >
        <input
          type="text"
          placeholder="Search items"
          onChange={handleSearchText}
          onFocus={() => {
            setSearchActive(true);
          }}
          onBlur={() => {
            setSearchActive(false);
          }}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            className="w-[24px] text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
      {searchText && (
        <div className={styles.searched_items}>
          {searchItems.map((item) => (
            <div
              className={`${styles.searched_item} bg-white flex items-center justify-start gap-2 `}
            >
              <div className="w-[48px] mb-[18px]">
                <img className="w-full" src={item.imageUrl} />
              </div>
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {item.reviews[0] ? rating : 0}
                  </div>
                  <span>&#x2022; </span>
                  <div className="capitalize">{item.category}</div>
                  <span>&#x2022; </span>
                  <div className="">{item.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
