"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/blocks/Counter/Counter";
import Footer from "./components/blocks/Footer/Footer";
import Testamonial from "./components/blocks/Testamonials/Testamonial";
import Navigation from "./components/blocks/Navigation/Navigation";
import TextCard from "./components/cards/TextCard/TextCard";
import DoubleTextBlock from "./components/blocks/DoubleTextBlock/DoubleTextBlock";
import BookingCard from "./components/cards/BookingCard/BookingCard";
import BrownButton from "./components/buttons/BrownButton";
import CTABanner from "./components/blocks/CTA-Banner/CTABanner";
import Ordrerbekræftelse from "./components/blocks/Ordrerbekræftelse/Ordrerbekræftelse";
import LightBeigeButton from "./components/buttons/LightBeigeButton";
import PurpleButton from "./components/buttons/purpleButton";
import Timeline from "./components/blocks/Timeline/Timeline";
import Gallery from "./components/blocks/Galleri/Gallery";
import BeigeButton from "./components/buttons/beigeButton";
import Accordion from "./components/blocks/Accordion/Accordion";
import TextImage from "./components/blocks/TextImage/TextImage";
import HeroVideo from "./components/blocks/HeroVideo/HeroVideo";
import SingleText from "./components/blocks/SingleText/SingleText";
import HeroImage from "./components/blocks/HeroImage/HeroImage";
import TextImage2 from "./components/blocks/TextImage2/TextImage2";
import Kontaktformular from "./components/blocks/Kontaktformular/Kontaktformular";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
    {
      name: "reviews",
      type: "list",
      defaultValue: [{ reviewText: "hello" }],
      showIf: (options) => {
        return options.get("initialCount") > 50;
      },
      subFields: [
        {
          name: "reviewText",
          type: "string",
          defaultValue: '"You are the best"',
        },
        {
          name: "reviewAuthor",
          type: "string",
          defaultValue: "Jane Smith",
        },
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
          required: true,
        },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
});
Builder.registerComponent(Testamonial, {
  name: "Testamonial",
  inputs: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
    {
      name: "testamonialText",
      type: "string",
    },
  ],
});

Builder.registerComponent(Navigation, {
  name: "Navigation",
  inputs: [
    {
      name: "menupunkt1",
      type: "string",
    },
    {
      name: "menupunkt2",
      type: "string",
    },
    {
      name: "menupunkt3",
      type: "string",
    },
    {
      name: "logo",
      type: "image",
    },
  ],
});
Builder.registerComponent(LightBeigeButton, {
  name: "LigthBeigeButton",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});

// Buttons:
Builder.registerComponent(BeigeButton, {
  name: "beigeButton",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});
Builder.registerComponent(BrownButton, {
  name: "BrownButton",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});
Builder.registerComponent(PurpleButton, {
  name: "PurpleButton",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});

Builder.registerComponent(TextCard, {
  name: "TextCard",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "image",
      type: "Image",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
    },
  ],
});

Builder.registerComponent(BookingCard, {
  name: "BookingCard",
  inputs: [
    {
      name: "titel",
      type: "string",
    },
    {
      name: "image",
      type: "image",
    },
    {
      name: "text",
      type: "paragraph",
    },
    {
      name: "price",
      type: "string",
    },
  ],
});

Builder.registerComponent(DoubleTextBlock, {
  name: "TextBlock",
  inputs: [
    {
      name: "titel",
      type: "paragraph",
    },
  ],
});

Builder.registerComponent(CTABanner, {
  name: "CTABanner",
  inputs: [
    {
      name: "titel",
      type: "string",
    },
  ],
});
Builder.registerComponent(Ordrerbekræftelse, {
  name: "Ordrerbekræftelse",
  inputs: [
    {
      name: "Text",
      type: "string",
    },
  ],
});

Builder.registerComponent(Gallery, {
  name: "Gallery",
});

Builder.registerComponent(Timeline, {
  name: "Timeline",
});

Builder.registerComponent(Accordion, {
  name: "Accordion",
});

Builder.registerComponent(TextImage, {
  name: "TextImage",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "text",
      type: "string",
    },
    {
      name: "image",
      type: "Image",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
    },
  ],
});
Builder.registerComponent(HeroVideo, {
  name: "HeroVideo",
  inputs: [
    {
      name: "title",
      type: "string",
    },
  ],
});
Builder.registerComponent(SingleText, {
  name: "SingleText",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "paragraph",
      type: "string",
    },
  ],
});
Builder.registerComponent(HeroImage, {
  name: "HeroImage",
  inputs: [
    {
      name: "Image",
      type: "string",
    },
  ],
});
Builder.registerComponent(TextImage2, {
  name: "TextImage2",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "text",
      type: "string",
    },
  ],
});
Builder.registerComponent(Kontaktformular, {
  name: "Kontaktformular",
});
