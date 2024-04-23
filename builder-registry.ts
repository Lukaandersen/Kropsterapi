"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/blocks/Counter/Counter";
import Footer from "./components/blocks/Footer/Footer";
import Testamonial from "./components/blocks/Testamonials/Testamonial";
import Navigation from "./components/blocks/Navigation/Navigation";
import TextBlock from "./components/blocks/TextBlock/TextBlock";
import { text } from "stream/consumers";
import beigeButton from "./components/buttons/beigeButton";
import Accordion from "./components/blocks/Accordion/Accordion";
import TextCard from "./components/cards/TextCard/TextCard";
import LightBeigeButton from "./components/buttons/lightBeigeButton"
import Galleri from "./components/blocks/Galleri/Galleri";

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
  name: "LightBeigeButton",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});

Builder.registerComponent(beigeButton, {
  name: "beigeButton",
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
            name:"image",
            type:"image"
        }
    ]
  });
  Builder.registerComponent(TextBlock, {
    name: "TextBlock",
    inputs: [
        {
            name:"titel",
            type:"paragraph"
        }
    ]
  });
  Builder.registerComponent(Accordion, {
    name: "FAQ-Accordion",
    inputs: [
        {
            name:"question",
            type:"string"
        },
        {
          name:"answer",
          type:"string"
      }
    ]
  });
  Builder.registerComponent(Galleri, {
    name: "Galleri",
    inputs: [
    
    ]
  });