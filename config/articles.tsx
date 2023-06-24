import { MainNavItem, SidebarNavItem } from "types/nav"
import { allArticles } from 'contentlayer/generated';

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/articles",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/docs/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/articles",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          title: "Figma",
          href: "/docs/figma",
          items: [],
        },
      ],
    },
    {
      title: "Forms",
      items: [
        {
          title: "React Hook Form",
          href: "/docs/forms/react-hook-form",
          label: "New",
          items: [],
        },
        {
          title: "TanStack Form",
          href: "#",
          items: [],
          label: "Soon",
          disabled: true,
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          label: "New",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/components/table",
          label: "New",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
}

export const articles = [
  {
    imgLink: 'https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title:
      '1 Lessons learned from growing a 6,338 people waitlist in 7 weeks 1 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "1 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '2 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "2 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '3 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "3 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '4 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "4 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '5 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "5 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '6 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "6 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
  {
    imgLink: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    title: '7 Lessons learned from growing a 6,338 people waitlist in 7 weeks',
    desc: "7 I'm writing this post to document what went well and what went wrong. Hopefully, this will help other founders who are launching their own waitlists or looking to find potential users.",
    time: 'Released on January 13th, 2022',
    href: '/articles/installation',
  },
];

export const articless = allArticles.map((article) => {
  [].push(article.title)
})