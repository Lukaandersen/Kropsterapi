"use client";
import { builder, Builder } from "@builder.io/react";
import Footer from "./components/blocks/Footer/Footer";
import Testamonial from "./components/blocks/Testamonials/Testamonial";
import Navigation from "./components/blocks/Navigation/Navigation";
import TextCard from "./components/cards/TextCard/TextCard";
import DoubleTextBlock from "./components/blocks/DoubleTextBlock/DoubleTextBlock";
import BookingCard from "./components/cards/BookingCard/BookingCard";
import CTABanner from "./components/blocks/CTA-Banner/CTABanner";
import TextBanner from "./components/blocks/TextBanner/TextBanner";
import Ordrerbekræftelse from "./components/blocks/Ordrerbekræftelse/Ordrerbekræftelse";
import Timeline from "./components/blocks/Timeline/Timeline";
import Gallery from "./components/blocks/Galleri/Gallery";
import Accordion from "./components/blocks/Accordion/Accordion";
import TextImage from "./components/blocks/TextImage/TextImage";
import HeroVideo from "./components/blocks/HeroVideo/HeroVideo";
import SingleText from "./components/blocks/SingleText/SingleText";
import HeroImage from "./components/blocks/HeroImage/HeroImage";
import TextImage2 from "./components/blocks/TextImage2/TextImage2";
import Kontaktformular from "./components/blocks/Kontaktformular/Kontaktformular";
import QAformular from "./components/blocks/QAFormular/QAFormular";
import Admin from "./components/blocks/Admin/Admin";
import Cart from "./components/blocks/Cart/Cart";
import Calender from "./components/blocks/Cart/Calendar";
import Timeslot from "./components/blocks/Cart/Timeslot";
import BookingCardSection from "./components/blocks/BookingCardSection";
import ImageBanner from "./components/blocks/ImageBanner/ImageBanner";
import { CartCard } from "./components/blocks/Cart/CartCard";
import BrownButton from "./components/buttons/BrownButton";
import LightBeigeButton from "./components/buttons/LightBeigeButton";
import PurpleButton from "./components/buttons/PurpleButton";
import BeigeButton from "./components/buttons/BeigeButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

Builder.registerComponent(TextCard, {
  name: "TextCard",
  inputs: [
    {
      name: "title1",
      type: "string",
    },
    {
      name: "text1",
      type: "paragraph",
    },
    {
      name: "title2",
      type: "string",
    },
    {
      name: "text2",
      type: "paragraph",
    },
    {
      name: "title3",
      type: "string",
    },
    {
      name: "text3",
      type: "paragraph",
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
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "link",
      type: "string",
    },
    {
      name: "id",
      type: "number",
    },
  ],
});

Builder.registerComponent(DoubleTextBlock, {
  name: "TextBlock",
  inputs: [
    {
      name: "title1",
      type: "paragraph",
    },
    {
      name: "title2",
      type: "paragraph",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "link",
      type: "string",
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
Builder.registerComponent(TextBanner, {
  name: "TextBanner",
  inputs: [
    {
      name: "titel",
      type: "string",
    },
    {
      name: "text",
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
      name: "text2",
      type: "string",
    },
    {
      name: "text3",
      type: "string",
    },
    {
      name: "image",
      type: "Image",
      allowedFileTypes: ["jpeg", "jpg", "png", "gif"],
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "link",
      type: "string",
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
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "link",
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
    {
      name: "paragraph2",
      type: "string",
    },
    {
      name: "paragraph3",
      type: "string",
    },
    {
      name: "paragraph4",
      type: "string",
    },
    {
      name: "paragraph5",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "link",
      type: "string",
    },
  ],
});
Builder.registerComponent(HeroImage, {
  name: 'HeroImage',
  inputs: [
    {
      name: 'title',
      type: 'string',
      required: true,
      defaultValue: 'Default Title',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
      required: true,
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
  inputs: [
    {
      name: "btnText",
      type: "string",
    },
  ],
});
Builder.registerComponent(QAformular, {
  name: "QAFormular",
});

Builder.registerComponent(Admin, {
  name: "Admin",
});

Builder.registerComponent(Cart, {
  name: "Cart",
  inputs: [
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "button2Text",
      type: "string",
    },
    {
      name: "link2",
      type: "string",
    },
  ],
});

Builder.registerComponent(CartCard, {
  name: "CartCard",
  inputs: [
    {
      name: "buttonText",
      type: "string",
    },
    {
      name: "button2Text",
      type: "string",
    },
    {
      name: "link2",
      type: "string",
    },
  ],
});

Builder.registerComponent(Calender, {
  name: "Calendar",
});

Builder.registerComponent(Timeslot, {
  name: "Timeslot",
});
Builder.registerComponent(BookingCardSection, {
  name: "BookingCardSection",
  inputs: [
    {
      name: "titel1",
      type: "string",
    },
    {
      name: "text1",
      type: "string",
    },
    {
      name: "price1",
      type: "string",
    },
    {
      name: "titel2",
      type: "string",
    },
    {
      name: "text2",
      type: "string",
    },
    {
      name: "price2",
      type: "string",
    },
    {
      name: "titel3",
      type: "string",
    },
    {
      name: "text3",
      type: "string",
    },
    {
      name: "price3",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
  ],
});

Builder.registerComponent(ImageBanner, {
  name: "ImageBanner",
});
