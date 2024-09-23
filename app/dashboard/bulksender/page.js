"use client";
import { useEffect, useState } from "react";
import MessageTemplate from "@/components/message-template";

export default function Home() {
  const initLinkContent = [
    {
      text: `        
        🌼 Navratri & Dussehra Mega Sale 🌼
        <br />
        <br />
        This Navratri and Dussehra, celebrate the festive season with our
        exclusive offers and discounts! 🎉 <br />
        <br />
        🛍️ Enjoy [X% Off] on a wide range of products/services. <br />
        <br />
        🎁 Special festive bundles and gifts with every purchase. 🚚 Free
        delivery on orders over [Amount].
        <br />
        <br />
        💳 Easy EMI options available. Hurry, these deals won’t last long! Make
        your celebrations even more special with our offerings. <br />
        <br />
        Visit our website to explore the festive collection. Don’t miss out!
        Offer valid until [Expiration Date].
        <br />
        <br />
        🌟 Wishing you a joyous Navratri and a victorious Dussehra! 🌟 Shop now
  
  `,
    },
  ];

  const [linkContent, setLinkContent] = useState(initLinkContent);

  useEffect(() => {
    async function getLinkContent() {
      fetch(
        `https://graph.facebook.com/v20.0/${process.env.NEXT_PUBLIC_BUSINESS_ACCOUNT_ID}/message_templates?fields=name,status,components`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + process.env.NEXT_PUBLIC_TOKEN,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLinkContent((old) =>
            data.data.map((data) => {
              return {
                text:
                  data.components[0].text != undefined
                    ? data.components[0].text
                    : data.components[1].text,
              };
            })
          );
        })
        .catch((err) => console.log(err));
    }

    getLinkContent();
  }, []);

  return (
    <>
      <div className="px-16 py-16 ">
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for Templates..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <main className=" flex flex-wrap gap-4 p-4 items-center justify-center">
        {linkContent.map((content, index) => (
          <MessageTemplate key={index} linkContent={content.text} />
        ))}
      </main>
    </>
  );
}
