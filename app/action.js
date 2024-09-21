"use client";
import RequestBodyBuilder from "../app/whatsappRequestBodyBuilder";

export async function TestCredentialHandler(payload) {
  const templateRequestBody = new RequestBodyBuilder()
    .setMessagingProduct("whatsapp")
    .setRecipient("918469128074")
    .setType("template")
    .setTemplateName("hello_world")
    .build();

  fetch(
    `https://graph.facebook.com/v20.0/${process.env.NEXT_PUBLIC_APP_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(templateRequestBody),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return {
        statusCode: 200,
        body: data,
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 500,
        body: err,
      };
    })
    .finally(() => {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    });
}
