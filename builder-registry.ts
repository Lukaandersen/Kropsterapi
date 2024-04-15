
'use client';
import { builder, Builder } from '@builder.io/react';
import Counter from './components/blocks/Counter/Counter';
import Footer from './components/blocks/Footer/Footer';
import Testamonial from './components/blocks/Testamonials/Testamonial';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
    name: 'Counter',
    inputs: [
        {
            name: 'initialCount',
            type: 'number',
        },
        {
            name: 'reviews',
            type: 'list',
            defaultValue: [{ reviewText: 'hello' }],
            showIf: (options) => {
                return options.get('initialCount') > 50;
            },
            subFields: [
                {
                    name: 'reviewText',
                    type: 'string',
                    defaultValue: '"You are the best"',
                },
                {
                    name: 'reviewAuthor',
                    type: 'string',
                    defaultValue: 'Jane Smith',
                },
                {
                    name: 'image',
                    type: 'file',
                    allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
                    required: true,
                   
                },
            ],
        },
    ],
});

Builder.registerComponent(Footer, {
    name: 'Footer',
  
          
    
});
Builder.registerComponent(Testamonial, {
    name: 'Testamonial',
    inputs: [
        {
            name:'name',
            type:'string',

        },
        {
            name:'title',
            type:'string',
        },
        {
            name:'testamonialText',
            type:'string'
        }
    ]
          
    
});

