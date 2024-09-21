// whatsappRequestBodyBuilder.js

export default class RequestBodyBuilder {
  constructor() {
    this.requestBody = {};
  }

  /**
   * Sets the messaging product.
   * @param {string} product - The messaging product (e.g., 'whatsapp').
   * @returns {RequestBodyBuilder}
   */
  setMessagingProduct(product) {
    this.requestBody.messaging_product = product;
    return this;
  }

  /**
   * Sets the recipient phone number.
   * @param {string} recipient - The phone number of the recipient.
   * @returns {RequestBodyBuilder}
   */
  setRecipient(recipient) {
    this.requestBody.to = recipient;
    return this;
  }

  /**
   * Sets the message type.
   * @param {string} type - The type of message ('template', 'interactive', 'text', etc.).
   * @returns {RequestBodyBuilder}
   */
  setType(type) {
    this.requestBody.type = type;
    if (type === "template") {
      this.requestBody.template = {
        name: "",
        language: {
          code: "en_US",
        },
        components: [],
      };
    } else if (type === "interactive") {
      this.requestBody.interactive = {
        type: "",
        body: {
          text: "",
        },
        action: {
          buttons: [],
        },
      };
    } else if (type === "text") {
      this.requestBody.text = {
        body: "",
      };
    }
    return this;
  }

  /**
   * Sets the template name.
   * @param {string} templateName - The name of the message template.
   * @returns {RequestBodyBuilder}
   */
  setTemplateName(templateName) {
    if (this.requestBody.type === "template") {
      this.requestBody.template.name = templateName;
    }
    return this;
  }

  /**
   * Sets the language code for the template.
   * @param {string} languageCode - The language code (e.g., 'en_US').
   * @returns {RequestBodyBuilder}
   */
  setLanguageCode(languageCode) {
    if (this.requestBody.type === "template") {
      this.requestBody.template.language.code = languageCode;
    }
    return this;
  }

  /**
   * Adds body text with variables to the template.
   * @param {Array<string>} variables - An array of variables to replace placeholders in the template.
   * @returns {RequestBodyBuilder}
   */
  addVariables(variables = []) {
    if (this.requestBody.type === "template" && variables.length > 0) {
      this.requestBody.template.components.push({
        type: "body",
        parameters: variables.map((variable) => ({
          type: "text",
          text: variable,
        })),
      });
    }
    return this;
  }

  /**
   * Sets the text message body.
   * @param {string} text - The text message body.
   * @returns {RequestBodyBuilder}
   */
  setText(text) {
    if (this.requestBody.type === "text") {
      this.requestBody.text.body = text;
    }
    return this;
  }

  /**
   * Sets the interactive message type and body text.
   * @param {string} interactiveType - The type of interactive message ('button', 'list', etc.).
   * @param {string} bodyText - The body text for the interactive message.
   * @returns {RequestBodyBuilder}
   */
  setInteractive(interactiveType, bodyText) {
    if (this.requestBody.type === "interactive") {
      this.requestBody.interactive.type = interactiveType;
      this.requestBody.interactive.body.text = bodyText;
    }
    return this;
  }

  /**
   * Adds buttons to the interactive message.
   * @param {Array<Object>} buttons - An array of button objects.
   * @returns {RequestBodyBuilder}
   */
  addButtons(buttons = []) {
    if (this.requestBody.type === "interactive" && buttons.length > 0) {
      this.requestBody.interactive.action.buttons = buttons;
    }
    return this;
  }

  /**
   * Adds an image to the template.
   * @param {string} url - The URL of the image.
   * @param {string} caption - An optional caption for the image.
   * @returns {RequestBodyBuilder}
   */
  addImage(url, caption = "") {
    if (this.requestBody.type === "template" && url) {
      this.requestBody.template.components.push({
        type: "image",
        parameters: [
          {
            type: "image",
            image: {
              link: url,
              caption: caption,
            },
          },
        ],
      });
    }
    return this;
  }

  /**
   * Adds a video to the template.
   * @param {string} url - The URL of the video.
   * @param {string} caption - An optional caption for the video.
   * @returns {RequestBodyBuilder}
   */
  addVideo(url, caption = "") {
    if (this.requestBody.type === "template" && url) {
      this.requestBody.template.components.push({
        type: "video",
        parameters: [
          {
            type: "video",
            video: {
              link: url,
              caption: caption,
            },
          },
        ],
      });
    }
    return this;
  }

  /**
   * Adds a document to the template.
   * @param {string} url - The URL of the document.
   * @param {string} filename - The name of the document file.
   * @returns {RequestBodyBuilder}
   */
  addDocument(url, filename) {
    if (this.requestBody.type === "template" && url && filename) {
      this.requestBody.template.components.push({
        type: "document",
        parameters: [
          {
            type: "document",
            document: {
              link: url,
              filename: filename,
            },
          },
        ],
      });
    }
    return this;
  }

  /**
   * Returns the final request body.
   * @returns {Object} - The request body object for the WhatsApp API.
   */
  build() {
    return this.requestBody;
  }
}
